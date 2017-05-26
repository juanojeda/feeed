import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

class App extends Component {

  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const {className, ...props} = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
