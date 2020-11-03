import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';

	function RenderComments({comments, addComment, dishId}) {
		if (comments != null) {
			const item = comments.map((individual) => {
				return (
						<li>{individual.comment}<br/>
						--{individual.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(individual.date)))}<br/><br/></li>
				);
			});

			return (
				<React.Fragment>
					<div>
						<h4>Comments</h4>
						<ul className="list-unstyled">
							{item}
						</ul>
					</div>
					<CommentForm dishId={dishId} addComment={addComment} />
				</React.Fragment>
			);
		}
		else 
			return(<div></div>);
	}

	const DishDetail = (props) => {
		if (props.isLoading) {
			return(
				<div className="container">
					<div className="row">
						<Loading />
					</div>
				</div>
			);
		}
		else if (props.errMess) {
			return(
				<div className="container">
					<div className="row">
						<h4>{props.errMess}</h4>
					</div>
				</div>
			);
		}

		else if (props.selectedDish != null) {
			return (
				<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.selectedDish.name}</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<Card>
							<CardImg src={props.selectedDish.image} alt={props.selectedDish.name} />
							<CardBody>
							<CardTitle>{props.selectedDish.name}</CardTitle>
							<CardText>{props.selectedDish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComments comments={props.comments} addComment={props.addComment} dishId={props.selectedDish.id} />
					</div>
				</div>
				</div>
			);	
		}
		else {return(<div></div>)}	
	}

export default DishDetail;