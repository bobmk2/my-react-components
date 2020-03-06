import React, { ReactNode, CSSProperties, useMemo } from 'react';
import { css } from 'emotion';
import cx from 'classnames';

const disabledClassName = css({
  opacity: 0.5,
  pointerEvents: 'none'
});

export type DisableProps = {
  /**
   * CSS class name
   */
  className?: string;
  /**
   * CSS style
   */
  style?: CSSProperties;
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Disabled flag
   * @default false
   */
  disabled: boolean;
};

const Disable = (props: DisableProps) => {
  const { className, style, disabled, children } = props;

  const _className = useMemo(() => cx(disabled ? disabledClassName : undefined, className), [disabled, className]);

  return (
    <div style={style} className={_className}>
      {children}
    </div>
  );
};

Disable.defaultProps = {
  disabled: false
};

export { Disable };
