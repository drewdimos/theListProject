import UpVote from 'react-icons/lib/fa/arrow-circle-o-up';
import DownVote from 'react-icons/lib/fa/arrow-circle-o-down';

export const Problem = ({name, image, info, icons}) => (
	<div className="wrapper">
	  <div  className="col-sm-4 problem-node">
		<div className="proj-head">{name}</div>
		<div className="photo">{image}</div>
		<div className="info-text">{info}</div>
		<div className="icons">{(icons) ? <UpVote/> : <DownVote/>}</div>
	  </div>
	</div>
)