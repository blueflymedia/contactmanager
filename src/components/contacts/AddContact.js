import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
/* import uuid from "uuid"; */

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  submitForm = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //Check for errors
    if (!name) {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (!email) {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (!phone) {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    //if key and value are same, you don't need to duplicate like
    // name:name, email:email, phone: phone
    const newContact = {
      name,
      email,
      phone
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.submitForm.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter your name"
                    type="text"
                    onChange={this.onInputChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    type="email"
                    onChange={this.onInputChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter your phone"
                    type="text"
                    onChange={this.onInputChange}
                    error={errors.phone}
                  />
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
        }}
      </Consumer>
    );
  }
}

export default AddContact;
