import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            message: 'message'
        }
    };

    render() {
        return(
            <div>
                Hello World, This is React App {this.state.message}
            </div>
        )
    }
};

export default App;