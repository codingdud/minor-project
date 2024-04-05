import classes from './aboutus.module.css'
export default function AboutUs() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>About Us: Student Accommodation Finder</h1>
      </header>
      <section class={classes.content}>
        <p>
          Welcome to Student Accommodation Finder, your go-to platform for finding the 
          perfect place to stay during your studies. We understand the challenges students 
          face when it comes to finding suitable accommodation, and our mission is to simplify this process for you.
        </p>
        <p>
          <strong>Our Mission:</strong><br />At Student Accommodation Finder, we are 
          dedicated to providing students with a seamless experience in their search 
          for accommodation. Whether you're studying locally or abroad, we strive to offer 
          a comprehensive database of housing options tailored to your needs.
        </p>
        <p>
          <strong>Who We Are:</strong><br />We are a passionate team of individuals committed 
          to easing the burden of accommodation hunting for students. Our team consists of:
        </p>
        <ul className={classes.ul}>
          <li>Animesh kumar(dev ops)</li>
          <li>Vaibhav Gupta (codinator)</li>
          <li>Shambhavi (AI/ML)</li>
          <li>Tarunjit(python developer)</li>
        </ul>
        <p><strong>What We Offer:</strong></p>
        <ul className={classes.ul}>
          <li>Comprehensive Listings</li>
          <li>Advanced Search Filters</li>
          <li>Verified Properties</li>
          <li>User Support</li>
        </ul>
        <p>
          <strong>Get Started Today!</strong><br />Finding the ideal accommodation for your studies should be
          hassle-free. Join Student Accommodation Finder today and embark on a stress-free journey
          to finding your home away from home. Let us help you make your student life experience truly memorable.
        </p>
        <p>If you have any inquiries or feedback, feel free to reach out to us. We're here to help!</p>
        <a href="https://contact.codingdud.co/" class="button">feedback</a>
      </section>
    </div>
  )
}
