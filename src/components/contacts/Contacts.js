import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  //dont need constructor/super for just state

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <>
              <h1 className="display-5 mb-3 mt-5">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
