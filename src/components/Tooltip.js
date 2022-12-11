import React from 'react';
import '../styles/Tooltip.scss';

export const Tooltip = ({ children, text = 'prueba', position = 'left' }) => {
  return (
    <div className={`tooltip ${position}`}>
      <p className='tiptext'>{text}</p>
      {children}
    </div>
  );
};
