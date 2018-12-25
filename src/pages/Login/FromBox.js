import React,{Component} from 'react';
import {Form,Input,Button} from 'antd';
import GVrify from '../../utils/gVerify';
const FormItem = Form.Item

class FormBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
    }
   
    componentDidMount() {
        this.vrifyCode = new GVrify('v_container')
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        // let {changeLoading} = this.props;
        let {form} = this.props
        this.props.submit(form)
    }
    render(){
        const {getFieldDecorator} = this.props.form
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormItem className="formRow user">
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名' }]
                    })(
                        <Input placeholder="username" className="input_text input-big" />
                    )}
                </FormItem>
                <FormItem className="formRow password">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }]
                    })(
                        <Input type='password' placeholder='password' className="input_text input-big" />
                    )}
                </FormItem>
                <FormItem className="formRow verif">
                    {getFieldDecorator('verification', {
                        validateFirst: true,
                        rules: [
                            { required: true, message: '请输入验证码' },
                            {
                                validator: (rule, value, callback) => {
                                    if (!this.vrifyCode.validate(value)) {
                                        callback('验证码错误')
                                    }
                                    callback()
                                }
                            }
                        ]
                    })(
                        <Input className="input_text input-big" type="text" placeholder="验证码" style={{ width: '115px' }} />
                    )}
                    <div id='v_container'></div> 
                </FormItem>
                    <FormItem className="formRow">
                    <Button type="submit" htmlType="submit" className="btn radius btn-success btn-big">
                            &nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;
                            </Button>
                    </FormItem>
            </Form>
        )
    }
}

export default Form.create()(FormBox)