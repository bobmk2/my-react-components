import React, { ReactNode, useContext } from 'react';
import { RangeContext } from './context';

export type RangeInvalidLabelProps = {
  /**
   * Children
   */
  children?: ReactNode;
};

const RangeInvalidLabel = (props: RangeInvalidLabelProps) => {
  const { invalidInput } = useContext(RangeContext);

  return <>{invalidInput ? props.children : null}</>;
};

export { RangeInvalidLabel };
