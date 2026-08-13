import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Restaurant Ordering System</h1>
        <p>
          Welcome to the main application layout.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;