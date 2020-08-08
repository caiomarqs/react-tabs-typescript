import React from 'react';
import './App.css';
import { Tabs, TabContainer } from './components/Tabs'

const App = () => {
  return (
    <>
      <h1>Tabs Demo</h1>
      <Tabs>
        <TabContainer label='Tab1'>
          <h3>Tab1</h3>
        </TabContainer>
        <TabContainer label='Tab2'>
          <h3>Tab2</h3>
        </TabContainer>
        <TabContainer label='Tab3'>
          <h3>Tab3</h3>
        </TabContainer>
      </Tabs>
    </>
  )
}

export default App;
