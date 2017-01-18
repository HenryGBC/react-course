var React = require('react');
var styles= require('../styles');


function MainContainer(props){
	return (
    <div className="junmbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
	)
}


module.exports = MainContainer;