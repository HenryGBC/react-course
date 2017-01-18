var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Home= React.createClass({

	
	render: function(){
		return(
			<MainContainer>
				<h1> Gihub Battle </h1>
				<p className='lead'>Some fancy motto</p>
				<Link to='/playerOne'>
						<button type='button' className='btn btn-lg btn-success'>Get Starteed</button>
				</Link>
			</MainContainer>
		)
	}
});


module.exports = Home;