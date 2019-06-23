import React, { Component, Fragment } from 'react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

import Clap from 'react-clap-button';

import api, { baseURL } from '../../services/api';
import Codeblock from '../../components/Codeblock/Codeblock';

import { Container, PostHeader, UserInfo, MarkdownContainer, ClapContainer } from './PostStyle';

class Post extends Component {
  state = {
    post: {},
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { id } = this.props.match.params;
      const { data: post } = await api.get(`/posts/${id}`);
      this.setState({ post });
    } catch (error) {
      console.log(error);
    }
  }

  onClap = async () => {
    try {
      const { id } = this.props.match.params;
      const { data: post } = await api.post(`/posts/${id}/like`);
      this.setState({
        post: {
          ...this.state.post,
          claps: this.state.post.claps + 1,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { post } = this.state;
    return (
      <Container>
        <ClapContainer onClick={this.onClap}>{post && <Clap count={post.claps} />}</ClapContainer>
        {post && (
          <PostHeader>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            {post.author && (
              <UserInfo>
                <img src={`${baseURL}/files/${post.author.avatar}`} alt="" />
                <div>
                  <span>
                    {post.author && post.author.name}
                    <small>Follow</small>
                  </span>
                  <small>{format(post.createdAt, 'MMM D')}</small>
                </div>
              </UserInfo>
            )}
            <img src={`${baseURL}/files/${post.featured_img}`} alt="" />
          </PostHeader>
        )}
        <MarkdownContainer>
          <ReactMarkdown source={post.text} renderers={{ code: Codeblock }} />
        </MarkdownContainer>
      </Container>
    );
  }
}

export default Post;
