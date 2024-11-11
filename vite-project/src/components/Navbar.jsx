import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  background: #1b1b1b;
  color: #a5a5a5;
  // position: fixed;
`;

const HeaderTop = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const SearchBox = styled.div`
  & > input {
    width: 100px;
    border: none;
    border-bottom: 1px solid #000;
    padding: 4px 6px;
    text-align: center;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const LoginAuth = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  color: white;
`;

const Logo = styled.div`
  & > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuArea = styled.div`
  font-size: 1.2em;
  & > ul {
    display: flex;
    gap: 20px;
  }
`;

const menuList = [
  "뉴클래식",
  "드라마",
  "예능",
  "영화",
  "애니",
  "해외시리즈",
  "시사교양",
  "키즈",
  "영화플러스",
  "live",
];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const onCheckEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };
  return (
    <Wrapper>
      <HeaderTop>
        <Logo>
          <Link to={"/"}>
            <img src="/logowhite.png" alt="wavve" />
          </Link>
        </Logo>
        <MenuArea>
          <ul>
            {menuList.map((menu, index) => (
              <li key={index}>
                <a href="#">{menu}</a>
              </li>
            ))}
          </ul>
        </MenuArea>
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
        </SearchBox>
        {authenticate ? (
          <LoginAuth onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
          </LoginAuth>
        ) : (
          <LoginAuth onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
          </LoginAuth>
        )}
      </HeaderTop>
    </Wrapper>
  );
};

export default Navbar;
