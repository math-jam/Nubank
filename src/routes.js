import React from "react"
import { StatusBar } from 'react-native'
import { NativeRouter, Route } from "react-router-native"

import Main from './pages/Main'

export default function Routes() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#612F74"/>
    <NativeRouter>
      <Route exact path="/" component={Main} />
    </NativeRouter>
    </>
  );
}