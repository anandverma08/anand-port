import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  recommendations = [];
  recommendationStatus = new Subject();
  url = "https://us-central1-anandport-5df88.cloudfunctions.net/app/api/recommendation";
  constructor(private http: HttpClient) { }

  createRecommendation(recommendation) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    this.http.post(this.url, recommendation, options).subscribe((message) => {
      console.log("call success", message);
    })
  }

  getRecommendation(){
    this.http.get<{results}>(this.url).subscribe(res=>{
    this.recommendations = res.results;
    this.recommendationStatus.next(this.recommendations);
    })
  }
  getRecommendationsObj(){
    this.getRecommendation();
    return this.recommendationStatus.asObservable();
  }
}
