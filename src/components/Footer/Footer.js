import "./footer.css";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <ul className="footer-social-icons text-center">
          <li className="footer-links ">
            <a href="https://www.linkedin.com/in/manpreet-singh-912ba3171/">
              <i className="fab fa-linkedin-in dark-theme"></i>
            </a>
          </li>
          <li className="footer-links">
            <a href="https://github.com/Manpreet-hub ">
              <i className="fab fa-github dark-theme"></i>
            </a>
          </li>
          <li className="footer-links">
            <a href="https://twitter.com/Manpree99208412">
              <i className="fab fa-twitter  dark-theme"></i>
            </a>
          </li>
        </ul>
        <h3 className="dark-theme">Made with ❤️ by Manpreet</h3>
        <p className="dark-theme">copyright © {getYear}</p>
      </div>
    </>
  );
};

export { Footer };
