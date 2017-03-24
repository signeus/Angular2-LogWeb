import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ILog } from './log';

@Injectable()
export class LogService {
    private _logUrl = 'api/logs/logs.json';

    constructor(private _http: Http) { }

    getLogs(): Observable<ILog[]> {
        return this._http.get(this._logUrl)
            .map((response: Response) => <ILog[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getLog(id: number): Observable<ILog> {
        return this.getLogs()
            .map((logs: ILog[]) => logs.find(l => l.logId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
