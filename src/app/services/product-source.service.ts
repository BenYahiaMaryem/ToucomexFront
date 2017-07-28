import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class productSourceService {
    private url = 'http://localhost:3000/api/'

    constructor(private http: Http) { }


    productUrls = [
        ['Agriculture'],
        ['Biotechnology&Pharmaceuticals'],
        ['Computers'],
        ['Construction'],
        ['Education'],
        ['Engineering'],
        ['Executive&Management'],
        ['Finance'],
        ['Food & Beverage'],
        ['Government'],
        ['Healthcare'],
        ['Human Resources'],
        ['Industrial&Manufacturing'],
        /*[''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],*/

        
    ]
    getproductsUrl() {
        return this.productUrls
    }

    parseRssFeed(product) {
        return this.http.get(`${this.url}feed/${product}`)
            .map(res => res.json())
    }

    pushCategories(category) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}feed/categories`, JSON.stringify(category), { headers: headers })
            .map(res => res.json());
    }
}
