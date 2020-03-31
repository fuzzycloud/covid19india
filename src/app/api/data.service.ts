import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface CaseTime {
  dailyconfirmed: string;
  dailydeceased: string;
  dailyrecovered: string;
  date: string;
  totalconfirmed: string;
  totaldeceased: string;
  totalrecovered: string;

}

export interface KeyValue {
  confirmeddelta: string;
  counterforautotimeupdate: string;
  deceaseddelta: string;
  lastupdatedtime: string;
  recovereddelta: string;
  statesdelta: string;
}

export interface Delta {
  active: string;
  confirmed: string;
  deaths: string;
  recovered: string;
}

export interface StateWise {
  active: string;
  confirmed: string;
  deaths: string;
  delta: Delta;
  lastupdatedtime: string;
  recovered: string;
  state: string;
}

export interface Tested {
  source: string;
  testsconductedbyprivatelabs: string;
  totalindividualstested: string;
  totalpositivecases: string;
  totalsamplestested: string;
  updatetimestamp: string;
}

export interface CovidData {
  cases_time_series: CaseTime [];
  key_values: KeyValue[];
  statewise: StateWise[];
  tested: Tested[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(): Observable<CovidData> {
    return this.http.get<CovidData>('https://api.covid19india.org/data.json');
  }
}
