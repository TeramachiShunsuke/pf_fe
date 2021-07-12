import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { signInAction } from "../duck/users/actions";

const Login = () =>{
    const dispatch = useDispatch();
    const selecter = useSelector(state => state);
    console.log(selecter);
    return  (
        <div>
            <h2>ログイン</h2>
            <button onClick={() => {
                dispatch(signInAction({userid:'test001',username:'testtaro'}))
                dispatch(push('/'))
                }}>
                ログイン
            </button>
        </div>
    );
};

export default Login;