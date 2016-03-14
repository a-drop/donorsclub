Admin.Requests = class AdminRequests extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    $('#UsersTable').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false
    });
  }

  render(){
    return(
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <Admin.ContentHeader title="Requests"/>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/*<div className="box-header">
                  <h3 className="box-title">Data Table With Full Features</h3>
                </div>{/* /.box-header */}
                <div className="box-body">
                  <table id="UsersTable" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>Login Type</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.users()}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>Login Type</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>{/* /.box-body */}
              </div>{/* /.box */}
            </div>{/* /.col */}
          </div>{/* /.row */}
        </section>{/* /.content */}
      </div>

    )
  }

  users () {
    return DummyUsers.map(function (user) {
      return(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.blood_group}</td>
          <td>{user.login_type}</td>
          <td>Subscriber</td>
          <td>
            <div className="text-right">
              <a href="" title="View"><i className="fa fa-eye"></i></a>&nbsp;&nbsp;
              <a href="" title="Edit"><i className="fa fa-pencil"></i></a>&nbsp;&nbsp;
              <a href="" title="Delete"><i className="fa fa-trash-o"></i></a>&nbsp;&nbsp;
            </div>
          </td>
        </tr>
      )
    })
  }

}
