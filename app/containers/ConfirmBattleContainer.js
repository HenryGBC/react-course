var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var gitHubHelpers = require('../utils/githubHelpers');


var ConfirmBattleContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function (){
       console.log('getInitialState');
      return {
        isLoading: true,
        playersInfo: []
      }
    },
    componentWillMount: function (){
      console.log('componentWillMount');
    },
    componentDidMount: function (){
      var query = this.props.location.query;
      gitHubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
        .then(function(players){
          this.setState({
            isLoading: false,
            playersInfo: players
          })
        }.bind(this))
    },
    componentWillReceiveProps: function() {
       console.log('componentWillReceiveProps');
    },
    componentWillUnmount: function(){
       console.log('componentWillUnmount');
    },
    handleInitiateBattle: function(){
      this.context.router.push({
        pathname: '/results',
        state: {
          playerInfo: this.state.playersInfo
        }
      })
    },
    render: function(){
      return (
        <ConfirmBattle 
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}/>
      )
    }
});

module.exports = ConfirmBattleContainer;