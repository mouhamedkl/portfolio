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
  isLoading: boolean = false; // Variable to track loading state
  constructor(private fb: FormBuilder,private service:EmailService) {
   
  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      num: ['', [Validators.required,Validators.pattern("^[0-9]+$")]],
      message: ['', Validators.required],
    });
  }

 

  submitForm() {
    if (this.contactForm.valid) {
      this.isLoading = true; // Start loading
      this.service.sendEmail(this.contactForm.value).subscribe(data=>{
        this.isLoading = false; // Stop loading
       alert("Email sent successfully")
       this.contactForm.reset();
       },(error)=>{ 
        this.isLoading = false; // Stop loading
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
  get phone() { return this.contactForm.get('num'); }
  get message() { return this.contactForm.get('message'); }
}
