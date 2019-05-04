import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../../services/index';
import { ForgetService } from "../../services/forget.service";

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  
  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private auth : ForgetService,
      private alertService: AlertService) { }

  ngOnInit() { }
  


  forgetPassword(email: string) {
    this.auth .forgetPassword(email)
  }
}
