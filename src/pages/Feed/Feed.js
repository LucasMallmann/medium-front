/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Greeting from './components/Greeting/Greeting';
import Card from './components/Card/Card';

import { Container, Grid } from './FeedStyle';

import api from '../../services/api';

class Feed extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    try {
      const { data } = await api.get('/posts');
      this.setState({
        posts: data.docs,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <Container>
        <Greeting />
        <Grid>
          {posts.map(post => (
            <Card
              key={post._id}
              id={post._id}
              featured_img={post.featured_img}
              title={post.title}
              description={post.description}
              author={post.author}
              createdAt={post.createdAt}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Feed;
