import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

export default class About  extends Component {
  setVar(){
    Session.set('Meteor.loginButtons.dropdownVisible', !Session.get('Meteor.loginButtons.dropdownVisible'));
  }
  render(){
    return(
      <ReactCssTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}
        >
        <h1>About us</h1>
        <p>Cliche tofu hella retro yr try-hard. Roof party normcore fingerstache aesthetic twee. Four dollar toast meh thundercats vegan. Photo booth messenger bag chicharrones knausgaard shoreditch. Fanny pack hella bushwick paleo, next level celiac 90's fashion axe swag. You probably haven't heard of them farm-to-table waistcoat neutra, hoodie seitan knausgaard chia typewriter synth fixie. Cronut bitters chicharrones irony.</p>
        <button onClick={this.setVar}>SIGN UP</button>
      </ReactCssTransitionGroup>
    )
  }
}
