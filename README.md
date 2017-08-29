# react-progress-label 
[![Build Status](https://travis-ci.org/wangzuo/react-progress-label.svg?branch=master)](https://travis-ci.org/wangzuo/react-progress-label)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

progress label component copied from [kirualex/KAProgressLabel](https://github.com/kirualex/KAProgressLabel) with svg

![screenshot](https://raw.githubusercontent.com/wangzuo/react-progress-label/master/screenshot.png)

### Installation
``` sh
npm install react-progress-label --save
```

### Demo
[http://wangzuo.github.io/react-progress-label](http://wangzuo.github.io/react-progress-label)

### Usage
``` javascript
import React from 'react';
import ProgressLabel from 'react-progress-label';

const App = () => {
  const progress = 50;
  const textStyle = {
    'fill': '#ffffff',
    'textAnchor': 'middle'
  };

  return (
    <ProgressLabel
      progress={progress}
      startDegree={60}
      progressWidth={8}
      trackWidth={20}
      cornersWidth={4}
      size={400}
      fillColor="black"
      trackColor="red"
      progressColor="green">

      <text x="200" y="200" style={textStyle}>{`${progress}%`}</text>

    </ProgressLabel>
  );
}
```

### License
ISC
