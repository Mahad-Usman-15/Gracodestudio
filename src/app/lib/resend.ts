"use server";
import { Resend } from "resend";
    
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  company?: string,
  projectdetail?: string,
  message?: string,
) => {
  try {
    let htmlContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
    `;
    
    if (company) {
      htmlContent += `<p><strong>Company:</strong> ${company}</p>`;
    }

    if (projectdetail) {
      htmlContent += `<p><strong>Project Details:</strong> ${projectdetail.replace(/\n/g, '<br>')}</p>`;
    }

    if (message) {
      htmlContent += `<p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>`;
    }

    const data = await resend.emails.send({
      to: "mahadusman2008@gmail.com",
      from: "onboarding@resend.dev", 
      replyTo: email,
      subject: `New contact from ${name}`,
      html: htmlContent,
    });
console.log(data)
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send message" };
  }
};