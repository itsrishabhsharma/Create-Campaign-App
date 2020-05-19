import React, { Component , useState} from 'react'
import './style.css';

import {TuxHeader} from '../../Components/TuxHeader'
import { Layout , Button , Affix , Modal , Typography , Form , Select , Menu , InputNumber , Avatar , Checkbox , Row , Col , Divider , Tag , Descriptions , Radio , Input , DatePicker   } from 'antd';





import { UserOutlined } from '@ant-design/icons';

import { Statistic, Row1, Col1 } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

import { BulbOutlined } from '@ant-design/icons';







const { Paragraph } = Typography;

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}


const App = () => {
    const [dates, setDates] = useState([]);
    const disabledDate = current => {
      if (!dates || dates.length === 0) {
        return false;
      }
      const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
      const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
      return tooEarly || tooLate;
    };
  
    return (
      <RangePicker
        disabledDate={disabledDate}
        onCalendarChange={value => {
          setDates(value);
        }}
      />
    );
  };




const { Header, Footer, Sider, Content , Space, Card   } = Layout;

const { RangePicker } = DatePicker;

function onChanges(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  function onOk(value) {
    console.log('onOk: ', value);
  }


const { TextArea } = Input;

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }


  
function log(e) {
    console.log(e);
  }
  
function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }  

export default class index extends Component {

  constructor(props){
  super(props);
  this.state = { visible: false }
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


    render() {
        return (
            <div className="App">
        <Layout>
      <Header ></Header>
      <Layout>

      

        <Sider style={{background:'white'}} >
            <h3>Workflow Stages</h3> <br /><br />
            
            
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    

<Row>
      <Col span={8}>
        <Checkbox value="5">5</Checkbox>
      </Col></Row>
      {''}
      <Row>
          
      <Col span={8}>
        <Checkbox value="4">4</Checkbox>
      </Col></Row>
      
      {''}

      <Row>
      <Col span={8}>
        <Checkbox value="3">3</Checkbox>
      </Col></Row>

      {''}

      <Row>
      <Col span={8}>
        <Checkbox value="2">2</Checkbox>
      </Col></Row>

      {''}

      <Row>
      <Col span={8}>
        <Checkbox value="1">1</Checkbox>
      </Col></Row>

      

  </Checkbox.Group>

  <Divider />

  <h3>Categories</h3> <br /><br />

  <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
    {children}
  </Select>


  



            
            
        </Sider>
        
<Content >

    <div className="campaignb" >

      
     <Button type="primary" onClick={this.showModal}><h4>Create Campaign</h4></Button> 

     <Modal
          
          

          
          title="Basic Modal"
          
        
          visible={this.state.visible}

          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some content hi </p>
        </Modal>

     


</div>
               
<br />
<br />

<div className="topsection" >

      <span className="avatar" ><Avatar size="large" icon={<UserOutlined />} /></span>
        <span className="name"  >&nbsp;&nbsp; <b>Rishabh Sharma</b></span> 
        <span className="dandt">&nbsp;&nbsp; 15 may 2020, 22:00 pm </span>
      
      
    
</div>
<br />
<br />
<br />

<div className="midsection"> 

 <span className="desc"><b>It is a long established fact that a reader will be
  distracted by the readable It is a long
  established fact that a reader will be distracted.It is a long established fact that a reader will be
  distracted . fact that a reader will be distracted fact that a reader.</b></span>

</div>

<br />
<br />
<br />

<div className="bottomsection" >

      <span className="likesandideas" >
        
      <Descriptions.Item label="LikesandIdeas">
        
        
        <Row gutter={12}>
        <Col span={8}>
          <Statistic title="" value={1908} prefix={<LikeOutlined />} />
    
        </Col>

        <Col span={8}>
          <Statistic title="" value={1200} prefix={<BulbOutlined /> 
} />
        </Col>

        
      </Row>
      
       </Descriptions.Item>
       </span>



       
      
      
    
</div>

 
  <br />
  <br />
  <Divider />
  <br />
  <br />




  <br />
<br />

<div className="topsection" >

      <span className="avatar" ><Avatar size="large" icon={<UserOutlined />} /></span>
        <span className="name"  >&nbsp;&nbsp; <b>Lionel Messi</b></span> 
        <span className="dandt">&nbsp;&nbsp; 15 may 2020, 22:00 pm </span>
      
      
    
</div>
<br />
<br />
<br />

<div className="midsection"> 

 <span className="desc"><b>It is a long established fact that a reader will be
  distracted by the readable It is a long
  established fact that a reader will be distracted.It is a long established fact that a reader will be
  distracted . fact that a reader will be distracted fact that a reader.</b></span>

</div>

<br />
<br />
<br />

<div className="bottomsection" >

      <span className="likesandideas" >
        
      <Descriptions.Item label="LikesandIdeas">
        
        
        <Row gutter={12}>
        <Col span={8}>
          <Statistic title="" value={1676} prefix={<LikeOutlined />} />
    
        </Col>

        <Col span={8}>
          <Statistic title="" value={1890} prefix={<BulbOutlined /> 
} />
        </Col>

        
      </Row>
      
       </Descriptions.Item>
       </span>



       
      
      
    
</div>

 
  <br />
  <br />
  <Divider />
  <br />
  <br />


  <br />
<br />

<div className="topsection" >

      <span className="avatar" ><Avatar size="large" icon={<UserOutlined />} /></span>
        <span className="name"  >&nbsp;&nbsp; <b>Cristiano Ronaldo</b></span> 
        <span className="dandt">&nbsp;&nbsp; 15 may 2020, 22:00 pm </span>
      
      
    
</div>
<br />
<br />
<br />

<div className="midsection"> 

 <span className="desc"><b>It is a long established fact that a reader will be
  distracted by the readable It is a long
  established fact that a reader will be distracted.It is a long established fact that a reader will be
  distracted . fact that a reader will be distracted fact that a reader.</b></span>

</div>

<br />
<br />
<br />

<div className="bottomsection" >

      <span className="likesandideas" >
        
      <Descriptions.Item label="LikesandIdeas">
        
        
        <Row gutter={12}>
        <Col span={8}>
          <Statistic title="" value={1200} prefix={<LikeOutlined />} />
    
        </Col>

        <Col span={8}>
          <Statistic title="" value={1700} prefix={<BulbOutlined /> 
} />
        </Col>

        
      </Row>
      
       </Descriptions.Item>
       </span>



       
      
      
    
</div>

 
  <br />
  <br />
  <Divider />
  <br />
  <br />


</Content>

        <Sider style={{background:'white'}}><h3>Trending <br /> Campaigns</h3>
        
        <Divider />
            {
            [
                {
                    name:"Ramesh",
                    date:"12-05-2020"
                },
                {
                    name:"Sujish",
                    date:"12-05-2020"
                },
                {
                    name:"John",
                    date:"13-05-2020"
                },
                {
                    name:"Mark",
                    date:"15-05-2020"
                },
                {
                    name:"Josh",
                    date:"14-05-2020"
                }
                
            ].map((itm,key)=>{
                return <>
               <div>
            <span><b><u>{itm.name}</u></b></span><br />
            <span>{itm.date}</span>
               </div>

     <Divider />
                </>
            })
            }
        

        

        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
        
    }
}
