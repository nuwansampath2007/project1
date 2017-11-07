import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProducts } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
        }

    filteredProducts: IProducts[];
    products: IProducts[] = [];

    constructor(private _productService: ProductService) {
      
    }

    performFilter(filterBy: string): IProducts[]{
        filterBy => filterBy.toLocaleLowerCase;
        return this.products.filter((product: IProducts) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);   
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
}