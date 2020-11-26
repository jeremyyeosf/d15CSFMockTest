import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  apikey = "ZDAxYTM5MDcxNWVjNDZlMDg5MDYwZDJhZGRiY2QxYjg"

  constructor(private http: HttpClient) { }

  async getPrice() {
    return await this.http.get<any>('https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC&fiat=SGD')
      .toPromise
  }
}
