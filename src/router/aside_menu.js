export default [{
	path: '/DashBoard',
	component: () => import('@/components/page-content/dashboard/DashBoardView.vue'),
	meta: {
		title: '统计面板',
		icon: 'iconfont icon-tachometer-alt'
	}
},

{
	path: '/ClientList',
	components: () => import("@/components/page-content/client-manager/ClientManagerView.vue"),
	meta: {
		title: '客户管理',
		icon: 'iconfont icon-cog'
	},
	children: [{
		path: '/ClientList',
		component: () => import("@/components/page-content/client-manager/ClientManagerView.vue"),
		meta: {
			title: '客户列表',
		},
	}]
},

{
	path: '/InOutWarehouse',
	components: () => import("@/components/page-content/InOutWarehouse/operate/InWarehouseView.vue"),
	meta: {
		title: '进出库管理',
		icon: 'iconfont icon-cog'
	},
	children: [{
		path: '/WarehouseOperate',
		component: () => import("@/components/page-content/InOutWarehouse/operate/InWarehouseView.vue"),
		meta: {
			title: '进出库操作',
		}
	},
	{
		path: '/WarehouseAnalyze',
		component: () => import("@/components/page-content/InOutWarehouse/analyze/WarehouseAnalyzeView.vue"),
		meta: {
			title: '进出库分析',
		},
	}
	]
},

{
	path: '/CostManager',
	components: () => import("@/components/page-content/CostManager/CostManagerView.vue"),
	meta: {
		title: '费用管理',
		icon: 'iconfont icon-cog'
	},
	children: [{
		path: '/CostList',
		component: () => import("@/components/page-content/CostManager/CostManagerView.vue"),
		meta: {
			title: '费用列表',
		},
	}]
},

{
	path: '/AppointmentManager',
	components: () => import("@/components/page-content/book-manager/BookList.vue"),
	meta: {
		title: '预约管理',
		icon: 'iconfont icon-cog'
	},
	children: [{
		path: '/AppointmentList',
		component: () => import("@/components/page-content/book-manager/BookList.vue"),
		meta: {
			title: '预约列表',
		},
	}]
},

{
	path: '/SystemManager',
	components: () => import("@/components/page-content/SystemManager/UserManagerView.vue"),
	meta: {
		title: '系统管理',
		icon: 'iconfont icon-cog'
	},
	children: [{
		path: '/UserManager',
		component: () => import("@/components/page-content/SystemManager/UserManagerView.vue"),
		meta: {
			title: '用户管理',
		},
	},
	{
		path: '/WarehouseManager',
		component: () => import("@/components/page-content/SystemManager/WarehouseManagerView.vue"),
		meta: {
			title: '基础设置',
		},
	},
	{
		path: '/OperateManager',
		component: () => import("@/components/page-content/SystemManager/OperateManagerView.vue"),
		meta: {
			title: '操作记录',
		},
	}

	]
},
]
