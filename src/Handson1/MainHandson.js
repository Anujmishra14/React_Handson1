import React, { Component } from 'react'
import FunctionCompo from './FunctionCompo'
import ClassCompo from './ClassCompo'
class MainHandson extends Component {
    constructor(){
        super()
        this.state={
            functionClick:false,
            ClassClick:false,
        }
    }
  render() {
    return (
        <>
             <h1 className="headp">Styling using Functional and Class Component</h1>
             <div className="btnp">
                <button className="btn1 btn" onClick={()=>this.setState({functionClick:!this.state.functionClick})}>To see styling in functional component</button>
                <button className="btn2 btn" onClick={()=>this.setState({ClassClick:!this.state.ClassClick})}>To see styling in class component</button>
               
    
             </div>
             {/* we use this for rendering the hidden component  (condition ? expressionIfTrue : expressionIfFalse) */}
             <div className='hide'>
                {this.state.functionClick?<FunctionCompo />:null}
                {this.state.ClassClick?<ClassCompo />:null}
                </div>
            </>
    )
  }
}


export default MainHandson

