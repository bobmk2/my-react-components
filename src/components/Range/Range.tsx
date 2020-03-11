import React, { CSSProperties, useState } from 'react';
import { RangeSlider as Slider } from './RangeSlider';
import { RangeInput as Input } from './RangeInput';
import { RangeInvalidLabel as InvalidLabel } from './RangeInvalidLabel';
import { RangeContext } from './context';

export type RangeProps = {
  className?: string;
  style?: CSSProperties;
  value: number;
  min: number;
  max: number;
  step: number | 'any';
  onChangeValue: (next: number, isValid: boolean) => void;
  children?: React.ReactNode[];
};

const Range = (props: RangeProps) => {
  const { value, min, max, step, onChangeValue, children } = props;

  const [invalidInput, setInvalidInput] = useState(false);

  const handleChangeRange = React.useCallback(
    (next: number) => {
      const isValid = !(isNaN(next) || next < min || max < next);
      onChangeValue(next, isValid);
    },
    [onChangeValue, min, max]
  );

  const handleChangeInput = React.useCallback(
    (next: number, isValidInput: boolean) => {
      const isValid = !(isNaN(next) || next < min || max < next);

      setInvalidInput(!isValidInput);

      if (isValidInput) {
        onChangeValue(next, isValid);
      }
    },
    [onChangeValue, min, max]
  );

  return (
    <div>
      <RangeContext.Provider
        value={{
          value,
          min,
          max,
          step,
          onChangeRange: handleChangeRange,
          onChangeInput: handleChangeInput,
          invalidInput
        }}
      >
        {children}
      </RangeContext.Provider>
    </div>
  );
};

Range.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

Range.Slider = Slider;
Range.Input = Input;
Range.InvalidLabel = InvalidLabel;

export { Range };
