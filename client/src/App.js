import React from "react";
import styled from "styled-components";
import { ChatContainer } from "./container/ChatContainer/ChatContainer";

const AppContainer = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <ChatContainer />
    </AppContainer>
  );
};

export default App;
