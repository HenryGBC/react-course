var React = require('react');
var PropTypes = React.PropTypes;
var styles= require('../styles');


function UserDetailsWrapper(props){
	return (
      <div className='col-sm-6'>
        <p className='lead'>{props.header} </p>
        {props.children}
      </div>
	)
}

module.exports = UserDetailsWrapper;