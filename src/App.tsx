import React, { FC } from 'react'
import { Button } from 'antd'
import { hot } from 'react-hot-loader'
import './App.css'
const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
)

export default hot(module)(App)
// export default App
