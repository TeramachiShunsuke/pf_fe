import React from 'react';
import { getUserId } from '../duck/users/selector'
import { RootState } from '../duck/store/store';
import { useSelector } from 'react-redux';
const Home = () => {
    const selector = useSelector((state:RootState) => state);
    const userid = getUserId(selector);
    return(
        <div>
            <h2>Home</h2>
            <h1>{userid}</h1>
        </div>
    )
}
export default Home;
