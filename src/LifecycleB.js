import React, { Component } from 'react'


class LifecycleB extends Component{
    constructor(props){
    super(props)
    
    console.log('LifecycleB constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifecycleB componentDidmount");
    }
    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentupdate");
        return true;
    }
    componentDidUpdate(prevProps,prevState){
        console.log("LifecycleB componentDidUpdate");
    }



    render(){
        console.log('lifecycleB render');
        return(
            <div>
                <h2>LifecycleB</h2>
                
            </div>
        )
    }
}
export default LifecycleB