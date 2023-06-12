import React from 'react'
import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  const pizzastore = [
    {
      id: 0,
      name: 'Focaccia',
      description: 'Bread with italian olive oil and rosemary',
      qty: '6',
      imglink: 'pizzas/focaccia.jpg',
      soldOut: false,
    },
    {
      id: 1,
      name: 'Pizza Spinaci',
      description: 'Tomato, mozarella, spinach, and ricotta cheese',
      qty: '10',
      imglink: 'pizzas/spinaci.jpg',
      soldOut: false,
    },
    {
      id: 2,
      name: 'Pizza Margherita',
      description: 'Tomato and mozarella',
      qty: '12',
      imglink: 'pizzas/margherita.jpg',
      soldOut: false,
    },
    {
      id: 3,
      name: 'Pizza Funghi',
      description: 'Tomato, mozarella, mushrooms, and onion',
      qty: '8',
      imglink: 'pizzas/funghi.jpg',
      soldOut: false,
    },
    {
      id: 4,
      name: 'Pizza Salamino',
      description: 'Tomato, mozarella, and pepperoni',
      qty: 'SOLD OUT',
      imglink: 'pizzas/salamino.jpg',
      soldOut: true,
    },
    {
      id: 5,
      name: 'Pizza Prosciutto',
      description: 'Tomato, mozarella, ham, aragula, and burrata cheese',
      qty: '18',
      imglink: 'pizzas/prosciutto.jpg',
      soldOut: false,
    },
  ]
  return (
    <div>
      <Header />
      <Cards p={pizzastore} />
      <Footer />
    </div>
  )
}

export default App
