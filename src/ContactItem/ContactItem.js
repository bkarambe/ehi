import React, {useState} from "react";
import './ContactItem.css';

const ContactItem = (props) => {
	const { contact } = props;
		const removeContactItem = () => {
				props.removeContactItem(contact.email);
		}
		const editContactItem = () => {
				setIsContactEditable(!isContactEditable);
		}

		const [firstname, setFirstname] = useState(contact.firstName);
		const [lastName, setLastname] = useState(contact.lastName);
		const [email, setEmail] = useState(contact.email);
		const [phoneNumber, setPhoneNumber] = useState(contact.phone);
		const [status, setStatus] = useState(contact.status);
		const [isContactEditable, setIsContactEditable] = useState(false);

	const onToggleActive = () => {
			setStatus(true);
	}

		const onToggleDeactive = () => {
			setStatus(false);
			setIsContactEditable(false);
	}

	return (
		<div className={`d-flex ${status ? '' : 'deactivated'}`} style={{ border: "1px solid black", backgroundColor: 'skyblue'}}>
			<div className="col-8">
				<div className="d-flex m-1">
				<strong className="col-6">First Name: </strong>
				<input  className="col-6 form-control" maxLength="25" value={firstname} onChange={(event) => {setFirstname(event.target.value)}} disabled={!isContactEditable}/></div>

				<div className="d-flex m-1">
				 <strong className="col-6">Last Name: </strong>
				 <input className="col-6 form-control"  maxLength="25"  value={lastName} onChange={(event) => {setLastname(event.target.value)}} disabled={!isContactEditable}/>
				 </div>

				<div className="d-flex m-1">
				<strong className="col-6">Email: </strong>
				<input className="col-6 form-control"  maxLength="25"  value={email} onChange={(event) => {setEmail(event.target.value)}} disabled={!isContactEditable} /></div>

				<div className="d-flex m-1">
				<strong className="col-6">Phone Number: </strong>
				<input className="col-6 form-control" type="number" value={phoneNumber} onChange={(event) => {setPhoneNumber(event.target.value)}} disabled={!isContactEditable}/>
				</div>

				<div className="d-flex m-1">
				<strong className="col-6">Status: </strong>
				<strong>Active</strong>
				<input className="align-self-center" type="radio" name={contact.email} checked={status} onChange={onToggleActive}/>

				<strong className="ml-2">Deactive</strong>
				<input className="align-self-center" type="radio" name={contact.email} onChange={onToggleDeactive}/>
				</div>
			</div>

			<div className="col-4">
				<div className="m-3">
					<button className="btn btn-warning w-100 pl-0" onClick={editContactItem} disabled={!status}><i className="fa fa-pencil"/>Edit</button>
				</div>
				<div className="m-3">
					<button className="btn btn-danger w-100"  onClick={removeContactItem} disabled={!status}><i className="fa fa-trash" />Delete</button>
				</div>
			 
			</div>
		</div>
	);
};



export default ContactItem;
