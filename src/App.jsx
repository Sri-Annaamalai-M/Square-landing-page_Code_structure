import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import CTA from "./components/CTA";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="">
        <AppRoutes />
      </main>
    <div id="cta-section">
      <CTA />
    </div>
      {/* <CTA/> */}
      <Footer />
    </div>
  );
}

export default App;
