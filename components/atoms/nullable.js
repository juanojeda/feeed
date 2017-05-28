import React, { Component } from 'react';

const nullable = (wrappedComponent, test) => {
  return test ? wrappedComponent : null;
}

export default nullable;