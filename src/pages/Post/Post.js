import React, { Component } from 'react';

import api from '../../services/api';

import { Container, PostHeader } from './PostStyle';

class Post extends Component {
  state = {
    post: {},
  };

  async componentDidMount() {
    try {
      const { id } = this.props.match.params;
      const { data: post } = await api.get(`/posts/${id}`);
      this.setState({ post });
    } catch (error) {}
  }

  render() {
    const { post } = this.state;
    return (
      <Container>
        <PostHeader>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </PostHeader>
      </Container>
    );
  }
}

export default Post;
