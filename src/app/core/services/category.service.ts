import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Category} from '../../shared/models'
import {environment} from '../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  headers: HttpHeaders
  url: string
  categories = '/categories'
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type':  'application/json'
    })
    this.url = environment.production
      ? 'http://localhost:8081'
      : ''

  }

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.url}${this.categories}`)
  }

  public saveCategory(category: Category): Observable<Category> {
    const body = JSON.stringify(category)
    return this.httpClient.post<Category>(`${this.url}${this.categories}`, body, { headers: this.headers })
  }

  public updateCategory(category: Category): Observable<Category> {
    const body = JSON.stringify(category)
    return this.httpClient.put<Category>(`${this.url}${this.categories}/${category.id}`, body, { headers: this.headers })
  }

  public deleteCategory(category: Category): Observable<Category> {
    console.log(category)
    console.log(`${this.url}${this.categories}/${category.id}`)
    return this.httpClient.delete<Category>(`${this.url}${this.categories}/${category.id}`)
  }
}
