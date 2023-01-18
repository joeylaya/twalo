import { Handlers } from "$fresh/server.ts";
import { sendinblue } from "../../sendinblue.ts";

export interface NewMessageEmailParams {
  "services": string
  "message": string
  "email": string
  "firstName": string
  "lastName": string
}

export const handler: Handlers = {
  async POST(req) {
    const params: NewMessageEmailParams = await req.json()
    const apiKey =   Deno.env.get("EMAIL_API")!

    const sendSmtpEmail = {
      "to": [{
        "email": "joeyazlaya@gmail.com",
        "name": "Joey Laya"
      }],
      "templateId": 1,
      "params": params,
      "replyTo": {"email": params.email, "name": `${params.firstName} ${params.lastName}`},
      "headers": {
        "X-Mailin-custom": `api-key: ${apiKey} | content-type: application/json | accept: application/json`
      }
    }
  
    try {
      const data = await sendinblue.sendTransacEmail(sendSmtpEmail)
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
    } catch (error) {
      console.log(error)
      return new Response(error)
    }
  }
}
