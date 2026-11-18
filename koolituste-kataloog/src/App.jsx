import React, { useState } from "react";
import "./App.css";
import kursus from "./Teema.jsx";

function App() {
  const [selectedTeema, setSelectedTeema] = useState("Kõik");

  const categories = [
    "Kõik",
    "Programmeerimine",
    "Andmeanalüüs",
    "Disain",
  ];

  const filteredKursus =
    selectedTeema === "Kõik"
      ? kursus
      : kursus.filter(
          (course) => course.teema === selectedTeema
        );

  return (
    <div className="app">
      <header className="header">
        <div className="header-brand">
          <img src="/src/img/image.png" alt="Logo" />
          <h2>Devik Õppekeskus</h2>
        </div>

        <nav>
          <a href="#avaleht">Avaleht</a>
          <a href="#koolitused">Koolitused</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <main className="main" id="koolitused">
        <section className="intro">
          <h1>Koolitused</h1>
          <p>
            Leia endale sobiv koolitus ja arenda oma teadmisi.
          </p>
        </section>

        <div className="filters">
          {categories.map((teema) => (
            <button
              key={teema}
              className={
                selectedTeema === teema ? "active" : ""
              }
              onClick={() => setSelectedTeema(teema)}
            >
              {teema}
            </button>
          ))}
        </div>

        <section className="course-grid">
          {filteredKursus.map((course, index) => (
            <article className="course-card" key={index}>
              <span className="teema">
                {course.teema}
              </span>

              <h3>{course.pealkiri}</h3>

              <p>{course.selgitus}</p>

              <span className="maht">
                Aeg: {course.maht}
              </span>
            </article>
          ))}
        </section>
      </main>

      <footer id="kontakt">
       &copy;2026 Devik Õppekeskus - Kõik õigused on varastatud
      </footer>
    </div>
  );
}

export default App;
