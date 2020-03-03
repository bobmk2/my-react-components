import React from "react";
// import { StyleSheet, css } from "aphrodite/no-important";

// const styles = StyleSheet.create({
//   example: {
//     fontWeight: 700
//   },
//   disabled: {
//     opacity: 0.7
//   }
// });

export type ExampleProps = {
  /** ラベル */
  label: string;
  /** 無効設定 */
  disabled: boolean;
  /** クリック時の振る舞い */
  onClick: () => void;
};

const Example = (props: ExampleProps) => {
  const { label, disabled, onClick } = props;

  return (
    <span
      // className={css(styles.example, disabled ? styles.disabled : null)}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

Example.defaultProps = {
  disable: false
};

export { Example };
