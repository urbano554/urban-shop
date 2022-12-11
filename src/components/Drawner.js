import React from 'react';

import menu from '@icons/icon_menu.svg';

import '../styles/Drawner.scss';
import '../styles/Header.scss';

const Drawner = ({ children, isOpen, setIsOpen }) => (
  <>
    <input
      type='checkbox'
      className='drawer-toggle'
      name='drawer-toggle'
      checked={isOpen}
      defaultValue={false}
      readOnly
    />
    <img
      src={menu}
      alt='menu'
      className='menu'
      onClick={() => setIsOpen(true)}
    />
    <nav className='drawer'>{children}</nav>
  </>
);

export default Drawner;
