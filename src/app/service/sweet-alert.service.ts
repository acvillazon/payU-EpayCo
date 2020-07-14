import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class SweetAlertService {
  public sweet = Swal;
  constructor() {}

  errorAlert(error, object) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: object.text,
    });
  }

  successAlert(object) {
    Swal.fire({
      icon: "success",
      title: object.title,
      text: object.text,
    });
  }

  loadingAlert(object) {
    Swal.fire({
      title: object.title,
      text: object.text,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
  }

  loadingAlertWirhTime(object) {
    Swal.fire({
      title: "Processing transaction",
      text: object.text,
      showConfirmButton: false,
      timer: Number(object.time),
      onBeforeOpen: () => {
        Swal.showLoading();
      },
      allowEscapeKey: false,
      timerProgressBar: true,
    });
  }

  responsePayUTimer(object) {
    Swal.fire({
      title: "Transaction Proccesed (PayU)",
      html: `
      <div *ngIf="paidData" class="container-fluid">
        <h5>Transaction identified with ID: <strong>${object.params.transactionId}</strong></h5>
        <table class="table">
          <tbody>
            <tr>
              <td>Merchant name</td>
              <td>${object.params.merchant_name}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>${object.params.description}</td>
            </tr>
            <tr>
              <td>Payment method</td>
              <td>${object.params.lapPaymentMethod}</td>
            </tr>
            <tr>
              <td>Value paid</td>
              <td>${object.params.TX_VALUE}</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>${object.params.currency}</td>
            </tr>
            <tr>
              <td>Buyer email</td>
              <td>${object.params.buyerEmail}</td>
            </tr>
            <tr>
              <td>Transaction's state</td>
              <td>${object.params.message}</td>
            </tr>
          </tbody>
        </table>
      </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "Close",
      timer: Number(10000),
      onBeforeOpen: () => {
        // Swal.showLoading();
      },
      allowEscapeKey: false,
      timerProgressBar: true,
    });
  }

  responseEpayCoTimer(transactionResponse) {
    transactionResponse = transactionResponse.data;
    Swal.fire({
      title: "Transaction Proccesed (EpayCo)",
      html: `
      <div *ngIf="paidData" class="container-fluid">
      <h5>Transaction with ID :${transactionResponse.x_transaction_id}</h5>
      <table class="table table-bordered">
        <tbody *ngIf="transactionResponse">
          <tr>
            <td>Reference</td>
            <td id="referencia">
              ${transactionResponse.x_id_invoice}
            </td>
          </tr>
          <tr>
            <td class="bold">Description</td>
            <td id="recibo">
              ${transactionResponse.x_description}
            </td>
          </tr>
          <tr>
            <td class="bold">Date transaction</td>
            <td id="fecha" class="">
              ${transactionResponse.x_transaction_date}
            </td>
          </tr>
          <tr>
            <td class="bold">Bank</td>
            <td class="" id="banco">
              ${transactionResponse.x_bank_name}
            </td>
          </tr>

          <tr>
            <td>State</td>
            <td id="respuesta">
              ${transactionResponse.x_transaction_state}
            </td>
          </tr>
          <tr>
            <td>Reason of the response</td>
            <td id="motivo">
              ${transactionResponse.x_response_reason_text}
            </td>
          </tr>
          <tr>
            <td class="bold">Total</td>
            <td class="" id="total">
              ${transactionResponse.x_amount}
              ${transactionResponse.x_currency_code}
          </tr>
        </tbody>
      </table>
      </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "Close",
      timer: Number(10000),
      onBeforeOpen: () => {
        // Swal.showLoading();
      },
      allowEscapeKey: false,
      timerProgressBar: true,
    });
  }
}
