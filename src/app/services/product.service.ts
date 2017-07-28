import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class productService {
    private url = 'http://localhost:3000/api/'

    constructor(private /*authHttp: AuthHttp*/http: Http) { }

    getAllproducts() {
        return this.http.get(`${this.url}products`)
            .map(res => res.json());

    }

    getproductAdvancedSearch(product) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}products/advancedSearch`, JSON.stringify(product), { headers: headers })
            .map(res => res.json());
    }
    getproductRapidSearch(product) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}products/rapidSearch`, JSON.stringify(product), { headers: headers })
            .map(res => res.json());
    }
    getData(products): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
    }


    getproductById(_id) {
        return this.http.get(`${this.url}products/${_id}/product`)
            .map(res => res.json());

    }

    getManyproducts(ids) {
        return this.http.get(`${this.url}products/${ids}/many`)
            .map(res => res.json());

    }

    addproduct(product) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}products`, JSON.stringify(product), { headers: headers }).map(response => response.json());
    }

    removeproduct(product) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(product);
        product.isDeleted = 1
        return this.http.put(`${this.url}products/${product._id}/delete`, JSON.stringify(product), { headers: headers }).map(response => response.json());


    }

    updateproduct(product) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(`${this.url}products/${product._id}/update`,
         JSON.stringify(product),
          { headers: headers })
          .map(response => response.json());

    }
}
