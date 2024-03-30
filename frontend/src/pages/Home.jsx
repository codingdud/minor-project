import classes from './home.module.css'
export default function Home() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.container}>
          <h1>Student Accommodation Finder</h1>
          <p>Find the perfect place to stay during your studies</p>
          <a href="#search">Search Now</a>
        </div>
      </header>

      <section id="search" className={classes.search +" "+ classes.section}>
        <div class="container">
          <h2>Search for Accommodation</h2>
          <form className={classes.form}>
            <input type="text" placeholder="Enter location" />
            <input type="text" placeholder="Enter budget" />
            <button type="submit" className={classes.button}>Search</button>
          </form>
        </div>
      </section>

      <section id="features">
        <div class="container">
          <h2>Features</h2>
          <div class="feature">
            <img src="https://via.placeholder.com/50" alt="Icon" />
            <h3>Search Options</h3>
            <p>Filter by location, price, amenities, and more.</p>
          </div>
          <div class="feature">
            <img src="https://via.placeholder.com/50" alt="Icon" />
            <h3>User Reviews</h3>
            <p>Read reviews from other students to find the best accommodation.</p>
          </div>
          <div class="feature">
            <img src="https://via.placeholder.com/50" alt="Icon" />
            <h3>Save Favorites</h3>
            <p>Save your favorite listings for easy access later.</p>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <p>&copy; 2024 Student Accommodation Finder</p>
        </div>
      </footer>

    </div>
  )
}
