/* eslint-disable camelcase */
import React from 'react';

import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { withRouter } from 'react-router-dom';

import { baseURL } from '../../../../services/api';
import { Container, PostLink, UserInfo } from './CardStyle';

const Card = (props) => {
  const {
    title, description, featured_img, author, createdAt, id,
  } = props;
  return (
    <Container>
      <PostLink to={`/posts/${id}`}>
        <img src={`${baseURL}/files/${featured_img}`} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </PostLink>
      <UserInfo>
        <img src={author.avatar_url} alt="" />
        <div>
          <span>{author.name}</span>
          <small>{format(createdAt, 'MMM D')}</small>
        </div>
      </UserInfo>
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featured_img: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default withRouter(Card);
