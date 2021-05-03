import React, { FC, useEffect } from 'react';
import { useIntl } from 'react-intl';
import {useDispatch} from 'react-redux';
import {AxiosResponse, AxiosError} from 'axios';
import SearchBar from '../../components/searchBar/SearchBar';
import fetchShows from '../../api/fetch/fetchShows';
import {addShows} from '../../store/actions';
import {IShow} from '../../types/data/show';

const Home: FC = () => {
    const intl = useIntl();
    const dispatch = useDispatch();

    function AddShowsToStore(shows: AxiosResponse<IShow[]> | AxiosError) {
        dispatch(
            addShows(shows)
        );
    }

    useEffect(() => {
        fetchShows()
            .then(res => {
                AddShowsToStore(res);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div>{intl.formatMessage({ id: 'home.content' })}</div>
            <SearchBar />
        </>
    );
};

export default Home;
