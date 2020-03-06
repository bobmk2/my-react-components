import React, { ReactNode } from 'react';

export type NameplateBadgeProps = {
  /**
   * Badge size
   */
  size?: 'sm' | 'lg';
  /**
   * Show unique badge color
   * @default true
   */
  unique: boolean;
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Seed of making unique color
   * @default 12345
   */
  seed: number;
};

const NameplateBadge = (props: NameplateBadgeProps) => {
  const { size, unique, children, seed } = props;

  const [bgColor, textColor] = React.useMemo(() => {
    const bgRed = Math.floor(Math.random() * Math.floor(255));
    const bgGreen = Math.floor(Math.random() * Math.floor(255));
    const bgBlue = Math.floor(Math.random() * Math.floor(255));
    return [toColorString(bgRed, bgGreen, bgBlue), '#000000'];
  }, []);

  return <span style={{ backgroundColor: bgColor }}>test</span>;
};

function toColorString(red: number, green: number, blue: number) {
  return `#${('00' + red.toString(16).toUpperCase()).slice(-2)}${('00' + green.toString(16).toUpperCase()).slice(-2)}${(
    '00' + blue.toString(16).toUpperCase()
  ).slice(-2)}`;
}

NameplateBadge.defaultProps = {
  unique: true,
  seed: 12345
};

export { NameplateBadge };
