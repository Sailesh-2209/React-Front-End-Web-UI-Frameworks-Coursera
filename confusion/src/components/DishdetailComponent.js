import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

	constructor(props) {
		super(props);
	}

	renderComments(comments) {
		if (comments != null) {
			const item = comments.map((individual) => {
				return (
						<li>{individual.comment}<br/>
						--{individual.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(individual.date)))}<br/><br/></li>
				);
			});

			return (
				<div>
					<h4>Comments</h4>
					<ul className="list-unstyled">
						{item}
					</ul>
				</div>
			);
		}
		else 
			return(<div></div>);
	}


	render() {
		if (this.props.selectedDish != null) {
			var res='';
			if (this.props.selectedDish != null)
				res = this.renderComments(this.props.selectedDish.comments);
			else
				res = null;
			return (
				<div className="container">
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<Card>
							<CardImg src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
							<CardBody>
							<CardTitle>{this.props.selectedDish.name}</CardTitle>
							<CardText>{this.props.selectedDish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-12 col-md-5 m-1">
						{res}
					</div>
				</div>
				</div>
			);	
		}
		else {return(<div></div>)}		
	}
}


export default Dishdetail;