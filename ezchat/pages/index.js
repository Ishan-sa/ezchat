import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Navbar from '../comps/Navbar';
import Register from '../comps/register';


export default function HomePage() {
  return (
    // <Home />,
    // <Navbar />,
    <div>
      <Navbar />
      <Register />
    </div>
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/' component={Home} />
    //   </Switch>
    // </BrowserRouter>
  )
}