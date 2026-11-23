function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        PTB<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
