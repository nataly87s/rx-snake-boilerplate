import React from 'react';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { mapPropsStream } from 'recompose';

export const message$ = new BehaviorSubject();

const Message = ({ message }) => <div className="message">{message}</div>;

const enhance = mapPropsStream(props$ => combineLatest(props$, message$, (props, message) => ({...props, message})));

export default enhance(Message);
