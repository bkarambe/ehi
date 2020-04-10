import React from "react";
import ContactItem from "../ContactItem/ContactItem.js";
import { Modal } from "react-bootstrap";

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          phone: "4444444444",
          status: true,
        },
        {
          firstName: "Jessy",
          lastName: "Lee",
          email: "jessylee@gmail.com",
          phone: "6666666666",
          status: true,
        },
      ],
      showModal: false,
      newFname: "",
      newLname: "",
      newEmail: "",
      newPhone: "",
      newStatus: true,
    };
  }

  removeContactItem = (emailId) => {
    const {contacts} = this.state;
    const deleteIndex = contacts.findIndex(
      (contact) => contact.email === emailId
    );
    
    const tempContacts = contacts;
    if (deleteIndex >= 0) {
      tempContacts.splice(deleteIndex, 1);
      this.setState({
        contacts: tempContacts,
      });
    }
  };

  addContactItem = () => {
    this.setState({
      showModal: true,
    });
  };

  close = () => {
    this.setState({
      showModal: false,
    });
  };

  onSubmitContact = () => {
    const {state} = this;
    const tempContacts = state.contacts;
    const item = {
      firstName: state.newFname,
      lastName: state.newLname,
      email: state.newEmail,
      phone: state.newPhone,
      status: state.newStatus,
    };
    tempContacts.push(item);
    this.setState({
      contacts: tempContacts,
    });
    this.close();
  };

  renderAddAccountModal = () => (
  <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Add Contact</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="d-flex m-1">
            <strong className="col-4">
              First Name:
            </strong>
              <input className="col-6 form-control"
                type="text"
                onBlur={(event) =>
                  this.setState({ newFname: event.target.value })
                }
              />
            </div>

            <div className="d-flex m-1">
            <strong  className="col-4">
              Last Name:
            </strong>
              <input className="col-6 form-control"
                type="text"
                onBlur={(event) =>
                  this.setState({ newLname: event.target.value })
                }
              />
            </div>

            <div className="d-flex m-1">
            <strong className="col-4">Email:</strong>
              <input className="col-6 form-control"
                type="text"
                onBlur={(event) =>
                  this.setState({ newEmail: event.target.value })
                }
              />
            </div>

            <div className="d-flex m-1">
            <strong  className="col-4">Phone:</strong>
              <input className="col-6 form-control"
                type="number"
                onBlur={(event) =>
                  this.setState({ newPhone: event.target.value })
                }
              />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button className="btn btn-outline-success" disabled={this.state.newFname==='' || this.state.newLname==='' || this.state.newEmail==='' || this.state.newPhone===''} onClick={this.onSubmitContact}><i className="fa fa-plus"/>Add Contact</button>
            <button className="btn btn-outline-danger" onClick={this.close}><i className="fa fa-times"/>Close</button>
          </Modal.Footer>
        </Modal>
  )

  render() {
    return (
      <>
        {this.renderAddAccountModal()}
        <div className="d-flex">
        <div className="col-8">
          {this.state.contacts.map((contact) => (
              <ContactItem
              key={contact.email} 
                contact={contact}
                removeContactItem={this.removeContactItem}
              />
          ))}
            </div>

          <div className="col-4 align-self-center">
            <button className="btn btn-primary btn-lg" onClick={this.addContactItem}><i className="fa fa-plus-circle" />Add Contact</button>
          </div>
        </div>
      </>
    );
  }
}

export default ContactList;
