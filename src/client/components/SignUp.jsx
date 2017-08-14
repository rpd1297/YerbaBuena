import React from 'react';
// import PropTypes from 'prop-types';
import ButtonInstance from './ButtonInstance';

const SignUp = () => (
  <div className="authContainer">
    <h1 className="signUp"> Create an Account </h1>
    <ButtonInstance />
    <p>Already registered? <a>Sign in</a></p>
  </div>
);

// SignUp.propTypes = {
//   signup: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };

export default SignUp;
