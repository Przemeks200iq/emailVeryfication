import { OPTIONS } from "./apikey.js";

export const connect = async (domain) => {
    try {
        const response = await fetch(
            `https://mailcheck.p.rapidapi.com/?domain=${domain}`,
            OPTIONS
        );

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
