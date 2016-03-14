Footer = class Footer extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <footer className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              &copy; {moment(new Date()).year()} donorsclub.net
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
