import * as React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsWrapper = styled.div`
  position: relative;
`;

class News extends React.Component {
  constructor(data) {
    super();
    this.state = {
      location: data.location,
      posts: data.posts
    };
  }
  render() {
    const filtered_posts = this.state.posts.filter(
      post => post.data.type !== "kurz"
    );
    const sorted_posts = filtered_posts.sort((a, b) => {
      return new Date(a.data.start) > new Date(b.data.start) ? -1 : 1;
    });
    const render_posts =
      this.state.location === "home" ? sorted_posts.slice(0, 3) : sorted_posts;
    return (
      <NewsWrapper>
        {render_posts.map((post, i) => (
          <NewsItem key={i} post={post} />
        ))}
      </NewsWrapper>
    );
  }
}

export default News;
