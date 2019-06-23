/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import api from '../../services/api';

import { Container, PostForm, PostTitle, Body, Description, Cover, Button } from './PublishStyle';

class Publish extends Component {
  state = {
    file: null,
  };

  onPublish = async data => {
    const DEFAULT_USER = '5d0da8b2bb3cde4972726965';
    try {
      const { title, text, description } = data;
      const { file } = this.state;

      const formData = new FormData();
      formData.append('title', title);
      formData.append('text', text);
      formData.append('description', description);
      formData.append('featured_img', file);

      const post = await api.post(`/users/${DEFAULT_USER}/posts`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  onSelectFile = e => {
    this.setState({ file: e.target.files[0] });
  };

  render() {
    return (
      <Container>
        <h1>Preview your Story</h1>
        <p>
          Write your story in <strong>Markdown Format</strong>
        </p>
        <PostForm onSubmit={this.onPublish}>
          <PostTitle name="title" placeholder="Title" />
          <Cover type="file" placeholder="Select an image" onChange={this.onSelectFile} />
          <Description name="description" placeholder="Write your description" />
          <Body multiline name="text" placeholder="Tell your story here..." />
          <Button type="submit">Post</Button>
        </PostForm>
      </Container>
    );
  }
}

export default Publish;
