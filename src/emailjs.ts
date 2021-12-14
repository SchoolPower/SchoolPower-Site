import{ init } from "emailjs-com";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
init(process.env.EMAILJS_USER_ID!);
