var config = {};

config.bread = {
    attr: {

    },
    items: [
        {
            tag: 'span',
            text: '首页'
        },
        {
            tag: 'span',
            text: '列表页示例'
        }
    ]
};
config.search = {
    attr:{
        foldRows: 3,
        foldStatus: true
    },
    form:{
        attr:{
            name:'searchForm',
            action:'https://luckincoffee.com/'
        },
        items:[
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
        ],
        btngroup: {
            attr: {
                className: 'center'
            },
            items: [
                {
                    tag: 'button',
                    text: '查询',
                    attr: {
                        type: 'submit' // 定义一个 submit 类型按钮有两个用途：回车提交表单、表单防止重复提交
                    }
                },
                {
                    tag: 'button',
                    text: '重置',
                    attr: {
                        type: 'reset'
                    }
                }
            ]
        },
        onSubmit: function(formData) {
            return true;
        },
        onSuccess: function(result) {
            return result.data; // 请返回列表需要渲染的数据类型数据
        },
        onError: function(error) { // 因为是示例代码，这里肯定报错
            console.log(error);
        }
    }

}

config.btngroup = {
    attr: {},
    items: [
        {
            tag: 'button',
            text: '新建',
            onClick: function() {
                lv.open('https://www.baidu.com/');
            }
        },
        {
            tag: 'button',
            text: '修改',
            attr: {
                disabled: true // 先禁用，修改按钮需要选择记录后才能启用
            },
            onClick: function() {
                lv.open('https://www.baidu.com/');
            }
        },
        {
            tag: 'button',
            text: '删除',
            attr: {
                disabled: true // 先禁用，删除按钮需要选择记录后才能启用
            },
            onClick: function() {
                var obj = config.pagetable.table.attr.checkResult; // 获取选择记录
                                                                   // 如果是单选，则为对象，如果是多选，则为数组
                lv.confirm({ // 弹出确认框，让用户确认删除
                    title: '删除确认',
                    content: '确认删除么？',
                    onConfirm: function() {
                        lv.ajax({ // 此处直接发起异步请求删除
                            url: 'someUrl',
                            method: 'post',
                            data: {
                                id: obj.id
                            },
                            success: function(result) {
                                lv.formSubmit('searchForm', { // 删除完成后，还需要刷新一下列表
                                    page: 1                     // 并且重新查询第一页数据
                                });
                            }
                        });
                    }
                });
            }
        }
    ]
};

config.pagetable = {
    attr: {
        title: '可选的分页表格标题',
        formName: 'searchForm' // 指定接收哪个 form 数据，与查询表单关联
    },
    table: { // 表格
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
            username: function(value, obj) {
                return {
                    tag: 'a',
                    text: value,
                    onClick: function() {
                        lv.open('弹出详情页面地址?id=' + obj.id);
                    }
                }
            },
            status: function(value, obj) {
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
                id: 2, // 这里 id 是空值，该行记录不允许选择
                username: '测试用户',
                nickname: '测试昵称',
                status: 1
            }
        ],
        onCheck: function(rowData) { // 选择记录了，需要把操作按钮给启用下，比如上面的修改和删除
            config.btngroup.items[1].attr.disabled = false;
            config.btngroup.items[2].attr.disabled = false;
        }
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
};

lv.start({
    viewId: 'lv-view',
    config: config
})