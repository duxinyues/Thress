import React,{Component} from 'react';
import Editor from 'for-editor';

class Edit extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChange(value) {
        this.setState({
            value
        });
        console.log(value)
    }

    render() {
        const { value } = this.state
        return (
            <div>
                <Editor value={value} onChange={this.handleChange.bind(this)} />
                <div>确认</div>
            </div>
            
        )
    }
}

export default Edit