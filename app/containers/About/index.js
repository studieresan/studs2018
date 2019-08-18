import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { FormattedMessage } from 'react-intl'
// import sortBy from 'lodash/sortBy'
// import * as actions from 'containers/Members/actions'
import MemberHomePage from 'components/MemberHomePage'
import styles from './styles.css'
import messages from './messages'
import Footer from 'components/Footer'
import Josefin from 'static/img/people/josefin.jpg'
import Cristian from 'static/img/people/cristian.jpg'
import Christine from 'static/img/people/christine.jpg'
import Klara from 'static/img/people/klara.jpg'
import Samuel from 'static/img/people/samuel.jpg'
import Marko from 'static/img/people/marko.jpg'
import Helena from 'static/img/people/helena.jpg'
import Carl from 'static/img/people/carl.jpg'
import MemberImage from 'components/MemberImage'
import { StudentComponent, ApplyButton } from 'components/Student/index'
import Button from 'components/Button'
import { Link } from 'react-router-dom'

class About extends Component {
  // componentDidMount() {
  //   this.props.getUsers()
  // }

  render() {
    // const { users } = this.props
    return (
      <div className='container'>
        <div className={styles.about}>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <div className={styles.about_text}>
            <p>
              The KTH Study Trip, or Studs, is an annual project at the Royal
              Institute of Technology (KTH) in Stockholm. The project aims to
              create a platform for interaction between students close to
              graduation and relevant companies. The project ends with a study
              trip to give the students an opportunity to meet companies abroad.
            </p>
            <ApplyButton />
          </div>
          <h2>
            <FormattedMessage {...messages.subtitle} />
          </h2>
          <div className={styles.image_row}>
            <div className={styles.member}>
              <MemberImage
                className={styles.contactPicture}
                picture={Carl}
                size={200}
                square
                round
              />
              <h3>Carl Nordling</h3>
              <h5>Head of Travel</h5>
            </div>
            <div className={styles.member}>
              <MemberImage
                className={styles.contactPicture}
                picture={Christine}
                size={200}
                square
                round
              />
              <h3>Christine Rosquist</h3>
              <h5>Head of Events</h5>
            </div>
            <div className={styles.member}>
              <MemberImage
                className={styles.contactPicture}
                picture={Cristian}
                size={200}
                square
                round
              />
              <h3>Cristian Osorio Bretti</h3>
              <h5>Head of Sales</h5>
            </div>
            <div className={styles.member}>
              <MemberImage
                className={styles.contactPicture}
                picture={Helena}
                size={200}
                square
                round
              />
              <h3>Helena Alinder</h3>
              <h5>Project Manager</h5>
            </div>
          </div>
          <div className={styles.image_row}>
            <div className={styles.member}>
              <MemberImage
                className={styles.contactPicture}
                picture={Josefin}
                size={200}
                square
                round
              />
              <h3>Josefin Nilsson</h3>
              <h5>Project Manager</h5>
            </div>
            <div className={styles.member}>
              <MemberImage
                className={styles.contactPicture}
                picture={Klara}
                size={200}
                square
                round
              />
              <h3>Klara Eserstam</h3>
              <h5>Head of Finance</h5>
            </div>
            <div className={styles.member}>
              <MemberImage
                className={styles.contactPicture}
                picture={Marko}
                size={200}
                square
                round
              />
              <h3>Marko Lazic</h3>
              <h5>Head of IT</h5>
            </div>
            <div className={styles.member}>
              <MemberImage
                className={styles.contactPicture}
                picture={Samuel}
                size={200}
                square
                round
              />
              <h3>Samuel Hertzberg</h3>
              <h5>Editor in Chief</h5>
            </div>
          </div>
        </div>
        <StudentComponent />
        <Footer />
      </div>
    )
  }
}

// About.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       firstName: PropTypes.string.isRequired,
//       picture: PropTypes.string,
//     })
//   ),
//   getUsers: PropTypes.func.isRequired,
// }

// About.defaultProps = {
//   users: [],
// }

// function mapStateToProps(state) {
//   const users = state.getIn(['members', 'users']).toJS()
//   return {
//     users: sortBy(users, ['firstName']),
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actions, dispatch)
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(About)

export default About
