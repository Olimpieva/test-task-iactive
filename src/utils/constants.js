export const MAIN_URL = 'http://f0665380.xsph.ru/';

export const requestErrorMessages = {
    badRequestError: () => 'Переданы некорректные данные при загрузке сообщений.',
    serverError: () => 'Произошла ошибка на сервере. Попробуйте повторить запрос позднее.',
    otherError: ({ errorCode, action }) => `Ой! Во время запроса ${action} произошла ошибка ${errorCode}`,
};

export const availableSortOrder = {
    asc: 'asc',
    desc: 'desc'
};

export const createFormData = (data) => {
    const formData = new FormData();

    for (let key in data) {
        formData.set(key, data[key])
    }

    return formData;
};

export const handleDate = (dateToHandle) => {
    const now = new Date();
    const date = new Date(dateToHandle);

    const handleDateDay = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    const handleDateMonth = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    const handleDateYear = date.getFullYear();
    const handleDateHours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    const handleDateMinutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();

    return {
        time: `${handleDateHours}:${handleDateMinutes}`,
        date: `${handleDateDay}-${handleDateMonth}-${handleDateYear}`,
        isToday: now.getFullYear() === handleDateYear && now.getMonth() === date.getMonth() && now.getDate() === date.getDate(),
    }
}