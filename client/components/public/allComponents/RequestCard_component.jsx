RequestCard = class RequestCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="col-md-3 col-sm-6">
        <div className="alert alert-info back-widget-set request-list-box">
          <div className="text-center">
            <div className="title">O<sup>+</sup></div>
          </div>
          <div className="text-center short-info">
            <div className="text amount">3 Unit</div>
            <div className="text from-now">2 Hours ago</div>
            <div className="text place"><span>From </span>Kasaragod</div>
          </div>
        </div>
      </div>
    )
  }
}
