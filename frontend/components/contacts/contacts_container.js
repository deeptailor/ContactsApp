import { connect } from 'react-redux';
import Contacts from './contacts.jsx';

import { fetchContacts } from '../../actions/contact_actions.js';

const mapStateToProps = ({ contacts }) => {
  return({
    contacts: Object.keys(contacts).map(key => contacts[key])
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchContacts: () => (dispatch(fetchContacts))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
