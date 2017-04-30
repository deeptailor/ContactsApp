import React from 'react';
import ContactCard from '../contacts/contact_card.jsx';

class GroupCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {overlay: false}

    this.showOverlay = this.showOverlay.bind(this);
    this.dontShowOverlay = this.dontShowOverlay.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(id){
    return (e) => {
      e.stopPropagation();
      this.props.deleteGroup(id);
    };
  }

  showOverlay(){
    this.setState({overlay: true});
  }

  dontShowOverlay(e){
    e.stopPropagation();
    this.setState({overlay: false});
  }

  renderContacts(){
    if(this.props.contacts.length > 0){
      return this.props.contacts.map((contact, i) => (
        <ContactCard key={`contact-${i}`}contact={contact} contactId={contact.id}/>
      ));
    }
  }

  renderOverlay(){
    if(this.state.overlay){
      return (
        <div className="group-overlay" onClick={this.dontShowOverlay}>
          <div className="group-overlay-main" onClick={(e) => e.stopPropagation()}>
            <h1>{this.props.name}</h1>
            {this.renderContacts()}
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <div className="contact-main" onClick={this.showOverlay}>
        <div className="contact-main-left">
          <img src={this.props.image}></img>
        </div>
        <div className="contact-main-right">
          <h2>{this.props.name}</h2>
          <h3>{`This group has ${this.props.numContacts} contacts`}</h3>
        </div>
        <div className="contact-actions">
          <div className="contact-actions-edit">
            <i className="fa fa-pencil-square" aria-hidden="true"></i>
          </div>
          <div className="contact-actions-delete" onClick={this.delete(this.props.id)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
        {this.renderOverlay()}
      </div>
    )
  }
}

export default GroupCard;
