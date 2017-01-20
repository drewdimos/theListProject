import UpVote from 'react-icons/lib/fa/arrow-circle-o-up';
import DownVote from 'react-icons/lib/fa/arrow-circle-o-down';
import { Problem } from './Problem';

export const ProblemBox = ({assets}) => (
		<div className="row">
			{assets.map((asset, i) =>
					<Problem key={i}
							 {...asset} />
					)}

		</div>
)