#!/bin/bash

name="$(echo "$1" | tr '[:upper:]' '[:lower:]')"
dir="src/views/${name}"

if [ -d "${dir}" ]; then
  echo "this VIEW seems to exist allready"
  echo "src/views/${name}"
  exit
fi

echo "creating VIEW $1 in ${dir}"

mkdir ${dir}
touch ${dir}/${name}.jsx
touch ${dir}/${name}.css

echo \
"import React, { Component } from 'react';

import './$name.css';

class $1 extends Component {
  state = {
    meta: this.props.meta,
    title: this.props.title
  };

  render() { 
    return (
      <React.Fragment>
        $1 
      </React.Fragment>
    );
  }
}
 
export default $1;" \
> ${dir}/${name}.jsx

echo "you may want to include the following lines of code:"
echo "import $1 from './views/${name}/${name}';"
