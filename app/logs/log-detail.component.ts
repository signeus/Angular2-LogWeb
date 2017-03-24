import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { ILog } from './log';
import { LogService } from './log.service';

@Component({
    templateUrl: 'app/templates/log-detail.component.html'
})
export class LogDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Log Detail';
    log: ILog;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _logService: LogService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getLog(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getLog(id: number) {
        this._logService.getLog(id).subscribe(
            log => this.log = log,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/logs']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Log Detail: ' + message;
    }
}
