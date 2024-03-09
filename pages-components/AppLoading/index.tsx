import React from 'react';
import './app-loading.css';
import AppProgress from '../AppProgressBar';

export default function AppLoading(): JSX.Element {

  return (
    <div className='app-loading-container'>
      <div className="app-loading">
        Loading Sway Bio...
        <AppProgress auto={2500} size='small' />
      </div>
    </div>
  );
}