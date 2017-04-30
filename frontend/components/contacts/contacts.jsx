import React from 'react';
import ContactCard from './contact_card.jsx';

class Contacts extends React.Component{
  constructor(props){
    super(props)
    this.state = {renderForm: false, firstname:undefined, lastname:undefined,profile_image_url:undefined,number:undefined,error:undefined};
    this.setForm = this.setForm.bind(this);
    this.setContacts = this.setContacts.bind(this);
    this.routerPush = this.routerPush.bind(this);
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillMount(){
    this.props.fetchContacts();
  }

  componentWillReceiveProps(newProps){
    if(this.props.contacts.length !== newProps.contacts.length){
      this.setState({renderForm: false, firstname:undefined, lastname:undefined,profile_image_url:undefined,number:undefined,error:undefined});
    }
  }

  setForm(){
    this.setState({renderForm: true});
  }

  setContacts(){
    this.setState({renderForm: false});
  }

  routerPush(url){
    this.props.router.push(url);
  }

  update(field){
    return e => this.setState({
      [field]:e.currentTarget.value,
      error:''
    });
  }

  submit(){
    if(this.state.firstname === undefined || this.state.lastname === undefined|| this.state.number === undefined){
      this.setState({error: 'Please Enter All Fields Marked with *'})
    } else {
      this.props.addContact({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        profile_image_url: this.state.profile_image_url,
        number: Number(this.state.number)
      });
    }
  }

  renderContacts(){
    if(this.props.contacts.length > 0){
      return(
        this.props.contacts.map((contact,i) => { return(
          <ContactCard key={`contact-${i}`}contact={contact} contactId={contact.id} deleteContact={this.props.deleteContact}/>
        )})
      )
    } else {
      return(
        <h1>You have no contacts</h1>
      )
    }
  }

  renderMain(){
    if(this.state.renderForm){
      return(
        <div className="add-contact-form-container">
          <h1>Add New Contact</h1>
          <h2>{this.state.error}</h2>
          <div className="add-contact-form-main">
            <input type="text" value={this.state.firstname} onChange={this.update('firstname')} placeholder="First Name *"></input>
            <input type="text" value={this.state.lastname} onChange={this.update('lastname')} placeholder="Last Name *"></input>
            <input type="tel" value={this.state.number} onChange={this.update('number')} placeholder="Phone Number *"></input>
            <input type="url" value={this.state.profile_image_url} onChange={this.update('profile_image_url')} placeholder="Image URL"></input>
            <button type="button" onClick={this.submit}>Add</button>
          </div>
        </div>
      )
    } else {
        return this.renderContacts();
    }
  }

  render(){
    return(
      <div className="contacts-container">
        <ul className="contacts-menu">
          <li onClick={this.setContacts}>All My Contacts</li>
          <li onClick={this.setForm}>Add New Contact</li>
        </ul>
        <div className="contacts-main">
          {this.renderMain()}
        </div>
      </div>
    );
  }


}

export default Contacts;
