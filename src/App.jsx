import React, { Component } from "react";
import "./App.css";
import headSrc from "./assets/head.jpeg";
import tailSrc from "./assets/tail.jpeg";
import Coin from "./component/coin";
class App extends Component {
  state ={
    sourceArray:[headSrc, tailSrc],
    activeSrc : -1,
    total:0,
    head:0,
    tail:0
  }
  handleClick =()=>{
  //  tạo ra 1 số ngẫu nhiên
  let number = Math.floor(Math.random()*2);
  if(number===0){
    this.setState({
      activeSrc:number,
      total: this.state.total+1,
      head: this.state.head+1

    })
  }else{
    this.setState({
      activeSrc:number,
      total: this.state.total+1,
      tail : this.state.tail +1
    })
  }
 
  
  }
  render() {
    return (
      <>
        <h1>Let's flip a coin</h1>
        {
          this.state.activeSrc!== -1 ?(
        <div className="coin">
       <Coin src ={this.state.sourceArray[this.state.activeSrc]} alt ="Head"/>
        </div>
          ) :""
        }
        
        <button onClick={this.handleClick}>Flip MEEE!!!</button>
        <p>Out of <span>{this.state.total} </span>flips, there have been <span>{this.state.head}</span> heads 
        and <span>{this.state.tail}</span> tails</p>
      </>
    );
  }
}

export default App;
