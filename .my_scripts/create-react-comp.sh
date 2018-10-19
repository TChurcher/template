#!/bin/bash

name="$(echo "$1" | tr '[:upper:]' '[:lower:]')"
dir="src/components/${name}"

if [ -d "${dir}" ]; then
  echo "this COMPONENT seems to exist allready"
  echo "src/views/${name}"
  exit
fi

echo "creating COMPONENT $1 in ${dir}"

mkdir ${dir}
touch ${dir}/${name}.jsx
touch ${dir}/${name}.css

echo \
"import React, { Component } from 'react';

import './$name.css';

class $1 extends Component {
  state = {  }
  
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
