import React from 'react'
import { BackgroundImage, Social, Wrapper } from './styledComponents'
import SocialMediaIcons from '../../components/SocialMediaIcons'
import AnimatedTitle from '../AnimatedTitle'


const Homepage = ({titleToRender}) => (
    <BackgroundImage>
      <Wrapper>
        <AnimatedTitle titleToRender="Strange Phenomenon"/>
        <Social>
        <SocialMediaIcons />
      </Social>
      </Wrapper>
    </BackgroundImage>
  )
export default Homepage;