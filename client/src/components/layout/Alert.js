import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Destructure and pass in alerts prop
// Make sure alerts are not null and has something in it
// If it has something, display msg and alert styling based on alert type
const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
  <div key={alert.id} className={`alert alert-${alert.alertType}`}>
    { alert.msg }
  </div>
));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
}

// Get state from redux and map to 'alerts' prop
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
