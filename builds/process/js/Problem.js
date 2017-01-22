import UpVote from 'react-icons/lib/fa/arrow-circle-o-up';
import DownVote from 'react-icons/lib/fa/arrow-circle-o-down';
import { PropTypes } from 'react';

export const Problem = ({name, image, info, icons}) => (
	<div className="wrapper">
	  <div  className="col-md-3 col-md-offset-1 problem-node">
	    <div className="row">
		  <div className="col-xs-12 proj-head">{name}</div>
		</div>
		<div className="row">
		  <div className="col-xs-12 photo">{image}</div>
		</div>
		<div className="row">
		  <div className="col-xs-6 info-text">{info}</div>
		  <div className="col-xs-6 icons">{(icons) ? <UpVote/> : <DownVote/>}</div>
		</div>
	  </div>
	</div>
)

Problem.defaultProps = {
	name: "Your Project",
	image: "",
	info: "Describe your Project Here!",
	icons: true
}

Problem.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
	icons: PropTypes.bool.isRequired
}