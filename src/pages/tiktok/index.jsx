import { Tabs, Button, Table, Modal, Form, Input, Popconfirm  } from 'antd';
import { useState } from 'react';
import style from './tiktok.module.scss'

const TikTok = () => {
    const items = [
        {
            label: '抖音企业号',
            key: 'tiktok',
            children: <TabContentTikTok/>
        }
    ]
    return <div>
       <Tabs items={items} type='card'/>
    </div>
}

const TabContentTikTok = () => {
    const data = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];
      
      const columns = [
        {
          title: '抖音昵称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '抖音账号',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '绑定手机',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: '绑定时间',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '失效时间',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '认证状态',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '运营状态',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            fixed: 'right',
            width: 200,
            key: 'action',
            render: (_, record) => {
                return <p className={style.actionButton}>
                     <Button type="link" onClick={() => showConfigModal(record)}>应用配置</Button>
                     <Popconfirm
                        title="删除账号"
                        description="确定删除改账号?"
                        okText="确定"
                        cancelText="取消"
                        onConfirm={() => onConfirmDelete(record)}
                      >
                      <Button type="link">删除</Button>
                    </Popconfirm>
                </p>
            }
        },
      ];

      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => { setIsModalOpen(true); };
      const handleCancel = () => { setIsModalOpen(false); };

      const [configModalOpen, setConfigModalOpen] = useState(false);
      const [form] = Form.useForm();
      const showConfigModal = (record) => {
        setConfigModalOpen(true);
        form.setFieldsValue(record);
      }
      const handleConfigModal = () => { setConfigModalOpen(false); }
      const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onConfirmDelete = (record) => {
        console.log(record)
      }

    return <div className={style.tiktokContent}>
        <p className={style.button}><Button onClick={showModal}>抖音企业号授权</Button></p>

        <Table columns={columns} dataSource={data} pagination={false} scroll={{y: 800, x: 1500}} />

        <Modal title="请扫码授权" open={isModalOpen} onCancel={handleCancel} footer={null} >
          <p>接入抖音授权界面</p>
        </Modal>

        <Modal title="应用配置" open={configModalOpen} onCancel={handleConfigModal} footer={null} >
          <Form form={form} labelCol={{ span: 6, }} wrapperCol={{ span: 18, }} onFinish={onFinish} >
            <Form.Item label="抖音昵称" shouldUpdate >
              {() => <p style={{margin: 0}}>{form.getFieldValue('name')}</p>}
            </Form.Item>
            <Form.Item label="抖音账号" shouldUpdate >
              {() => <p style={{margin: 0}}>{form.getFieldValue('name')}</p>}
            </Form.Item>
            <Form.Item label="绑定手机号" name="name" rules={[ { required: true, message: '请输入手机号', }, ]} >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10, span: 14, }} >
              <Button type="primary" htmlType="submit"> 保存 </Button>
            </Form.Item>
          </Form>
        </Modal>
    </div>
}

export default TikTok;