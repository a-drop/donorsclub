Header = class Header extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <header className="main">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/home">
                <img src="/images/logo.svg" alt="" width="140" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li className=""><a href="request.html">Raise A Requst</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">hi</a></li>

              </ul>
            </div>
          </div>
        </nav>
      </header>

    )
  }
}
