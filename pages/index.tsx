import React from 'react';
import { Layout } from 'antd';
import styles from './Home.module.scss';
import AppHeader from '@/pages-components/AppHeader';
import { Content } from 'antd/es/layout/layout';
import profileData from '@/app/app_parameters';
import Component from '@/pages-components/Component';
import { IUserProfile } from '@/interfaces';

export type ProfileState = [IUserProfile, React.Dispatch<React.SetStateAction<IUserProfile>>];

export default function Home(): JSX.Element {

  const profileState: ProfileState = React.useState<IUserProfile>(profileData);

  const [profile] = profileState;

  return (
    <Layout className={styles.Main}>
      <AppHeader profileState={profileState} />

      <Content className={styles.Content}>
        {profile.components.map(c => <Component key={c.title} component={c} />)}
      </Content>

    </Layout>
  );
}