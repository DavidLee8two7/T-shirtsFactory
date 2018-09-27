import React from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../../Resources/images/logos/logo.png';

export const Logo = props => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${companyLogo}) no-repeat`,
      }}
    />
  );

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
