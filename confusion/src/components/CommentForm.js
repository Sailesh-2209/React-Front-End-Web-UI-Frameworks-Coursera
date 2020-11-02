import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Col, Row, Label, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	handleSubmit(values) {
		console.log("Current state is: " + JSON.stringify(values));
		alert("Current state is: " + JSON.stringify(values));
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	render() {
		return(
			<React.Fragment>
				<Button outline onClick={this.toggleModal}>
					<span className="fa fa-pencil fa-lg"></span> Submit Comment
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating" md={12}>Rating</Label>
								<Col md={12}>
									<Control.select model=".rating" name="rating" className="form-control">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>
							<Row>
								<Label htmlFor="yourname" md={12}>Your Name</Label>
								<Col md={12}>
									<Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15)}} />
									<Errors className="text-danger" model=".yourname" show="touched" messages={{required: 'Required ', minLength: ' Must be greater than two characters', maxLength: ' Must be 15 characters or less'}} />
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment" md={12}>Comment</Label>
								<Col md={12}>
									<Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
								</Col>
							</Row>
							<Button type="submit" value="submit" className="bg-primary">Submit</Button>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default CommentForm;