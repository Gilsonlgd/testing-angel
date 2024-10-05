import React from 'react';
import './FileInput.scss';

interface FileInputProps {
  // The props of the component
  prop1: string;
}

function FileInput({ prop1 }: FileInputProps): JSX.Element {
  return <div className="file-input">Your html here: {prop1}</div>;
}

export default FileInput;
