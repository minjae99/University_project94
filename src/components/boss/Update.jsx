import React, { useContext, useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Input, Button, Popconfirm, Form, Checkbox } from 'antd';
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '이름(직업)',
        dataIndex: 'name',
        width: '15%',
        editable: true,
      },
      {
        title: '보스여부',
        dataIndex: 'boss',
        align: 'center',
        render: (_, record) => <Checkbox checked={record.boss} onClick={() => this.handleCheck(record.key, "boss")} value="checkbox"></Checkbox>,
      },
      {
        title: '노블여부',
        dataIndex: 'nobless',
        align: 'center',
        render: (_, record) => <Checkbox checked={record.nobless} onClick={() => this.handleCheck(record.key, "nobless")} value="checkbox"></Checkbox>,
      },
      {
        title: '간단메모',
        dataIndex: 'msg',
        width: '68%',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a href="#/">Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];

    //localStorage.removeItem("mj_boss_data");
    let dataSource = JSON.parse(localStorage.getItem("mj_boss_data"));
    let count = parseInt(localStorage.getItem("mj_boss_conut"));

    if (dataSource === null) {
      dataSource = [{
        key: 0,
        name: "Ex) 짱센일리움(일리움)",
        boss: false,
        nobless: false,
        msg: "Ex) 다양한 활용, 심볼(8,1,1), 일퀘진행, 보안점 등등 기록 가능!"
      }];
      count = 1;
    }

    this.state = {
      dataSource: dataSource,
      count: count,
    };
  }

  handleCheck = (key, dataIndex) => {
    const dataSource = [...this.state.dataSource];

    dataSource.some(data => {
      if (data.key === key) {
        data[dataIndex] = !data[dataIndex];
      }
      return data.key === key;
    })

    localStorage.setItem("mj_boss_data", JSON.stringify(dataSource));
    this.setState({
      dataSource: dataSource,
    });
  };

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];

    localStorage.setItem("mj_boss_data", JSON.stringify(dataSource.filter((item) => item.key !== key)));
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      //name: `Edward King ${count}`,
      name: "",
      boss: false,
      nobless: false,
      msg: ""
    };

    localStorage.setItem("mj_boss_data", JSON.stringify([...dataSource, newData]));
    localStorage.setItem("mj_boss_conut", count + 1);
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleInitBoss = (key) => {
    const dataSource = [...this.state.dataSource];

    dataSource.forEach(data => {
      data.boss = false;
    })

    localStorage.setItem("mj_boss_data", JSON.stringify(dataSource));
    this.setState({
      dataSource: dataSource,
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });

    console.log(JSON.stringify(newData));

    localStorage.setItem("mj_boss_data", JSON.stringify(newData));
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
            marginRight: 16,
          }}
        >
          보돌 추가
        </Button>

        <Popconfirm title="보스여부를 초기화 합니까?" onConfirm={() => this.handleInitBoss()}>
          <Button
            type="primary"
            style={{
              marginBottom: 16,
              marginRight: 16,
            }}
          >
            보스여부 초기화
          </Button>
        </Popconfirm>

        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

export default Update;
