export const MAIN_URL = 'http://f0665380.xsph.ru/';

export const requestErrorMessages = {
    serverError: () => 'Произошла ошибка на сервере. Попробуйте повторить запрос позднее.',
    invalidAuthUserData: () => 'Некорректный логин или пароль',
    otherError: ({ errorCode, action }) => `Ой! Во время запроса ${action} произошла ошибка ${errorCode}`,
};

export const createFormData = (data) => {
    const formData = new FormData();

    for (let key in data) {
        formData.set(key, data[key])
    }

    return formData;
};

export const sortData = (data, order) => {
    let sortData;

    if (order === 'asc') {
        sortData = data.sort((prev, next) => prev.id < next.id ? -1 : 1);
    }

    if (order === 'desc') {
        sortData = data.sort((prev, next) => prev.id > next.id ? -1 : 1);
    }

    return sortData;
};