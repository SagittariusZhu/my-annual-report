export const getToken = async () => {
    let token = '';
    // if (/\?token=(.+)&?/.test(window.location.search)) {
    //     token = window.location.search.match(/\?token=(.+)&?/)[1];
    // } else {
    //     token = await get('token');
    // }
    return token;
};

export const days2Now = created_at => {
    const now = +new Date();
    const last = +new Date(created_at);
    return Math.floor((now - last) / (1000 * 60 * 60 * 24));
};

export const dealTime = created_at => {
    return new Date(created_at)
        .toLocaleString()
        .match(/(.*)\s/)[0]
        .replace(/\//g, '-');
};

export const set = (key, value) => {
    localStorage.setItem(
        key,
        typeof value === 'object' ? JSON.stringify(value) : value
    );
};

export const get = key => {
    let value;
    try {
        value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch (_) {
        return value;
    }
};

export const is2019 = created_at => {
    const time = +new Date(created_at);
    const startTime = new Date(ANNUAL_YEAR, 1, 1).getTime(); // Tue Jan 01 2019 00:00:00 GMT+0800
    const endTime = new Date(ANNUAL_YEAR, 12, 31, 23, 59, 59).getTime(); // Tue Jan 01 2020 00:00:00 GMT+0800
    if (time > startTime && time < endTime) {
        return true;
    }

    return false;
};

export const setStatusBarStyle = which => {
    const color = getComputedStyle(document.body).getPropertyValue(which);
    document.querySelectorAll('.theme-color').forEach(item => {
        item.setAttribute('content', color);
    });
};
