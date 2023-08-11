import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from '../modules/feature/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _httpClient: HttpClient) { }

  getToken(): Observable<string> {
    const url = `${environment.baseUrl}/token`;
    return this._httpClient.get<string>(url)
      .pipe(map((data: any) => data.jwt));
  }
  getUsers(): Observable<UserData[]> {
    const url = `${environment.baseUrl}/users`;
    return this._httpClient.get<UserData[]>(url);
  }
  getUserId(id: number): Observable<UserData> {
    const url = `${environment.baseUrl}/users/${id}`;
    return this._httpClient.get<UserData>(url);
  }
  addUser(formData: UserData): Observable<UserData> {
    const url = `${environment.baseUrl}/users`;
    return this._httpClient.post<UserData>(url, formData);
  }
  updateUser(formData: UserData, id: number): Observable<UserData> {
    const url = `${environment.baseUrl}/users/${id}`;
    return this._httpClient.put<UserData>(url, formData);
  }
  deleteUser(id: number) {
    const url = `${environment.baseUrl}/users/${id}`;
    return this._httpClient.delete<UserData>(url);
  }
}
