import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Contact } from './Model/Contact';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
   url="http://localhost:3000/send-email"
   sendEmail(data:Contact){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.url , data);
   }
}
