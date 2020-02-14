import React from "react";
import styled from "styled-components";

const SendScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  max-width: 550px;
  margin: 0 auto;
  flex-direction: column;
  .highlight {
    padding-bottom: 5px;
    font-size: 18px;
  }
  a.mail_button {
    margin-top: 30px;
    font-size: 14px;
    color: var(--white);
    background: var(--blue);
    padding: 15px 25px;
    transition: 0.3s;
    border-radius: 4px;
  }
  a.mail_button:hover {
    background: #11182d;
  }
`;

export default class SendSuccesfullScreen extends React.Component {
  render() {
    return (
      <SendScreen>
        <span class="highlight">Gratulujem Vám</span>
        <br />
        Práve ste urobili prvý krok k tomu, aby ste svet biznisu a spoločenských
        udalostí považovali za svoje prirodzené prostredie.
        <br />
        <br />
        Ozvem sa Vám do 24hodín v pracovných dňoch.
        <br />
        <a class="mail_button" href="https://www.mariagalikova.sk/">
          Späť na hlavnú stránku
        </a>
      </SendScreen>
    );
  }
}
