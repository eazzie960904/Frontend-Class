import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useForm } from "react-hook-form";

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

// const SearchBox = styled.div`
//   & > input {
//     width: 100px;
//     border: none;
//     border-bottom: 1px solid #000;
//     padding: 4px 6px;
//     text-align: center;
//     &::placeholder {
//       opacity: 1;
//       transition: opacity 0.3s;
//     }
//     &:focus {
//       outline: none;
//       &::placeholder {
//         opacity: 0;
//       }
//     }
//   }
// `;

const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  cursor: pointer;
`;

const Input = styled(motion.input)`
  position: absolute;
  left: -170px;
  transform-origin: right center;
  background: transparent;
  color: white;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid white;
  &:focus {
    outline: none;
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
  const inputAnimation = useAnimation();
  const onCheckEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };
  const openSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((prev) => !prev);
  };

  const { register, handleSubmit, setValue } = useForm();
  const [searchOpen, setSearchOpen] = useState(false);
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
        <Search onSubmit={handleSubmit()}>
          <motion.svg
            onClick={openSearch}
            animate={{ x: searchOpen ? -194 : 0 }}
            transition={{ type: "linear" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </motion.svg>
          <Input
            {...register("keyword", { required: true, minLength: 2 })}
            type="text"
            transition={{ type: "linear" }}
            placeholder="search for MOVIE or TV"
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
          />
        </Search>
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
