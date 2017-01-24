import { PropTypes } from 'react';


	export const AddProblemForm = ({name, image, info, icons, mentalHealth, onNewProblem }) => {

		let _name, _image, _info, _icons, _mentalHealth

		const submit = (e) => {
			e.preventDefault()
			onNewProblem ({
				name: _name.value,
				image: _image.value,
				info: _info.value,
				icons: _icons.checked,
				mentalHealth: _mentalHealth.checked
			})
 			_name.value = ''
	 		_image.value = ''
			_info.value = ''
	 		_icons.checked = false
			_mentalHealth.checked = false
		}

		return(
			<form onSubmit={submit} className="add-problem-form">

					<label htmlFor="name">Project Name</label>
					<input id="name" type="text" required ref={input => _name = input}/>

					<label htmlFor="image">Image</label>
					<input id="image" type="text" required ref={input => _image = input}/>

					<label htmlFor="info">Description of Project</label>
					<input id="info" type="text" required ref={input => _info = input}/>
				
				<div>
					<label htmlFor="icons">UP?</label>
					<input id="icons" type="checkbox" required ref={input => _icons = input}/>
				</div>

				<div>
					<label htmlFor="mentalHealth">Mental Health Related?</label>
					<input id="mentalHealth" type="checkbox" required ref={input => _mentalHealth = input}/>
				</div>

				<button>Add Problem</button>

			</form>
		)

	}

AddProblemForm.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
	icons: PropTypes.string.isRequired,
	mentalHealth: PropTypes.bool.isRequired,
}