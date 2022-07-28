import { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Select, Button } from 'antd';
import { AssertConfig, ActionTypeConfig, AssertTypeConfig, keyCodeConfig, RegionActionConfig } from '@/config/index.js';
import './index.less';

const { Option } = Select;
const rowDta = {
	labelCol: { xs: { span: 6 }, sm: { span: 6 } },
	wrapperCol: { xs: { span: 16 }, sm: { span: 16 } },
};

const CaseList = () => {
	const [form] = Form.useForm();
	const [typecode, setTypecode] = useState('');
	const setData = () => {
		form.setFieldsValue({
			url: 'http://www.xxx.com/',
			date: 1651213920952,
			xpath: '//*[@id="callus"]/div/div/div[2]/p[4]/span',
			pageX: 856,
			pageY: 4068,
			clientX: 856,
			clientY: 566,
			selector: 'div#callus > div.icallusbox > div.imodel > div.imodelchild > p > span.one',
			iframe: '',
			indexNum: 9,
			innerHtml: '你好',
			localName: 'span',
			localNameType: '',
			type: 'assert',
			x: 29,
			y: 468,
			assertions: {
				name: 'class',
				value: 'one oneact',
				action: 'include',
			},
		});
	};
	useEffect(() => {
		setData();
	}, []);

	const handleSave = () => {
		let res = form.getFieldValue();
		console.log(res);
	};
	const onTypeChange = (e) => {
		setTypecode(e);
		if (e === 'screenshot') {
			//截图
		} else if (e === 'variable') {
			//生成变量
		}
	};

	console.log(form.getFieldValue('type'));
	console.log(form.getFieldError());
	//路径修改 节点名称需要修改
	// 动作 变化关联 断言 生成变量、 截图 操作 快捷键
	const handleFill = () => {};
	return (
		<div className="nio-from-container">
			<Button onClick={handleFill} className="suiji">
				随机填充值
			</Button>
			<Form {...rowDta} form={form} layout="horizontal">
				<Form.Item label="文本操作" name="innerHtml">
					<Input placeholder="请输入延迟文本操作" />
				</Form.Item>
				<Form.Item label="路径" name="xpath">
					<Input placeholder="请输入延迟路径" />
				</Form.Item>
				<Form.Item label="节点元素" name="localName">
					<Input placeholder="请输入延迟节点元素" />
				</Form.Item>
				<Form.Item label="动作" name="type">
					<Select placeholder="请选择动作" onChange={onTypeChange}>
						{ActionTypeConfig.map((item) => (
							<Option key={item.value} value={item.value}>
								{item.name}
							</Option>
						))}
					</Select>
				</Form.Item>
				{typecode === 'keyCode' && (
					<Form.Item label="快捷键名称" name={'code'}>
						<Select placeholder="请选择快捷键名称">
							{keyCodeConfig.map((item) => (
								<Option key={item.value}>{item.name}</Option>
							))}
						</Select>
					</Form.Item>
				)}
				{typecode === 'delay' && (
					<Form.Item label="延迟时间" name={'delay'}>
						<InputNumber bordered={false} min={0} max={60000} placeholder="请输入延迟时间(ms)" />
					</Form.Item>
				)}
				{['assert', 'region'].includes(typecode) && (
					<>
						{['region'].includes(typecode) && (
							<Form.Item label="模式" name={['assertions', 'mode']}>
								<Select placeholder="请选择模式">
									{RegionActionConfig.map((item) => (
										<Option key={item.value}>{item.name}</Option>
									))}
								</Select>
							</Form.Item>
						)}

						<Form.Item label="属性" name={['assertions', 'name']}>
							<Select placeholder="请选择属性">
								{AssertTypeConfig.map((item) => (
									<Option key={item.value}>{item.name}</Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item label="名称" name={['assertions', 'value']}>
							<Input placeholder="请输入名称" />
						</Form.Item>
						<Form.Item label="断言方式" name={['assertions', 'action']}>
							<Select placeholder="请选择断言方式">
								{AssertConfig.map((item) => (
									<Option key={item.value} value={item.value}>
										{item.name}
									</Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item label="期望值" name={['assertions', 'value']}>
							<Input placeholder="请输入期望值" />
						</Form.Item>
					</>
				)}
			</Form>
			<Button type="primary" block onClick={handleSave}>
				保存
			</Button>
		</div>
	);
};

export default CaseList;
