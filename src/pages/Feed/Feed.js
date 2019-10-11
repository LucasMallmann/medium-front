import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import Greeting from './components/Greeting/Greeting';
import Card from './components/Card/Card';

import { Container, Grid, Loading } from './FeedStyle';

import api from '../../services/api';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);

    const { data } = await api.get('posts');
    
    if (data) {
      setPosts(data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Greeting />
      {isLoading ? (
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

export default Feed;
