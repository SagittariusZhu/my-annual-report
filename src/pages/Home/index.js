import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MilkButton from '../../components/MilkButton';
import './index.scss';
import { requestUser } from '../../service';
import { set, get, setStatusBarStyle } from '../../util';

const Home = () => {
    const [profile, setProfile] = useState({});
    const history = useHistory();
    setStatusBarStyle('--home-color');

    useEffect(async () => {
        await requestUser();
        const data = get('user');
        console.log(data);
        setProfile(() => ({
            ...data
        }));
    }, [history]);

    return (
        <div className="home">
            <img src={profile.avatar_url} alt={profile.name} />
            <h1>
                {ANNUAL_YEAR}
                <br />
                {profile.name}
                <br />
                Github年度报告
            </h1>
            <div
                onClick={() => {
                    history.push('/first');
                }}
            >
                <MilkButton />
            </div>
        </div>
    );
}

export default Home;
