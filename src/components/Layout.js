
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <span>Cart Count: </span>
        </ul>
      </nav>

      <Outlet />
      <footer>this is the footer</footer>
    </>
  )
};

export default Layout;