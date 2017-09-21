import React from 'react';
import { connect } from 'react-redux';

const Message = ({message}) => <div className="message">{message}</div>;

export default connect(({message}) => ({message}))(Message);
