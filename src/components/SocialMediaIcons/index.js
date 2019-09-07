import React, {Fragment} from 'react';
import { IconComponent } from '../FontAwesomeIcon'
import { faFacebook, faGooglePlay, faItunes, faInstagram } from '@fortawesome/free-brands-svg-icons'

const iconsToRender = [ faFacebook, faGooglePlay, faItunes, faInstagram ];

const SocialMediaIcons = () => (
  <Fragment>
    {
      iconsToRender.map((icon, idx) => (
        <IconComponent key={`${icon}-${idx + 1}`} icon={icon} size="2x" />)
      )
    }
  </Fragment>
)

export default SocialMediaIcons;