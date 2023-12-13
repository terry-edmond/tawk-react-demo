import {useState} from 'react'
import TawkMessenger from "@tawk.to/tawk-messenger-react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // 1hgur419f => English, 1hhemebte => Turkish
  const [widgetId, setWidgetId] = useState("1hhemebte")

  return (
    <>
      <TawkMessenger propertyId={"65700ccdbfb79148e59a845d"} widgetId={widgetId}/>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Current widget id is {widgetId}
        </p>
        <button onClick={() => setWidgetId(widgetId === "1hhemebte" ? "1hgur419f" : "1hhemebte")}>
          Switch Widget
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
