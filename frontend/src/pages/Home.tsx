import classes from './home.module.css'
import imagemap1 from '../assets/map1.png'
import imagemap2 from '../assets/map2.png'
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
          <h2 className='text-3xl font-bold underline'>Search for Accommodation</h2>
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
            <img src={imagemap1} alt="Icon" />
            <h3>Search Options</h3>
            <p>The page allows users to input their current location and then find the university’s nearest campus. </p>
          </div>
          <div className={classes.feature}>
            <img src={imagemap2} alt="Icon" />
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
