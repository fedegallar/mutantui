import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pageable } from 'src/app/entidades/Pageable';

@Injectable({
  providedIn: 'root'
})
export class MutantService {
  URL:String = 'http://localhost:9001/api/v1/mutant';
  constructor(private http:HttpClient) { }

  getPeople(page:Number):Observable<Pageable>{
    return this.http.get<Pageable>(this.URL+"/"+page)
  }
  
}
