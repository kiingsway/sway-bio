import React from 'react';
import styles from './Component.module.scss';
import AppDivider from '../AppDivider';
import Text from './Text';
import Links from './Links';

interface Props {
  component: TComponent;
}

export default function Component({ component }: Props): JSX.Element {

  const Content = (): JSX.Element => {
    if (component.type === 'text') return <Text content={component.content} />;
    if (component.type === 'links') return <Links content={component.content} />;
    else return <></>;
  }

  return (
    <div className={styles.Main}>
      <Header {...component} />
      <AppDivider />
      <Content />
    </div>
  );
}


interface HeaderProps {
  icon: JSX.Element;
  title: string;
}

const Header = ({ icon, title }: HeaderProps): JSX.Element => (
  <div className={styles.Main_Header}>
    {icon}
    <h1>{title}</h1>
  </div>
);