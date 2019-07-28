# react-progress-label

[![npm](https://img.shields.io/npm/v/react-progress-label.svg)](https://www.npmjs.com/package/react-progress-label)
[![npm](https://img.shields.io/npm/dm/react-progress-label.svg)](https://www.npmjs.com/package/react-progress-label)
[![Build Status](https://travis-ci.org/swiftcarrot/react-progress-label.svg?branch=master)](https://travis-ci.org/swiftcarrot/react-progress-label)
[![codecov](https://codecov.io/gh/swiftcarrot/react-progress-label/branch/master/graph/badge.svg)](https://codecov.io/gh/swiftcarrot/react-progress-label)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

progress label component copied from [kirualex/KAProgressLabel](https://github.com/kirualex/KAProgressLabel) with svg

![screenshot](https://raw.githubusercontent.com/swiftcarrot/react-progress-label/master/screenshot.png)

### Installation

```sh
yarn add react-progress-label
npm install react-progress-label --save
```

### Demo

[https://swiftcarrot.dev/react-progress-label](https://swiftcarrot.dev/react-progress-label)

### Usage

```javascript
<ProgressLabel
  progress={50}
  startDegree={60}
  progressWidth={8}
  trackWidth={20}
  trackBorderWidth={0}
  trackBorderColor="#0000ff"
  cornersWidth={4}
  size={400}
  fillColor="black"
  trackColor="red"
  progressColor="green"
/>
```

### License

ISC
