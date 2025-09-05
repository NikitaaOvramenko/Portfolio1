export const template1 = (
  bool: boolean,
  status: string,
  description: string,
  facts: string[],
  lang: string[],
  fr: string[],
  lib: string[],
  soft: string[]
) => {
  return (
    <section id="project-template" className="p-2 flex-col bg-black project ">
      <h1 className="project-title"></h1>

      <section className="text-end text-white">
        Status: {status}
        {bool ? "✅" : "✨"}
      </section>

      <section className="project-description">
        <h2 className="font-bold text-yellow-200">Description:</h2>
        <p className="text-white">{description}</p>
      </section>

      <section className="project-facts">
        <h2 className="font-bold text-yellow-200">Facts:</h2>
        <ul>
          {facts.map((fact) => (
            <li className="text-white">
              <strong>*</strong> {fact}
            </li>
          ))}
        </ul>
      </section>

      <section className="project-tech-stack">
        <h2 className="font-bold text-yellow-200">
          Languages/Frameworks/Libraries/Software:
        </h2>
        <ul className="text-white">
          <li>
            <strong>Languages:</strong>{" "}
            {lang.map((l) => (
              <span>{l},</span>
            ))}
          </li>
          <li>
            <strong>Frameworks:</strong>{" "}
            {fr.map((l) => (
              <span>{l},</span>
            ))}
          </li>
          <li>
            <strong>Libraries:</strong>{" "}
            {lib.map((l) => (
              <span>{l},</span>
            ))}
          </li>
          <li>
            <strong>Software:</strong>{" "}
            {soft.map((l) => (
              <span>{l},</span>
            ))}
          </li>
        </ul>
      </section>
    </section>
  );
};