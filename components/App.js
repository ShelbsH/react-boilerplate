import React from 'react';
import 'styles/components/app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-div">
        <h1 className="header">React Boilerplate</h1>
        <p className="header-p">Quickly start developing React projects using this boilerplate</p>
      </div>
    );
  }
};
