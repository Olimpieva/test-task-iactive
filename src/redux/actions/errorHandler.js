import { FAILURE } from "./actionTypes";
import { requestErrorMessages } from "../../utils/constants";

const handleError = ({ errorCode = 500, action }) => {

    return {
        type: action + FAILURE,
        payload: (() => {
            switch (errorCode) {
                case 500:
                    return requestErrorMessages.serverError();
                default:
                    return requestErrorMessages.otherError({ errorCode, action });
            };
        })(),
    };
};

export default handleError;
