import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { userCreated } from "./usersSlice"
import {
  LoginForm,
  LoginPage,
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';


export const HideShowPasswordPage = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const [showHelperText, setShowHelperText] = useState(false)
    const [usernameValue, setUsernameValue] = useState('')
    const [isValidUsername, setIsValidUsername] = useState(true)
    const [passwordValue, setPasswordValue] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isRememberMeChecked, setisRememberMeChecked] = useState(false)

    const onLoginButtonClick = (e) => {
        e.preventDefault();
        setIsValidUsername(users.find((user) => user.id === usernameValue));
        setIsValidPassword(!!passwordValue);
        setShowHelperText(!usernameValue || !passwordValue)
    }

    const helperText = (
      <React.Fragment>
        &nbsp;Invalid login credentials.
      </React.Fragment>
    );

    const loginForm = (
      <LoginForm
        showHelperText={showHelperText}
        helperText={helperText}
        helperTextIcon={<ExclamationCircleIcon />}
        usernameLabel="Username"
        usernameValue={usernameValue}
        onChangeUsername={(value) => {setUsernameValue(value)}}
        isValidUsername={isValidUsername}
        passwordLabel="Password"
        passwordValue={passwordValue}
        isShowPasswordEnabled
        onChangePassword={(value) => {setPasswordValue(value)}}
        isValidPassword={isValidPassword}
        rememberMeLabel="Keep me logged in"
        isRememberMeChecked={isRememberMeChecked}
        onChangeRememberMe={(prev) => {setisRememberMeChecked(!prev)}}
        onLoginButtonClick={onLoginButtonClick}
        loginButtonLabel="Log in"
      />
    );

    return (
      <LoginPage
        style={{backgroundColor: "black"}}
        textContent="This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users."
        loginTitle="Log in to your account"
      >
        {loginForm}
      </LoginPage>
    );
}
