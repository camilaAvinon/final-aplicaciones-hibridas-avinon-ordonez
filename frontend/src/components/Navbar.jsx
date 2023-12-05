import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import styles from '../style';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <Navbar fluid rounded className={`w-full bg-primary ${styles.paddingY}`}>
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Blogify</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown 
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded className=''/>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={`/home`}  className='text-xl text-tertiary'>Home</Link>
        <Link to={`/login`} className='text-xl text-tertiary'>Iniciar sesión</Link>
        <Link to={`/signup`} className='text-xl text-tertiary'>Registrarme</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav