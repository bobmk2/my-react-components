import React from 'react';
import { css } from 'emotion';

const styles = {
  default: {
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  vertical: {
    alignItems: 'center'
  },
  horizontal: {
    justifyContent: 'center'
  }
};

const centerClassName = css(styles.default, styles.center);
const verticalClassName = css(styles.default, styles.vertical);
const horizontalClassName = css(styles.default, styles.horizontal);

export type CenteringProps = {
  /**
   * CSS class name
   */
  className?: string;
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  /**
   * Children
   */
  children: React.ReactNode;
  /**
   * Centering type
   * @default center
   */
  type: 'center' | 'vertical' | 'horizontal';
};

const Centering = (props: CenteringProps) => {
  const { type } = props;

  const className = React.useMemo(() => {
    if (type === 'vertical') {
      return verticalClassName;
    }
    if (type === 'horizontal') {
      return horizontalClassName;
    }

    return centerClassName;
  }, [type]);

  return (
    <div style={props.style} className={className}>
      {props.children}
    </div>
  );
};

Centering.defaultProps = {
  type: 'center'
};

export { Centering };
