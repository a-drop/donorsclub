Admin.BloodGroups = class BloodGroups extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    $('#BloodGroupsTable').DataTable();
  }

  render(){
    return(
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <Admin.ContentHeader title="Blood Groups"/>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/*<div className="box-header">
                  <h3 className="box-title">Data Table With Full Features</h3>
                </div>{/* /.box-header */}
                <div className="box-body">
                  <table id="BloodGroupsTable" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Totel Users with this group</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.bloodGroups()}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Totel Users with this group</th>
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

  bloodGroups() {
    return DummyBloodGroups.map(function (bloodgroup) {
      return(
        <tr key={bloodgroup.id}>
          <td>{bloodgroup.id}</td>
          <td>{bloodgroup.title}</td>
          <td>{bloodgroup.users_count}</td>
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
