import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Resolution extends Component {
	toggleChecked(){
		Meteor.call('toggleResolution',this.props.resolution);
	}
	deleteResolution(){
		Meteor.call('deleteResolution',this.props.resolution);
	}
	render(){
		const resolutionClass = this.props.resolution.complete ? "checked" : "";
		const status = this.props.resolution.complete ? <span className="completed">Completed</span> : "";
		return (
			<li className={resolutionClass}>
				<input type="checkbox"
					readOnly={true}
					checked={this.props.resolution.complete}
					onClick={this.toggleChecked.bind(this)}
				/>
				{this.props.resolution.text}
				{status}
				<button className="btn-cancel"
					onClick={this.deleteResolution.bind(this)}>
					&times;
				</button>
			</li>
		)
	}
}
