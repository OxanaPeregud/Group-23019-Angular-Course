import {Component, Inject, Input, OnInit} from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PorscheService} from "../services/porsche.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {switchMap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../shared/comment";
import {HttpService} from "../services/http.service";
import {visibility} from "../animations/app.animations";

@Component({
  selector: 'app-porsche-detail',
  templateUrl: './porsche-detail.component.html',
  styleUrls: ['./porsche-detail.component.scss'],
  animations:[
    visibility()
  ]
})
export class PorscheDetailComponent implements OnInit {

  public porsche!:Porsche;
  public porschesIds!: string[];
  public previousPorscheId!:string;
  public nextPorscheId!:string;
  public commentForm!:FormGroup;
  public comment!:Comment;
  public visibility = 'shown';

  public commentFormErrors: any = {
    'rating':'',
    'comment':'',
    'author':''
  }

  private commentValidationMessages: any = {
    'rating':{
      'min':'Рейтинг должен быть от 1 до 5',
    },
    'comment':{
      'required':'Напишите отзыв',
    },
    'author':{
      'required':'Введите свое имя',
      'minlength':'Имя должно содержать как минимум 2 символа',
      'maxlength':'Имя не может включать более 25 символов',
    }
  };

  constructor(@Inject('BaseURL')public BaseURL: string,
              private porscheService:PorscheService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              private httpService:HttpService) {
    this.createCommentForm();
  }

  private createCommentForm(){
    this.commentForm = this.fb.group({
      rating:[0, Validators.min(1)],
      author:['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment:['', Validators.required],
      date: new Date()
    });
    this.commentForm.valueChanges
      .subscribe(data=>
      this.porscheService.onFormValueChanged(this.commentForm, this.commentFormErrors, this.commentValidationMessages, data))
  }

  public addToOrder():void{
    this.openOrderPopup();
    this.porscheService.orderedPorsches.push(this.porsche)
  }

  public openOrderPopup():void{
    this.porscheService.openMessagePopup("Porsche добавлен в корзину")
  }


  public onSubmit():void{
    this.comment = this.commentForm.value;
    this.porsche.comments.push(this.comment);
    this.httpService.update(this.porsche, this.porscheService.porschesLink+"/"+this.porsche.id)
    this.resetCommentForm();
  }

  private resetCommentForm():void{
    this.commentForm.reset({
      rating:0,
      author:'',
      comment:'',
      date:new Date()
    });
  }

  private setPreviousAndNextPorsche(porscheId: string): void {
    const index: number = this.porschesIds?.indexOf(porscheId);
    this.previousPorscheId = this.porschesIds[(this.porschesIds.length + index - 1) % this.porschesIds.length];
    this.nextPorscheId = this.porschesIds[(this.porschesIds.length + index + 1) % this.porschesIds.length];
    this.resetCommentForm();
  }

  ngOnInit(): void {
    this.getPorscheDetails();
  }
  private getPorscheDetails(): void {
    this.porscheService.getPorschesIds()
      .subscribe((porschesIds) => this.porschesIds = porschesIds);
    this.route.params.pipe(switchMap((params: Params) => {
      this.visibility = 'hidden';
      return this.porscheService.getPorsche(params['id'])
    }))
      .subscribe(porsche => {
        this.visibility = 'shown'
        this.porsche = porsche;
        this.setPreviousAndNextPorsche(porsche.id);
      });
  }

  public goBack():void{
    this.location.back()
  }

}
