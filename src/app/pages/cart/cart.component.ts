import { Component, OnInit } from "@angular/core";
import { EpaycoService } from "../../service/epayco.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  modal: boolean = false;
  refPayco: string;
  transactionResponse: any = undefined;

  constructor(private epay: EpaycoService, private activatedR: ActivatedRoute) {
    this.refPayco = activatedR.snapshot.queryParamMap.get("ref_payco");
  }

  ngOnInit(): void {
    this.epay.getTransactionResponse(this.refPayco).subscribe((data) => {
      this.transactionResponse = data.data;
      console.log(data);
    });
  }

  openModal() {
    this.modal = true;
  }
}
