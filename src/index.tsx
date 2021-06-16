import React from 'react';

export const Example: React.FC<ExampleProps> = (props) => {
  return <div>Hello {props.message}!</div>;
};

export type ExampleProps = {
  message: string;
};
