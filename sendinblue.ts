import SibApiV3Sdk from "sib-api-v3-typescript"
// import { env } from "./env.ts"

export const sendinblue = new SibApiV3Sdk.TransactionalEmailsApi()

// const apiKey = env.EMAIL_API
const apiKey = Deno.env.get("CONTENT_API")!
sendinblue.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, apiKey)
