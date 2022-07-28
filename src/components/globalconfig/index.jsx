import React, { useState } from 'react';
import { Collapse } from 'antd';
import InterfaceAssert from '../interfaceassert';
import './index.less';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const GlobalConfig = () => {
	const [item, setItem] = useState({});
	const onChange = (key) => {
		console.log(key);
	};

	const handelCancel = () => {
		setItem({});
	};

	const handleAssertFun = () => {
		setItem({ name: '张三' });
	};
	return (
		<div>
			<Collapse defaultActiveKey={['1']} onChange={onChange}>
				<Panel header="This is panel header 1" key="1">
					<p onClick={handleAssertFun}>{text}</p>
				</Panel>
				<Panel header="This is panel header 2" key="2">
					<p onClick={handleAssertFun}>{text}</p>
				</Panel>
				<Panel header="This is panel header 3" key="3">
					<p onClick={handleAssertFun}>{text}</p>
				</Panel>
			</Collapse>
			{item.name && <InterfaceAssert handelCancel={handelCancel} />}
		</div>
	);
};

export default GlobalConfig;
