Register = class Register extends React.Component {
  constructor(props) {
    super(props)

  }
  handleClick() {
    // Explicitly focus the text input using the raw DOM API.
    this.myTextInput.focus();
  }
  //static defaultProps = {}
  // state = {}
  render() {
    return (
      <div className="container main register">
        <div className="text-center" >
          <div className="row ">
            <div className="col-md-12">
              <div className="logo">
                <img src="/images/logo.svg" alt="logo" />
              </div>
              <h5 className="header-line">COMPLETE YOUR REGISTRATION</h5>
            </div>
          </div>
          <div className="register-form ">
            <Form>
              <div class="row">
                <div className="col-md-6">
                  <Form.Text name="name" label="Name" id="name" />
                  <Form.Text name="date_of_birth" label="Date of Birth" id="date_of_birth" />

                  <div className="form-group">
                    <label className="" htmlFor=""><small>Date Of Birth</small></label>
                    <select className="form-control" name="" id="">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">

                </div>
                <div className="col-md-12"></div>
              </div>
            </Form>
          </div>
          <div className="tnc text-center">
            <h6><strong>Term and Conditions</strong></h6>
            <p className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quae ipsum quia voluptate commodi ad tenetur, quasi maxime repudiandae laboriosam quod autem dolorem ea officiis animi nihil cupiditate veritatis reiciendis iure cumque tempora dolores odit eos. Est, perferendis. Aperiam ex, eveniet corrupti odio? Suscipit rerum dignissimos, sed nisi asperiores. Minima incidunt fugiat cumque consequuntur culpa earum deserunt. <a href="">Read more...</a></p>

          </div>
        </div>

      </div>






    );
  }
}
