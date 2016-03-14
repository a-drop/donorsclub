Admin={};
Admin.Layout = class AdminLayout extends React.Component {
  constructor(props){
    super(props);
  }
  static propTypes() {
    return{
      header: React.PropTypes.element.isRequired,
      sidebar: React.PropTypes.element.isRequired,
      content: React.PropTypes.element.isRequired,
      footer: React.PropTypes.element.isRequired
    }
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.header}
        {this.props.sidebar}
        {this.props.content}
        {this.props.footer}
      </div>
    )
  }
}
