import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/development';

@Injectable({
  providedIn: 'root',
})
export class RemoveService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  remove(id: number, option: string) {
    return this.http.delete(this.apiUrl + `${option}/${id}`);
  }
}
