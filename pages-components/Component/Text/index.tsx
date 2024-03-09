import { IComponentText } from '@/interfaces';
import React from 'react';

interface Props {
  content: IComponentText['content'];
}

export default function Text({ content }: Props): JSX.Element {

  const style: React.CSSProperties = {
    fontSize: content.font_size,
    textAlign: content.text_alignment,
  };

  return (
    <div style={style}>
      <span>{content.text}</span>
    </div>
  );
}