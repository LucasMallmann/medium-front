import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import Greeting from './components/Greeting/Greeting';
import Card from './components/Card/Card';

import { Container, Grid, Loading } from './FeedStyle';

import api from '../../services/api';

class Feed extends Component {
  state = {
    posts: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data } = await api.get('/posts');
      this.setState({
        posts: data.docs,
        loading: false,
      }); 
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <Container>
        <Greeting />
        {loading ? (
          <Loading>
            <FontAwesomeIcon icon={faCircleNotch} spin />
          </Loading>
        ) : (
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
        )}
      </Container>
    );
  }
}

export default Feed;
