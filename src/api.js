import { request } from 'umi';
import { set, get } from './util';

const baseURL = 'https://api.github.com';
const fetch = (url, token) => {
    return request(`${baseURL}${url}`, {
        auth: {
            user: access_user,
            token: access_token,
        },
    });
};

export const fetchRepos = async token => {
    let res = await get('repos');
    if (res) {
        return res;
    }

    res = await fetch(`/user/repos?sort=created`, token);
    const repos = await res;
    set('repos', repos);
    return repos;
};

export const fetchContributors = async (repoName, token) => {
    const key = `contributors-${repoName}`;
    let res = await get(key);
    if (res) {
        return res;
    }
    res = await fetch(`/repos/${repoName}/stats/contributors`, token);
    const contributors = await res;
    set(key, contributors);
    return contributors;
};

export const fetchIssues = async (repoName, token) => {
    const key = `issues-${repoName}`;
    let res = await get(key);
    if (res) {
        return res;
    }

    res = await fetch(`/repos/${repoName}/issues?state=all`, token);
    const issues = await res;
    set(key, issues);
    return issues;
};

export const fetchUser = async token => {
    let res = await get('user');
    if (res) {
        return res;
    }

    res = await fetch(`/user`, token);
    const user = await res;
    set('user', user);
    return user;
};

export const fetchFollowing = async (username, token) => {
    const res = await fetch(`/users/${username}/following`, token);
    return await res;
};

export const fetchCommits = async (repoName, token) => {
    const key = `commits-${repoName}`;
    let res = await get(key);
    if (res) {
        return res;
    }

    res = await fetch(`/repos/${repoName}/commits`, token);
    const commits = await res;
    set(key, commits);
    return commits;
};
