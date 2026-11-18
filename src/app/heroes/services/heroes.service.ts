import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { env } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private baseUrl = env.baseUrl;


    constructor(private httpClient: HttpClient) { }
    
    getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

    getheroById(id:string): Observable<Hero | undefined>{
        return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
            .pipe(
                catchError(error => of(undefined))
            )
    }

    getSuggestions(query:string):Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?superhero:startsWith=${query}`);
    }
}