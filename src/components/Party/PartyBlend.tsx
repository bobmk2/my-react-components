import React, { ReactNode, CSSProperties } from 'react';
import { css, keyframes } from 'emotion';
import cx from 'classnames';

const COLORS = ['#ff8d8b', '#fed689', '#88ff89', '#87ffff', '#8bb5fe', '#d78cff', '#ff8cff', '#ff6060'];

const rainbow = keyframes({
  'from, to': {
    backgroundColor: COLORS[0]
  },
  '12.5%': {
    backgroundColor: COLORS[1]
  },
  '25%': {
    backgroundColor: COLORS[2]
  },
  '37.5%': {
    backgroundColor: COLORS[3]
  },
  '50%': {
    backgroundColor: COLORS[4]
  },
  '62.5%': {
    backgroundColor: COLORS[5]
  },
  '75%': {
    backgroundColor: COLORS[6]
  },
  '87.5%': {
    backgroundColor: COLORS[7]
  }
});

export type PartyBlendProps = {
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
  /**
   * Mix blend mode
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
   * @default overlay
   */
  mode:
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity'
    | 'initial'
    | 'inherit'
    | 'unset';
};

const PartyBlend = (props: PartyBlendProps) => {
  const { className, style, duration, children, mode } = props;
  return (
    <div
      style={style}
      className={cx(
        css({
          display: 'inline-block',
          animation: `${rainbow} ${duration} linear infinite`
        }),
        className
      )}
    >
      <span style={{ mixBlendMode: mode }}>{children}</span>
    </div>
  );
};

PartyBlend.defaultProps = {
  duration: '1s',
  mode: 'overlay'
};

export { PartyBlend };
