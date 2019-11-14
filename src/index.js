import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class Money extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            total: 100
        };
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h3>Account number {this.state.id} has a total of {this.state.total} dollars</h3>
            </div>
        );
    }
}



// let newAccount = new Money();

ReactDOM.render(
    // {/* <App />, */}
    <Money />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
