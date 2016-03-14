HomeFilter = class HomeFilter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="col-md-12">

        <div className="home-top-filter">
          <h4 className="">RECENT REQUESTS FROM NEAR BY YOU</h4>
          {/*<button className="btn btn-default no-border options-toggle" type="button">
            <span className="fa fa-ellipsis-v"></span>
          </button>*/}
          <div className="options">
            <div className="table">
              <span className="my-group option">
                <button className="btn btn-default">O<sup>+</sup></button>
              </span>
              <span className="my-location option">
                <button type="button" className="btn btn-default">
                  <span className="fa fa-map-marker"></span>
                  <span className="text"> From Kasaragod</span>
                </button>
              </span>
              <span className="sort-by-date option">
                <button type="button" className="btn btn-default">
                  <span className="fa fa-arrow-up"></span>
                  <span className="text"> Sort By Date</span>
                </button>
              </span>
              <span className="filter-by-group option">
                <span className="dropdown">
                  <button className="btn dropdown-toggle btn-default" type="button" id="" data-toggle="dropdown">
                    <span className="text">Filter By Group </span>
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="">
                    <li><a href="">A+</a></li>
                    <li><a href="">A-</a></li>
                    <li><a href="">B+</a></li>
                    <li><a href="">B-</a></li>
                    <li><a href="">AB+</a></li>
                    <li><a href="">AB-</a></li>
                  </ul>
                </span>
              </span>
              <span className="filter-by-location option">
                <span className="dropdown">
                  <button className="btn dropdown-toggle btn-default" type="button" id="" data-toggle="dropdown">
                    <span className="text">Filter By Location </span>
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="">
                    <li className="pad-side-10"><input type="text" className="form-control no-border" placeholder="Search..." /></li>
                    <li><a href="">Kochi</a></li>
                    <li><a href="">Trivandrum</a></li>
                  </ul>
                </span>
              </span>
            </div>

          </div>
        </div>
      </div>

    )
  }
}
