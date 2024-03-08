import LinkButton, { LinkButtonProps } from '@/pages-components/LinkButton';
import React from 'react';
import styles from './LatestProjects.module.scss';
import winederlandIcon from '@/public/favicon.ico';
import swayOldHeart from '@/public/sway-old-heart.webp';

export default function LatestProjects(): JSX.Element {

  const links: LinkButtonProps[] = [
    {
      href: "https://project-winederland.vercel.app/",
      children: "Winederland",
      description: "Project for school",
      img_src: winederlandIcon.src,
      layout: 'vertical'
    },
    {
      children: "Sway Bio",
      description: "we are in it 😁👍",
      img_src: swayOldHeart.src,
      layout: 'vertical'
    },
  ];

  return (
    <div className={styles.Main}>
      {links.map(l => <LinkButton key={l.children} {...l} />)}
    </div>
  );
}