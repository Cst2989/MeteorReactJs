import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

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
			<div>
				<h1>My Resolutions</h1>
				<ResolutionsForm  />
				<ul className="resolutions">
					{res.map(resolution =>
	          			<Resolution key={resolution._id} resolution={resolution} />
	    			)}
				</ul>
			</div>
		)
	}
}
