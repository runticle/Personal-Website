import React, { Component } from 'react';

import NavBar from '../NavBar'
import ActiveBlog from './ActiveBlog'
import BlogMenu from './BlogMenu'

class Blog extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="blog-page">
          <ActiveBlog/>
          <BlogMenu />
        </div>
      </div>
    );
  }

}

export default Blog;
