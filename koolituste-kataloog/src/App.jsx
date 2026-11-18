import React, { useState } from "react";
import "./App.css";
import kursus from "./Teema.jsx";

function App() {
  const [selectedTeema, setSelectedTeema] = useState("Kõik");
  const [activeView, setActiveView] = useState("koolitused");

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
          <a href="#avaleht" onClick={() => setActiveView("koolitused")}>Avaleht</a>
          <a href="#koolitused" onClick={() => setActiveView("koolitused")}>Koolitused</a>
          <a href="#kontakt" onClick={() => setActiveView("kontakt")}>Kontakt</a>
        </nav>
      </header>

      <main className="main" id={activeView === "kontakt" ? "kontakt" : "koolitused"}>
        {activeView === "kontakt" ? (
          <Kontakt />
        ) : (
          <>
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
          </>
        )}
      </main>

      <footer id="kontakt">
       &copy;2026 Devik Õppekeskus - Kõik õigused on varastatud
      </footer>
    </div>
  );
}

function Kontakt() {
  return (
    <div className="kontakt">
      <h2>Kontakt</h2>
      <p>
        Kui sul on küsimusi või soovid rohkem infot, võta meiega ühendust:
      </p>
      <ul>
        <li>Email:
          <a href="mailto:devik@gmail.com">devik@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}

export default App;