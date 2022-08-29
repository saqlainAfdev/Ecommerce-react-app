import * as React from 'react';
import logo from "../assets/images/logo.png"
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// 
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>

      <header >
        <div className="container">
          <div className="d-flex logo-menu-block align-items-center gap-100">
            <div className="logo-block">
              <a href="index.html">
                <img src={logo} alt="site-logo" className="img-fluid" />
              </a>
            </div>
            <ul className="main-menu d-flex align-items-center flex-wrap">
              <li className="items">
                <a href="#" className="link">
                  home
                </a>
              </li>
              <li className="items">
                
                    <button
                      className='dd-btn link d-flex align-items-center gap-10'
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      Shop
                      <img src="../../assets/images/dd-icon.svg" alt="dd-icon" className="img-fluid dd-icon" />
                    </button>
                    <Menu
                    className='ctm-dd-menu'
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <a href="#">
                          Shop 01
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <a href="#">
                            Shop 02
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <a href="#">
                            Shop 03
                        </a>
                      </MenuItem>
                    </Menu>
                  
              </li>
            </ul>
          </div>

        </div>
      </header>


    </>
  );

}

export default Header;
