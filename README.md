# React Tabs - TypeScript

This is a demo of  Tabs with childs container dynamically loaded.

![demovideo](https://github.com/caiomarqs/caiomarqs/blob/master/imgs/reactabs.gif)

# Using

In `app.tsx` had an example of using tabs

```jsx
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
```

### Notes

- The component **TabContainer** need the label name, this label name most be unique and different from the other labels. 

- Tabcontainer compiles any JSX element
