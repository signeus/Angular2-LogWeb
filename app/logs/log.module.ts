import { WsService } from './../services/ws.service';
import { ServicesModule } from './../services/service.module';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { LogListComponent } from './log-list.component';
import { LogDetailComponent } from './log-detail.component';
import { LogDetailGuard } from './log-guard.service';

import { LogFilterPipe } from './log-filter.pipe';
import { LogService } from './log.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'logs', component: LogListComponent },
      { path: 'log/:id',
        canActivate: [ LogDetailGuard],
        component: LogDetailComponent
      },
    ])
  ],
  declarations: [
    LogListComponent,
    LogDetailComponent,
    LogFilterPipe
  ],
  providers: [
    LogListComponent,
    LogDetailGuard,
    WsService
  ]
})
export class LogModule {}
