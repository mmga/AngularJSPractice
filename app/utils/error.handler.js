'use strict';

export function handleErrorF(err) {
    let {status, data: {error}} = err
    console.log(status, error)
}

export const handleErrorC = err =>{
    let {status, data: {error}} = err
    console.log(status, error)
}