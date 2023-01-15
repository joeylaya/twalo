import SibApiV3Sdk from "sib-api-v3-typescript"

export const sendinblue = new SibApiV3Sdk.TransactionalEmailsApi()

const apiKey = Deno.env.get("CONTENT_API")!
sendinblue.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, apiKey)
