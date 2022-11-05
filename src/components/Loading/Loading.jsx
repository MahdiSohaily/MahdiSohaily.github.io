import React from 'react';
import loading from '../../assets/img/loading.gif';
import './styles.css';

export default function Loading() {
  return (
    <div className="center">
      <img src={loading} alt="loading page" />
    </div>
  );
}
