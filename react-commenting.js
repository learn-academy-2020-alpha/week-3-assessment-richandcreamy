// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. Setting the class of App that will inherit the properties of Component. Initialize these component properties on load and allow for props of the parent class.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. Function to set userInput state
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. Destructure this.state.userInput to this.robot and allow userInput to be renderable (visible) to the DOM
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. Create div to house and make visible components for user to see and interact with */} 
          onChange={ this.robot }
          {/* 5. Allow for user input to pass through to the state of userInput live with each interaction   */}
          value={ userInput }
        />

        <div>
          {/* 6. Create div for child components */}
          <GoodRobot
            {/* 7. Call Good Robot component to the DOM*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. The class of GoodRobot inherits Component properties
      <div>
        <h3>Good Robot</h3>
        {/* 9. Div that will display to user when component is called*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Inherit the properties of userInput from parent class.
export default GoodRobot
