// @flow
import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import styles from './styles.css'
import LogoPng from 'static/img/logo/logotype-white.png'

function HomePageHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <img className={styles.logoDesktop} src={LogoPng} />
        <img className={styles.logoMobile} src={LogoPng} />
        <div className={styles.header_text}>
          <FormattedMessage {...messages.intro.about} />
        </div>
      </div>
    </div>
  )
}

export default HomePageHeader
