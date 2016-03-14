RequestView = class RequestView extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){
    return(
      <div className="content-wrapper view-request">
        <div className="container main">
          <div className="pad-botm pad-top">
            <div className="row">
              <div className="col-md-3 col-sm-5">
                <div className="blood-group text-center">
                  <span className="text">O</span><sup>+</sup>
                </div>
              </div>
              <div className="col-md-8 col-sm-7 col-md-offset-1">
                <div className="main-details">
                  <div className="name">
                    <h3>
                      <div>Edward M. Rider</div>
                    </h3>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact">
                        <h4>
                          <small>Contact No.</small>
                          <div>828-863-0837</div>
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="location">
                        <h4>
                          <small>City</small>
                          <div>Green Creek</div>
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="date">
                        <h4>
                          <small>Required Date</small>
                          <div>12/12/2015</div>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4">
                      <div className="unit">
                        <h5>
                          <small>Unit Required</small>
                          <div>4</div>
                        </h5>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="gender">
                        <h5>
                          <small>Gender</small>
                          <div>Male</div>
                        </h5>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="age">
                        <h5>
                          <small>Age</small>
                          <div>34</div>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <hr />
              <div className="row more-details">
                <div className="col-md-4">
                  <div className="address">
                    <h4>
                      <small>Address</small>
                      <div>Lakeshore Hospital</div>
                    </h4>
                    <h5>
                      Kochi, Kerala
                    </h5>
                    <h5>
                      <small>Landmark</small>
                      <div>Near Vytilla Hub</div>
                    </h5>
                  </div>
                  <br />
                  <div className="created-by">
                    <h5>
                      <small>Created By</small>
                      <div><a href="">Hafeez Hamza</a></div>
                    </h5>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="map">
                    <img src="assets/img/dummy-map.png" alt="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="buttons clearfix">
                    <button type="button" className="btn btn-primary donation-request">
                      REQUEST DONATION
                    </button>
                    <button type="button" className="btn btn-default back">
                      BACK
                    </button>
                    <div className="share">
                      <span className="text">Share with</span>
                      <button type="button" className="btn btn-default">
                        <span className="fa fa-facebook"></span>
                      </button>
                      <button type="button" className="btn btn-default">
                        <span className="fa fa-google-plus"></span>
                      </button>
                      <button type="button" className="btn btn-default">
                        <span className="fa fa-twitter"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

}
