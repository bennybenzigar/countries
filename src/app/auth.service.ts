import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data:any

  constructor(private http:HttpClient) {


    this.data={email:"abc@gmail.com", password:"12345"}
   }

  getData(){

    return this.http.get<any>("https://restcountries.com/v2/all?fields=name,region,flag")
  }
}
