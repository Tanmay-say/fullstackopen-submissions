import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


/* re-rendering 
import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000) */