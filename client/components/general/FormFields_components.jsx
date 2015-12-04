Form = class Form extends React.Component {
  render() {
    return(
      <form action="">

      </form>
    )
  }
}

Form.Text = class FormText extends React.Component {

  static propTypes: {
    name : React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    id   : React.PropTypes.string.isRequired
  }
  render() {
    return (
      <div className="form-group">
        <label className="" htmlFor={this.props.id}><small>{this.props.label}</small></label>
        <input type="text" id={this.props.id} name={this.props.name} className="form-control" />
      </div>
    )
  }
}

Form.Select = class FormSelect extends React.Component {
  constructor() {
    super()
  }
  static propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    options: React.PropTypes.object.isRequired,
  }
  render() {
    return (
      <div className="form-group">
        <label className="" htmlFor={this.props.id}><small>{this.props.label}</small></label>
        <input type="text" id={this.props.id} name={this.props.name} className="form-control" />
        <select name={this.props.name} id={this.props.id} class="form-control">

        </select>
      </div>
    )
  }
}
