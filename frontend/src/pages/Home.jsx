import classes from './home.module.css';
import logo from '../assets/bitmap.png'
import icon from '../assets/image.png'
export default function Home() {
  return (
    <div>
        <nav className={classes.mynav}>
            <ul className={classes.mylist}>
                <li className={classes.mylogo}>
                    <img src={logo} alt='logo' />
                    <span>this is title</span>
                </li>
                <li>
                    <a href="#">
                        <img src={icon} alt='logo' className={classes.myfsa} />
                        <span className={classes.navitem}>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={icon} alt='logo' className={classes.myfsa} />
                        <span className={classes.navitem}>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={icon} alt='logo' className={classes.myfsa} />
                        <span className={classes.navitem}>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={icon} alt='logo' className={classes.myfsa} />
                        <span className={classes.navitem}>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={icon} alt='logo' className={classes.myfsa} />
                        <span className={classes.navitem}>Home</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
