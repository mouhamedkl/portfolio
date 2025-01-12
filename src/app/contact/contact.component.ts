import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/Model/Contact';
import { EmailService } from '../shared/email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder,private service:EmailService) {
   
  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required,Validators.pattern("^[0-9]+$")],
      message: ['', Validators.required],
    });
  }

  contact=new Contact();

  submitForm() {
    if (this.contactForm.valid) {
      this.service.sendEmail(this.contact).subscribe(data=>{
       alert("Email sent successfully")
       this.contactForm.reset();
       },(error)=>{ 
         alert("Error sending email")
        }
      );
      
    }else{
      this.contactForm.markAllAsTouched();
      alert("Please fill all the fields")
    }
  

  }
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get message() { return this.contactForm.get('message'); }
}
