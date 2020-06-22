import React from 'react';
import JSONPretty from 'react-json-pretty';

class DisplayConsole extends React.Component {
    constructor(props){
      super(props);  
    }

  render() {
    let content;
    if (this.props.displayData.length === 0){
      content = <div id="display-message">“Sometimes science is more art than science.” <br/> - Rick Sanchez </div>;
    } else {
      content = <JSONPretty id="json-pretty" data={this.props.displayData}></JSONPretty>
    }
    return <div id="display-console">
            {content}
          </div>
  }
}

export default DisplayConsole;