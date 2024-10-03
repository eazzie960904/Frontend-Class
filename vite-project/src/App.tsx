import { motion } from "framer-motion";
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
`;

// style컴포넌트에 모션 속성값을 적용함
const Box = styled(motion.div)`
  width: 350px;
  height: 230px;
  border-radius: 20px;
  background: #eee;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

//<motion.div> 애니메이션, 모달 적용하겠다.
function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* <Box transition={{ duration: 3 }} animate={{ borderRadius: "20px" }} /> */}
        {/* <Box
          transition={{
            duration: 3,
            type: "spring",
            delay: 0.5,
          }}
          //spring: 공을 던진것 같은 효과
          //damping: spring을 제어하는 힘
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        /> */}
        <Box variants={myVars} initial="start" animate="end" />
      </Wrapper>
    </>
  );
}

export default App;
