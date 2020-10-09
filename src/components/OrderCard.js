import React, { Component } from 'react';
import './css/OrderCard.css';

class OrderCard extends Component {

	render() {
		return (
			<div className="orderCard" style={{border: `2px solid ${this.props.color}`}}>
				<div className="ordercard__header" style={{backgroundColor: this.props.color}}>
					<p className="orderCard__headertext">{this.props.name}</p>
					<p className="orderCard__headertext">{this.props.type}</p>
					<div className="orderCard__statusContainer">
						<p className="orderCard__status" style={{color: this.props.color}}>
							{this.props.status}
						</p>
					</div>
				</div>
				<div className="ordercard__details">
					<div className="ordercard__descrpContainer">
						<p className="ordercard__label">Description:</p>
						<p>{this.props.description ? this.props.description : 'None'}</p>
					</div>
					<div className="ordercard__dateContainer">
						<div className="ordercard__startDateContainer">
							<p className="ordercard__label">Start date:</p>
							<p>{this.props.startDate ? this.props.startDate.toString().slice(0, -3) : 'None'}</p>
						</div>
						<div className="ordercard__startDateContainer">
							<p className="ordercard__label">End date:</p>
							<p>{this.props.endDate ? this.props.endDate.toString().slice(0, -3) : 'None'}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default OrderCard;