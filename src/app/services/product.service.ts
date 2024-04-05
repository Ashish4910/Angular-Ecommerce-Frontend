import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = "http://localhost:8080/api/products";

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(map(response => response._embedded.products));
  }


  getdemo() {
    return this.http.get('http://localhost:8080/api/products');
  }

}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}


// =========>> Json data is in this format ====================> 


//   {
// "_embedded": {
// "products": [
// {
// "sku": "BOOK-TECH-1001",
// "name": "Become a Guru in JavaScript",
// "description": "Learn JavaScript at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!",
// "unitPrice": 20.99,
// "imageUrl": "assets/images/products/books/book-luv2code-1001.png",
// "active": true,
// "unitsInStock": 100,
// "dateCreated": "2024-02-14T17:42:10.000+00:00",
// "lastUpdated": null,
// "_links": {
// "self": {
// "href": "http://localhost:8080/api/products/2"
// },
// "product": {
// "href": "http://localhost:8080/api/products/2"
// },
// "category": {
// "href": "http://localhost:8080/api/products/2/category"
// }
// }
// },
// {
// "sku": "BOOK-TECH-1002",
// "name": "Exploring Vue.js",
// "description": "Learn Vue.js at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!",
// "unitPrice": 14.99,
// "imageUrl": "assets/images/products/books/book-luv2code-1002.png",
// "active": true,
// "unitsInStock": 100,
// "dateCreated": "2024-02-14T17:42:10.000+00:00",
// "lastUpdated": null,
// "_links": {
// "self": {
// "href": "http://localhost:8080/api/products/3"
// },
// "product": {
// "href": "http://localhost:8080/api/products/3"
// },
// "category": {
// "href": "http://localhost:8080/api/products/3/category"
// }
// }
// },
// {
// "sku": "BOOK-TECH-1003",
// "name": "Advanced Techniques in Big Data",
// "description": "Learn Big Data at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!",
// "unitPrice": 13.99,
// "imageUrl": "assets/images/products/books/book-luv2code-1003.png",
// "active": true,
// "unitsInStock": 100,
// "dateCreated": "2024-02-14T17:42:10.000+00:00",
// "lastUpdated": null,
// "_links": {
// "self": {
// "href": "http://localhost:8080/api/products/4"
// },
// "product": {
// "href": "http://localhost:8080/api/products/4"
// },
// "category": {
// "href": "http://localhost:8080/api/products/4/category"
// }
// }
// },
// {
// "sku": "BOOK-TECH-1004",
// "name": "Crash Course in Big Data",
// "description": "Learn Big Data at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!",
// "unitPrice": 18.99,
// "imageUrl": "assets/images/products/books/book-luv2code-1004.png",
// "active": true,
// "unitsInStock": 100,
// "dateCreated": "2024-02-14T17:42:10.000+00:00",
// "lastUpdated": null,
// "_links": {
// "self": {
// "href": "http://localhost:8080/api/products/5"
// },
// "product": {
// "href": "http://localhost:8080/api/products/5"
// },
// "category": {
// "href": "http://localhost:8080/api/products/5/category"
// }
// }
// },
// {
// "sku": "BOOK-TECH-1005",
// "name": "JavaScript Cookbook",
// "description": "Learn JavaScript at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!",
// "unitPrice": 23.99,
// "imageUrl": "assets/images/products/books/book-luv2code-1005.png",
// "active": true,
// "unitsInStock": 100,
// "dateCreated": "2024-02-14T17:42:10.000+00:00",
// "lastUpdated": null,
// "_links": {
// "self": {
// "href": "http://localhost:8080/api/products/6"
// },
// "product": {
// "href": "http://localhost:8080/api/products/6"
// },
// "category": {
// "href": "http://localhost:8080/api/products/6/category"
// }
// }
// }
//   }
