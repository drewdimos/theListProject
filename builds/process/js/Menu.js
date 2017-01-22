import { Link } from 'react-router'



export const Menu = () => (

	<nav className="navbar">
		<Link to="/" activeClassName="active">
			<p>All Problems</p>
		</Link>
		<Link to="/mentalHealth" activeClassName="active">
			<p>Mental Health</p>
		</Link>
		<Link to="/mobility" activeClassName="active">
			<p>Mobility</p>
		</Link>
	</nav>
)