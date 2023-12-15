import React, { Component } from 'react'
import LifecycleB from './LifecycleB';


class LifecycleA extends Component{
    constructor(props){
    super(props)
    this.state={
        count:0
    }
    console.log('LifecycleA constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifecycleA componentDidmount");
    }
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentupdate");
        return true;
    }
    componentDidUpdate(prevProps,prevState){
        console.log("LifecycleA componentDidUpdate");
    }
changeState=()=>{
    this.setState({
        count:this.state.count+1
    })
}

changeDecrement=()=>{
    this.setState({
            count:this.state.count>0?this.state.count-1:0
    })
}

    render(){
        console.log('lifecycleA render');
        return(
            <div>
                <h2>lifecycleA</h2>
                <div className='count'>
                <h1>{this.state.count}</h1>
                <button className='incre-btn' onClick={this.changeState}>Increment</button>
                <button className='incre-btn' onClick={this.changeDecrement}>Decrement</button>
                </div>
                <LifecycleB/>
            </div>
        )
    }
}
export default LifecycleA