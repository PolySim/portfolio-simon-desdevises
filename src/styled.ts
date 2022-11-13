import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #011832;
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  width: 100%;
  height: 40%;
  color: #ccc;

  /* Box behind name */
  > div:nth-of-type(1) {
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
    height: 40%;
    width: 60%;
    border: 15px solid #001429;
    box-sizing: border-box;
  }

  /* Name */
  > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    z-index: 10;
    font-size: 70px;
    min-height: 40%;
    p {
      margin-left: 6px;
      opacity: 0;
      animation: nameApparition 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
      transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      :hover {
        transform: translateY(-24px);
        color: #fff;
      }
    }
    br {
      width: 24px;
    }
  }

  /* Description */
  > div:nth-of-type(3) {
    opacity: 0;
    animation: nameApparition 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    animation-delay: 1.7s;
    height: 60%;
    margin-top: 24px;
  }
`;
