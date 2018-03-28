import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TipsConfig } from './tips-config'

@Injectable()
export class TipsService {
    private configSubject = new Subject<TipsConfig>();
    config = this.configSubject.asObservable();
    constructor() { }
    set(input: TipsConfig) {
        this.configSubject.next(input);
    }
}