import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('basheer@email.com', [Validators.required]),
    password: new FormControl('basheer', [Validators.required]),
  });

  constructor(private router: Router,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.getToken()
  }
  getToken() {
    this.userService.getToken().subscribe(data => {
      sessionStorage.setItem('token', data)
    })
  }
  loginSubmit() {
    this.router.navigate(['/home'])
  }

}
