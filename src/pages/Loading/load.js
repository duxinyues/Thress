import React,{Component} from 'react';
import bodymovin from 'bodymovin';

class Loading extends Component{
    componentDidMount(){
        const animData = {
            wrapper:document.querySelector('#load'),
            animType:'svg',
            loop:true,
            prerender:true,
            autoplay:true,
            animationData:require('./data/data.json')
        };
        this.anim = bodymovin.loadAnimation(animData);
        this.anim.setSpeed(1.45)
    }
    componentWillUnmount(){
        this.anim =null
    }
    render(){
        return(
            <div style={{width:'100%',height:'100%'}}>
                <div id="load" style={{width:'100%',height:'100%'}} />
            </div>
        )
    }
}
export default Loading