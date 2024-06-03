import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.scss"
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.head}>
            <img src="https://preview.colorlib.com/theme/travelo/img/logo.png.webp" alt="" />
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Destination</a></li>
                <li><a href="">pages </a></li>
                <li><a href="">blog </a></li>
                <li><a href="">Contact </a></li>
            </ul>

            <div className={styles.head_title}>
            <i className="fa-solid fa-phone"></i>
                <p>10(256)-928 256</p>
            </div>

            <div className={styles.icons}>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-google-plus-g"></i>
            </div>
            <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
