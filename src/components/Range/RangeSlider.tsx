import React, { useContext, CSSProperties } from 'react';
import { RangeContext } from './context';

export type RangeSliderProps = {
  /**
   * CSS class name
   */
  className?: string;
  /**
   * CSS style
   */
  style?: CSSProperties;
};

const RangeSlider = (props: RangeSliderProps) => {
  const { className, style } = props;
  const { value, onChangeRange, min, max, step } = useContext(RangeContext);

  const [_value, setValue] = React.useState(value);

  const handleChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const next = parseFloat(event.currentTarget.value);

      setValue(next);
      if (!isNaN(next)) {
        onChangeRange(next);
      }
    },
    [onChangeRange]
  );

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <input
      className={className}
      style={style}
      type='range'
      min={min}
      max={max}
      step={step}
      value={_value}
      onChange={handleChange}
    />
  );
};

export { RangeSlider };
