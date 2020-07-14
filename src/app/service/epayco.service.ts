import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

declare var ePayco: any;
@Injectable({
  providedIn: "root",
})
export class EpaycoService {
  private handler;

  constructor(private http: HttpClient) {
    this.handler = ePayco.checkout.configure({
      key: "ed505dcb869f0d4383dd947982dce2f2",
      test: true,
    });
  }

  setConfig(dataPay: any) {
    var data = {
      //Parametros compra (obligatorio)
      name: dataPay.name,
      description: dataPay.description || dataPay.name,
      invoice: "ePaySol2000",
      currency: "cop",
      amount: `${dataPay.price / 100}`,
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "en",

      //Onpage="false" - Standard="true"
      external: `${dataPay.external}` || "false",

      //Atributos opcionales
      extra1: "extra1",
      extra2: "extra2",
      extra3: "extra3",
      // confirmation: "http://secure2.payco.co/prueba_curl.php",
      response: "http://localhost:4200/#/inventory/all",

      //Atributos cliente
      name_billing: "Andres Perez",
      address_billing: "Carrera 19 numero 14 91",
      type_doc_billing: "cc",
      mobilephone_billing: "3050000000",
      number_doc_billing: "1042454446",

      //atributo deshabilitación metodo de pago
      methodsDisable: ["PSE", "CASH"],
    };
    this.handler.open(data);
  }

  getTransactionResponse(refPayco: string) {
    return this.http.get<any>(environment.refEpay + refPayco);
  }
}
