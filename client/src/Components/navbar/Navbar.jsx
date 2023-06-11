import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_container">
        <span className="logo">Mybooking</span>
        <div className="nav_items">
          <button className="nav_button">Register</button>
          <button className="nav_button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
