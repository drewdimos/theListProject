import React from 'react';
import { render } from 'react-dom';
import { Navbar } from './navbar';
import { Problem } from './Problem';
import { ProblemBox } from './ProblemBox';
import '../scss/style.scss';
window.React = React;
var $ = require('jquery');





render (
	<div> <ProblemBox assets = {
		[
			{
				name: "Project 1",
				image:" ",
				info: "this is the info about the project",
				icons: "true"

			},
			{
				name: "Project 2",
				image:" ",
				info: "More Project information",
				icons: "false"

			},
			{
				name: "Project 3",
				image:" ",
				info: "The coolest project to ever exist",
				icons: "true"

			}
		]
	} />
	</div>,
	document.getElementById('react-problems')
)

render (
	<Navbar cat1="Mental Health" 
				cat2="Mobility" 
				cat3="Education" />,
				document.getElementById('react-header')
	)