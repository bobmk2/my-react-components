import React from "react";

import { storiesOf } from "@storybook/react";
// import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Example } from "../Example";

const components = storiesOf("Components", module);
components
  .addDecorator(withKnobs)
  // .addDecorator(withInfo)
  .add("Example", () => (
    <Example
      label={text("テキスト", "ああああ")}
      disabled={boolean("無効設定", false)}
      onClick={action("ぽちっとな")}
    />
  ));
