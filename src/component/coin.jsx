import React, { Component } from 'react'
class Coin extends Component {

    render() { 
        let {src, alt}=this.props
        return ( 
            <img src={src} alt={alt}></img>
         );
    }
}
 
export default Coin;