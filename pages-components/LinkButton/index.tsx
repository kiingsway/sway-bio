import React from 'react';
import styles from './LinkButton.module.scss';
import classNames from 'classnames';
import { Avatar } from 'antd';
import { TLayout } from '@/interfaces';

export interface LinkButtonProps {
  href?: string;
  description?: string;
  img_src?: string;
  layout?: TLayout;
  icon?: JSX.Element;
  children: string;
  maxWidth?: number;
}

export default function LinkButton(props: LinkButtonProps): JSX.Element {


  const { href, layout, children, img_src, description, icon, maxWidth } = props;

  const isHorizontal = !layout || layout === 'horizontal';

  const classes = classNames([
    styles.Main,
    { [styles.Main_Vertical]: !isHorizontal },
    { [styles.Main_Horizontal]: isHorizontal },
  ]);

  return (
    <a
      href={href}
      className={classes}
      style={{ maxWidth }}
      target='_blank'
      rel='noopener noreferrer'>

      {img_src ? <Avatar size={isHorizontal ? 48 : 64} src={img_src} /> : <></>}

      <div className={styles.Main_Desc}>

        <div className={styles.Main_Name}>
          {icon}
          <span>{children}</span>
        </div>

        {description ? <span>{description}</span> : <></>}

      </div>

    </a>
  );
}