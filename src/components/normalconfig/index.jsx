import React, { useContext } from 'react';
import { ContainerContext } from '@/store/index.js';
import { Collapse, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ReactJson from 'react-json-view';
import './index.less';
const { Panel } = Collapse;

const my_json_object = {
	name: '12',
	age: '15',
	happy: ['music', 'eat'],
};

const NormalConfig = () => {
	const { Color, dataSoure, dispatch } = useContext(ContainerContext);

	const onChange = (key) => {
		console.log(key);
	};

	const handleEdit = (a) => {
		console.log(a);
	};
	const confirm = (e) => {
		e.stopPropagation();
	};
	const cancel = (e) => {
		e.stopPropagation();
	};
	const genExtra = () => (
		<Popconfirm title="删除当前用例可能会影响整个测试脚本" onConfirm={confirm} onCancel={cancel} okText="删除" cancelText="取消">
			<DeleteOutlined
				onClick={(event) => {
					event.stopPropagation();
				}}
			/>
		</Popconfirm>
	);

	return (
		<Collapse defaultActiveKey={['1']} onChange={onChange}>
			{Array.isArray(dataSoure) &&
				dataSoure.map((item, index) => {
					return (
						<Panel header={`测试用例${index + 1}`} key={index} extra={genExtra()}>
							<ReactJson
								name={false}
								indentWidth={2}
								quotesOnKeys={false}
								onEdit={handleEdit}
								displayDataTypes={false}
								src={item}
							/>
						</Panel>
					);
				})}
		</Collapse>
	);
};

export default NormalConfig;
