import './global.scss'
import { encode } from 'js-base64';

export const request = {
    requestInterceptors: [(url, options) => {
        const { headers, auth = {}, ...rest } = options;
        if (auth.user) {
            return {
                url: url,
                options: {
                    headers: Object.assign({
                        Authorization: `Basic ${encode(auth.user + ":" + auth.token)}`
                    }, headers),
                    ...rest,
                },
            };
        }
        return { url, options };
    }]
};
