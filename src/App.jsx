import React, { useState } from "react"
import {questions} from './api'
import Topbar from "./Topbar"
import Body from "./Body"

export default function App(){
  return(
    <>
      <Topbar/>
      <Body/>
    </>
  )
}