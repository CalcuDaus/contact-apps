import React from "react";
import { getData } from "../data/data";
import ContactList from "./ContactList";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }
  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Contact</h1>
        {console.log(this.state.contacts)}
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler}/>
      </div>
    );
  }
}

export default ContactApp;
