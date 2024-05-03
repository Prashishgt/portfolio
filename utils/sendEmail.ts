// import emailjs, { EmailJSResponseStatus } from "emailjs-com";

// interface EmailParams {
//   to_email: string;
//   subject: string;
//   message: string;
// }

// export const sendEmail = async (
//   recipientEmail: string,
//   subject: string,
//   message: string
// ): Promise<EmailJSResponseStatus> => {
//   try {
//     const params: EmailParams = {
//       to_email: recipientEmail,
//       subject: subject,
//       message: message,
//     };

//     const response = await emailjs.send(
//       `${process.env.NEXT_PUBLIC_EMAILJS_URL}`,
//       "",
//       params,
//       `${process.env.NEXT_PUBLIC_EMAILJS_USERID}`
//     );

//     console.log("Email sent successfully:", response);
//     return response;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error;
//   }
// };
