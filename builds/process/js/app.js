var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

require('../scss/style.scss')

class Message extends React.Component {
	render() {
		return(
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
			</div>);
	}
}

ReactDOM.render(<Message title="Call Jack" message="She is the best" />,
	document.getElementById('target'));