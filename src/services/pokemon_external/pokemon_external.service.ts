import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class PokemonExternalService {
  constructor(private http: HttpService) {}

  findAll(): Observable<AxiosResponse<any[]>> {
    return this.http
      .get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .pipe(map((response) => response.data.results));
  }

  find(id: string): Observable<AxiosResponse<any[]>> {
    return this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(map((response) => response.data));
  }
}
