import UpVote from 'react-icons/lib/fa/arrow-circle-o-up';
import DownVote from 'react-icons/lib/fa/arrow-circle-o-down';
import { Problem } from './Problem';
import { PropTypes } from 'react';
import { Link } from 'react-router';

export const ProblemBox = ({assets, filter}) => {

	const filteredassets = (!filter||
		  !filter.match(/mobility|mentalHealth/))?
		  assets:
		  assets.filter(assets => assets[filter])

	return(
		<div className="row">
		
			{filteredassets.map((asset, i) =>
					<Problem key={i}
							 {...asset} />
					)}

		</div>
)

ProblemBox.propTypes = {
	assets: function(props) {
		if(!Array.isArray(props.assets)){
			return new Error(
				"ProblemBox should be an array"
				)
		} else if (!props.assets.length) {
			return new Error(
				"ProblemBox must have at least one problem"
				)
		} else {
			return null
		}
	}
}
}