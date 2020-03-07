import React, { ReactNode } from 'react';
import crypto from 'crypto';
import { css } from 'emotion';
import cx from 'classnames';

const styles = {
  default: css({
    display: 'inline-block',
    borderRadius: '10rem',
    color: '#FFF',
    padding: '.25em .6em',
    textShadow: `#000 1px 0px 0px, #000 0.540302px 0.841471px 0px, #000 -0.416147px 0.909297px 0px, #000 -0.989992px 0.14112px 0px, #000 -0.653644px -0.756802px 0px, #000 0.283662px -0.958924px 0px, #000 0.96017px -0.279415px 0px`
  }),
  children: css({
    display: 'flex',
    whiteSpace: 'nowrap',
    alignItems: 'center'
  }),
  xsmall: css({
    fontSize: '.75rem'
  }),
  small: css({
    fontSize: '.875rem'
  }),
  middle: css({
    fontSize: '1rem'
  }),
  large: css({
    fontSize: '1.25rem'
  }),
  xlarge: css({
    fontSize: '1.5rem'
  })
};

export type NameplateBadgeProps = {
  /**
   * CSS class name
   */
  className?: string;
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  /**
   * Size ('xs': extra small / 'sm': small / 'md': middle / 'lg': large / 'xl': extra large)
   * @default md
   */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Children
   */
  children: ReactNode | string;
  /**
   * Seed of creating bg color
   * @default 12345
   */
  seed: string | number;
  /**
   * Creat bg color by this value if you set
   */
  value?: string | number;
};

const Nameplate = (props: NameplateBadgeProps) => {
  const { className, style, size, children, seed, value } = props;

  const sizeClassName = React.useMemo(() => {
    switch (size) {
      case 'xs':
        return styles.xsmall;
      case 'sm':
        return styles.small;
      case 'lg':
        return styles.large;
      case 'xl':
        return styles.xlarge;
      default:
        return styles.middle;
    }
  }, [size]);

  const [bgColor] = React.useMemo(() => {
    const md5 = crypto
      .createHash('md5')
      .update((value?.toString() ?? children?.toString() ?? '') + seed)
      .digest('hex');

    const bgRed = md5.substr(0, 2);
    const bgGreen = md5.substr(2, 2);
    const bgBlue = md5.substr(4, 2);

    return [`#${bgRed}${bgGreen}${bgBlue}`];
  }, [value, children, seed]);

  return (
    <div className={cx(styles.default, sizeClassName, className)} style={{ backgroundColor: bgColor, ...style }}>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

Nameplate.defaultProps = {
  size: 'md',
  seed: 12345
};

export { Nameplate };
