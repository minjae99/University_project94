import React from 'react';
import 'antd/dist/antd.css';
import { Card, InputNumber, Typography, Form, Button, Col, Row } from 'antd';

const { Title } = Typography;

const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

const formItemLayout = {
  labelCol: {
    span: 11,
    margin: 0
  },
  wrapperCol: {
    span: 2,
  },
};

const buttonItemLayout = {
  wrapperCol: {
    span: 14,
    offset: 4,
  },
};

// 스탯 sat
// hp,mp hm
// DF point
// 크확 cir
// 크뎀 cird
// 방무,뎀 dmg
// 보공 bdmg
// 상태이상 
// 스탠스 stans
// 공마
// 경험치
// 아케인포스

//const pointVal = [0,1,2,4,8,10,15,20,25,30,35,50,65,80,95,110];
const pointVal = [0,1,3,7,15,25,40,60,85,115,150,200,265,345,440,550];

class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      point: 3,
      level: 140,
      columns: [
        {
          title: 'STR',
          val: 0,
          type: "sat"
        },
        {
          title: 'DEX',
          val: 0,
          type: "sat"
        },
        {
          title: 'INT',
          val: 0,
          type: "sat"
        },
        {
          title: 'LUK',
          val: 0,
          type: "sat"
        },
        {
          title: 'HP',
          val: 0,
          type: "hm"
        },
        {
          title: 'MP',
          val: 0,
          type: "hm"
        },
        {
          title: 'DF/TF/PP',
          val: 0,
          type: "point",
          max: 10
        },
        {
          title: '크리티컬 확률',
          val: 0,
          type: "cir"
        },
        {
          title: '크리티컬 데미지',
          val: 0,
          type: "cird"
        },
        {
          title: '방어율 무시',
          val: 0,
          type: "dmg"
        },
        {
          title: '데미지',
          val: 0,
          type: "dmg"
        },
        {
          title: '보스데미지',
          val: 0,
          type: "bdmg"
        },
        {
          title: '상태이상내성',
          val: 0,
          type: "tolerance"
        },
        {
          title: '스탠스',
          val: 0,
          type: "hm",
          max: 10
        },
        {
          title: '공격력 / 마력',
          val: 0,
          type: "att"
        },
        {
          title: '획득 경험치',
          val: 0,
          type: "exp"
        },
        {
          title: '아케인포스',
          val: 0,
          type: "arcane"
        },
      ],
    };

  }
  
  handleChange(title, val) {
    const columns = this.state.columns;
        
    columns.some(data => {
      if (data.title === title) {
        data.val = val;
      }
      return data.title === title;
    })

    this.setState({
      columns : columns
    }, () => this.setPoint());
  }
  
  handleChangeLevel(val) {
    this.setState({
      level : val
    }, () => this.setPoint());
  }

  initVal() {
    let {columns} = this.state;
    
    columns.forEach(data => {
      data.val = 0;
    })
    
    this.setState({
      columns : columns
    }, () => this.setPoint());
  }

  setPoint() {
    let {columns, point, level} = this.state;

    level = level - 139;
    point = 0;
    
    for(let i = 0; i < level; i ++) {
      point += (3 + parseInt((i) / 10));
    }

    columns.forEach(data => {
      point -= pointVal[data.val];
    });

    this.setState({
      point : point
    });
  }

  columnString(data) {
    // 스탯 sat
    // hp,mp hm
    // DF point
    // 크확 cir
    // 크뎀 cird
    // 방무,뎀 dmg
    // 보공 bdmg
    // 상태이상 tolerance
    // 공마 att
    // 경험치 exp
    // 아케인포스 arcane
    let str = "";

    if( data.type === "sat" )
    {
      str = data.title + " " + (data.val * 30);
    }
    else if( data.type === "hm" )
    {
      str = data.title + " " + (data.val * 2) + "%";
    }
    else if( data.type === "point" )
    {
      str = `최대 데몬 포스/타임 포스 ${data.val * 10}
      최대 싸이킥 포인트 ${data.val}`;
      //str = "최대 데몬 포스/타임 포스 " + (data.val * 10) + "\n" + "최대 싸이킥 포인트 " + data.val;
    }
    else if( data.type === "cir" )
    {
      let val = data.val;
      if( val > 5 ) {
        val = 5 + ((val - 5) * 2);
      }
      str = data.title + " " + (val) + "%";
    }
    else if( data.type === "cird" )
    {
      str = data.title + " " + data.val + "%";
    }
    else if( data.type === "dmg" )
    {
      str = data.title + " " + (data.val * 3) + "%";
    }
    else if( data.type === "bdmg" )
    {      
      let val = data.val;
      if( data.val > 5 ) {
        val = 15 + ((val - 5) * 4);
      }
      else {
        val = (val * 3);
      }
      str = data.title + " " + (val) + "%";
    }
    else if( data.type === "tolerance" )
    {
      let val = data.val;
      if( val > 5 ) {
        val = 5 + ((val - 5) * 2);
      }
      str = data.title + " " + (val);
    }
    else if( data.type === "att" )
    {
      str = "공격력/마력 " + (data.val * 3);
    }
    else if( data.type === "exp" )
    {
      let val = data.val * 0.5;
      if( data.val > 10 ) {
        val = 5 + ((data.val - 10) * 1);
      }
      str = data.title + " " + (val) + "%";
    }

    else if( data.type === "arcane" )
    {
      let val = data.val * 5;
      if( data.val > 10 ) {
        val = 50 + ((data.val - 10) * 10);
      }
      str = data.title + " " + (val);
    }

    return str;
  }

  render() {
    const { formLayout, columns, point } = this.state;

    return (
      <div className="">
        <Card title="하이퍼 스탯 시뮬레이터" style={{ textAlign: 'center' }} >
          <Card.Grid hoverable={false} style={gridStyle}>
            <div>레벨 <InputNumber defaultValue={140} min={140} max={300} onChange={this.handleChangeLevel.bind(this)} /> </div>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <div>남은 포인트 <InputNumber value={point} readOnly /> </div>
          </Card.Grid>
          <Row gutter={24} >
            <Col span={12}>
              <Form
                {...formItemLayout}
                layout={formLayout}
                initialValues={{
                  layout: formLayout,
                }}
              >
                {
                  columns.map(data => <Form.Item label={data.title} style={{marginBottom:"4px"}}>
                    <InputNumber value={data.val} min={0} max={data.max ? data.max : 15} onChange={this.handleChange.bind(this, data.title)}
                       />
                  </Form.Item>)
                }
                <Form.Item {...buttonItemLayout} style={{margin:"8px"}}>
                  <Button type="primary" onClick={this.initVal.bind(this)}>초기화</Button>
                </Form.Item>
              </Form>

            </Col>
            <Col span={12}>

              <Title level={2} type="success">결과</Title>
              {
                  columns.map(data => data.val > 0 && <Title level={5} style={{margin:"4px"}}>{this.columnString(data)}</Title>)
              }
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Update;
