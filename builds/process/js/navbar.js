require('../scss/style.scss');
import { Link } from 'react-router';


export const Navbar = ({cat1, cat2, cat3}) => (

	<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
            <a className="navbar-brand" href="#"><h1>The List</h1></a>
        </div> 
        <div className="collapse navbar-collapse" id="collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#">{cat1}</a></li>
            <li><a href="#add-problem">{cat2}</a></li>
            <li><a href="#">{cat3}</a></li>
          </ul>
        </div>
      </div> 
    </nav> 
)

