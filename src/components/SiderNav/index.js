import React, { Component } from 'react';
import CustomMenu from "../CustomMenu/index";
import menus from '../../config/menu.js';
class SiderNav extends Component {
    
    render() {
        return (
           <div className="Hui-aside" style={{color:'#fff',height:'100vh'}}>
                <CustomMenu menus={menus}/>
           </div>
        )
    }
}
export default SiderNav