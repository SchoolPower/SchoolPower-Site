import { ResourceLanguage } from "i18next";

const ja: ResourceLanguage = {
    translation: {
        copyright: "Built with ❤️ by SchoolPower スタジオ",
        navs: {
            sourceCode: "ソースコード",
            web: "Web (ベータ)",
            contactUs: "お問い合わせ",
        },
        toolBar: {
            supportUs: "応援する",
            download: "ダウンロード",
        },
        home: {
            landing: {
                title: "SchoolPower<1>2.0</1><br/>と共にあらんことを",
                subtitle: "<1/> の代替クライアント",
                download: {
                    android: {
                        button: "Android (近日公開)",
                        alt: "v1.5をダウンロード"
                    }
                }
            },
            what: {
                title: "SchoolPower とは",
                subtitle: "SchoolPower は <1/> のサードパーティのアプリである、" +
                    "地元の学生の使用習慣に基づいてユーザーインターフェイスを再設計しました。",
                items: {
                    newLook: {
                        title: "新しいデサイン",
                        subtitle: "快適な体験を提供するために、真新しいユーザーインターフェースをデザインされました",
                    },
                    faster: {
                        title: "より速い",
                        subtitle: "データの更新は、公式バージョンより70％の時間が節約されます",
                    },
                    keepInSync: {
                        title: "常に同期",
                        subtitle: "データは常に <1/> サーバーと同期しています",
                    },
                    reliable: {
                        title: "信頼できる",
                        subtitle: "専用サーバーは24時間年中無休でデータを更新します",
                    },
                }
            },
            gallery: {
                title: "ギャラリー",
            },
            how: {
                title: "どうやって",
                subtitle: "SchoolPower は <1/> に元の情報を表示します。",
                items: {
                    login: "提供したユーザー名とパスワードを使用して <1/> にログインします。",
                    fetch: "API を使用して情報を取得し、クライアントに送信します。",
                    display: "使いやすいインターフェースでデータを表示します。",
                },
                userAgreement: "利用規約",
            },
            who: {
                title: "誰が作った",
                subtitle: "MLES-ZJ 卒業生によって開発されました",
            },
            credits: {
                title: "お礼",
                subtitle: "SchoolPowerの開発と保守にご協力いただいた以下の方々にありがとうございました。",
                sections: {
                    bugReports: "Bugの報告",
                    testAccounts: "テストアカウントの提供",
                    suggestions: "貴重な提案",
                }
            },
        },
        support: {
            title: "私たちを応援する",
            subtitle: "Lorem ipsum dolor sit amet.",
            wechat: {
                name: "ウィーチャットペイ",
                instruction: {
                    desktop: "カメラを使用して、Wechat でこのQRコードをスキャンする",
                    mobile: "このQRコードを保存し、Wechat で「アルバムから選択」を選択する"
                }
            },
            alipay: {
                name: "Alipay",
                instruction: {
                    desktop: "カメラを使用して、Alipay でこのQRコードをスキャンする",
                    mobile: "このQRコードを保存し、Alipay で「アルバムから選択」を選択する"
                }
            },
            paypal: {
                name: "Paypal"
            },
            bitcoin: {
                name: "ビットコイン",
                instruction: "以下のビットコインアドレスに寄付を送ってください"
            },
            save: "保存する",
            saveQRCode: "QRコードを保存する",
            copyError: "コピーエラー：{{error}}。手動でコピーしてください。",
            thanks: "ご協力いただきありがとうございます！",
        },
        agreement: {
            title: "エンドユーザー契約",
            definition: {
                title: "定義",
                content: "本製品及び付属のメディアに含まれるソフトウェア（以下「本ソフトウェア」という）は、" +
                    "SchoolPower とその関連サービスが含まれています。",
            },
            disclaimer: {
                title: "免責事項",
                content: "本ソフトウェアは、「現状のまま」提供するものとし、その内容の完全性と正確さを保証しません。" +
                    "ご参考まで使用してください。本ソフトウェアは、アカウントをロックされているか他の例外を引き起こすの使用に対して" +
                    "責任を負いません。本ソフトウェアは、PowerSchool Group LLCまたはその関連会社に" +
                    "認識、後援、提携、またはその他の方法で承認されていません。"
            },
            privacy: {
                title: "プライバシー",
                content: "お客様は、本ソフトウェアがユーザー名、使用されているオペレーティングシステム情報、および使用されている" +
                    "本ソフトウェアのバージョンを記録して永続的に保存し、統計および分析の目的で使用することに同意する。"
            }
        }
    }
};

export default ja;
