import './Projects.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

function Projects() {
  const imagesProyecto1 = [
    { src: 'https://www.bootdey.com/image/400x300/FFB6C1/000000', alt: 'Pantalla inicial' },
    { src: 'https://www.bootdey.com/image/400x300/87CEFA/000000', alt: 'Pantalla de juego' },
    { src: 'https://www.bootdey.com/image/400x300/B0C4DE/000000', alt: 'Resultados' },
  ];

  const imagesProyecto2 = [
    { src: 'https://www.bootdey.com/image/600x350/DC143C/000000', alt: 'Pantalla inicial' },
    { src: 'https://www.bootdey.com/image/600x350/6495ED/000000', alt: 'Pantalla de juego' },
    { src: 'https://www.bootdey.com/image/600x350/5F9EA0/000000', alt: 'Resultados' },
  ];

  const imagesProyecto3 = [
    { src: 'https://www.bootdey.com/image/600x350/5F9EA0/000000', alt: 'Pantalla inicial' },
    { src: 'https://www.bootdey.com/image/600x350/DC143C/000000', alt: 'Pantalla de juego' },
    { src: 'https://www.bootdey.com/image/600x350/6495ED/000000', alt: 'Resultados' },
  ];

  return (
    <div className="container">
      {/* Proyecto 1 */}
      <div className="row list-project">
        <div className="col-md-7">
          <ImageCarousel images={imagesProyecto1} />
        </div>
        <div className="col-md-5">
          <div className="project-info-box mt-0">
            <h5>FOIL LOGO</h5>
            <p className="project-text">
              Suspendisse convallis, magna in blandit dapibus, diam dui ultrices sem, ut egestas neque magna vel erat.
            </p>
          </div>

          <div className="project-info-box mb-10">
            <p className="project-text"><strong className="strong-text">Client:</strong> FOIL COM</p>
            <p className="project-text"><strong className="strong-text">Date:</strong> 10.02.2020</p>
            <p className="project-text"><strong className="strong-text">Designer:</strong> Brian Hawkins</p>
            <p className="project-text"><strong className="strong-text">Tools:</strong> Photoshop, Illustrator & Sketch</p>
          </div>

          <a href="#" className="btn btn-primary d-block">VIEW PROJECT</a>
        </div>
      </div>

      <div className="spacer-line-fw border-secondary opc-25 mt-4 mb-4">&nbsp;</div>

      {/* Proyecto 2 */}
      <div className="row list-project">
        <div className="col-md-5 tablet-top">
          <div className="project-info-box mt-0">
            <h5>STATIONERY</h5>
            <p className="project-text">
              Suspendisse convallis, magna in blandit dapibus, diam dui ultrices sem, ut egestas neque magna vel erat.
            </p>
          </div>

          <div className="project-info-box mb-10">
            <p className="project-text"><strong className="strong-text">Client:</strong> LOGO COMPANY</p>
            <p className="project-text"><strong className="strong-text">Date:</strong> 13.02.2020</p>
            <p className="project-text"><strong className="strong-text">Designer:</strong> John Doe</p>
            <p className="project-text"><strong className="strong-text">Tools:</strong> Photoshop & Illustrator</p>
          </div>

          <a href="#" className="btn btn-primary d-block">VIEW PROJECT</a>
        </div>
        <div className="col-md-7">
          <ImageCarousel images={imagesProyecto2} />
        </div>
      </div>

      <div className="spacer-line-fw border-secondary opc-25 mt-4 mb-4">&nbsp;</div>

      {/* Proyecto 3 */}
      <div className="row list-project">
        <div className="col-md-7">
          <ImageCarousel images={imagesProyecto3} />
        </div>
        <div className="col-md-5">
          <div className="project-info-box mt-0">
            <h5>IDEA BULB</h5>
            <p className="project-text">
              Suspendisse convallis, magna in blandit dapibus, diam dui ultrices sem, ut egestas neque magna vel erat.
            </p>
          </div>

          <div className="project-info-box mb-10">
            <p className="project-text"><strong className="strong-text">Client:</strong> IDEA COMPANY</p>
            <p className="project-text"><strong className="strong-text">Date:</strong> 07.02.2020</p>
            <p className="project-text"><strong className="strong-text">Designer:</strong> Jessica Smith</p>
            <p className="project-text"><strong className="strong-text">Tools:</strong> Photoshop, Illustrator & Sketch</p>
          </div>

          <a href="#" className="btn btn-primary d-block">VIEW PROJECT</a>
        </div>
      </div>
    </div>
  );
}


export default Projects;