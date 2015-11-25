PublicLayout = class PublicLayout extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="body">
        {this.props.header}
        {this.props.content}
        {this.props.footer}
      </div>
    )
  }
}
