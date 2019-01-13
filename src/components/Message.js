import React from 'react';
import { message$, withPropFromStream } from '../context';

const Message = ({ message }) => <div className="message">{message}</div>;

const enhance = withPropFromStream('message', message$);

export default enhance(Message);
