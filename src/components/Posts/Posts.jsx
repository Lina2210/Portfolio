import './Posts.css';
import yo from '../../assets/yo.jpg';

function Posts() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div id="content" className="content content-full-width">
            <div className="profile-content">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <ul className="timeline">
                    <li>
                      <div className="timeline-time">
                        <span className="date">today</span>
                        <span className="time">04:20</span>
                      </div>
                      <div className="timeline-icon">
                        <a href="#">&nbsp;</a>
                      </div>
                      <div className="timeline-body">
                        <div className="timeline-header">
                          <span className="userimage">
                            <img
                              src={yo}
                              alt=""
                            />
                          </span>
                          <span className="username">
                            <a href="#">Lina Ramirez</a>
                          </span>
                          <span className="pull-right text-muted">18 Views</span>
                        </div>
                        <div className="timeline-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc faucibus turpis quis tincidunt luctus.
                          </p>
                        </div>
                        <div className="timeline-likes">
                          <div className="stats-right">
                            <span className="stats-text">259 Shares</span>
                            <span className="stats-text">21 Comments</span>
                          </div>
                          <div className="stats">
                            <span className="fa-stack fa-fw stats-icon">
                              <i className="fa fa-circle fa-stack-2x text-danger"></i>
                              <i className="fa fa-heart fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-fw stats-icon">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="stats-total">4.3k</span>
                          </div>
                        </div>
                        <div className="timeline-footer">
                          <a href="#" className="m-r-15 text-inverse-lighter">
                            <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like
                          </a>
                          <a href="#" className="m-r-15 text-inverse-lighter">
                            <i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment
                          </a>
                          <a href="#" className="m-r-15 text-inverse-lighter">
                            <i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share
                          </a>
                        </div>
                        <div className="timeline-comment-box">
                          <div className="user">
                            <img
                              src={yo}
                              alt=""
                            />
                          </div>
                          <div className="input">
                            <form>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control rounded-corner"
                                  placeholder="Write a comment..."
                                />
                                <span className="input-group-btn p-l-10">
                                  <button
                                    className="btn btn-primary f-s-12 rounded-corner"
                                    type="button"
                                  >
                                    Comment
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Puedes repetir el bloque <li> para más publicaciones o hacerlo dinámico con .map() */}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;