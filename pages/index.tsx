import React from 'react';
import { Avatar, Button, Col, Divider, Row } from 'antd';
import styles from './Home.module.scss';
import parameters from './app_parameters';
import AppHeader from '@/pages-components/AppHeader';

export interface IAppConfig {
  name: string;
  bio: string;
  layout: "horizontal" | "vertical";
}

const appConfigDefault: IAppConfig = {
  name: parameters.username,
  bio: parameters.bio,
  layout: 'horizontal'
}

export default function Home(): JSX.Element {

  const appState = React.useState<IAppConfig>(appConfigDefault);

  return (
    <main className={styles.Main}>
      <div className={styles.Main_App}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <AppHeader appState={appState} imageUrl='' />
          </Col>
          <Divider style={{ margin: '8px 0' }} />
        </Row>
      </div>
    </main>
  );
}