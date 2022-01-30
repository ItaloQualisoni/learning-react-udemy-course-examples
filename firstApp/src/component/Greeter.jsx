import GreeterMessage from 'GreeterMessage'
import React from 'react';
import GreeterForm from './GreeterForm';

class Greeter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: this.props.name,
            message:this.props.message
        };

        this.handleNewState = this.handleNewState.bind(this);
    }
    
    handleNewState(updatePayload){
        this.setState(updatePayload)
    }

    render() {
      return (
            <div>
                <GreeterMessage name={this.state.name} message={this.state.message}/>
                <GreeterForm onChange={this.handleNewState}/>
            </div>
        )
    }
}


export default Greeter;