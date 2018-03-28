import { Injectable } from '@angular/core';
import { SpinnerConfig } from './spinner-config';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SpinnerService {
    private configSubject = new Subject<SpinnerConfig>();
    config = this.configSubject.asObservable();
    constructor() { }
    ser(input: SpinnerConfig) {
        this.configSubject.next(input);
    }
}