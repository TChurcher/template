import React, { Component } from 'react';

import './datasecurity.css';

class DataSecurity extends Component {
  state = {
    meta: this.props.meta,
    title: this.props.title
  };

  render() { 
    return (
      <React.Fragment>
        DataSecurity 
      </React.Fragment>
    );
  }
}
 
export default DataSecurity;
