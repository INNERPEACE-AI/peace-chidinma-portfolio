import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">SOFTWARE ENGINEERING STUDENT</p>

        <h1>
          Hi, I’m <span>Peace Tonye Brown.</span>
        </h1>

        <p className="hero-text">
          I am learning to create modern, useful web experiences with HTML, CSS,
          JavaScript, and React.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#skills">
            View My Skills
          </a>

          <a className="secondary-button" href="mailto:brownpeace91@gmail.com">
            Contact Me
          </a>
        </div>
      </div>

      <div className="profile-card">
        <img
          className="profile-image"
          src={profileImage}
          alt="Peace Tonye Brown"
        />
        <p>Future Software Engineer</p>
      </div>
    </section>
  );
}

export default Hero;
