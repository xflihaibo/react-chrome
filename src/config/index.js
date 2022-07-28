//测试用例动作
export const ActionTypeConfig = [
	// { value: 'start', name: '打开页面' },
	// { value: 'replaceTap', name: '打开tab页面' },
	{ value: 'click', name: '点击事件' },
	{ value: 'change', name: '表单操作' },
	{ value: 'hover', name: 'hover事件' },
	{ value: 'dbclick', name: '双击事件' },
	{ value: 'scroll', name: '区域滚动事件' },
	{ value: 'keyCode', name: '快捷键事件' },
	{ value: 'variable', name: '生成变量' },
	// { value: 'replacePage', name: '刷新页面' },
	{ value: 'select', name: '下拉操作' },
	// { value: 'scrollWin', name: '滚动页面' },
	// { value: 'api', name: '接口断言' },
	{ value: 'assert', name: '断言操作' },
	{ value: 'delay', name: '延迟处理' },
	{ value: 'screenshot', name: '网页截图' },
	{ value: 'region', name: '选中区域' },
];

//断言方式
export const AssertConfig = [
	{ name: '不包含', value: 'exclude' },
	{ name: '包含', value: 'include' },
	{ name: '大于', value: 'greater' },
	{ name: '等于', value: 'equal' },
	{ name: '小于', value: 'less' },
	{ name: '为空', value: 'empty' },
	{ name: '不为空', value: 'notEmpty' },
];

//区域范围操作信息
export const RegionActionConfig = [
	{ value: 'delay', name: '等待结果出现' },
	{ value: 'find', name: '查找' },
	// { value: 'delect', name: '删除' },
	// { value: 'replace', name: '替换' },
	// { value: 'assert', name: '断言' },
];

//断言类型
export const AssertTypeConfig = [
	{ value: 'class', name: '样式' },
	{ value: 'attr', name: '属性' },
	{ value: 'text', name: '文本' },
];

//快捷键
export const keyCodeConfig = [
	{ value: 'Backspace', name: '退格(Backspace)' },
	{ value: 'Enter', name: '回车(Enter)' },
	{ value: 'Escape', name: '取消(ESC)' },
	{ value: 'ArrowUp', name: '上(Up)' },
	{ value: 'ArrowDown', name: '下(Down)' },
	{ value: 'ArrowLeft', name: '左(Left)' },
	{ value: 'ArrowRight', name: '右(Right)' },
];
