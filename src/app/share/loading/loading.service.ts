import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoadingConfig } from './loading-config'

@Injectable()
export class LoadingService {
    private configSubject = new Subject<LoadingConfig>();
    config = this.configSubject.asObservable();
    constructor() { }
    set(input: LoadingConfig) {
        this.configSubject.next(input);
    }
}