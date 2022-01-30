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
                <GreetingsForm onChange={this.handleNewState}/>
            </div>
        )
    }
}

/*
    Greeter Class
    Default Props:
        name: React
        message: isn't react great?
*/
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
    name:'Italo',
    message:'isn\'t react great?'
}

class GreetingsForm extends React.Component {

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
            console.log('nothing to change ;(')
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



ReactDOM.render(
    <Greeter />,
    document.getElementById('app')
);