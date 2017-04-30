import React from 'react';

class ContactCard extends React.Component{
  constructor(props){
    super(props);
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
            <h3>Number: {this.props.contact.number}</h3>
          </div>
          <div className="contact-actions">
            <div className="contact-actions-edit">
              <i className="fa fa-pencil-square" aria-hidden="true"></i>
            </div>
            <div className="contact-actions-delete">
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default ContactCard;
