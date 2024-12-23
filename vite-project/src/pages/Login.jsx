import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";
import { style } from "framer-motion/client";

const Wrapper = styled.div`
  width: 558px;
  height: 750px;
  margin: 50px auto;
  background: #252525;
  padding: 50px;
`;

const LoginTItle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.8em;
  color: white;
`;

const LoginDesc = styled.div`
  padding-top: 50px;
  color: #929292;
  display: flex;
  justify-content: center;
`;

const AnotherLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 30px;
`;

const AnotherLoginItem = styled.div`
  img {
    width: 60px;
    cursor: pointer;
  }
`;

const SearchMenus = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  color: #a5a5a5;
  padding: 20px;
  div {
    cursor: pointer;
  }
`;

const AnotherLoginTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #a5a5a5;
  font-size: 1.2em;
  padding-top: 50px;
`;

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const trueOk = useSelector((state) => state.auth.authenticate);

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(trueOk);
    navigate("/");
    dispatch(authenticateAction.login(id, pw));
  };
  return (
    <Container>
      <Wrapper>
        <LoginTItle>로그인</LoginTItle>
        <LoginDesc>Wavve 계정으로 로그인</LoginDesc>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Wavve 계정으로 로그인</Form.Label>
            <Form.Control
              type="email"
              style={{
                backgroundColor: "#2F2F2F",
                color: "#a5a5a5",
                border: "none",
                height: "50px",
              }}
              placeholder="이메일 주소 또는 아이디"
              onChange={(e) => setId(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              style={{
                backgroundColor: "#2F2F2F",
                color: "white",
                border: "none",
                height: "50px",
              }}
              placeholder="비밀번호"
              onChange={(e) => setPw(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              width: "460px",
              height: "60px",
              borderRadius: "50px",
              fontSize: "1.2em",
            }}
          >
            로그인
          </Button>
        </Form>
        <SearchMenus>
          <div> 아이디 찾기 |</div>
          <div> 비밀번호 재설정 |</div>
          <div> 회원가입 </div>
        </SearchMenus>
        <AnotherLoginTitle>또는 다른 서비스 계정으로 로그인</AnotherLoginTitle>
        <AnotherLogin>
          <AnotherLoginItem>
            <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D4e0f02e43248fed6c5850431ea527a61%26short_key%3Df394bb16-b83d-41ed-a4c6-98747dc113a7#login">
              <img src="/k.png" alt="kakaoLogo" />
            </a>
          </AnotherLoginItem>
          <AnotherLoginItem>
            <a href="https://auth.skt-id.co.kr/auth/authorize.do?client_id=271d4bb5-7350-4e57-8816-0895b040d793&client_secret=eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2R0NNIn0.4VIBCcmKkCdx4HqFsTL0A3HCukCmY868GwnzCnU8aTFvengDikQcIw.Q1pMRUKa9ULJ3Nkw.pVLHkRakoHATpcnGZ-8ZYTQ1NBgWKjaJTsHcj1C-la2PW2vgPy9YXwpzwFZJxMbxZC4HDas-x7dl.xF6_GAyHrd65Rm_XPiCD3g&redirect_uri=https%3A%2F%2Fwww.wavve.com%2Ftcallback.html&scope=openid&response_type=id_token%20token&state=97010&nonce=296968&client_type=WEB&service_type=14&popup_request_yn=Y&chnl_q=aHR0cHM6Ly9hdXRoLnNrdC1pZC5jby5rci9zc28vd2ViL3YxL3Nzb2xvZ291dC5kbz9jbGllbnRfaWQ9MjcxZDRiYjUtNzM1MC00ZTU3LTg4MTYtMDg5NWIwNDBkNzkzJnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRnd3dy53YXZ2ZS5jb20lMkZ0Y2FsbGJhY2suaHRtbCZjbGllbnRfdHlwZT1XRUI">
              <img src="/t.png" alt="tLogo" />
            </a>
          </AnotherLoginItem>
          <AnotherLoginItem>
            <a href="https://nid.naver.com/nidlogin.login?oauth_token=8xaQPFNRPQygw7rpRQ&consumer_key=IMRF4m29ielhnUTZYGHL&logintp=oauth2&nurl=https%3A%2F%2Fnid.naver.com%2Foauth2.0%2Fauthorize%3Fresponse_type%3Dtoken%26state%3D22e63578-dd53-41d0-b596-365b2fb23fb2%26client_id%3DIMRF4m29ielhnUTZYGHL%26redirect_uri%3Dhttps%253A%252F%252Fwww.wavve.com%252Fmember%252Flogin_naver.html%26locale%3Dko_KR%26inapp_view%3D%26oauth_os%3D&locale=ko_KR&inapp_view=&svctype=">
              <img src="/naver.png" alt="naverLogo" />
            </a>
          </AnotherLoginItem>
          <AnotherLoginItem>
            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1818575348440201&kid_directed_site=0&app_id=1818575348440201&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv4.0%2Fdialog%2Foauth%3Fapp_id%3D1818575348440201%26cbt%3D1731293307072%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df9c5222c9c37ac9d5%2526domain%253Dwww.wavve.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.wavve.com%25252Ffe64e85a2d47ff4ba%2526relation%253Dopener%26client_id%3D1818575348440201%26display%3Dpopup%26domain%3Dwww.wavve.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.wavve.com%252Fmember%252Flogin%253Freferer%253D%25252F%26locale%3Dko_KR%26logger_id%3Dfd7e23274e5ee4a05%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df6990c79cbe61a367%2526domain%253Dwww.wavve.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.wavve.com%25252Ffe64e85a2d47ff4ba%2526relation%253Dopener%2526frame%253Dfd195f502e12dc51b%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Dpublic_profile%26sdk%3Djoey%26version%3Dv4.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df6990c79cbe61a367%26domain%3Dwww.wavve.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.wavve.com%252Ffe64e85a2d47ff4ba%26relation%3Dopener%26frame%3Dfd195f502e12dc51b%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=ko_KR&pl_dbl=0">
              <img src="/facebook.png" alt="facebookLogo" />
            </a>
          </AnotherLoginItem>
          <AnotherLoginItem>
            <a href="https://appleid.apple.com/auth/authorize?client_id=kr.co.captv.pooqV2.member&redirect_uri=https%3A%2F%2Fmember.wavve.com%2Fmobile%2Fsignup%2Fweb%2Fapple&response_type=code%20id_token&scope=email&response_mode=form_post&frame_id=2ae74574-7ee0-40da-a78e-1d5d201b9061&m=11&v=1.5.5">
              <img src="/apple.png" alt="appleLogo" />
            </a>
          </AnotherLoginItem>
        </AnotherLogin>
        <LoginDesc>
          * SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다. 기존
          POOQ 계정 또는 Wavve 계정과는 연동되지 않으니 이용에 참고하세요.
        </LoginDesc>
      </Wrapper>
    </Container>
  );
};

export default Login;
