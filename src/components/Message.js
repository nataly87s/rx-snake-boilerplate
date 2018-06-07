import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'ramda';

const Message = ({ message }) => <div className="message">{message}</div>;

const enhance = connect(pick(['message']));

export default enhance(Message);
