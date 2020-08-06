import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({

  imports: [
   AngularFireModule.initializeApp(environment.firebase),
   AngularFireAuthModule
  ],
  exports : [
    AngularFireAuthModule,
    AngularFireModule
  ]
})
export class AppFirebaseModule { }
