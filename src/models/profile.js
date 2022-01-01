import { requestUser } from '../service';

export default {
    namespace: "profile",
    state: {
        avatar_url: "",
        created_at: "",
        events_url: "",
        followers: 0,
        followers_url: "",
        following: 0,
        following_url: "",
        gists_url: "",
        gravatar_id: "",
        id: 0,
        login: "",
        name: "",
        node_id: "",
        organizations_url: "",
        public_gists: 0,
        public_repos: 15,
        received_events_url: "",
        repos_url: "",
        starred_url: "",
        twitter_username: null,
        updated_at: "",
        url: "",
    },
    effects: {
        *loadData({ }, { call, put }) {
            const res = yield call(requestUser);
            yield put({
                type: "save",
                payload: res,
            })
        }
    },
    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                ...payload,
            }
        }
    }
}