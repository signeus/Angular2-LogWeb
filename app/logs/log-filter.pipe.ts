import {  PipeTransform, Pipe } from '@angular/core';
import { ILog } from './log';

@Pipe({
    name: 'logFilter'
})
export class LogFilterPipe implements PipeTransform {

    transform(value: ILog[], filterBy: string): ILog[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((log: ILog) =>
            log.logName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
