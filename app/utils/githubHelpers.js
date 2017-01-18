var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec; 

function getUserInfo(username){
	return axios.get('https://api.github.com/users/' + username);
}

function getRepos(username){
	//fetch username repos
  return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100');
}
function getTotalstars (repos){
  //calvulate all the stars that user has
  return repos.data.reduce(function(prev, current){
    return prev + current.stargazers_count 
  }, 0)
}

function getPlayersData (player){
  // get repos
  // get total stars
  // return ibject wih that data

  return getRepos(player.login)
    .then(getTotalstars)
    .then(function(totalStars){
      console.log(totalStars);
      return{
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players){
  //Return an array after doing some fancy algotihms to determinate a winner
  return [
    players[0].followers * 3 * players[0].totalStars,
    players[1].followers * 3 * players[1].totalStars
  ]
}
var helpers = {
	getPlayersInfo: function(players){
		return axios.all(players.map(function(username){
			return getUserInfo(username);
		})).then(function(info){
			return info.map(function(user){
				return user.data;
			})
		}).catch(function(err){
	      console.log('Error in getPlayersInfo', err)
	    });
	},
	battle: function (players){
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err){console.log('Err: ', err)});
	}
};

module.exports = helpers;