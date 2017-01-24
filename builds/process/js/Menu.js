import { Link } from 'react-router';
import{ DropdownButton } from 'react-bootstrap';



export const Menu = () => (


	<div className="menu-space">
    <DropdownButton title="Filter By" id="bg-nested-dropdown">
        <Link to="/" activeClassName="active">
			<p>All Problems</p>
		</Link>
		<Link to="/mentalHealth" activeClassName="active">
			<p>Mental Health</p>
		</Link>
		<Link to="/mobility" activeClassName="active">
			<p>Mobility</p>
		</Link>
    </DropdownButton>
    </div>


	

)