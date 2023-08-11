import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserData } from '../home/home.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required]),
  });
  id!: number;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserId(this.id).subscribe((data: UserData) => {
      this.form.get('firstName')?.setValue(data.firstName)
      this.form.get('lastName')?.setValue(data.lastName)
      this.form.get('age')?.setValue(data.age)
      this.form.get('job')?.setValue(data.job)
    })
  }

  updateSubmit() {
    if (this.form.valid) {
      this.form.value.id = this.id
      this.userService.updateUser(this.form.value, this.id).subscribe(data => { console.log('updated data:', data) })
      this.navigateToHome()
    }
  }
  navigateToHome() {
    this.router.navigate(['home'])
  }

}
