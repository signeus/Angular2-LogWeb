import { LogService } from './logs/log.service';
import { LogListComponent } from './logs/log-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

/* Feature Modules */
import { LogModule } from './logs/log.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'logs', component: LogListComponent },
      { path: '', redirectTo: 'logs', pathMatch: 'full' },
      { path: '**', redirectTo: 'logs', pathMatch: 'full' }
    ]),
    LogModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [LogService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
