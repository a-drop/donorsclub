/*jshint esnext: true */

function renderPublicLayoutWith(component) {
  ReactLayout.render(PublicLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}

function renderAdminLayoutWith(component) {
  ReactLayout.render(PublicLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}

FlowRouter.route("/", {
  name: 'landing',
  action(params) {
    ReactLayout.render( Landing );
  }
});


FlowRouter.route("/login", {
  name: 'Login',
  action(params) {
    ReactLayout.render( Login );
  }
});

FlowRouter.route("/register", {
  name: 'Register',
  action(params) {
    ReactLayout.render( Register );
  }
});

FlowRouter.route("/home", {
  name: 'Home',
  action(params) {
    renderPublicLayoutWith(<Home />);
  }
});

FlowRouter.route("/request/:id", {
  name: 'ViewRequest',
  action(params) {
    console.log(params);

    renderPublicLayoutWith(<RequestView />);
  }
});
