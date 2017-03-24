import { WsService } from './../services/ws.service';
import { Component, OnInit }  from '@angular/core';

import { ILog } from './log';
import { LogService } from './log.service';

@Component({
    templateUrl: 'app/templates/log-list.component.html',
    styleUrls: ['app/templates/css/log-list.component.css']
})
export class LogListComponent implements OnInit {
    pageTitle: string = 'Log List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    logs: ILog[];

    constructor(private _logService: LogService, private _webSocket: WsService) {
        this._webSocket.run().subscribe
        (
            (data:any) =>{ console.log(data);},
            (error:any) => this.errorMessage = <any>error
        )
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._logService.getLogs()
                .subscribe(logs => this.logs = logs,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Log List: ' + message;
    }
}
