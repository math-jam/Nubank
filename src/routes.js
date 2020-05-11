import React from "react"
import { StatusBar } from 'react-native'
import { NativeRouter, Route } from "react-router-native"

//Routes
import Main from './pages/Main'
import About from './pages/About'

export default function Routes() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#612F74"/>
    <NativeRouter>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </NativeRouter>
    </>
  );
}