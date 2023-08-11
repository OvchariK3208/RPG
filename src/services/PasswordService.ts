import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPassword } from "../models/IPassword";

export const passwordAPI = createApi({
    reducerPath: 'passwordAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64ceccce0c01d81da3ef0f46.mockapi.io' }),
    tagTypes: ['Password'],
    endpoints: (build) => ({
        fetchAllPasswords: build.query<IPassword[], number>({
            query: (limit: number = 5) => ({
                url: '/passwords',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Password']
        }),
        createPassword: build.mutation<IPassword, IPassword>({
            query: (password) => ({
                url: '/passwords',
                method: 'POST',
                body: password
            }),
            invalidatesTags: ['Password']
        }),
        updatePassword: build.mutation<IPassword, IPassword>({
            query: (password) => ({
                url: `/passwords/${password.id}`,
                method: 'PUT',
                body: password
            }),
            invalidatesTags: ['Password']
        }),
        deletePassword: build.mutation<IPassword, number>({
            query: (number) => ({
                url: `/passwords/${number}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Password']
        }),
    })
})