var config = {};
config.tab = {
    attr: {},
    items: [
        {
            label: '手续新建',
            config: {
                tag: 'form'
                // 继续填写 form 组件其他配置项
            }
        },
        {
            label: '手续提交',
            config: {
                tag: 'block'
                // 继续填写 block 组件其他配置项
            }
        },
        {
            label: '手续审核',
            config: {
                tag: 'search'
                // 继续填写 search 组件其他配置项
            }
        },
        {
            label: '百度一下',
            config: {
                tag: 'iframe',
                attr: {
                    src: 'https://www.baidu.com',
                    width: '1100px'
                }
            }
        }
    ]
}

config.form = {
    attr: {
        name: 'checkForm',
        action: 'test/mybaits',
        method: 'post',
        columns: 1,
        style: ''
    },
    items: [
        {
            tag: 'input',
            label: '用户名',
            attr: {
                name: 'username',
                type: 'show',
                title: '你好',
                showClear: true
            },
            validate: {
                required: true,
                reg: 'username'
            }
        },
        {
            tag: 'input',
            label: '密码',
            attr: {
                name: 'password',
                type: 'password'
            },
            validate: {
                required: true,
                reg: 'password'
            }
        },
        {
            tag: 'img',
            attr: {
                width: 100,
                height: 100,
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567594843022&di=58ffb76a795903005bfa4d79a2d95c98&imgtype=0&src=http%3A%2F%2Fpic.k73.com%2Fup%2Fsoft%2F2016%2F0102%2F092635_44907394.jpg'
            }
        },
        {
            tag: 'progress',
            label: '进度条',
            attr: {
                name: 'demoProgress',
                value: 0,
                text: ''
            }
        }
    ],
    btngroup: {
        attr: {
            className: 'center'
        },
        items: [
            {
                tag: 'button',
                text: '登录',
                attr: {
                    type: 'submit'
                }
            },
            {
                tag: 'button',
                text: '注册',
                attr: {},
                onClick: function () {
                    lv.modal({
                        title: '我是一个强大的模态框',
                        content: '我这里可以显示很多 <span style="color:#e40; font-size: 18px;">html</span> 内容',
                        style: {
                            height: '600px',
                            width: '800px'
                        },
                        confirmText: '你相信我是么？',
                        cancelText: '算了吧，下次再来',
                        onConfirm: function() {
                            console.log('confirm le');
                        },
                        onCancel: function() {
                            console.log('cancel le');
                        }
                    });
                }
            },
            {
                tag: 'upload',          // 选填 | 必填。组件名称
                text: '文件上传',        // 必填。显示的文字
                attr: {},               // 选填。属性配置
                ajax: {},               // 必填。文件上传服务器配置
                onValidate: function (type, msg) {
                },  // 选填。选择文件校验失败回调函数

                // 以下配置项，仅在 form.items 、 block.items 中有效
                label: '',            // 选填。提示文字
                labelBreak: false,    // 选填。提示文字折行
                colspan: 1,           // 选填。布局合并列数
            }
        ]
    }


}
config.html = {
    tag: 'html',    // 选填 | 必填。组件名称
    attr: {},       // 选填。属性配置
    content: 'nihao'     // 必填。显示内容
}

config.pagetable = {
    attr: {},
    table: {
        attr: {
            dynamic: true
        },
        items: [
            {
                text: '序号',
                name: 'id',          // 下文中 format 自定义格式化函数会格式化成超链接
                align: 'center',
                width: '150px'
            },
            {
                text: '名字',
                name: 'name'       // 下文中 format 自定义格式化函数会格式化成对应文本
            },
            {
                text: '创建时间',
                name: 'createtime'         // 下文中 format 自定义格式化函数会格式化成日期字符串
            },
            {
                text: '详情',
                name: 'detail'         // 下文中 format 自定义格式化函数会格式化成日期字符串
            }
        ],
        ajax: {
            url: '/test/test4',
            method: 'get',
            data: {},
            load: true,
            cache: false,
            success: function (data) {
                return data;
            },
            error: function (err) {
                alert("wrong");
            }

        },


    },
    pager: { // 分页
        attr: {
            rows: 3,
            page: 1,
            total: 6
        },
        onChange: function (page) { // 翻页之后，需要把操作按钮给禁用下，比如上面的修改和删除
            console.log('当前页码', page);
        }
    }
}


config.search = {
    tag: 'search',
    attr: {
        foldRows: 3,
        foldStatus: true
    },
    form: {
        attr: {
            name: 'formName',
            action: 'https://www.luckincoffee.com',
            className: '',
            style: {}
        },
        items: [
            {
                tag: 'input',
                label: '用户名',
                attr: {
                    name: 'username',
                    maxLength: 20
                }
            },
            {
                tag: 'input',
                label: '密码',
                attr: {
                    type: 'password',
                    name: 'password',
                    maxLength: 16
                }
            }, {
                tag: 'input',
                label: '密码',
                attr: {
                    type: 'password',
                    name: 'password',
                    maxLength: 16
                }
            },
            {
                tag: 'input',
                label: '密码',
                attr: {
                    type: 'password',
                    name: 'password',
                    maxLength: 16
                }
            }, {
                tag: 'input',
                label: '密码',
                attr: {
                    type: 'password',
                    name: 'password',
                    maxLength: 16
                }
            }

        ],
        btngroup: {                     // 表单中的按钮组，搜索表单折叠/展开按钮会自动追加在这里
            attr: {
                className: 'center'
            },
            // permissionAjax: '',        // 需要控制权限就配置
            items: [
                {
                    tag: 'button',
                    text: '登录',
                    attr: {
                        type: 'submit',
                        // permission: ''       // 需要控制权限就配置
                    },
                    onClick: function () {
                    }
                },
                {
                    tag: 'button',
                    text: '注册',
                    onClick: function () {
                        lv.open({
                            url: 'https://www.luckincoffee.com/',         // 打开窗口url
                            width: 800,                                   // 弹窗宽度
                            height: 600,                                  // 弹窗高度
                            name: 'luckincoffee'                          // 弹窗名称
                        });
                    }
                }
            ]
        }
    }
}




var chartOption = {                   // 复制 echart 官网示例 option 对象代码
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

config.block = {
    attr: {
        title: '百度 echarts 折线图'
    },
    chart: {
        attr: {
            type: 'echarts',          // echarts 必须配置
            style: {                  // 必须指定宽度高度
                width: '100%',
                height: '450px'
            }
        },
        option: chartOption,
        // ajax: {}                 // 示例使用预置 option
    }
};



lv.start({
    viewId: 'lv-view',
    config: config
})
var value = 0;
var interval = setInterval(function () {
    value++;
    if (value > 100) {
        lv.progressUpdate({
            progressName: 'demoProgress',
            data: {value: 100, text: '全部执行完成'}
        });
        clearInterval(interval);
    } else {
        lv.progressUpdate({
            progressName: 'demoProgress',
            data: {value: value, text: '当前进度 ' + value + ' %'}
        });
    }
}, 200);