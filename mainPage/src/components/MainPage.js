import React from "react";
import Header from "./Header";
import StoryMain from "./StoryMain";
import styled from "styled-components";
import VideoMain from "./VideoMain";
import PostList from "./PostList";
import DetailModal from "../components/Detail/DetailModal/DetailModal";

// 스타일 컴포넌트 정리
const PageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PostItem = styled.li`
  padding: 10px;
  margin: 10px 0;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const ListMain = styled.div`
  display: flex;
  padding-top: 20px;
`;

const ModalContent = styled.div`
  padding: 20px;
`;

function MainPage() {
  return (
    <div>
      <Header />
      <StoryMain />
      <ListMain>
        <PostList />
        <VideoMain />
      </ListMain>
    </div>
  );
}

export default MainPage;
