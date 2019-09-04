var config = {};

config.bread = {
    attr: {},
    items: [
        {
            tag: 'span',
            text: '首页'
        },
        {
            tag: 'span',
            text: '列表页'
        },
        {
            tag: 'span',
            text: '详情页'
        }
    ]
}

config.form = {
    attr: {
        name: 'detailForm',
        action: 'https://www.luckincoffee.com/',
        method: 'post'
    },
    ajax: { // 如果有需要，这里配置上回显的 ajax 请求即可自动回显

    }
};

config.form.items = [
    {
        tag: 'input',
        label: '用户名',
        attr: {
            name: 'username'
        }
    },
    {
        tag: 'input', // 文本框
        label: '用户昵称',
        attr: {
            name: 'nickname'
        }
    },
    {
        tag: 'group', // 单选 radio
        label: '用户性别',
        items: [
            {
                tag: 'input',
                label: '女',
                attr: {
                    type: 'radio',
                    name: 'sex',
                    value: 1
                }
            },
            {
                tag: 'input',
                label: '男',
                attr: {
                    type: 'radio',
                    name: 'sex',
                    value: 2
                }
            }
        ]
    },
    {
        tag: 'select', // 单选列表
        label: '状态',
        attr: {
            name: 'status'
        },
        options: [
            {
                text: '全部',
                value: '-1'
            },
            {
                text: '正常',
                value: '1'
            },
            {
                text: '禁用',
                value: '2'
            }
        ]
    }
];
// 分开编写：增加一个 blocks
config.form.blocks = [];

// 分开编写：第一个块放表单元素
config.form.blocks[0] = {
    attr: {
        title: '我是一个表单块',
        columns: 2 // 让这里布局成 2 列
    },
    items: [
        {
            tag: 'input', // 文本框
            label: '用户名',
            attr: {
                name: 'username'
            }
        },
        {
            tag: 'input', // 文本框
            label: '用户昵称',
            attr: {
                name: 'nickname'
            }
        },
        {
            tag: 'group', // 单选 radio
            label: '用户性别',
            items: [
                {
                    tag: 'input',
                    label: '女',
                    attr: {
                        type: 'radio',
                        name: 'sex',
                        value: 1
                    }
                },
                {
                    tag: 'input',
                    label: '男',
                    attr: {
                        type: 'radio',
                        name: 'sex',
                        value: 2
                    }
                }
            ]
        },
        {
            tag: 'select', // 单选列表
            label: '状态',
            attr: {
                name: 'status'
            },
            options: [
                {
                    text: '全部',
                    value: '-1'
                },
                {
                    text: '正常',
                    value: '1'
                },
                {
                    text: '禁用',
                    value: '2'
                }
            ]
        }
    ]
};

// 分开编写：第二个块放一个表格，表格顶部增加几个按钮
config.form.blocks[1] = {
    pagetable:{
        attr: {
            title: '我是一个表格'
        },
        btngroup: {
            attr: {},
            items: [
                {
                    tag: 'button',
                    text: '新增'
                },
                {
                    tag: 'button',
                    text: '修改'
                },
                {
                    tag: 'button',
                    text: '删除'
                }
            ]
        },
        table: {
            attr: {
                checkType: 'radio',  // 设置行数据为单选
                checkField: 'id' // 指定数据中哪个字段为选择主键，支持复合主键
            },
            items: [ // 这里定义表格数据列，只有这里定义的数据列才会显示，如果复杂表头请使用 header
                {
                    text: '用户名',
                    name: 'username'
                },
                {
                    text: '用户昵称',
                    name: 'nickname'
                },
                {
                    text: '状态',
                    name: 'status'
                }
            ],
            format: { // 这里定义某些列的自定义格式化
                username: function (value, obj) {
                    return {
                        tag: 'a',
                        text: value,
                        onClick: function () {
                            lv.open('弹出详情页面地址?id=' + obj.id);
                        }
                    }
                },
                status: function (value, obj) {
                    return ['正常', '已禁用'][value];
                }
            },
            data: [ // 编写测试数据看下效果，正常情况下是 form 查询后自动下发数据
                {
                    id: 1,
                    username: '测试用户',
                    nickname: '测试昵称',
                    status: 0
                },
                {
                    id: null, // 这里 id 是空值，该行记录不允许选择
                    username: '测试用户',
                    nickname: '测试昵称',
                    status: 1
                }
            ],
            onCheck: function (rowData) { // 选择记录了，需要把操作按钮给启用下，比如上面的修改和删除
                config.form.blocks[1].btngroup.items[1].attr.disabled = false;
                config.form.blocks[1].btngroup.items[2].attr.disabled = false;
            },

        },

        pager: { // 分页
            attr: {
                rows: 10,
                page: 1,
                total: 108
            },
            onChange: function(page) { // 翻页之后，需要把操作按钮给禁用下，比如上面的修改和删除
                console.log('当前页码', page);
                config.btngroup.items[1].attr.disabled = true;
                config.btngroup.items[2].attr.disabled = true;
            }
        }
    }

};

// 配置表单按钮，如果需要显示在顶部，请配置在 items、blocks 等前方
config.form.btngroup = {
    attr: {
        className: 'center'
    },
    items: [
        {
            tag: 'button',
            text: '保存',
            attr: {
                type: 'submit' // 定义一个 submit 类型按钮有两个用途：回车提交表单、表单防止重复提交
            }
        },
        {
            tag: 'button',
            text: '关闭',
            onClick: function () {
                window.close();
            }
        }
    ]
};


lv.start({
    viewId: 'lv-view',
    config: config
})