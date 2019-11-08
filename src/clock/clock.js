import React from 'react';

class Clock extends React.Component {

    state = {
        time: new Date().toLocaleString()
    }

    componentDidMount() {
        setInterval(() => {
            this.tick();
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <p className="App-clock">
                The time is {this.state.time}
            </p>
        )
    }
}

export default Clock;