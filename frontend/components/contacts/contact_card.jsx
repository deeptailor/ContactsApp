import React from 'react';

function numberFormat(number){
  let numString = number + '';

  return '(' + numString.slice(0,3) + ') ' + numString.slice(3,6) + '-' + numString.slice(6);
}

class ContactCard extends React.Component{
  constructor(props){
    super(props);
  }

  delete(id){
    return () => {
      this.props.deleteContact(id);
    };
  }

  render(){
    return(
      <li>
        <div className="contact-main">
          <div className="contact-main-left">
            <img src={this.props.contact.profile_image_url}></img>
          </div>
          <div className="contact-main-right">
            <h2>{this.props.contact.firstname} {this.props.contact.lastname}</h2>
            <h3>Number: {numberFormat(this.props.contact.number)}</h3>
          </div>
          <div className="contact-actions">
            <div className="contact-actions-edit">
              <i className="fa fa-pencil-square" aria-hidden="true"></i>
            </div>
            <div className="contact-actions-delete" onClick={this.delete(this.props.contactId)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default ContactCard;
