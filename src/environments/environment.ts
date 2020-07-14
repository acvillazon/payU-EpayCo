// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  url: "http://localhost:3000/",
  refEpay: "https://secure.epayco.co/validation/v1/reference/", //->Obtener datos de la trasaccion realizada Epayco
  sandboxPayu: "https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi", //Enviar POST con datos de la trasaccion
};
