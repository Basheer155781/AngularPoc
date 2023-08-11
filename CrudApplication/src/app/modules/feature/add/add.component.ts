import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    job: new FormControl('',[Validators.required]),
  });
  id!:number;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private userService:UsersService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  addSubmit(){
    if(this.form.valid){
    this.form.value.id=this.id
    this.userService.addUser(this.form.value).subscribe(data=>{console.log('added data:',data)})
    this.navigateToHome();
    }
  }
  navigateToHome(){
    this.router.navigate(['home'])
  }

}
