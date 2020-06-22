import React from 'react';
import DisplayConsole from './DisplayConsole';
import ControlConsole from './ControlConsole';
import Button from './Button';
import TextField from './TextField';
import { ReactComponent as Rocket } from '../assets/rocket.svg';


class Dashboard extends React.Component {
    constructor(props){
      super(props);
      this.getCapsuleData = this.getCapsuleData.bind(this);
      this.getLandingpadData = this.getLandingpadData.bind(this);
      this.onChange = this.onChange.bind(this)
      this.state = {
        displayData : [],
        textField: ""
      }  
    }


   getCapsuleData(label) {
        var url = 'http://localhost:4000/' + label
         fetch(url)
            .then(res => res.text())
            .then((res) => 
                this.setState({
                    displayData: res
                })
            );
    }

    getLandingpadData(label) {
        if (this.state.textField.length === 0) {
             this.setState({displayData: {
                "error": "Unable to finding landing pad because ID was not supplied"
            }})
        } else {
            var url = 'http://localhost:4000/' + label + '?landingpad=' + this.state.textField
         fetch(url)
            .then(res => res.text())
            .then((res) => 
                this.setState({
                    displayData: res
                })
            );
        }
    }

    onChange(value) {
        this.setState({textField: value});
    }


    render() {
      return <div id="dashboard">
                <DisplayConsole displayData={this.state.displayData}/>
                <ControlConsole>
                    <div className="div-1">
                        <Button buttonName='capsules' label="Capules" data={this.getCapsuleData}/>
                    </div>
                    <div className="div-2">
                        <Rocket id='rocket-logo'/>
                    </div>
                    <div className="div-3">
                        <TextField textFieldName='LandpadTextField' onChange={this.onChange}/>
                    </div>
                    <div className="div-4">
                        <Button buttonName='landingpad' label="Landing Pad" data={this.getLandingpadData}/>
                    </div>
                </ControlConsole>
             </div>
    }
  }

export default Dashboard;