import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'app-create-recommendation',
  templateUrl: './create-recommendation.component.html',
  styleUrls: ['./create-recommendation.component.css']
})
export class CreateRecommendationComponent implements OnInit, OnDestroy {
  user;
  userDetailsSub: Subscription;
  @Output() recommendationAdded: EventEmitter<{}> = new EventEmitter<{}>();
  constructor(private authService: AuthService, private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.user = this.authService.getUserDetailsObj();
    this.userDetailsSub = this.authService.getUserDetails().subscribe(user => {
      this.user = user;
    })
  }
  ngOnDestroy() {
    this.userDetailsSub.unsubscribe();
  };
  submit(form: NgForm) {
    let recommendation = {
      displayName: this.user.displayName,
      photoURL: this.user.photoURL,
      recommendationText: form.value.recommendationText,
      relation: form.value.relation,
      company: form.value.company
    };
    this.recommendationAdded.emit(recommendation);
    this.recommendationService.createRecommendation(recommendation);
  }

}
