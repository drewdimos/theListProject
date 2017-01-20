require('../scss/style.scss');


export const Navbar = ({cat1, cat2, cat3}) => (

	<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
            <a className="navbar-brand" href="#slideshow"><h1>The List</h1></a>
        </div> 
        <div className="collapse navbar-collapse" id="collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#slideshow">{cat1}</a></li>
            <li><a href="#adoption">{cat2}</a></li>
            <li><a href="#appointments">{cat3}</a></li>
          </ul>
        </div>
      </div> 
    </nav> 
)

