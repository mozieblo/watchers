import axios, { AxiosResponse, AxiosError } from 'axios';
import * as url from '../endpoints/endpoints';
import {IShow} from '../../types/data/show';

const fetchShows: () => Promise<AxiosResponse<IShow[]> | AxiosError> = async function() {
    try {
        const shows: AxiosResponse = await axios.get(url.shows);
        return shows.data as AxiosResponse<IShow[]>;
    } catch (err) {
        return err as AxiosError;
    }
};

export default fetchShows;