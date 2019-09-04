var config={};
config.bread = {
    attr: {},
    items: [
        {
            tag: 'span',
            text: '首页'
        },
        {
            tag: 'span',
            text: '网格布局'
        }
    ]
};

config.form = {
    attr: {
        name: 'editForm',
        action: ''
    },
    gridlayout: {
        attr: {
            columns: 4
        },
        blocks: [
            {
                tag: 'block',
                attr: {
                    title: '第一个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            },
            {
                tag: 'block',
                attr: {
                    title: '第二个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            },
            {
                tag: 'block',
                attr: {
                    title: '第三个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            },
            {
                tag: 'block',
                attr: {
                    title: '第四个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            },
            {
                tag: 'block',
                colspan: 4,
                attr: {
                    title: '第一个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            },
            {
                tag: 'block',
                attr: {
                    title: '第二个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            },
            {
                tag: 'block',
                colspan: 2,
                attr: {
                    title: '第三个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            },
            {
                tag: 'block',
                attr: {
                    title: '第四个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            },
            {
                tag: 'block',
                colspan: 2,
                attr: {
                    title: '第一个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            },
            {
                tag: 'block',
                colspan: 2,
                attr: {
                    title: '第二个块'
                },
                table: {
                    attr: {
                        title: '成绩表格',
                        name: 'recordTable',
                        dynamic: true
                    },
                    items: [
                        {
                            text: '课程',
                            name: 'course'
                        },
                        {
                            text: '成绩',
                            name: 'record'
                        },
                        {
                            text: '操作',
                            name: 'id'
                        }
                    ],
                    format: {
                        course: function(value, obj, index) {
                            return {
                                tag: 'select',
                                attr: {
                                    name: 'course',
                                    value: value,
                                    placeholder: '请选择课程'
                                },
                                options: [
                                    { text: '语文', value: 1 },
                                    { text: '数学', value: 2 },
                                    { text: '英语', value: 3 },
                                    { text: '物理', value: 4 },
                                    { text: '化学', value: 5 },
                                    { text: '生物', value: 6 },
                                    { text: '历史', value: 7 },
                                    { text: '地理', value: 8 },
                                    { text: '政治', value: 9 },
                                    { text: '体育', value: 10 }
                                ],
                                validate: {
                                    required: true
                                }
                            }
                        },
                        record: function (value, obj, index) {
                            return {
                                tag: 'input',
                                attr: {
                                    name: 'record',
                                    value: value
                                },
                                validate: {
                                    required: true
                                }
                            }
                        },
                        id: function (value, obj, index) {
                            return {
                                tag: 'button',
                                text: '删除',
                                onClick: function (target, tableName, tableRowIndex) {
                                    lv.tableDelete({
                                        tableName: tableName,
                                        index: tableRowIndex
                                    });
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
};

/**
 * 启动框架
 */
lv.start({
    viewId: 'lv-view',
    config: config
});