import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  submitForm = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Fred Smith",
    email: "fred@gmail.com",
    phone: "555-555-1234"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.submitForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id=""
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                aria-describedby="helpId"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                aria-describedby="helpId"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id=""
                className="form-control form-control-lg"
                placeholder="Enter Phone No..."
                aria-describedby="helpId"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              name=""
              id=""
              className="btn btn-primary btn-block"
              type="submit"
              value="Add Contact"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
