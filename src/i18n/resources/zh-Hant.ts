import { ResourceLanguage } from "i18next";

const zhHant: ResourceLanguage = {
    translation: {
        copyright: "Built with ❤️ by SchoolPower 工作室",
        navs: {
            sourceCode: "源代碼",
            web: "網頁版 (Beta)",
            contactUs: "聯繫我們",
        },
        toolBar: {
            supportUs: "支持我們",
            download: "下載",
        },
        home: {
            landing: {
                title: "願 SchoolPower<1>2.0</1><br/>與你同在",
                subtitle: "一個 <1/> 的替代客戶端",
                download: {
                    android: {
                        button: "安卓 (即將推出)",
                        alt: "下載 v1.5"
                    }
                }
            },
            what: {
                title: "這是什麼",
                subtitle: "SchoolPower 是一個 <1/> 的第三方客戶端。我們依據本地學生的使用習慣重新設計了用戶界面。",
                items: {
                    newLook: {
                        title: "新面貌",
                        subtitle: "全新的界面設計旨在為你提供愉悅的體驗",
                    },
                    faster: {
                        title: "更快",
                        subtitle: "數據更新相比官方節省了 70% 的時間",
                    },
                    keepInSync: {
                        title: "同步",
                        subtitle: "數據與 <1/> 服務器保持同步",
                    },
                    reliable: {
                        title: "可靠",
                        subtitle: "專用服務器全天候為你更新數據",
                    },
                }
            },
            gallery: {
                title: "相冊",
            },
            how: {
                title: "怎麼做到的",
                subtitle: "SchoolPower 顯示的是 <1/> 網站上原有的信息。",
                items: {
                    login: "使用你提供的用戶名與密碼登錄 <1/>。",
                    fetch: "使用其 API 獲取數據並發送到你的客戶端。",
                    display: "在你的設備上以簡單易用的界面呈現數據。",
                },
                userAgreement: "用戶協議",
            },
            who: {
                title: "誰搞的",
                subtitle: "由 MLES-ZJ 畢業生開發",
            },
            credits: {
                title: "鳴謝",
                subtitle: "由衷感謝以下人員對 SchoolPower 的開發與維護的支持與幫助。",
                sections: {
                    bugReports: "報告 Bug",
                    testAccounts: "提供測試賬號",
                    suggestions: "提出有價值的建議",
                }
            },
        },
        support: {
            title: "支持我們",
            subtitle: "Lorem ipsum dolor sit amet.",
            wechat: {
                name: "微信支付",
                instruction: {
                    desktop: "微信「掃一掃」中用相機掃描此二維碼",
                    mobile: "保存此二維碼至手機相冊，並在微信「掃一掃」中從相冊選擇（iOS Safari 用戶可能需要手動長按圖片保存）"
                }
            },
            alipay: {
                name: "支付寶",
                instruction: {
                    desktop: "支付寶「掃一掃」中用相機掃描此二維碼",
                    mobile: "保存此二維碼至手機相冊，並在支付寶「掃一掃」中從相冊選擇（iOS Safari 用戶可能需要手動長按圖片保存）"
                }
            },
            paypal: {
                name: "Paypal"
            },
            bitcoin: {
                name: "比特幣",
                instruction: "請將捐款發送到以下比特幣地址"
            },
            save: "保存",
            saveQRCode: "保存二維碼",
            copyError: "複製錯誤：{{error}}。請手動複製。",
            thanks: "十分感謝你的支持！",
        },
        agreement: {
            title: "最終用戶協議",
            definition: {
                title: "定義",
                content: "該應用程序指包括但不限於您從第一方渠道、第三方渠道或自己編譯得到的 SchoolPower 以及其附屬服務。",
            },
            disclaimer: {
                title: "免責",
                content: "該應用程序按「現狀」提供，不作任何陳述或擔保。該應用程序不保證其內容的完整性，正確性，" +
                    "用戶應僅將其作為參考用途。因使用該應用程序導致您帳號被鎖定或出現其它異常的，該應用程序不承擔任何責任。" +
                    "該應用程序為第三方客戶端，未經 PowerSchool Group LLC 或其附屬公司的認可，贊助，附屬或以其他任何方式授權。"
            },
            privacy: {
                title: "隱私",
                content: "您允許該應用程序記錄並永久保存您使用的用戶名、所用的操作系統信息和所用的程序版本，並將其用於統計、分析用途。"
            }
        }
    }
};

export default zhHant;
