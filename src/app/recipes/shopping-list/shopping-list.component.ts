import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit{
  userId:string = this._authService.userId;
  Done:any[] = [];
  ToBuy:any[] = [{
    name: 'lol'
  },
  {
    name: 'lolkk'
  },
  {
    name: 'lolppp'
  }];
  constructor(private _authService:AuthService, private _shoppingService: ShoppingService){}
  ngOnInit(){
    console.log(this.userId);
    this._shoppingService.generateUserList(this.userId).subscribe((res) => {
      console.log(res);
    })
    this._shoppingService.getUserList(this.userId).subscribe((res)=> {
      console.log(res);
      this.ToBuy = res;
    }
    )
  }
  purchasedItem(){
    this._shoppingService.itemPurchased(this.userId, this.Done.slice(-1)[0].id).subscribe((res) => console.log(res)
    )
  }
}
// this.Done.slice(-1)[0].id