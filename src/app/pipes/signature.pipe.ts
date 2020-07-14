import { Pipe, PipeTransform } from "@angular/core";
import { Md5 } from "ts-md5/dist/md5";

@Pipe({
  name: "signature",
})
export class SignaturePipe implements PipeTransform {
  private apiKey = "4Vj8eK4rloUd272L48hsrarnUA";
  private merchantID = "508029";
  private currency = "COP";

  transform(value: any): any {
    const md5 = new Md5();
    const refe = value.price + 2020;

    const string = `${this.apiKey}~${this.merchantID}~${refe}~${value.price}~${this.currency}`;
    const md5Generate = md5.appendStr(string).end();

    console.log({
      apiKey: this.apiKey,
      merchanId: this.merchantID,
      refe: refe,
      price: value.price,
      currency: this.currency,
      md5Generate,
    });

    return md5Generate;
  }
}
