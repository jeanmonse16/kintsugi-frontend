import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { App } from './App'
import './assets/styles/tailwind.css'
import 'animate.css'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(<App />)