import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameter = (queryParameter) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return searchParams.get(queryParameter);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({key,value}) => {
        const searchParams = new URLSearchParams(location.search);

        if (!value) {searchParams.delete(key)}
        else {searchParams.set(key, value)}

        history.push(`${location.pathname}?${searchParams.toString()}`)
    }
};