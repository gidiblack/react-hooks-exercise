import { useReducer, useState } from 'react';
import useInterval from './useInterval';
// custom hook to hold 4 react hook calls
const useEmailValidation = (maxSeconds) => {
    // regex to validate email
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    // email valid useState hook
    const [emailValid, setEmailValid] = useState(false);
    // reducer to set state if email is valid or not
    const emailReducer = (state, action) => {
        const isValidEmail = validateEmail(action);
        setEmailValid(isValidEmail);
        return action;
    };
    // useReducer hook call
    const [email, setEmail] = useReducer(emailReducer, '');
    const [count, setCount] = useState(maxSeconds);
    // custom setInterval method by react team to setCount
    useInterval(() => {
        setCount(count - 1);
    }, count > 0 ? 1000 : null);
    // return the values of the hook calls made inside this custom functional hook 
    return { count, email, setEmail, emailValid };
}

export default useEmailValidation;