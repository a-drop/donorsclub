Admin.Login = class AdminLogin extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){
    return(
      <div className="container main login">
        <div className="text-center" >
          <div className="row pad-botm">
            <div className="col-md-12">
              <div className="logo">
                <img src="/images/logo.svg" alt="logo" />
              </div>
              <h4 className="header-line">LOGIN</h4>
            </div>
          </div>
          <div className="row ">
            <div className="form col-md-6 col-md-offset-3 text-left">
              <form action="">
                <Form.Text name="username" label="User Name" id="username"/>
                <Form.Password name="password" label="Password" id="password"/>
                <div className="text-center">
                  <button className="btn btn-default">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="tnc text-center">
            {/*<h6><strong>Term and Conditions</strong></h6>
            <p className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quae ipsum quia voluptate commodi ad tenetur, quasi maxime repudiandae laboriosam quod autem dolorem ea officiis animi nihil cupiditate veritatis reiciendis iure cumque tempora dolores odit eos. Est, perferendis. Aperiam ex, eveniet corrupti odio? Suscipit rerum dignissimos, sed nisi asperiores. Minima incidunt fugiat cumque consequuntur culpa earum deserunt. <a href="">Read more...</a></p>*/}

          </div>
        </div>
      </div>
    )
  }

}
