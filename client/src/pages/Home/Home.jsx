import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">🍽️ Delicious Food, Delivered</span>

          <h1>
            Your Favourite Food,
            <br />
            <span>Delivered Fresh.</span>
          </h1>

          <p>
            Order delicious meals from your favourite restaurants
            and enjoy them from the comfort of your home.
          </p>

          <div className="hero-buttons">
            <Button className="primary-btn">
              Order Now
            </Button>

            <Button className="secondary-btn">
              Explore Menu
            </Button>
          </div>
        </div>

        <div className="hero-image">
          🍔
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <PageTitle
          title="What are you craving?"
          subtitle="Choose your favourite food category"
        />

        <div className="category-grid">

          <Card className="category-card">
            🍕
            <h3>Pizza</h3>
          </Card>

          <Card className="category-card">
            🍔
            <h3>Burgers</h3>
          </Card>

          <Card className="category-card">
            🍜
            <h3>Noodles</h3>
          </Card>

          <Card className="category-card">
            🍰
            <h3>Desserts</h3>
          </Card>

        </div>
      </section>

    </div>
  );
}

export default Home;