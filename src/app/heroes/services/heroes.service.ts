import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { env } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private baseUrl = env.baseUrl;


    constructor(private httpClient: HttpClient) { }
    
    getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
    }
}