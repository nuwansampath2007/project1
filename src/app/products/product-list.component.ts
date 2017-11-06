import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: any[] = [
        {
            "productId":   2,
            "productName": "Car",
            "productCode": "TTP-112",
            "releaseDate": "03/25/2017",
            "description": "2000CC petrol 16 Valve Engine",
            "price": 4200,
            "starRating": 4.5,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Toyota_Allion_T260.jpg/1280px-Toyota_Allion_T260.jpg" 
        },
        {
            "productId":   3,
            "productName": "Bus",
            "productCode": "LLW-1256",
            "releaseDate": "08/15/2016",
            "description": "3500CC diesel 24 Valve Engine",
            "price": 54000,
            "starRating": 4,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f2/2001-2007_Toyota_Coaster_bus_01.jpg" 
        }
    ];
}