import { useRef } from "react";
import { delay, motion } from "framer-motion";
import { style } from "framer-motion/client";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, lightpink, lightblue);
  }

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: #eee;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

const App03 = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  console.log(biggerBoxRef);
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin
            //dragSnapToOrigin다시 들어오려는 성질=탄성
            dragElastic={5}
            dragConstraints={biggerBoxRef}
            variants={boxVariants}
            whileHover="hover"
            whileTap="click"
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
};

export default App03;
