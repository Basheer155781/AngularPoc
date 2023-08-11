import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';
export interface UserData {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  job: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'job', 'update', 'delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<UserData>;
  currentId!: number;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.fetchUsersData();
  }
  fetchUsersData() {
    this.userService.getUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
      this.currentId = data.length
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
  ngAfterViewInit() {
  }
  delete(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log('deleted:', data)
      this.fetchUsersData();
    })
  }
}
