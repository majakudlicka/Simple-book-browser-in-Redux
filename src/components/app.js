import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookList from '../containers/book_list.js';
import BookDetail from '../containers/book-detail.js';

export default class App extends Component {
  render() {
    return (
      <div>
      <BookList />
      <BookDetail />
      </div>
    );
  }
}
