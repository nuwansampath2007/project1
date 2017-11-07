import { IProducts } from './product';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{

    getProducts(): IProducts[]{
        return[
            {
                "productId":   1,
                "productName": "Car",
                "productCode": "TTP-112",
                "releaseDate": "03/25/2017",
                "description": "2000CC petrol 16 Valve Engine",
                "price": 4200,
                "starRating": 2,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Toyota_Allion_T260.jpg/1280px-Toyota_Allion_T260.jpg" 
            },
            {
                "productId":   2,
                "productName": "Bus",
                "productCode": "LLW-1256",
                "releaseDate": "08/15/2016",
                "description": "3500CC diesel 24 Valve Engine",
                "price": 54000,
                "starRating": 4.5,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f2/2001-2007_Toyota_Coaster_bus_01.jpg" 
            },
            {
                "productId":   3,
                "productName": "Van",
                "productCode": "CCN-115",
                "releaseDate": "04/12/2016",
                "description": "2500CC diesel 16 Valve Engine",
                "price": 6000,
                "starRating": 3,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Toyota_Allion_T260.jpg/1280px-Toyota_Allion_T260.jpg" 
            },
            {
                "productId":   4,
                "productName": "Lorry",
                "productCode": "LOR-1256",
                "releaseDate": "03/22/2014",
                "description": "4000CC diesel 24 Valve Engine",
                "price": 90000,
                "starRating": 1,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f2/2001-2007_Toyota_Coaster_bus_01.jpg" 
            }
        ]
    }

}