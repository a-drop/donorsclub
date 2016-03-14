Admin.Footer = class AdminFooter extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){
    return(
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 0.0.1
        </div>
        <strong>Copyright &copy; {moment(new Date()).year()} <a href="http://almsaeedstudio.com">Donors Club</a>.</strong> All rights reserved.
      </footer>
    )
  }

}
