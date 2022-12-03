<img alt="React Native Basic Modal" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-basic-modal)

[![Basic & Elegant UI Modal for React Native](https://img.shields.io/badge/-Basic%20%26%20Elegant%20UI%20Modal%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-basic-modal)

[![npm version](https://img.shields.io/npm/v/react-native-basic-modal.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-basic-modal)
[![npm](https://img.shields.io/npm/dt/react-native-basic-modal.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-basic-modal)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Basic Modal"
        src="assets/screenshots/react-native-basic-modal.png" />
</p>

Version 1 😍
- Written from scratch  🍻
- Typescript 💪
- Much better API
- Better customizations
- Much better library fundamentals
- Husky Setup 🐶
    - Commit Linter
    - Prettier

# Installation

Add the dependency:

```ruby
npm i react-native-basic-modal
```

## Peer Dependencies

###### IMPORTANT! You need install them

```json
"react-native-modal": ">= 11.4.0"
```

# Usage

## Import

```js
import BasicModal, { Button } from "react-native-basic-modal";
```
## BasicModal Usage

### Default Usage

```jsx
<BasicModal
  isVisible
  title="Hold on!"
  description="Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh."
/>
```


### Advanced Usage with custom header component and custom footer component

```jsx
<BasicModal
  isVisible
  title="Hold on!"
  description="Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh."
  headerComponent={
    <View>
      <Text>Hey Header</Text>
    </View>
  }
  footerComponent={
    <View>
      <Text>Hey Footer</Text>
    </View>
  }
/>
```


### Advanced Usage with **custom buttons**

Of course you do not need to use `built-in` Button component from library. You can put anything into the `children`  
_Note:_If you need to customize the default buttons, you should use this method instead, it will be much easier and customizable

```jsx
<BasicModal
  isVisible
  title="Hold on!"
  description="Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh.">
  <View style={styles.buttonsContainer}>
    <Button text="Cancel" onPress={() => {}} />
    <Button text="Okay" onPress={() => {}} />
  </View>
</BasicModal>
```


### How can I hide the modal by pressing outside its content?

The prop `onBackdropPress` allows you to handle this situation:

```jsx
<BasicModal
  isVisible={this.state.isVisible}
  onBackdropPress={() => this.setState({ isVisible: false })}
/>
```

# For more FAQ about Modal: 

#### [Modal FAQ](https://github.com/react-native-community/react-native-modal#frequently-asked-questions)


## Example Project 😍

You can check out the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

| Property               |   Type    | Default  | Required | Description                                                         |
|------------------------|:---------:|:--------:|:--------:|---------------------------------------------------------------------|
| isVisible              |   bool    |  false   |    🟢    | set the modal's visibility                                          |
| title                  |  string   | Hold on! |    🟢    | set your own title text                                             |
| description            |  string   | default  |    🟢    | set your own description text                                       |
| primaryButtonText      |  string   | default  |    🟡    | change default primary button's text                                |
| secondaryButtonText    |  string   | default  |    🟡    | change default secondary button's text                              |
| onPrimaryButtonPress   | function  | default  |    🟡    | set the function when the primary button is pressed                 |
| onSecondaryButtonPress | function  | default  |    🟡    | set the function when the secondary button is pressed               |
| onBackdropPress        | function  | default  |    🟡    | set the function when the backdrop of the modal is pressed          |
| headerComponent        | component |   none   |    🟡    | set your own component if you need to add/customize header component |
| footerComponent        | component |   none   |    🟡    | set your own component if you need to add/customize footer component |
| style                  | ViewStyle | default  |    🟡    | set/override the default style                        |
| modalContainerStyle                  | ViewStyle | default  |    🟡    | set/override the default style                   |
| contentContainerStyle                  | ViewStyle | default  |    🟡    | set/override the default style            |
| buttonsContainerStyle                  | ViewStyle | default  |    🟡    | set/override the default style                         |
| titleTextStyle                  | TextStyle | default  |    🟡    | set/override the default style                         |
| descriptionTextStyle                  | TextStyle | default  |    🟡    | set/override the default style                         |

# Configuration - Props [Button] Component

| Property               |   Type    | Default  | Required | Description                                                   |
|------------------------|:---------:|:--------:|:--------:|---------------------------------------------------------------|
| text                   |  string   | Hold on! |    🟡    | set text                                              |
| style                  | ViewStyle | default  |    🟡    | set/override the default style                                |
| onPress                | function  | default  |    🟡    | set the function           |
| textStyle              | TextStyle | default  |    🟡    | set/override the default style                                |

## Credits
I inspired by [Orizon Design](https://www.instagram.com/p/BtHuW3sBpkG/) Thank you so much guys, nice UI / UX :)

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~Typescript~~
- [x] ~~Version 1.0.0~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Basic Modal is available under the MIT license. See the LICENSE file for more info.
