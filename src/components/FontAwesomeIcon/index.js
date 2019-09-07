import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconComponent = ({ brand, icon, ...restProps }) => {
    const fontIcon = brand ? ['fab', icon] : icon
    return (
      <FontAwesomeIcon icon={fontIcon} {...restProps} />
    )
}
