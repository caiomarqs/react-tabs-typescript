import React from 'react';
import './App.css';
import { Tabs, TabContainer } from './components/Tabs'

const App = () => {
  return (
    <>
      <h1>Tabs Demo</h1>
      <Tabs>
        <TabContainer label='Felicidade'>
          <h1>UFA</h1>
        </TabContainer>
        <TabContainer label='Alegria'>
          <h1>Só alegria</h1>
        </TabContainer>
      </Tabs>
    </>
  )
}

export default App;
