import React from 'react'
import { Nav, Card_post, Component } from './components'
import styles from './style'
import { UserProvider } from './components/UserContext'
const App = () => {
  return (
    <UserProvider>
    <div className={`w-full overflow-hidden`}>
    <div className={` bg-primary ${styles.boxWidth}`}>
      <Nav />
    </div>
    <div className='bg-secondary'>
      <div className={` ${styles.padding} ml-[4.5em]`}>
        <h2 className={`text-5xl text-tertiary `}>¡Últimos posteos!</h2>
      </div>
      <div className={`${styles.paddingX} flex flex-wrap justify-evenly`}>
        <Card_post />
        </div>
        <Component />
      </div>
    </div>
  </UserProvider>
  )
}

export default App