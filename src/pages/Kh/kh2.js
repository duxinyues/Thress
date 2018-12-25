import React, { Component } from 'react'
import { Table, Layout} from 'antd';
import reqwest from 'reqwest';
const column1 = [{
    title: 'Name',
    dataIndex: 'name',
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
}];
class Kh2 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            pagination:{},
            loading:false,
        }
    }
    componentDidMount(){
        this.fetch()
    }
    fetch = (params = {})=>{
        reqwest({
            url:'https://randomuser.me/api',
            methods:'get',
            data:{
                results:10,
                ...params
            },
            type:'json'
        }).then((data)=>{
            console.log(data.results)
            const pagination = { ...this.state.pagination };
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,});
        });
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }
    render(){
        return(
            <Layout>
                <Table 
                    columns={column1} 
                    rowKey={record => record.login.uuid}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </Layout>
        )
    }
}
export default Kh2