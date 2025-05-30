import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

const reactElementJs = {
  type: "a",
  props: {
    href: "https//google.com",
    target: "_blank"
  },
  children: "Click Me to Visit Google"
}

const anotherUser = "kaif"

const reactElement = React.createElement(
  'a',
  { href: "https//google.com", target: "_blank" },
  "Visit Google",
  anotherUser
);

const reactElement2 = (
  <a href="https//google.com" target='blank'>Google Visit</a>
)


function MyFunction() {
  return (
    <div>
      <h1>Kaif Aur React Learning</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  reactElement
);