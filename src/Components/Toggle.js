import React, {Component} from 'react'

// class based RenderProp
class Toggle extends Component {
  //state outside of a constructor, totally fine
  //React will call the constructor method for us
  state = {
    visible: false
  }

  // custom method that is using the public class field syntax
  // this will "auto bind" our method
  handleToggle = () => {
    // using setState with a callback
    // this is a good practice because it gives us a reference to state to use without modifying state
    this.setState((prevState) => ({visible: !prevState.visible}))
  }

  render(){
    return (
      <div>
        {/* dynamically setting the text inside the button based off of state */}
        <button onClick={this.handleToggle}>{this.state.visible ? `hide` : `show`}</button>
        {/* here we use the && operator. This means both sides need to evaluate to true */}
        {this.state.visible && this.props.render()}
      </div>
    )
  }
}

export default Toggle