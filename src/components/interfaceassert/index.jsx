import React from 'react';
import { Modal, Input, Form, Select } from 'antd';
import './index.less';
const { Option } = Select;
const InterfaceAssert = ({ handelCancel }) => {
    const [form] = Form.useForm();
    const handleOk = async () => {
        const values = await form.validateFields();
        console.log(values);
    };

    return (
        <Modal
            width={350}
            visible={true}
            title="设置接口变量"
            onOk={handleOk}
            maskClosable={false}
            destroyOnClose={true}
            onCancel={handelCancel}
            className=""
        >
            <Form form={form}>
                <Form.Item name={'key'} label="键">
                    <Input />
                </Form.Item>
                <Form.Item name={'variable'} label="断言方式">
                    <Select allowClear={true} style={{ width: 230 }} placeholder="请选择断言方式">
                        <Option value={'12'} key={'12'}>
                            12
                        </Option>
                    </Select>
                </Form.Item>
                <Form.Item name={'value'} label="值">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default InterfaceAssert;
