import React from 'react';
import styles from './AppHeader.module.scss';
import { Avatar, Tooltip } from 'antd';
import classNames from 'classnames';
import ProfileEditModal from '../ProfileEditModal';
import useBoolean from '@/app/hooks/useBoolean';
import { Header } from 'antd/es/layout/layout';
import { ProfileState } from '@/pages';

interface Props {
  profileState: ProfileState;
}

export default function AppHeader({ profileState }: Props): JSX.Element {

  const [profile] = profileState;
  const [openEditProfileModal, { setTrue: openModal, setFalse: closeModal }] = useBoolean();
  const { bio, title_name, header_layout } = profile;
  const isHorizontal = header_layout === 'horizontal';

  return (
    <Header className={classNames([
      styles.Header,
      { [styles.Header_Horizontal]: isHorizontal },
      { [styles.Header_Vertical]: !isHorizontal },
    ])}>
      <Tooltip title="Edit profile" mouseEnterDelay={1}>
        {/* <Avatar className={styles.Avatar} size={72} onClick={openModal} src="/kiingsway_gh_profile" /> */}
        <Avatar size={72} src="/kiingsway_gh_profile" />
      </Tooltip>
      <div className={styles.Header_Info}>
        <h2>{title_name}</h2>
        <a target='_blank' rel='noopener noreferrer' href={`https://${bio}`}>{bio}</a>
      </div>
      <ProfileEditModal open={openEditProfileModal} onClose={closeModal} profileState={profileState} />
    </Header>
  );
}