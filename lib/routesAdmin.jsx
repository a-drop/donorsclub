function renderAdminLayoutWith(component) {
  ReactLayout.render(Admin.Layout, {
    header: <Admin.Header />,
    sidebar: <Admin.SideBar />,
    content: component,
    footer: <Admin.Footer />
  });
}

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
    $('body').addClass('hold-transition skin-blue sidebar-mini admin')
  }]
});

adminRoutes.route("/login", {
  name: 'login',
  action(params) {
    ReactLayout.render( Admin.Login );
  }
});
adminRoutes.route('/', {
  name: 'adminDashboard',
  action: function() {
    renderAdminLayoutWith(<Admin.Dashboard />);
  }
});

adminRoutes.route("/users", {
  name: 'adminUsers',
  action(params) {
    renderAdminLayoutWith(<Admin.Users />);
  }
});

adminRoutes.route("/user/:id", {
  name: 'adminUser',
  action(params) {
    renderAdminLayoutWith(<Admin.Users />);
  }
});

adminRoutes.route("/bloodgroups", {
  name: 'adminBloodGroups',
  action(params) {
    renderAdminLayoutWith(<Admin.BloodGroups />);
  }
});

adminRoutes.route("/bloodgroup/:id", {
  name: 'adminBloodGroup',
  action(params) {
    renderAdminLayoutWith(<Admin.BloodGroups />);
  }
});

adminRoutes.route("/donations", {
  name: 'adminDonations',
  action(params) {
    renderAdminLayoutWith(<Admin.Donations />);
  }
});

adminRoutes.route("/donation/:id", {
  name: 'adminDonation',
  action(params) {
    renderAdminLayoutWith(<Admin.Donations />);
  }
});

adminRoutes.route("/requests", {
  name: 'adminRequests',
  action(params) {
    renderAdminLayoutWith(<Admin.Requests />);
  }
});
adminRoutes.route("/request/:id", {
  name: 'adminRequest',
  action(params) {
    renderAdminLayoutWith(<Admin.Requests />);
  }
});
