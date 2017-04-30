import React from 'react';
import GroupCard from './group_card.jsx';

class Group extends React.Component{
  constructor(props){
    super(props)
    this.state = {renderForm: false, name: undefined, image: undefined};

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.setGroups = this.setGroups.bind(this);
    this.setForm = this.setForm.bind(this);

  }

  componentWillMount(){
    this.props.fetchGroups();
  }

  componentWillReceiveProps(newProps){
    if(this.props.groups.length !== newProps.groups.length){
      this.setState({renderForm: false, name: undefined, image: undefined});
    }
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  submit(){
    this.props.createGroup({
      name: this.state.name,
      image: this.state.image
    });
  }

  setGroups(){
    this.setState({renderForm: false});
  }

  setForm(){
    this.setState({renderForm: true});
  }

  renderGroups(){
    if(this.props.groups.length > 0){
      return(
        this.props.groups.map((group,i) => { return(
          <GroupCard key={`group-${i}`} image={group.image} name={group.name} numContacts={group.contacts.length} contacts={group.contacts} deleteGroup={this.props.deleteGroup} id={group.id}/>
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
          <h1>Create New Group</h1>
          <h2>{this.state.error}</h2>
          <div className="add-contact-form-main">
            <input type="text" value={this.state.name} onChange={this.update('name')} placeholder="Group Name *"></input>
            <input type="text" value={this.state.image} onChange={this.update('image')} placeholder="Group Image URL"></input>
            <button type="button" onClick={this.submit}>Create</button>
          </div>
        </div>
      )
    } else {
        return this.renderGroups();
    }
  }

  render(){
    return(
      <div className="contacts-container">
        <ul className="contacts-menu">
          <li onClick={this.setGroups}>All My Groups</li>
          <li onClick={this.setForm}>Create New Group</li>
        </ul>
        <div className="contacts-main">
          {this.renderMain()}
        </div>
      </div>
    );
  }
}

export default Group;
