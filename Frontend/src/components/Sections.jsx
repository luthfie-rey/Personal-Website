import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { profile, bioParagraphs, notes } from "../data/mock";

const Sections = () => {
  const { t, pick } = useContext(LanguageContext);

  return (
    <div>
      <section>
        <h1>{t.sections.hero.title}</h1>
        <p>{t.sections.hero.subtitle}</p>
        <img src={profile.portraitUrl} alt="" width="200" />
      </section>

      <section>
        {bioParagraphs.map((p, i) => (
          <p key={i}>{pick(p)}</p>
        ))}
      </section>

      <section>
        <h2>{t.sections.notes.title}</h2>
        {notes.map((n) => (
          <div key={n.id}>
            <h3>{pick(n.title)}</h3>
            <p>{pick(n.excerpt)}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Sections;