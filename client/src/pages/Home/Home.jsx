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
            <button className="primary-btn">
              Order Now
            </button>

            <button className="secondary-btn">
              Explore Menu
            </button>
          </div>
        </div>

        <div className="hero-image">
          🍔
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2>What are you craving?</h2>

        <div className="category-grid">
          <div className="category-card">
            🍕
            <h3>Pizza</h3>
          </div>

          <div className="category-card">
            🍔
            <h3>Burgers</h3>
          </div>

          <div className="category-card">
            🍜
            <h3>Noodles</h3>
          </div>

          <div className="category-card">
            🍰
            <h3>Desserts</h3>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;