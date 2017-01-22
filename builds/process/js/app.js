import React from 'react';
import { render } from 'react-dom';
import { Navbar } from './navbar';
import { Problem } from './Problem';
import { ProblemBox } from './ProblemBox';
import { List } from './List';
import { Whoops404 } from './Whoops404';
import { AddProblemForm } from './AddProblemForm';
import { Menu } from './Menu';
import { Router, Route, hashHistory } from 'react-router';

import '../scss/style.scss';
window.React = React;
var $ = require('jquery');





render (
	<Router history={hashHistory}>
		<Route path="/" component={List}/>
			<Route path=":filter" component={List}>
		</Route>
		<Route path="add-problem" component={AddProblemForm}/>
		<Route path="*" component={Whoops404}/>
	</Router>,
	document.getElementById('react-problems')
)

// render (
// 	<Navbar cat1="Mental Health" 
// 				cat2="Mobility" 
// 				cat3="Education" />,
// 				document.getElementById('react-header')
// 	)