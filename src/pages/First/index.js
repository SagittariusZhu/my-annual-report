import { connect } from 'umi';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import HelloYou from '../../components/HelloYou';
import Loader from '../../components/Loader';
import { fetchData } from '../../service';
import { getToken, setStatusBarStyle } from '../../util';
import Sign from '../Sign/';

const First = ({ profile, dispatch }) => {
    setStatusBarStyle('--first-color');
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        async function get() {
            const token = await getToken();
            const res = await fetchData(token);
            if (/first/.test(window.location.href)) {
                setLoading(false);
                setData(res);
            }
        }
        get();
    }, []);

    if (loading) {
        return (
            <div className="first">
                <Loader />
            </div>
        );
    }

    return (
        <div
            className="first"
            onClick={() => {
                history.push(`/second`);
            }}
        >
            <div className="hi">
                <HelloYou />
            </div>
            <section>
                <div className="met">
                    <p className="bold">{data.created_at}</p>
                    <p>我们第一次相遇</p>
                </div>
                <p className="content">
                    <strong>{data.first_repo}</strong>
                    是今年你创建的第一个仓库
                </p>
            </section>
            <footer>
                <p className="past">
                    这一年，你一共创建了<strong>{data.repo_count}</strong>
                    个项目，参与修改了<strong>{data.modified_repo_count}</strong> 个项目
                </p>
                <Sign></Sign>
            </footer>
        </div>
    );
}

export default connect(({
    profile,
}) => ({
    profile,
}))(First);