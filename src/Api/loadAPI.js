import axios from "axios";

const instance = axios.create({
    baseURL: "https://front-test.beta.aviasales.ru/"
});


export const ticketsAPI = {
    getSearchID: () => instance("search")
        .then(resp => instance(`tickets?searchId=${resp.data.searchId}`))
        .catch(err => err && ticketsAPI.getSearchID())
};
