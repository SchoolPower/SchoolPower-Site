import { ResourceLanguage } from "i18next";

const zhHans: ResourceLanguage = {
    translation: {
        home: {
            landing: {
                title: "愿 SchoolPower<1>2.0</1><br/>与你同在",
                subtitle: "一个 <1/> 的替代客户端",
            },
        },
        agreement: {
            definition: {
                title: "定义",
                content: "This Application includes SchoolPower and its affiliated services from first-party " +
                    "channels, third-party channels, or compiled by yourself.",
            },
            disclaimer: {
                title: "声明",
                content: "This Application is provided \"as is\" without making any representations or warranties. " +
                    "This Application does not guarantee the completeness and correctness of its contents. " +
                    "Please use it only for reference. This Application does not assume any responsibility for the " +
                    "use of This Application to cause your account to be locked or other exceptions.\n\n" +
                    "This Application is a third-party client, and is not endorsed, sponsored, affiliated with or " +
                    "otherwise authorized by PowerSchool Group LLC or its affiliates."
            },
            privacy: {
                title: "隐私",
                content: "You agree that This Application will record and permanently store the username, " +
                    "the operating system information, and the application's version you use and use it for " +
                    "statistical and analytical purposes."
            }
        }
    }
};

export default zhHans;
