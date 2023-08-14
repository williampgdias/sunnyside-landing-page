import logo from '../../assets/logo.svg';
import arrowDown from '../../assets/icon-arrow-down.svg';

// CSS
import './Header.css';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='nav-bar'>
          <div>
            <img src={logo} />
          </div>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Projects</a>
            </li>
            <li>
              <a href='#' className='link-contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='intro'>
          <h1>We are Creatives</h1>
          <img src={arrowDown} />
        </div>
      </header>
    </>
  );
};

export default Header;
