import React, { useEffect, useState, useCallback } from 'react';

import { RingCounter } from './RingCounter';
import { text, number, array, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Division 2/RingCounter',
  component: RingCounter
};

export const Example = () => {
  return <RingCounter size={number('Ring size', 100)} value={number('Value', 2)} max={number('Max', 10)} />;
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

      <RingCounter value={value} max={20} padAngle={0.05} />
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
      countFontSize={number('Count font size', 60)}
    />
  );
};

export const CustomColor = () => {
  return (
    <RingCounter
      value={number('Value', 7)}
      max={number('Max', 10)}
      activeColor={text('Active color', '#0088FF')}
      nonActiveColor={text('Non-active color', '#333')}
      countFontColor={text('Count font color', '#00AAFF')}
      strokeColor={text('Stroke color', '#000')}
    />
  );
};

export const CustomRing = () => {
  return (
    <RingCounter
      size={number('Size', 100)}
      value={number('Value', 7)}
      max={number('Max', 10)}
      strokeColor={'#666666'}
      padAngle={number('Pad angle', 0.3)}
      strokeWidth={number('Stroke width', 3)}
      outerRadius={number('Outer radius', 40)}
      innerRadius={number('Inner radius', 20)}
    />
  );
};

export const CustomCount = () => {
  const countFormatter = useCallback((count: number) => `🍣 ${count}`, []);

  return (
    <RingCounter
      value={number('Value', 1)}
      max={number('Max', 5)}
      countFontSize={number('Count font size', 20)}
      countFormatter={countFormatter}
      countFontColor={text('Count font color', '#F66')}
    />
  );
};

export const MultiMeterColors = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RingCounter
        activeColor={array('Active Colors', ['#300', '#600', '#900', '#B00', '#E00'])}
        size={200}
        value={number('Large value', 5)}
        max={5}
        countFontSize={60}
        repeatActiveColor={boolean('Repeat active color', true)}
      />
      <RingCounter
        activeColor={array('Active Colors', ['#300', '#600', '#900', '#B00', '#E00'])}
        value={number('Small value', 8)}
        max={10}
        repeatActiveColor={boolean('Repeat active color', true)}
      />
    </div>
  );
};
