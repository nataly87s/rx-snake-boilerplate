import { BehaviorSubject, combineLatest } from 'rxjs';
import { mapPropsStream } from 'recompose';

export const snake$ = new BehaviorSubject();

export const candy$ = new BehaviorSubject();

export const players$ = new BehaviorSubject();

export const message$ = new BehaviorSubject();

export const withPropFromStream = (prop, stream$) => mapPropsStream(props$ => combineLatest(props$, stream$, (props, value) => ({...props, [prop]: value})));
