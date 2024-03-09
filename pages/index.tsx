import React from 'react';
import { Layout } from 'antd';
import styles from './Home.module.scss';
import AppHeader from '@/pages-components/AppHeader';
import { Content } from 'antd/es/layout/layout';
import profileData from '@/app/app_parameters';
import Component from '@/pages-components/Component';
import { IUserProfile } from '@/interfaces';
import AppLoading from '@/pages-components/AppLoading';
import useBoolean from '@/app/hooks/useBoolean';
import classNames from 'classnames';

export type ProfileState = [IUserProfile, React.Dispatch<React.SetStateAction<IUserProfile>>];

export default function Home(): JSX.Element {

  const [isAppShowing, { setTrue: showApp }] = useBoolean();
  const [classes, setClasses] = React.useState(classNames([styles.Main, styles.Main_Ani]));
  const removeAnimationClass = () => setClasses(styles.Main);

  setTimeout(showApp, 2500);
  setTimeout(removeAnimationClass, 3500);

  if (!isAppShowing) return <AppLoading />;

  return (
    <Layout className={classes}>
      <Main />
    </Layout>
  );
}

const Main = (): JSX.Element => {

  const profileState: ProfileState = React.useState<IUserProfile>(profileData);
  const [profile] = profileState;

  return (
    <>
      <AppHeader profileState={profileState} />
      <Content className={styles.Content}>
        {profile.components.map(c => <Component key={c.title} component={c} />)}
      </Content>
    </>
  );
};