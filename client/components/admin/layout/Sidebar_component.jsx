const menuItemsArray = [
  {
    title: 'Dashboard',
    routeName: 'adminDashboard',
    icon: 'fa-dashboard'
  },
  {
    title: 'Users',
    routeName: 'adminUsers' ,
    icon: 'fa-users'
  },
  {
    title: 'BloodGroups',
    routeName: 'adminBloodGroups',
    icon: 'fa-heartbeat'
  },
  {
    title: 'Donations',
    routeName: 'adminDonations',
    icon: 'fa-heart'
  },
  {
    title: 'Requests',
    routeName: 'adminRequests',
    icon: 'fa-plus-square'
  }
];

Admin.SideBar = class AdminSideBar extends React.Component {
  constructor(props) {
    super(props)
    // this.navItems = this.navItems.bind(this);
  }

  render(){
    return(
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="/images/user2-160x160.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          {/* search form */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          {/* /.search form */}
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            {/*<li className="active">
              <a href="/admin">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/admin/users">
                <i className="fa fa-users"></i> <span>Users</span>
              </a>
            </li>
            <li>
              <a href="/admin/bloodgroups">
                <i className="fa fa-heartbeat"></i> <span>Blood Groups</span>
              </a>
            </li>
            <li>
              <a href="/admin/requests">
                <i className="fa fa-plus-square"></i> <span>Requests</span>
              </a>
            </li>
            <li>
              <a href="/admin/donations">
                <i className="fa fa-heart"></i> <span>Donations</span>
              </a>
            </li>*/}
            {this.navItems()}
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>

    )
  }
  navItems() {
    return menuItemsArray.map(function (menu) {
      return(
        <li key={menu.title} className={FlowRouter.current().route.name === menu.routeName? 'active' : ''}>
          <a href={FlowRouter.path(menu.routeName)}>
            <i className={`fa ${menu.icon}`}></i> <span>{menu.title}</span>
          </a>
        </li>
      )
    })
  }

}
