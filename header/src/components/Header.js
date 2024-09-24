import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const kakaoLogo = styled.div`
    width: 240px;
    height: 80px;
    background: url("./images/kakaoLogo.png");
  `;
  return (
    <main className="header">
      <div className="kakaoLogo"></div>
      <input type="text" id="searchBarHeader" placeholder="검색" />
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
