import React, { useEffect, useState, useCallback } from 'react';

import { RingCounter } from './RingCounter';
import { text, number, array } from '@storybook/addon-knobs';

export default {
  title: 'Division 2/RingCounter',
  component: RingCounter
};

export const Example = () => {
  return <RingCounter size={number('Ring size', 100)} value={number('Value', 2)} max={number('Max', 10)}></RingCounter>;
};

export const Counter = () => {
  const [value, setSize] = useState(5);

  const handleIncrement = useCallback(() => {
    setSize(value + 1);
  }, [value]);
  const handleDecrement = useCallback(() => {
    setSize(value - 1);
  }, [value]);

  return (
    <>
      <div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>

      <RingCounter value={value} max={20} padAngle={0.05}></RingCounter>
    </>
  );
};

export const SecondHandClock = () => {
  const [second, setSecond] = React.useState(new Date().getSeconds());

  useEffect(() => {
    const iid = window.setInterval(() => {
      setSecond(new Date().getSeconds());
    }, 50);

    return () => {
      window.clearInterval(iid);
    };
  }, []);

  return (
    <RingCounter
      size={number('Size', 200)}
      value={second + 1}
      max={60}
      padAngle={number('Padding angle', 0.02)}
      fontSize={number('Font size', 60)}
    ></RingCounter>
  );
};

export const CustomColor = () => {
  return (
    <RingCounter
      value={number('Value', 7)}
      max={number('Max', 10)}
      color={text('Meter Color', '#0088FF')}
      backgroundColor={text('Background color', '#333')}
      fontColor={text('Font color', '#00AAFF')}
      strokeColor={text('Stroke color', '#000')}
    ></RingCounter>
  );
};

export const MultiMeterColors = () => {
  return (
    <RingCounter
      size={number('Size', 200)}
      value={number('Value', 5)}
      max={number('Max', 5)}
      color={array('Colors', ['#300', '#600', '#900', '#B00', '#E00'])}
      fontSize={number('Font size', 60)}
    ></RingCounter>
  );
};
