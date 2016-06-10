import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import ResolutionsForm from './ResolutionsForm';
import Resolution from './Resolution';

Resolutions = new Mongo.Collection("resolutions");


export default class ResolutionsWrapper extends TrackerReact(React.Component) {
	constructor(){
		super();
		this.state = {
			subscription:{
				resolutions: Meteor.subscribe('userResolutions')
			}
		}
	}
	componentWillUnmount() {
	  	this.state.subscription.resolutions.stop();
	}
	resolutions(){
		return Resolutions.find().fetch();
	}
	render(){
		let res = this.resolutions();
		if (res.length < 1) {
			return (<div>Loading</div>)
		}
		return (
			<ReactCssTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}
				>
				<h1>My Resolutions - {Session.get('test')}</h1>
				<ResolutionsForm  />
				<ReactCssTransitionGroup
					component="ul"
					className="resolutions"
					transitionName="resolutionLoad"
					transitionEnterTimeout={600}
					transitionLeaveTimeout={400}
					>
						{res.map(resolution =>
		          			<Resolution key={resolution._id} resolution={resolution} />
		    			)}
					</ReactCssTransitionGroup>
			</ReactCssTransitionGroup>
		)
	}
}
