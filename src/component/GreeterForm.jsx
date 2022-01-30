import React from "react";

class GreeterForm extends React.Component {

    constructor(props) {
        super(props);
        // Cria uma ref para armazenar o elemento textInput do DOM
        this.nameInput = React.createRef();
        this.messageInput = React.createRef();


        this.state = {
            mandatoriesFieldsMissing: true
        };

        this.onNewData = this.onNewData.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e){
        e.preventDefault()
        var noneField = this.nameInput.current.value === "" && this.messageInput.current.value === "";

        if(noneField){
            this.setState({
                mandatoriesFieldsMissing: true
            });
        }
        else{
            this.setState({
                mandatoriesFieldsMissing: false
            });
        }
        

    }

    onNewData(e){
        e.preventDefault()
        
        var obj = {}

        var newName = this.nameInput.current.value;
        var newMessage = this.messageInput.current.value;
        
        if(typeof newName === 'string' && newName.length>0){
            obj.name = newName;
        }

        if(typeof newMessage === 'string' && newMessage.length>0){
            obj.message = newMessage;
        }
        
        if(obj.name || obj.message){
            this.props.onChange(obj);

            //clear fields
            this.nameInput.current.value = ''
            this.messageInput.current.value = ''
            this.setState({
                mandatoriesFieldsMissing: true
            });
        }
        else{
            console.log('nothing to change ...')
        }
        
    }
 
    render() {
        return (
            <form onSubmit={this.onNewData}>
                <div>
                    <input type="text" ref={this.nameInput} placeholder="Enter name" onChange={this.onInputChange}/>
                </div>
                <div>
                    <textarea rows='5' ref={this.messageInput} placeholder="Enter message" onChange={this.onInputChange}/>
                </div>
                <div>
                    <button disabled={this.state.mandatoriesFieldsMissing}>Update! {this.nameInput.current !== ''}</button>
                </div>
          </form>
        );
    }
}

export default GreeterForm;