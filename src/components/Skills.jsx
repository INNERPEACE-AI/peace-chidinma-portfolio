function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="section-label">MY TOOLKIT</p>
        <h2>Skills I am developing.</h2>
      </div>

      <div className="skills-grid">
        <article className="skill-card">
          <span>01</span>
          <h3>HTML</h3>
          <p>Building clear and well-structured web pages.</p>
        </article>

        <article className="skill-card">
          <span>02</span>
          <h3>CSS</h3>
          <p>Creating attractive, responsive page designs.</p>
        </article>

        <article className="skill-card">
          <span>03</span>
          <h3>JavaScript</h3>
          <p>Adding logic and interaction to websites.</p>
        </article>

        <article className="skill-card">
          <span>04</span>
          <h3>React</h3>
          <p>Building interfaces with reusable components.</p>
        </article>
      </div>
    </section>
  );
}

export default Skills;
