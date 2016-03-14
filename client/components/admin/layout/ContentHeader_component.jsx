Admin.ContentHeader = class AdminUsers extends React.Component {
  constructor(props) {
    super(props)

  }
  static propTypes() {
    return{
      title: React.PropTypes.string.isRequired,
    }
  }
  render(){
    return(
      <section className="content-header">
        <h1>
          {this.props.title}
          {/*<small>advanced tables</small>*/}
        </h1>
        <ol className="breadcrumb">
          <li><a href="#"><i className="fa fa-dashboard"></i> Admin</a></li>
          <li className="active">Users</li>
        </ol>
      </section>
    )
  }
}
