import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ContactType, Feedback} from "../shared/feedback";
import {PorscheService} from "../services/porsche.service";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  public feedbackForm!: FormGroup;
  public contactType = ContactType;
  private feedback!: Feedback;

  public feedbackFormErrors: any ={
    'firstname':"",
    'lastname':"",
    'telNumber':"",
    'email':"",
  };

  private feedbackValidationMessages: any = {
    'firstname': {
      'required': 'Введите имя',
      'minlength': 'Имя должно содержать как минимум 2 символа',
      'maxlength': 'Имя не может включать более 25 символов',
    },
    'lastname': {
      'required': 'Введите фамилию',
      'minlength': 'Фамилия должна содержать как минимум 2 символа',
      'maxlength': 'Фамилия не может включать более 25 символов',
    },
    'telNumber': {
      'required': 'Введите номер телефона',
      'pattern': 'Телефон должен содержать только цифры',
    },
    'email': {
      'required': 'Введите электронную почту',
      'email': 'Электронная почта должна иметь правильный формат',
    }
  };


  constructor(private fb: FormBuilder,
              private porscheService: PorscheService,
              private httpService: HttpService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.httpService.save(this.feedback, this.porscheService.feedbackLink)
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telNumber: 0,
      email: '',
      agree: false,
      contactType: '',
      message: ''
    });
  }

  private createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
      lastname: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
      telNumber: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contactType: '',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data=>
      this.porscheService.onFormValueChanged(this.feedbackForm, this.feedbackFormErrors, this.feedbackValidationMessages,
        data))
  }
}
