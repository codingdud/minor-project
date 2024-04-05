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

      <section id="features" className={classes.section}>
        <div className={classes.container}>
          <h2>Features</h2>
          <div className={classes.feature}>
            <img src="https://www.denofgeek.com/wp-content/uploads/2023/05/Hells-Paradise-Gabimaru-and-Yamada-Asaemon-Ready-For-Battle.jpg?fit=1920%2C1080" alt="Icon" />
            <h3>Search Options</h3>
            <p>Filter by location, price, amenities, and more.</p>
          </div>
          <div className={classes.feature}>
            <img src="https://th.bing.com/th/id/OIP.LRFa5oiTjD6pHr64GfG5_QHaEK?rs=1&pid=ImgDetMain" alt="Icon" />
            <h3>User Reviews</h3>
            <p>Read reviews from other students to find the best accommodation.</p>
          </div>
          <div className={classes.feature}>
            <img src="https://th.bing.com/th/id/OIP.eYp3DrA_CWL6FcIsLnOQlAHaFP?w=2339&h=1654&rs=1&pid=ImgDetMain" alt="Icon" />
            <h3>Save Favorites</h3>
            <p>Save your favorite listings for easy access later.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className={classes.footer}>
          <p>&copy; 2024 Student Accommodation Finder</p>
        </div>
      </footer>

    </div>
  )
}
