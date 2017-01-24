import { Component } from 'react';
import { ProblemBox } from './ProblemBox';
import { Problem } from './Problem';
import { AddProblemForm } from './AddProblemForm';
import { Navbar } from './navbar';
import { Menu } from './Menu';


export class List extends Component {
	constructor(props) {
		super(props)
		this.state = {

			allProblems: [
			{
				name: "Project 1",
				image:" ",
				info: "this is the info about the project",
				icons: true,
				mentalHealth: true,
				mobility: false,
				education: false

			},
			{
				name: "Project 2",
				image:" ",
				info: "This is another project",
				icons: false,
				mobility: true,
				mentalHealth: false,
				education: false

			},
			{
				name: "Project 3",
				image:" ",
				info: "The coolest project to ever exist",
				icons: true,
				mentalHealth: true,
				mobility: false,
				education: false

			}
		]
		}
		
		this.addProblem = this.addProblem.bind(this)
	}

	addProblem (newProblem) {
		this.setState({
			allProblems: [
				...this.state.allProblems,
				newProblem
			]
		})
	}

	render() {
		return(
			<div className="app">

			<Navbar cat1="Problems" 
				cat2="Create A Challenge" 
				cat3="Big Money"/>

			<Menu />

			{(this.props.location.pathname === "/") ?
				<ProblemBox assets={this.state.allProblems}/> :
			(this.props.location.pathname === "/add-problem") ?
			<AddProblemForm onNewProblem = {this.addProblem}/> : <ProblemBox assets={this.state.allProblems}
											 filter={this.props.params.filter}/>

			}
			</div>
		)
	}
}











