import React, { useContext, CSSProperties } from 'react';
import { RangeContext } from './context';
import { usePrevious } from '../../hooks/use-previous';

export type RangeInputProps = {
  /**
   * CSS class name
   */
  className?: string;
  /**
   * CSS style
   */
  style?: CSSProperties;
};

const RangeInput = (props: RangeInputProps) => {
  const { className, style } = props;
  const { value, onChangeInput } = useContext(RangeContext);

  const [_value, setValue] = React.useState<string>(value.toString());
  const prevValue = usePrevious(value);

  const handleChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const next = event.currentTarget.value;
      setValue(next);

      const nextNumber = parseFloat(next);
      onChangeInput(nextNumber, !isNaN(nextNumber));
    },
    [onChangeInput]
  );

  React.useEffect(() => {
    const parsed = parseFloat(_value);
    if ((value !== prevValue || (_value !== '' && !isNaN(parsed))) && value !== parsed) {
      setValue(value.toString());
    }
  }, [prevValue, value, _value]);

  return (
    <>
      <input className={className} style={style} type='text' value={_value} onChange={handleChange} />
    </>
  );
};

export { RangeInput };
