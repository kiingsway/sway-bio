import React from 'react';
import styles from './Buttons.module.scss';
import { Button } from 'antd';
import classNames from 'classnames';
import { LinkFunction } from './interfaces';

const Link: LinkFunction = p => {

  const { children: ch, icon: ic, className: cn, ...props } = p;

  const { children, ...otherProps } = ch ?
    { icon: undefined, children: <>{ic}{ch}</> } :
    { icon: ic, children: <></> };

  return (
    <Button
      {...props}
      {...otherProps}
      className={classNames([styles.Icon, styles.Link, cn])}
      type='link'
      rel='noopener noreferrer'>
      {children}
    </Button>
  );
}

const Buttons = { Link };

export default Buttons;
