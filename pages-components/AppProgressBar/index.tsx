import React from 'react';
import './app-progress-bar.css';

export type AppProgressSize = 'small' | 'default' | 'large';

interface PercentProps {
  percent: number;
  auto?: never;
  size?: AppProgressSize;
}

interface AutoPercentProps {
  percent?: never;
  auto: number;
  size?: AppProgressSize;
}

const AppProgress = ({ percent, size, auto }: PercentProps | AutoPercentProps): JSX.Element => {

  const loading_style: React.CSSProperties = {
    width: percent ? percent + '%' : undefined,
    height: size === 'small' ? 4 : (size === 'large' ? 16 : 8),
    animation: auto ? `app-progressbar-loading-animation ${auto}ms forwards` : undefined,
  };

  const container_style: React.CSSProperties = {
    animation: auto ? `shadow-animation ${auto}ms forwards` : undefined,
  };

  return (
    <div className="app-progressbar" style={container_style}>
      <div className="app-progressbar-loading" style={loading_style} />
    </div>
  );
};

export default AppProgress;