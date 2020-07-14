import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class InvenyoryServiceService {
  constructor(private http: HttpClient) {}

  public getProducts(query: string): Observable<any> {
    return this.http.get(`${environment.url}inventory/${query}`);
  }
}
