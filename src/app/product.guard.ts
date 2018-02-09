import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ProductGuard implements CanActivate {

  private _http:Http;
  private _router:Router;

  constructor(http:Http, router:Router){
    this._http = http;
    this._router = router;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._http.get("assets/ws/auth.json").map(
        (rep: Response):boolean => {

          const permitted:boolean = rep.json().connected as boolean;

          if( permitted ){
            return true;
          }else{
            this._router.navigate(["home"]);
            return false;
          }
        }
      );
  }
}
