import React from 'react';
import styles from './AppHeader.module.scss';
import { Avatar, Tooltip } from 'antd';
import classNames from 'classnames';
import ProfileEditModal from '../ProfileEditModal';
import useBoolean from '@/app/hooks/useBoolean';
import { Header } from 'antd/es/layout/layout';
import AppDivider from '../AppDivider';

interface Props {
  imageUrl?: string;
  appState: [IAppConfig, React.Dispatch<React.SetStateAction<IAppConfig>>];
}

export default function AppHeader({ appState }: Props): JSX.Element {

  const [appConfig] = appState;
  const [openEditProfileModal, { setTrue: openModal, setFalse: closeModal }] = useBoolean();
  const { bio, layout, name } = appConfig;
  const isHorizontal = layout === 'horizontal';

  return (
    <Header className={classNames([
      styles.Header,
      { [styles.Header_Horizontal]: isHorizontal },
      { [styles.Header_Vertical]: !isHorizontal },
    ])}>
      <Tooltip title="Edit profile" mouseEnterDelay={1}>
        <Avatar className={styles.Avatar} size={72} onClick={openModal} src="/kiingsway_gh_profile" />
      </Tooltip>
      <div className={styles.Header_Info}>
        <h2>{name}</h2>
        <a target='_blank' rel='noopener noreferrer' href={`https://${bio}`}>{bio}</a>
      </div>
      <ProfileEditModal open={openEditProfileModal} onClose={closeModal} appState={appState} />
    </Header>
  );
}