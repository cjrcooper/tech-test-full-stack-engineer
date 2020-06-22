import React from 'react';
import Button from './Button';
import TextField from './TextField';
import { ReactComponent as RocketLogo } from '../assets/rocket.svg';

class ControlConsole extends React.Component {

    render() {
      return <div id="control-console">
                {this.props.children}
            </div>
        }
  }

export default ControlConsole;