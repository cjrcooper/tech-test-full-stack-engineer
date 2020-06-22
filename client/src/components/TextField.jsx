import React from 'react';

class TextField extends React.Component {
  constructor (props) {
    super(props);
  }

  onFieldChange(event) {
    const fieldValue = event.target.value;
    this.props.onChange(fieldValue);
  }

    render() {
      return <div id="text-field">
                  <input 
                    type="text"
                    maxLength = "15" 
                    placeholder="Landing ID e.g. LZ-1" 
                    onChange={this.onFieldChange.bind(this)} 
                  /> 
            </div>
    }
  }

export default TextField;