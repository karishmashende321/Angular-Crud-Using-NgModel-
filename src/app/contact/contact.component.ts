import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted:any=false;

  contactForm: FormGroup
  
  constructor(private formBuilder:FormBuilder) {
    this.contactForm = this.formBuilder.group ({
     Name:['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      organisation:['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      MobileNo:['',[Validators.required,Validators.minLength(10), Validators.maxLength(13)]],
      eMail:['',[Validators.required, Validators.minLength(6), Validators.email]],
      Address:['',[Validators.required]],
      Query:['',[Validators.required, Validators.maxLength(20),]]
    })
   }

  ngOnInit(): void {
  }


  success(){
    this.submitted=true;

    if(this.contactForm.valid){
      console.log("Hence You have Sucessfully Register",this.contactForm.value);
      alert("Form is valid.... submitted Sucessfully...!")
      this.submitted=false;
      
   }
   else{
    alert("Form is not-valid.... please try again...!")
   }
    this.contactForm.reset();
  }

  get f(){
    return this.contactForm.controls
  }
}
