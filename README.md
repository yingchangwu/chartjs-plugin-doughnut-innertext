# Chart JS Line Height Annotation Plugin
### PRs Welcome
A small, lightweight and reliable ChartJS plugin for Doughnut charts specifically. This plugin was made to be compatible with the `react-chartjs-2` library, but it is available as a commonjs and umd module, as well.


## Usage

```sh
npm i chartjs-plugin-doughnut-innertext
```

For React components:

```js
import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-doughnut-innertext";

class App extends Component {
  render() {
    let data = api.get("doughnut-data");
    return (
      <Doughnut
        options={{
          // see all defaults / options below!
          centerText: {
            color: "#000",
            value: 340,
            fontSizeAdjust: 0.2 // increase font size 20% based on default font size
          }
        }}
        data={data}
      />
    );
  }
}
```

### Options

```js
/// default values
doughnutInnerText: {
  // color of the text
  color: "#000",
  // text to be display in the doughnut chart center
  value: 340,
  //manually adjust the font size on top of the default font size
  fontSizeAdjust: 0.2 // 20% larger of the default size
}
```
