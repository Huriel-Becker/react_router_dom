import './style.css';
import React from 'react'
import { useParams, useSearchParams, Outlet } from 'react-router-dom';

export const Post = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams(); 

    return ( 
        <div>
            <h1>Post {`Para: ${id}`} {`QS: ${qs.get('page')}`}</h1>
            <Outlet />
        </div>
    );
};