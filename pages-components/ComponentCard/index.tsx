import React from 'react';
import styles from './ComponentCard.module.scss';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineInsertLink } from "react-icons/md";
import AppDivider from '../AppDivider';
import { Avatar } from 'antd';
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import LatestProjects from './LatestProjects';
import LinkButton from '../LinkButton';

interface Props {
  component: TComponent;
}

export default function ComponentCard({ component }: Props): JSX.Element {

  const { title, type, content } = component;

  const Main = (): JSX.Element => {
    if (typeof content === 'string') return <span>{content}</span>;
    if (type === 'links') return (
      <div className={styles.Insta}>
        {content.map(item => (
          <LinkButton
            key={item.name + item.description}
            img_src={item.image_url}
            href={item.url}
            description={item.description}
            icon={item.socialmedia_icon}
          >
            {item.name}
          </LinkButton>
        ))}
      </div>
    );
    if (type === 'latest_projects') return <LatestProjects />;
    return <></>;
  }

  return (
    <div className={styles.Main}>
      <ComponentHeader type={type} title={title} />
      <AppDivider />
      <Main />
    </div>
  );
}

function ComponentInsta({ content }: { content: TContentInstaType }): JSX.Element {

  return (
    <div className={styles.Insta}>
      {content.map(item => {
        const { name, socialmedia_icon, url, description, image_url } = item;
        return (
          <a
            className={styles.Insta_Item}
            key={name + description}
            href={url}
            target='_blank'
            rel='noopener noreferrer'>
            <Avatar size={48} src={image_url} />

            <div className={styles.Insta_Item_Desc}>

              <div className={styles.Insta_Item_Name}>
                {socialmedia_icon}
                <span>{name}</span>
              </div>

              {description ? <span>{description}</span> : <></>}

            </div>
          </a>
        );
      })
      }</div>
  );
}

const ComponentHeader = ({ type, title }: { type: TComponentType, title: string }): JSX.Element => {

  const icon: Record<TComponentType, JSX.Element> = {
    latest_projects: <PiProjectorScreenChartDuotone />,
    about: <FaRegUserCircle />,
    links: <MdOutlineInsertLink />
  };

  return (
    <div className={styles.Main_Header}>
      {icon[type]}
      <h1>{title}</h1>
    </div>
  );
}