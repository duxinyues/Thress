import React,{Component} from 'react';
import marked from 'marked';
class Edit extends Component{
    render(){
        return(
            <div key='header'>
            sdgdfhbjdfb
                <input type="text" placeholder="输入文章标题..." spellCheck="false" />
            </div> ,
            <div key='main'>
                <div>
                    <div contentEditable="plaintext-only"></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Edit