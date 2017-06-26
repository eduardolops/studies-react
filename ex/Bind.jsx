import React, { Component } from 'react'

class Bind extends Component {

    constructor(props){
        super(props)
        this.handlerChange = this.handlerChange
    }

    handlerChange(){
        this.setState({ value: initialValue })
    }

    render(){
        <div>
            <h3>this.state.value</h3>
            <input type="text" onChange="this.handlerChange" />
        </div>
    }

}

export default Bind