import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { RecommendationService } from './recommendation.service';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  editMode: boolean = false;
  recommendationMadeOnce: boolean = false;
  user;
  constructor(private authService: AuthService, private router: Router, private recommendationService: RecommendationService) { }

  recommendations = [];

  ngOnInit(): void {
    document.getElementById('navigationBar').style.display="none";
    this.recommendationService.getRecommendationsObj().subscribe((recommendations: [{}]) => {
      this.recommendations = recommendations.reverse();
    });
    this.user= this.authService.getUserDetailsObj();
    this.authService.getUserDetails().subscribe(user=>{
      this.user = user;
      if(this.recommendations.length && this.recommendations.find(res => res.displayName == this.user.displayName)){
        this.recommendationMadeOnce = true;
      }
    });
  }

  writeRecommendation() {
    this.editMode = true;
    let authState = this.authService.getAuthState();
    if (!this.authService.getAuthState()) {
      this.router.navigate(['/login']);
    }
  }
  recommendationJustAdded(event) {
    this.editMode = false;
    this.recommendationMadeOnce = true;
    this.recommendations.unshift(event);
  }
}
