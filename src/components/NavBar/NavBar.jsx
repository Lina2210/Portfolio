import './NavBar.css'
import yo from '../../assets/yo.jpg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="container">
      <div className="card overflow-hidden">
        <div className="card-body p-0">
          <img
            src="https://www.bootdey.com/image/1352x300/00FFFF/000000"
            alt=""
            className="img-fluid"
          />
          <div className="row align-items-center">
            <div className="col-lg-4 order-lg-1 order-2">
              <div className="d-flex align-items-center justify-content-around m-4">
                <div className="text-center">
                  <i className="fa fa-file fs-6 d-block mb-2"></i>
                  <h4 className="mb-0 fw-semibold lh-1">0</h4>
                  <p className="mb-0 fs-4">Posts</p>
                </div>
                <div className="text-center">
                  <i className="fa fa-user fs-6 d-block mb-2"></i>
                  <h4 className="mb-0 fw-semibold lh-1">0</h4>
                  <p className="mb-0 fs-4">Views</p>
                </div>
                <div className="text-center">
                  <i className="fa fa-check fs-6 d-block mb-2"></i>
                  <h4 className="mb-0 fw-semibold lh-1">0</h4>
                  <p className="mb-0 fs-4">Reactions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-n3 order-lg-2 order-1">
              <div className="mt-n5">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <div
                    className="linear-gradient d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "110px", height: "110px" }}
                  >
                    <div
                      className="border border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img
                        src={yo}
                        alt="Mi Foto"
                        className="w-100 h-120"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="fs-5 mb-0 fw-semibold">Lina Ramirez</h5>
                  <p className="mb-0 fs-4">Develop Web</p>
                </div>
              </div>
            </div>
          </div>
          <ul
            className="nav nav-pills user-profile-tab justify-content-between mt-2 bg-light-info rounded-2"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-6"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="true"
              >
                <i className="fa fa-user me-2 fs-6"></i>
                <Link to="/" className="d-none d-md-block">Posts</Link>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6"
                id="pills-followers-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-followers"
                type="button"
                role="tab"
                aria-controls="pills-followers"
                aria-selected="false"
                tabIndex={-1}
              >
                <i className="fa fa-heart me-2 fs-6"></i>
                <Link to="/about" className="d-none d-md-block">About</Link>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6"
                id="pills-friends-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-friends"
                type="button"
                role="tab"
                aria-controls="pills-friends"
                aria-selected="false"
                tabIndex={-1}
              >
                <i className="fa fa-users me-2 fs-6"></i>
                <Link to="/proyects" className="d-none d-md-block">Proyects</Link>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6"
                id="pills-gallery-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-gallery"
                type="button"
                role="tab"
                aria-controls="pills-gallery"
                aria-selected="false"
                tabIndex={-1}
              >
                <i className="fa fa-photo me-2 fs-6"></i>
                <Link to="/Contact" className="d-none d-md-block">Contact</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
