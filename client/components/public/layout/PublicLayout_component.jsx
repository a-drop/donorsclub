PublicLayout = class PublicLayout extends React.Component {
  static get propTypes() {
    return {
      header: React.PropTypes.element.isRequired,
      content: React.PropTypes.element.isRequired,
      footer: React.PropTypes.element.isRequired
    }
  }
  render() {
    return (
      <div className="body">
        {this.props.header}
        <div className="content-body">
          {this.props.content}
        </div>
        {this.props.footer}
      </div>
    )
  }
}
