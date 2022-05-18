import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Fragment >
    <nav className='navigation'>
      <Link to='/'>
      <div className='navigation-logo-container'><span>Coin</span> Chart</div>
      </Link>
    </nav>
    <Outlet />
    <footer>
    <div className='footer-logo-container'>
      <span>Powered by CoinGecko</span>
      <a rel="noreferrer" target="_blank" href="https://github.com/rizkisiraj">Created by Rizki Siraj</a>
    </div>
    </footer>
    </Fragment>
)

export default Navigation;