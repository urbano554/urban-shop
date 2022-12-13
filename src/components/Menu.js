import sunSvg from '@icons/sun.svg';
import moonSvg from '@icons/moon.svg';

import '@styles/Menu.scss';

const Menu = () => {
  return (
    <div className='Menu'>
      <ul>
        <li>
          <a href='/'>Mi carrito</a>
        </li>
        <li>
          <a href='/'>Mi cuenta</a>
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
          <a href='/'>Cerrar sesión</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
