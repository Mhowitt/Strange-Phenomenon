import styled from "styled-components"
import homepageImage from './strangeCover.jpg'


export const BackgroundImage = styled.div`
  background-image: url(${homepageImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(244, 244, 244, 0.4);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 65%;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  top: 20%;
  width: 70%;
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`

export const Social = styled.div`
  align-items: center;
  display: flex;
  height: 25%;
  justify-content: space-around;
  padding: 1% 2%;
  width: 100%;
`