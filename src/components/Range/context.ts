import { createContext } from 'react';

export type RangeContextTypes = {
  value: number;
  min: number;
  max: number;
  step: number | 'any';
  onChangeRange: (next: number) => void;
  onChangeInput: (next: number, isValid: boolean) => void;
  invalidInput: boolean;
};
const RangeContext = createContext<RangeContextTypes>({
  value: NaN,
  min: NaN,
  max: NaN,
  step: NaN,
  onChangeRange: () => {},
  onChangeInput: () => {},
  invalidInput: false
});
RangeContext.displayName = 'RangeContext';

export { RangeContext };
