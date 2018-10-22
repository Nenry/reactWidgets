import React from 'react';


class AutoComplete extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {inputVal: ''};
  }

  handleInput(e) {
    
    this.setState({inputVal: e.target.value});
  }

  matches() {
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    } else {
      const selectedNames = 
      this.props.names.filter((name) => {
        return name.toLowerCase().includes(this.state.inputVal.toLowerCase());
      });
      return selectedNames;
    }

  }

  selected(input) {
    this.setState({inputVal: input});
  }

  render() {
    return (
      <div className='auto-wrapper'>
        <h1>Autocomplete</h1> 
      <input type='text' onChange={(e) => this.handleInput(e)} value={this.state.inputVal}/>
      <ul>


      {/* {this.props.names.map((name, idx)=> (
        <li key={idx}>{name}</li>
        )
        )} */}
      {this.matches().map((name, idx)=> (
            <li key={idx} onClick={() => this.selected(name)}>{name} </li>
        )
        )}

  


      </ul>
        </div>
    );
  }



}

export default AutoComplete;