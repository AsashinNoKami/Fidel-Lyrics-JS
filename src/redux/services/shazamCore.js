import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) =>{
                headers.set("X-RapidAPI-Key", "b989e4f8bamsh888abcdb524f437p131072jsn8ceef9d9228b");
                return headers; 
            },
        }),
        endpoints: (builder) =>({
            getTopCharts: builder.query({query: () => '/charts/world'}),
            getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`}),
        }),

    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
    } = shazamCoreApi;