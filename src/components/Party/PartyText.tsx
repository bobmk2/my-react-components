import React, { ReactNode, CSSProperties } from 'react';
import { css, keyframes } from 'emotion';
import cx from 'classnames';

const COLORS = ['#ff8d8b', '#fed689', '#88ff89', '#87ffff', '#8bb5fe', '#d78cff', '#ff8cff', '#ff6060'];

const rainbow = keyframes({
  'from, to': {
    color: COLORS[0]
  },
  '12.5%': {
    color: COLORS[1]
  },
  '25%': {
    color: COLORS[2]
  },
  '37.5%': {
    color: COLORS[3]
  },
  '50%': {
    color: COLORS[4]
  },
  '62.5%': {
    color: COLORS[5]
  },
  '75%': {
    color: COLORS[6]
  },
  '87.5%': {
    color: COLORS[7]
  }
});

export type PartyProps = {
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
  children: ReactNode;
  /**
   * Animation duration
   * @default 1s
   */
  duration: string;
};

const PartyText = (props: PartyProps) => {
  const { className, style, children, duration } = props;
  return (
    <span
      style={style}
      className={cx(
        css({
          animation: `${rainbow} ${duration} linear infinite`
        }),
        className
      )}
    >
      {children}
    </span>
  );
};

PartyText.defaultProps = {
  duration: '1s'
};

export { PartyText };
