import React from 'react';
import ReactLoading from 'react-loading';
import '../Loading/loading.scss';

const Loading = (props) =>{
    return(
        <div className='loading'>
            <ReactLoading type={'spin'} color={'var(--color-background'} height={100} width={100} />
        </div> 
    );  
}