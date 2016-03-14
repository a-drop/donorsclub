Home = class Home extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="content-wrapper request-list-page">
        <div className="container main">
          <div className="row pad-botm">
            <HomeFilter />
          </div>
          <div className="row">
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
          </div>
        </div>
      </div>
    )
  }
}
