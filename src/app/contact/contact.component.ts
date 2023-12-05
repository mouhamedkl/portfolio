import { Component } from '@angular/core';
import { Contact } from '../shared/Model/Contact';
import { EmailService } from '../shared/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private service:EmailService) {

  }
  contact=new Contact();
  formSubmitted: boolean = false;

  submitForm() {
   this.service.sendEmail(this.contact).subscribe(data=>{
    this.formSubmitted=true
   })

  }
}
