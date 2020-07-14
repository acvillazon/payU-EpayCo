import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InvenyoryServiceService } from "../../service/invenyory-service.service";
import { SweetAlertService } from "../../service/sweet-alert.service";
import { EpaycoService } from "../../service/epayco.service";

interface inventory {
  _id: string;
  price: number;
  name: string;
  available: boolean;
  state: boolean;
  brand: string;
  image: string;
  type: string;
}

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.css"],
})
export class InventoryComponent implements OnInit, OnDestroy {
  public inventory: inventory[] = [];
  public filter: inventory[] = [];
  public current: string;
  public paidData: any[];

  public unsubscribeQuery: any;
  @ViewChild("search") search: ElementRef;

  constructor(
    private activated: ActivatedRoute,
    private inventoryS: InvenyoryServiceService,
    private swa: SweetAlertService,
    private epay: EpaycoService
  ) {
    activated.paramMap.subscribe((data) => {
      this.current = data.get("query");
      this.loadContent();
    });

    activated.queryParamMap.subscribe((data) => {
      if (data.get("transactionState")) {
        this.responsePayU(data);
      }

      if (data.get("ref_payco")) {
        this.responseEpayCo(data.get("ref_payco"));
      }

      if (data.get("search")) {
        this.filter = this.inventory.filter((value) => {
          return value.name.includes(data.get("search"));
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeQuery.unsubscribe();
  }

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent() {
    this.swa.loadingAlert({
      title: "Preparing the environment",
    });
    this.unsubscribeQuery = this.inventoryS.getProducts(this.current).subscribe(
      (products) => {
        this.inventory = products.Inventory;
        this.swa.sweet.close();
      },
      (err) => {
        this.swa.errorAlert(err, {
          text: "It was an error triying comunication with server",
        });
      }
    );
  }

  executeEpay(product: any, external: boolean) {
    this.swa.loadingAlertWirhTime({ text: "Wait a few seconds", time: 1000 });
    product.external = external;
    this.epay.setConfig(product);
  }

  responsePayU(data) {
    setTimeout(() => this.swa.responsePayUTimer(data), 200);
  }

  responseEpayCo(ref) {
    this.epay
      .getTransactionResponse(ref)
      .subscribe(this.swa.responseEpayCoTimer);
  }
}
