import React , {Component} from 'react';
import ReactDOM from 'react-dom';

export default class AccountUI  extends Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    componentDidMount(){
    	this.view = Blaze.render(Template.loginButtons,
    		ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount(){
    	Blaze.remove(this.view);
    }
    render() {
        return <span ref="container" />;
    }
}

