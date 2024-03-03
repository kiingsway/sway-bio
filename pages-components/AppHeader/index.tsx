import React from 'react';
import styles from './AppHeader.module.scss';
import { Avatar, Tooltip } from 'antd';
import classNames from 'classnames';
import ProfileEditModal from '../ProfileEditModal';
import useBoolean from '@/app/hooks/useBoolean';
import { IAppConfig } from '@/pages';

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
    <div className={classNames([
      styles.Header,
      { [styles.Header_Horizontal]: isHorizontal },
      { [styles.Header_Vertical]: !isHorizontal },
    ])}>
      <Tooltip title="Edit profile">
        <Avatar className={styles.Avatar} size={72} onClick={openModal}>PHOTO</Avatar>
      </Tooltip>
      <div className={styles.Header_Info}>
        <h2>{name}</h2>
        <a target='_blank' rel='noopener noreferrer' href={`https://${bio}`}>{bio}</a>
      </div>
      <ProfileEditModal open={openEditProfileModal} onClose={closeModal} appState={appState} />
    </div>
  );
}