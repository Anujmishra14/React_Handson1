import React, { Component } from 'react'

export default class ClassCompo extends Component {
  render() {
    return (
        <>
        <div className='classParent'>
        <h1>This is created using class Component</h1>
        <h4>This is done using external CSS</h4>
        <h4 style={{color:"blue"}}>This is done using inline CSS</h4>
        </div>
        </>
    )
  }
}
