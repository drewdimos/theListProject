import { PropTypes } from 'react';
import { Component } from 'react';


	export class AddProblemForm extends Component {

		constructor(props) {
			super(props)
			this.submit = this.submit.bind(this)
		}

		submit(e) {
			e.preventDefault()
			console.log('name', this.refs.name.value)
			console.log('image', this.refs.image.value)
			console.log('info', this.refs.info.value)
			console.log('icons', this.refs.icons.checked)
			console.log('mentalHealth', this.refs.mentalHealth.checked)
		}

		render() {

			return (
				<form onSubmit={this.submit} className="add-problem-form">

					<label htmlfor="name">Project Name</label>
					<input id="name" type="text" required ref="name"/>

					<label htmlfor="image">Image</label>
					<input id="image" type="text" required />

					<label htmlfor="info">Description of Project</label>
					<input id="info" type="text" required ref="image"/>
				
				<div>
					<label htmlfor="icons">UP?</label>
					<input id="icons" type="checkbox" required refs="icons"/>
				</div>

				<div>
					<label htmlfor="mentalHealth">Mental Health Related?</label>
					<input id="mentalHealth" type="checkbox" required refs="mentalHealth"/>
				</div>
				<button>Add Problem</button>
				</form>
				)
		}
		


}
	


AddProblemForm.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
	icons: PropTypes.string.isRequired,
	mobility: PropTypes.bool.isRequired,
	mentalHealth: PropTypes.bool.isRequired,
	education: PropTypes.bool.isRequired
}