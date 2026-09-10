import PageLoader from "./components/PageLoader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <PageLoader />
      <Navbar />

      <main>
        <Home />
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
