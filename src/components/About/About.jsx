import "./About.css";

function About() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          
          <div
            className="mb-2"
            style={{
              height: "80%",
              
            }}
          >
            <div className="pt-1">
              <h5 className="font-weight-normal">Skill</h5>
            </div>

            {/* Skills */}
            {[
              { skill: "HTML / CSS", percent: 90 },
              { skill: "JavaScript", percent: 85 },
              { skill: "React", percent: 80 },
              { skill: "PHP", percent: 75 },
              { skill: "Node.js", percent: 70 },
              { skill: "MySQL", percent: 75 },
              { skill: "Consumo de APIs REST", percent: 80 },
              { skill: "Bootstrap / Tailwind", percent: 70 },
              { skill: "Resposive Design", percent: 75 },
            ].map(({ skill, percent }) => (
              <div className="py-1" key={skill}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percent}%` }}
                    aria-valuenow={percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar-title">{skill}</div>
                    <span className="progress-bar-number">{percent}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-7 col-md-6 ps-xl-3 mt-2">
          <h5 className="font-weight-normal mt-2">Perfil profesional</h5>
          <div className="my-2 p-2">
            <p className="font-italic mb-0">
              Soy una profesional versátil con formación en Desarrollo de
              Aplicaciones Web y amplia experiencia en administración y atención
              al cliente. Me destaco por ser organizada, resolutiva y con una
              fuerte orientación al aprendizaje continuo.​
            </p>
          </div>
          <div className="my-2 p-2">
            <p className="font-italic mb-0">
              En el ámbito tecnológico, he trabajado con tecnologías como React,
              PHP, Node.js y MySQL, desarrollando proyectos personales y
              colaborativos. Además, poseo conocimientos en control de versiones
              con Git, entornos Linux y consumo de APIs.​
            </p>
          </div>

          <div className="my-2 p-2">
            <p className="font-italic mb-0">
              En el área administrativa, cuento con experiencia en gestión
              documental, atención al cliente, control financiero y he liderado
              procesos de mejora organizacional.​
            </p>
          </div>

          <div className="my-2 p-2">
            <p className="font-italic mb-0">
              <strong>
                Estoy en búsqueda de nuevas oportunidades que me permitan
                aportar mis habilidades y continuar creciendo profesionalmente.
                Si buscas una profesional comprometida y multifacética,
                ¡conectemos!
              </strong>
            </p>
          </div>
          <div className="mb-2 d-flex justify-content-center">
            <div className="social mt-4 d-flex">
              <p className="pr-2 font-weight-normal">Follow on:</p>
              <a
                href="https://www.linkedin.com/in/lina-ramirez-h"
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
