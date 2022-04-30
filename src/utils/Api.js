import { MAIN_URL } from "./constants";

class MainApi {
    constructor(apiOptions) {
        this._url = apiOptions.url;
    }

    async _sendRequest(path, requestOptions) {

        try {
            console.log('Ya tut?')
            const response = await fetch(`${this._url}${path}`, { ...requestOptions });

            if (!response.ok) {
                throw response;
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    };

    getMessages(data) {

        console.log({ data })
        return this._sendRequest(
            ``,
            {
                method: 'POST',
                body: data,
            },
        );
    };
};

const api = new MainApi({ url: MAIN_URL });

export default api;