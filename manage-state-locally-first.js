class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange=this.handleChange.bind(this)
    this.submitMessage=this.submitMessage.bind(this)

  }
  // Add handleChange() and submitMessage() methods here
handleChange(event){
  this.setState({
input: event.target.value
  })
}
submitMessage(){
this.setState({
  messages: [...this.state.messages, this.state.input], 
  input: "",
})
}
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        

<input value={this.state.input} onChange={this.handleChange} />

<button onClick={this.submitMessage}>Submit</button>

<ul>
{this.state.messages.map(message=> <li key ={message}>{message}</li>)}
</ul>

     
      </div>
    );
  
  }
};