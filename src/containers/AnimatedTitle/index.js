import React, { useState } from 'react'

import {Title} from '../Homepage/styledComponents'

const AnimatedTitle = ({titleToRender}) => {
  const [title, setTitle] = useState('');

  return (
    <Title>{titleToRender}</Title>
  )
}

export default AnimatedTitle;