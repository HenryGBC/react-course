var React = require('react');

function puke(obj){
	return <pre>{JSON.stringify(obj, null, ' ')} </pre>
}


function ConfirmBattle (props){
  return props.isLoading === true 
    ? <p> Loadinnnnng.....  </p>
    : <div> Confirm Battle!: {puke(props)} </div>
}


module.exports = ConfirmBattle;