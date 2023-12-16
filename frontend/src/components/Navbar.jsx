import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import styles from '../style';
import { Link } from 'react-router-dom';

//Llamar al usuario para hacer el dropdown

const Nav = () => {
  return (
    <Navbar fluid rounded className={`w-full bg-primary ${styles.paddingY}`}>
      <Navbar.Brand>
        <Link to={`/home`} className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Blogify</Link>
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