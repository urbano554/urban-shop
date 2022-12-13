import React, { useCallback, useContext, useEffect, useState } from 'react';

import { AppContext } from '../context/AppContext';

import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import { Tooltip } from './Tooltip';
import Drawner from './Drawner';

import { NAVBAR_FIELDS } from '../common/constants';

import shoppingCart from '@icons/icon_shopping_cart.svg';
import sunSvg from '@icons/sun.svg';
import moonSvg from '@icons/moon.svg';

import '@styles/Header.scss';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const [scroll, setScroll] = useState(false);

  const handleNavigation = useCallback(() => {
    setScroll(!window.scrollY <= 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={scroll ? 'fixed-nav' : ''}>
      <Drawner
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <ul>
          <li>
            <a onClick={() => setIsOpen(false)}>{NAVBAR_FIELDS.all}</a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)}>{NAVBAR_FIELDS.electronics}</a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)}>{NAVBAR_FIELDS.jewelery}</a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)}>{NAVBAR_FIELDS.mensClothing}</a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)}>
              {NAVBAR_FIELDS.womensClothing}
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)}>Mi carrito</a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)}>Mi cuenta</a>
          </li>
          <li>
            <div className='dark-mode-container'>
              <img
                src={sunSvg}
                alt='sun-svg'
              />
              <img
                src={moonSvg}
                alt='moon-svg'
              />
            </div>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)}>Cerrar sesión</a>
          </li>
        </ul>
      </Drawner>
      <div className='navbar-left'>
        <h1 className='nav-logo'>Urban shop</h1>
        <ul>
          <li>
            <a>{NAVBAR_FIELDS.all}</a>
          </li>
          <li>
            <a>{NAVBAR_FIELDS.electronics}</a>
          </li>
          <li>
            <a>{NAVBAR_FIELDS.jewelery}</a>
          </li>
          <li>
            <a>{NAVBAR_FIELDS.mensClothing}</a>
          </li>
          <li>
            <a>{NAVBAR_FIELDS.womensClothing}</a>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li
            className='navbar-email'
            onClick={handleToggle}
          >
            Usuario
          </li>
          <Tooltip text='Carrito de compras'>
            <li
              className='navbar-shopping-cart'
              onClick={() => setToggleOrders(!toggleOrders)}
            >
              <img
                src={shoppingCart}
                alt='shopping cart'
              />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </Tooltip>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder scroll={scroll}/>}
    </nav>
  );
};
