import React from 'react'
import Context from "./navigation-context"

const newLinkRenderProp = (props)=> {
  return <span style={{"color": "pink", "display": "block"}}>{props.label} - {props.url}</span>
} 

export default ({children})=> {
  return (<Context.Provider value={newLinkRenderProp}>
    {children}
  </Context.Provider>)};