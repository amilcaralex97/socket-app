import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  margin: 2% 20%;
  padding: 10px 10px;
`;

const ChatWrapper = styled.div`
  border-radius: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 50px 15px 50px;
  padding: 25px;
`;

const ChatWrapperType = styled.p`
  color: black;
`;

const ChatWrapperSequence = styled.p`
  color: black;
`;

const ChatWrapperContent = styled.p`
  color: black;
`;

const MessageWrapper = styled.div`
  display: flex;
  border-radius: 25px;
  background-color: white;
  margin: 0 50px;
  padding: 25px;
`;

const MessageWrapper__Input = styled.input`
  color: black;
`;

const MessageWrapper__Button = styled.button`
  background-color: black;
  color: white;
`;

export const ChatContainer = () => {
  return (
    <Wrapper>
      <ChatWrapper>
        <ChatWrapperType>ERROR</ChatWrapperType>
        <ChatWrapperSequence>1</ChatWrapperSequence>
        <ChatWrapperContent>Hola</ChatWrapperContent>
      </ChatWrapper>
      <MessageWrapper>
        <MessageWrapper__Input value="Mensaje"></MessageWrapper__Input>
        <MessageWrapper__Button>Click</MessageWrapper__Button>
      </MessageWrapper>
    </Wrapper>
  );
};
