import React from 'react';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.redirectTo = this.redirectTo.bind(this);
  }

  redirectTo(string){
    return () => {
      this.props.router.push(string);
    }
  }

  render(){
    return(
      <div className="navigation-container">
        <h1>Contacts</h1>
        <ul className="navigation-main">
          <li className="navigation-contacts" onClick={this.redirectTo('contacts')}>My Contacts</li>
          <li className="navigation-groups" onClick={this.redirectTo('groups')}>My Groups</li>
        </ul>
        <div className="other-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Navigation;
