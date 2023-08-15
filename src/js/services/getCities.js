import { OPTIONS, PARAMS } from '../constants/geoApiProps.js';
import { GEO_API_URL } from '../constants/url.js'

export const getCities = async (prefix) => {

    let cities = []

    try {
            await fetch(`${GEO_API_URL.BASE}${GEO_API_URL.TYPES}${PARAMS.TYPE}${GEO_API_URL.MIN_POPULATION}${PARAMS.POPULATION}
                ${GEO_API_URL.NAME_PREFIX}
                ${prefix}`, OPTIONS)
                .then(blob => blob.json())
                .then(item => cities.push(...item.data));
                return cities
    } catch (error) {
        console.error(error);
    }
}