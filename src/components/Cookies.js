import * as React from "react";
import styled from "styled-components";

const CookiesWrapper = styled.div`
  width: 220px;
  background: var(--lightBlue);
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: 0.2s;
  z-index: 9987;
  border-radius: 4px;
  border: 1px solid var(--brightBlue);
  padding: 25px;
  transition: 0.3s;
  &.hidden {
    display: none;
  }
  a {
    text-decoration: underline;
  }
  p {
    margin-top: 0;
  }
  button {
    padding: 15px 25px;
    background: var(--white);
    border-radius: 4px;
    border: 0;
    transition: 0.3s;
    cursor: pointer;
    color: #108db8;
    font-size: 14px;
    font-weight: bold;
    float: right;
  }
  button:hover {
    background: var(--brightBlue);
    color: var(--white);
  }
`;
class Cookies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies_seen:
        typeof window !== "undefined"
          ? window.localStorage.getItem("cookies_seen")
          : true
    };
  }

  onClickHandle = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cookies_seen", true);
    }
    this.setState({ cookies_seen: true });
  };
  render() {
    const cookie_class =
      this.state.cookies_seen !== null
        ? "cookie_wrapper hidden"
        : "cookie_wrapper";
    return (
      <CookiesWrapper className={cookie_class}>
        <p>
          Tieto stránky používajú súbory{" "}
          <a href="/Cookies.pdf" target="_blank">
            cookies
          </a>
          .
        </p>
        <button onClick={this.onClickHandle}>suhlasim</button>
      </CookiesWrapper>
    );
  }
}

export default Cookies;
