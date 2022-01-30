import React from "react";

class GreeterMessage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
      console.log('reloading')
      return (
        <React.Fragment>
            <h1>Hello {this.props.name} !</h1>
            <pre>{this.props.message}</pre>
        </React.Fragment>
      );
    }
}

GreeterMessage.defaultProps=  {
    name:'Italo qualisoni',
    message:'isn\'t react great?'
}

export default GreeterMessage;