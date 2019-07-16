import React from 'react';

const navContext = React.createContext((props)=>{
  console.log(props)
  return <a href={props.url}>{props.label}</a>
})

export default navContext