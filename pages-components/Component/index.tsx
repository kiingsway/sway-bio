import React from 'react';
import styles from './Component.module.scss';
import AppDivider from '../AppDivider';
import Text from './Text';
import Links from './Links';

interface Props {
  component: TComponent;
}

export default function Component({ component }: Props): JSX.Element {

  const { content, icon, title, type } = component;

  const Content = (): JSX.Element => {
    if (type === 'text') return <Text content={content} />;
    if (type === 'links') return <Links content={content} />;
    else return <></>;
  }

  return (
    <div className={styles.Main}>
      <div className={styles.Main_Header}>
        {icon}
        <h1>{title}</h1>
      </div>
      <AppDivider />
      <Content />
    </div>
  );
}