import React from 'react';


class AutoComplete extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {inputVal: ''};
  }

  handleInput(e) {
    
    this.setState({inputVal: e.target.value});
  }

  render() {
    return (
      <div>

      <input type='text' onChange={(e) => this.handleInput(e)} value={this.state.inputVal}/>
      <ul>


      {this.props.names.map((name, idx)=> (
        <li key={idx}>{name}</li>
        )
        )}
      </ul>
        </div>
    );
  }



}

export default AutoComplete;