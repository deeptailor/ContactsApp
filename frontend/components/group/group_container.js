import { connect } from 'react-redux';
import Group from './group.jsx';

import { fetchGroups, createGroup, deleteGroup } from '../../actions/group_actions.js';

const mapStateToProps = ({ groups }) => {
  return({
    groups: Object.keys(groups).map(key => groups[key])
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchGroups: () => (dispatch(fetchGroups)),
    createGroup: (data) => dispatch(createGroup(data)),
    deleteGroup: (id) => dispatch(deleteGroup(id))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);
