import React from 'react';
import '../styles/components/App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="header">React Boilerplate</h1>
      </div>
    );
  }
};