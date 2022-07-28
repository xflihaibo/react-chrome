import { Button, Tabs, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import CaseList from '@/components/caseslist/index.jsx';
import GlobalConfig from '@/components/globalconfig/index.jsx';
import NormalConfig from '@/components/normalconfig/index.jsx';
import { UseRedux } from '@/store/index.js';
import domtoimage from 'dom-to-image';
// import html2canvas from 'html2canvas';
import 'antd/dist/antd.css';
import '@/assert/tool.less';
import './index.less';

const { TabPane } = Tabs;

const Popup = () => {
	const handleFun = () => {
		// html2canvas(document.body).then(function (canvas) {
		//     document.body.appendChild(canvas);
		// });

		// let rootDom = document.getElementById('root');
		// console.log(rootDom);
		// let w = rootDom.offsetWidth;
		// let h = rootDom.offsetHeight;
		// html2canvas(rootDom, {
		//     //superMap整个页面的节点
		//     backgroundColor: '#fff', //画出来的图片有白色的边框,不要可设置背景为透明色（null）
		//     // useCORS: true, //支持图片跨域
		//     allowTaint: true,
		//     taintTest: false,
		//     // scale: window.devicePixelRatio, //设置放大的倍数
		//     width: w,
		//     height: h,
		//     scale: 4, //按比例增加分辨率 (2=双倍).
		//     dpi: window.devicePixelRatio * 4, //设备像素比
		// }).then((canvas) => {
		//     let img = new Image();
		//     img.src = canvas.toDataURL('image/png', 1.0); // toDataURL :图片格式转成 base64
		//     let link = document.createElement('a');
		//     link.download = 'my-image-name.jpeg';
		//     link.href = img.src;
		//     link.click();
		//     //
		//     //截图用img元素承装，显示在页面的上

		//     // this.imgUrl =img.src
		//     // //回传子组件base64
		//     // cab(this.imgUrl)
		//     //如果你需要下载截图，可以使用a标签进行下载
		//     // let a = document.createElement("a");
		//     // a.href = canvas.toDataURL("image/jpeg");
		//     // a.download = "test";
		//     // a.click();
		// });
		let rootDom = document.getElementById('root');
		console.log(domtoimage);
		let w = rootDom.offsetWidth;
		let h = rootDom.offsetHeight;
		const option = {
			width: w, // 高度宽度自行设定
			height: h,
			scale: 8, // 后面的字表示需要把一个像素转为几个像素
		};
		domtoimage.toPng(document.getElementById('root'), option).then(function (dataUrl) {
			var link = document.createElement('a');
			link.download = 'my-image-name.png';
			link.href = dataUrl;
			link.click();

			// console.log(blob);
			// window.saveAs(blob, 'my-node.png');
		});
	};
	const operations = (
		<Button size="small" type="primary" onClick={handleFun}>
			开始/停止12
		</Button>
	);
	return (
		<ConfigProvider locale={zhCN}>
			<UseRedux>
				<div className="popup">
					<Tabs tabBarExtraContent={operations}>
						<TabPane tab="设置用例" key="1">
							<CaseList />
						</TabPane>
						<TabPane tab="接口配置" key="2">
							<GlobalConfig />
						</TabPane>
						<TabPane tab="用例列表" key="3">
							<NormalConfig />
						</TabPane>
					</Tabs>
				</div>
			</UseRedux>
		</ConfigProvider>
	);
};

export default Popup;
