var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec; 

function getUserInfo(username){
	return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
	getPlayersInfo: function(players){
		// fetch some data github
	}
};

module.exports = helpers;