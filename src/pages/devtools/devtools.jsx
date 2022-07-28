import React, { useEffect } from 'react';
import { chromeListenerRequest, chromePanelAdd } from '@/chrome/index';
import './index.less';

const DevTools = () => {
	useEffect(() => {
		chromeListenerRequest();
		chromePanelAdd();
	}, []);
	return (
		<div>
			<h1> hello devTool</h1>
		</div>
	);
};

export default DevTools;
