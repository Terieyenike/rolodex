import React from 'react';

class CounterButton extends React.Component {
  state = {
    count: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        id='counter'
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        color={this.props.color}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
