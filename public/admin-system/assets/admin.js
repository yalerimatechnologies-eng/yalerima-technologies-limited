(function () {
  const config =
    window.YALERIMA_CONFIG;

  if (!config) {
    console.error(
      "Yalerima configuration is missing."
    );
    return;
  }

  window.YalerimaAdmin = {
    config,

    async request(
      path,
      options = {}
    ) {
      const headers = {
        apikey: config.supabaseKey,
        Authorization:
          "Bearer " + config.supabaseKey,
        ...(options.headers || {})
      };

      return fetch(
        config.supabaseUrl + path,
        {
          ...options,
          headers
        }
      );
    },

    async getSession() {
      try {
        const token = localStorage.getItem(
          "yalerima_admin_access_token"
        );

        if (!token) {
          return null;
        }

        const response = await fetch(
          `${config.supabaseUrl}/auth/v1/user`,
          {
            headers: {
              apikey: config.supabaseKey,
              Authorization: "Bearer " + token
            }
          }
        );

        if (!response.ok) {
          return null;
        }

        return await response.json();
      } catch (error) {
        console.error("Session verification failed:", error);
        return null;
      }
    },

    async verifyAdmin() {
      const user =
        await this.getSession();

      if (
        !user ||
        user.id !== config.adminUserId
      ) {
        await this.logout();
        return null;
      }

      return user;
    },

    async login(email, password) {
      const response =
        await fetch(
          config.supabaseUrl +
          "/auth/v1/token?grant_type=password",
          {
            method: "POST",
            headers: {
              apikey: config.supabaseKey,
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
              email,
              password
            })
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error_description ||
          data.msg ||
          data.message ||
          "Unable to sign in."
        );
      }

      if (
        !data.user ||
        data.user.id !==
          config.adminUserId
      ) {
        await this.logout();
        throw new Error(
          "This account is not authorised for the administrator portal."
        );
      }

      localStorage.setItem(
        "yalerima_admin_access_token",
        data.access_token
      );

      localStorage.setItem(
        "yalerima_admin_refresh_token",
        data.refresh_token || ""
      );

      localStorage.setItem(
        "yalerima_admin_user",
        JSON.stringify(data.user)
      );

      return data.user;
    },

    async logout() {
      const token =
        localStorage.getItem(
          "yalerima_admin_access_token"
        );

      if (token) {
        try {
          await fetch(
            config.supabaseUrl +
            "/auth/v1/logout",
            {
              method: "POST",
              headers: {
                apikey:
                  config.supabaseKey,
                Authorization:
                  "Bearer " + token
              }
            }
          );
        } catch {}
      }

      localStorage.removeItem(
        "yalerima_admin_access_token"
      );

      localStorage.removeItem(
        "yalerima_admin_refresh_token"
      );

      localStorage.removeItem(
        "yalerima_admin_user"
      );

      window.location.href =
        "/admin-system/login.html";
    },

    authHeaders() {
      const token =
        localStorage.getItem(
          "yalerima_admin_access_token"
        );

      return {
        apikey: config.supabaseKey,
        Authorization:
          "Bearer " +
          (token || config.supabaseKey)
      };
    },

    async adminRequest(
      path,
      options = {}
    ) {
      return fetch(
        config.supabaseUrl + path,
        {
          ...options,
          headers: {
            ...this.authHeaders(),
            "Content-Type":
              "application/json",
            ...(options.headers || {})
          }
        }
      );
    },

    escape(value) {
      return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    },

    formatDate(value) {
      if (!value) return "—";

      return new Intl.DateTimeFormat(
        "en-NG",
        {
          dateStyle: "medium",
          timeStyle: "short"
        }
      ).format(new Date(value));
    },

    toast(message, type = "success") {
      let box =
        document.getElementById(
          "adminToast"
        );

      if (!box) {
        box =
          document.createElement("div");

        box.id = "adminToast";
        box.className = "admin-toast";

        document.body.appendChild(box);
      }

      box.className =
        "admin-toast " + type;

      box.textContent = message;

      requestAnimationFrame(() => {
        box.classList.add("show");
      });

      window.clearTimeout(
        this.toastTimer
      );

      this.toastTimer =
        window.setTimeout(() => {
          box.classList.remove("show");
        }, 3200);
    },

    async guard() {
      const token =
        localStorage.getItem(
          "yalerima_admin_access_token"
        );

      const stored =
        localStorage.getItem(
          "yalerima_admin_user"
        );

      if (!token || !stored) {
        window.location.href =
          "/admin-system/login.html";

        return null;
      }

      let user;

      try {
        user = JSON.parse(stored);
      } catch {
        await this.logout();
        return null;
      }

      if (
        user.id !==
        this.config.adminUserId
      ) {
        await this.logout();
        return null;
      }

      return user;
    },

    bindShell() {
      const menuButton =
        document.getElementById(
          "adminMenuButton"
        );

      const sidebar =
        document.getElementById(
          "adminSidebar"
        );

      const overlay =
        document.getElementById(
          "adminSidebarOverlay"
        );

      const close =
        () => {
          sidebar?.classList.remove(
            "open"
          );

          overlay?.classList.remove(
            "visible"
          );
        };

      menuButton?.addEventListener(
        "click",
        () => {
          sidebar?.classList.toggle(
            "open"
          );

          overlay?.classList.toggle(
            "visible"
          );
        }
      );

      overlay?.addEventListener(
        "click",
        close
      );

      document
        .querySelectorAll(
          ".admin-sidebar a"
        )
        .forEach((link) => {
          link.addEventListener(
            "click",
            close
          );
        });

      document
        .querySelectorAll(
          "[data-logout]"
        )
        .forEach((button) => {
          button.addEventListener(
            "click",
            () => this.logout()
          );
        });

      const user =
        JSON.parse(
          localStorage.getItem(
            "yalerima_admin_user"
          ) || "{}"
        );

      document
        .querySelectorAll(
          "[data-admin-email]"
        )
        .forEach((element) => {
          element.textContent =
            user.email || "Administrator";
        });
    }
  };
})();
