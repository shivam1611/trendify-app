import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.footer_section}>
          <h2>Trendify</h2>
          <p>
            Trendify is your go-to destination for the latest fashion trends.
            From men's and women's clothing to exclusive jewelry collections, we
            bring you the best in style.
          </p>
        </div>

        <div className={style.footer_section}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Mens</a>
            </li>
            <li>
              <a href="#">Womens</a>
            </li>
            <li>
              <a href="#">Jewelry</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={style.footer_section}>
          <h3>Contact Us</h3>
          <p>Email: support@trendify.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
