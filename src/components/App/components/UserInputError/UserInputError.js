import styles from './UserInputError.less';

import React, { Component, PropTypes } from 'react';
import { MIN_FONT_SIZE, MAX_FONT_SIZE } from 'flux/constants/config';

export default class UserInputError extends Component {
  static propTypes = {
    areColorsValid: PropTypes.bool.isRequired,
    isFontSizeValid: PropTypes.bool.isRequired
  };

  render() {
    const { areColorsValid, isFontSizeValid } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {
            !areColorsValid &&
              <p>
                Please enter a valid hexadecimal color
              </p>
          }
          {
            !isFontSizeValid &&
              <p>
                Please enter a font size between {MIN_FONT_SIZE}px
                and {MAX_FONT_SIZE}px
              </p>
          }
        </div>
      </div>
    );
  }
}
