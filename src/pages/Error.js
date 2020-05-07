import React, { Component } from 'react';
import { ErrorLayout } from '../components/layouts/index'
import { ErrorNotFound } from '../components/index';
export default class NotFound extends Component {

  render() {
    return (
      <ErrorLayout>
        <ErrorNotFound />
      </ErrorLayout>
    );
  }
}