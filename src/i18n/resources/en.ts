import { ResourceLanguage } from "i18next";

const en: ResourceLanguage = {
    translation: {
        navs: {
            sourceCode: "Source Code",
            web: "Web (Beta)",
            contactUs: "Contact Us",
        },
        toolBar: {
            supportUs: "Support Us",
            download: "Download",
        },
        home: {
            landing: {
                title: "May SchoolPower<1>2.0</1><br/>Be With You",
                subtitle: "An alternative client for <1/>",
                download: {
                    android: {
                        button: "Android (Soon)",
                        alt: "Download v1.5"
                    }
                }
            },
            what: {
                title: "What is this",
                subtitle: "SchoolPower is a third-party client for <1/>. We've designed a brand new user " +
                    "interface tailored to the needs of local students.",
                items: {
                    newLook: {
                        title: "New Look",
                        subtitle: "Brand new interface design provides you an enjoyable experience.",
                    },
                    faster: {
                        title: "Faster",
                        subtitle: "70% less time needed to get things updated.",
                    },
                    keepInSync: {
                        title: "Keep in sync",
                        subtitle: "Data are always in sync with the <1/> server.",
                    },
                    reliable: {
                        title: "Reliable",
                        subtitle: "Dedicated server handling your requests 24/7.",
                    },
                }
            },
            gallery: {
                title: "Gallery",
            },
            how: {
                title: "How does it work",
                subtitle: "SchoolPower displays what's originally on the <1/> website.",
                items: {
                    login: "Use the username and password you provided to login <1/>.",
                    fetch: "Fetch the information using their API and send it to your client.",
                    display: "Display the data on your devices with easy-to-use interfaces.",
                },
                userAgreement: "User Agreement",
            },
            who: {
                title: "Who made this",
                subtitle: "Built by graduates of MLES-ZJ",
            },
            credits: {
                title: "Credits",
                subtitle: "Thank you to the following people for providing help and support with the development " +
                    "and maintenance of SchoolPower.",
                sections: {
                    bugReports: "Bug Reports",
                    testAccounts: "Test Accounts",
                    suggestions: "Valuable Suggestions",
                }
            },
        },
        agreement: {
            definition: {
                title: "Definition",
                content: "This Application includes SchoolPower and its affiliated services from first-party " +
                    "channels, third-party channels, or compiled by yourself.",
            },
            disclaimer: {
                title: "Disclaimer",
                content: "This Application is provided \"as is\" without making any representations or warranties. " +
                    "This Application does not guarantee the completeness and correctness of its contents. " +
                    "Please use it only for reference. This Application does not assume any responsibility for the " +
                    "use of This Application to cause your account to be locked or other exceptions.\n\n" +
                    "This Application is a third-party client, and is not endorsed, sponsored, affiliated with or " +
                    "otherwise authorized by PowerSchool Group LLC or its affiliates."
            },
            privacy: {
                title: "Privacy",
                content: "You agree that This Application will record and permanently store the username, " +
                    "the operating system information, and the application's version you use and use it for " +
                    "statistical and analytical purposes."
            }
        }
    }
};

export default en;
