import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import image from "./images/kakaoLogo.png";

const KakaoLogo = styled.div`
  width: 240px;
  height: 80px;
  background: url(${image}) center/cover;
`;

const SearchBarHeader = styled.input`
  width: 240px;
  height: 44px;
  border: none;
  border-radius: 24px;
  background: #fbfbfb;
`;

function Header() {
  return (
    <main className="header">
      <KakaoLogo />
      <SearchBarHeader type="text" id="searchBarHeader" placeholder="검색" />
      <button id="addStoryHeader">오늘의 스토리를 들려주세요.</button>
      <div className="leftIconHeader">
        <button>
          <i class="fa-solid fa-user-group"></i>
        </button>
        <button>
          <i class="fa-regular fa-bell"></i>
        </button>
        <button>
          <i class="fa-regular fa-circle-user"></i>
        </button>
      </div>
    </main>
  );
}
export default Header;
