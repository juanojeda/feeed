import React, { Component } from 'react';
import Layout from '../components/layout';

class Index extends Component {
  render(){
    return (
      <Layout title="home">
        <h1 className="home-header">Home</h1>
      </Layout>
    );
  }
}

export default Index;