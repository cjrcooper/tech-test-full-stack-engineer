import React from 'react';

class Button extends React.Component {
    constructor(props){
        super(props);
      }

    render() {
      return <div id={this.props.buttonName}>
                <button onClick={() => this.props.data(this.props.buttonName)} className={this.props.label}>
                    {this.props.label}
                </button>
            </div>
    }
  }

export default Button;