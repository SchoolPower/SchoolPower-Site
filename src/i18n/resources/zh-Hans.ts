import { ResourceLanguage } from "i18next";

const zhHans: ResourceLanguage = {
    translation: {
        copyright: "Built with ❤️ by SchoolPower 工作室",
        navs: {
            sourceCode: "源代码",
            web: "网页版 (Beta)",
            contactUs: "联系我们",
        },
        toolBar: {
            supportUs: "支持我们",
            download: "下载",
        },
        home: {
            landing: {
                title: "愿 SchoolPower<1>2.0</1><br/>与你同在",
                subtitle: "一个 <1/> 的替代客户端",
                download: {
                    android: {
                        button: "安卓 (即将推出)",
                        alt: "下载 v1.5"
                    }
                }
            },
            what: {
                title: "这是什么",
                subtitle: "SchoolPower 是一个 <1/> 的第三方客户端。我们依据本地学生的使用习惯重新设计了用户界面。",
                items: {
                    newLook: {
                        title: "新面貌",
                        subtitle: "全新的界面设计旨在为你提供愉悦的体验",
                    },
                    faster: {
                        title: "更快",
                        subtitle: "数据更新相比官方节省了 70% 的时间",
                    },
                    keepInSync: {
                        title: "同步",
                        subtitle: "数据与 <1/> 服务器保持同步",
                    },
                    reliable: {
                        title: "可靠",
                        subtitle: "专用服务器全天候为你更新数据",
                    },
                }
            },
            gallery: {
                title: "相册",
            },
            how: {
                title: "怎么做到的",
                subtitle: "SchoolPower 显示的是 <1/> 网站上原有的信息。",
                items: {
                    login: "使用你提供的用户名与密码登录 <1/>。",
                    fetch: "使用其 API 获取数据并发送到你的客户端。",
                    display: "在你的设备上以简单易用的界面呈现数据。",
                },
                userAgreement: "用户协议",
            },
            who: {
                title: "谁搞的",
                subtitle: "由 MLES-ZJ 毕业生开发",
            },
            credits: {
                title: "鸣谢",
                subtitle: "由衷感谢以下人员对 SchoolPower 的开发与维护的支持与帮助。",
                sections: {
                    bugReports: "报告 Bug",
                    testAccounts: "提供测试账号",
                    suggestions: "提出有价值的建议",
                }
            },
        },
        support: {
            title: "支持我们",
            subtitle: "抛开大量的时间成本不计，仅是高昂的苹果开发者年费和服务器费用就达每年数千元。如果您觉得这款 App 帮到了您，" +
                "欢迎您赞助我们，或者将其介绍给您身边的同学。感激不尽 (´,,•ω•,,)♡。",
            wechat: {
                name: "微信支付",
                instruction: {
                    desktop: "微信「扫一扫」中用相机扫描此二维码",
                    mobile: "保存此二维码至手机相册，并在微信「扫一扫」中从相册选择（iOS Safari 用户可能需要手动长按图片保存）"
                }
            },
            alipay: {
                name: "支付宝",
                instruction: {
                    desktop: "支付宝「扫一扫」中用相机扫描此二维码",
                    mobile: "保存此二维码至手机相册，并在支付宝「扫一扫」中从相册选择（iOS Safari 用户可能需要手动长按图片保存）"
                }
            },
            paypal: {
                name: "Paypal"
            },
            bitcoin: {
                name: "比特币",
                instruction: "请将捐款发送到以下比特币地址"
            },
            save: "保存",
            saveQRCode: "保存二维码",
            copyError: "复制错误：{{error}}。请手动复制。",
            thanks: "十分感谢你的支持！",
        },
        agreement: {
            title: "最终用户协议",
            definition: {
                title: "定义",
                content: "该应用程序指包括但不限于您从第一方渠道、第三方渠道或自己编译得到的 SchoolPower 以及其附属服务。",
            },
            disclaimer: {
                title: "免责",
                content: "该应用程序按「现状」提供，不作任何陈述或担保。该应用程序不保证其内容的完整性，正确性，" +
                    "用户应仅将其作为参考用途。因使用该应用程序导致您帐号被锁定或出现其它异常的，该应用程序不承担任何责任。" +
                    "该应用程序为第三方客户端，未经 PowerSchool Group LLC 或其附属公司的认可，赞助，附属或以其他任何方式授权。"
            },
            privacy: {
                title: "隐私",
                content: "您允许该应用程序记录并永久保存您使用的用户名、所用的操作系统信息和所用的程序版本，并将其用于统计、分析用途。"
            }
        }
    }
};

export default zhHans;
