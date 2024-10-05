import React from 'react';
import './BaseFooter.scss';

interface BaseFooterProps {
  // The props of the component
  prop1: string;
}

function BaseFooter({ prop1 }: BaseFooterProps): JSX.Element {
  return <div className="">Your html here: {prop1}</div>;
}

export default BaseFooter;
