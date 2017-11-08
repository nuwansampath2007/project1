import { ProductService } from './products/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})

export class AppComponent{
  pageTitle: String = 'Vehicle Product Management';
}