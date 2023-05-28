import styled from "styled-components";

const Loading = () => {
  return <LoadingText>Loading...</LoadingText>;
};

export default Loading;

const LoadingText = styled.h1`
  height: 100vh;
  font-size: 20px;
  color: #888888;
  background-color: black;
  margin-top: 40px;
`;
