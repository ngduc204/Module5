import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'pink' });
        }, 1000);
    }

    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundColor: this.state.color,
                        paddingTop: 20,
                        width: 800,
                        height: 800,
                        margin: 'auto'
                    }}
                />
            </div>
        );
    }
}

export default App;