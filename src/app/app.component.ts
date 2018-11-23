import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'advanced';
  submitted = false;
  data = {
    mailAddress: '',
    subscription: '',
    password: ''
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;
    this.data = {
      mailAddress: form.value.email,
      subscription: form.value.subscription,
      password: form.value.password
    }
  }
}
