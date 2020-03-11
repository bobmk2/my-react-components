import React, { useState, useCallback } from 'react';

import { Range } from './Range';
import { number, object, text } from '@storybook/addon-knobs';

export default {
  title: 'Range',
  component: Range
};

export const Example = () => {
  const [value, setValue] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const handleChangeValue = useCallback((next: number, isValid: boolean) => {
    setValue(next);
    setIsValid(isValid);
  }, []);

  return (
    <>
      <div>value: {value}</div>
      <hr />
      <Range
        value={value}
        onChangeValue={handleChangeValue}
        max={number('Max', 100)}
        min={number('Min', -10)}
        step={number('Step', 0.1)}
      >
        <Range.Slider />
        <Range.Input />
      </Range>
      <hr />
      {isValid ? <span style={{ color: 'green' }}>OK</span> : <span style={{ color: 'red' }}>NG (Out of range)</span>}
    </>
  );
};

export const WithStyle = () => {
  const [value, setValue] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const handleChangeValue = useCallback((next: number, isValid: boolean) => {
    setValue(next);
    setIsValid(isValid);
  }, []);

  return (
    <>
      <div>value: {value}</div>
      <hr />
      <Range
        value={value}
        onChangeValue={handleChangeValue}
        max={number('Max', 100)}
        min={number('Min', -10)}
        step={number('Step', 0.1)}
      >
        <Range.Input
          style={object('Input styles', {
            width: '50px',
            borderRadius: '5px',
            height: '50px',
            border: '1px solid #999',
            textAlign: 'center'
          })}
        />
        <Range.Slider style={object('Slider styles', { width: '100px' })} />
      </Range>
      <hr />
      {isValid ? <span style={{ color: 'green' }}>OK</span> : <span style={{ color: 'red' }}>NG (Out of range)</span>}
    </>
  );
};

export const InputInvalidLabel = () => {
  const [value, setValue] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const handleChangeValue = useCallback((next: number, isValid: boolean) => {
    setValue(next);
    setIsValid(isValid);
  }, []);

  return (
    <>
      <div>value: {value}</div>
      <hr />
      <Range value={value} onChangeValue={handleChangeValue}>
        <Range.Slider />
        <Range.Input />
        <br />
        <Range.InvalidLabel>
          <div style={object('Label styles', { color: 'red', fontWeight: 700, textDecoration: 'underline' })}>
            {text('Label text', '⚠ Input value is invalid!!')}
          </div>
        </Range.InvalidLabel>
      </Range>
      <hr />
      {isValid ? <span style={{ color: 'green' }}>OK</span> : <span style={{ color: 'red' }}>NG (Out of range)</span>}
    </>
  );
};
