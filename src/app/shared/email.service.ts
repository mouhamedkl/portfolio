import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Contact } from './Model/Contact';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
   url="https://back-chi-three.vercel.app/api/v1/emails"
   sendEmail(data:Contact){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.url , data,{headers:headers,responseType: 'json'});
   }
}
