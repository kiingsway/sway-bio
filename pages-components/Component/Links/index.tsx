import LinkButton from '@/pages-components/LinkButton';
import React from 'react';
import styles from '../Component.module.scss';
import { IComponentLinks } from '@/interfaces';

interface Props {
  content: IComponentLinks['content'];
}

export default function Links({ content }: Props): JSX.Element {
  return (
    <div className={styles.Links}>
      {content.links.map(link => {

        return (
          <LinkButton
            key={link.name + link.description}
            img_src={link.image_url}
            href={link.url}
            description={link.description}
            icon={link.socialmedia_icon}
            layout={content.layout}
          >
            {link.name}
          </LinkButton>
        );
      })}
    </div>
  );
}