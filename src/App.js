import { Button,Tabs } from 'antd';
import CaseList from './components/caseslist/index.jsx';
import GlobalConfig from './components/globalconfig/index.jsx';
import NormalConfig from './components/normalconfig/index.jsx';
import 'antd/dist/antd.css';
import './app.less'

const { TabPane } = Tabs;

function App() {
  const operations=<Button type="primary">开始/停止</Button>

  return (
    <div className="App">
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="用例列表" key="1">
          <CaseList />
        </TabPane>
        <TabPane tab="高级配置" key="2">
         <GlobalConfig />
        </TabPane>
        <TabPane tab="普通配置" key="3">
          <NormalConfig />
        </TabPane>
      </Tabs>      
    </div>
  );
}

export default App;
