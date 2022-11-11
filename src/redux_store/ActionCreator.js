import {createAsyncThunk } from '@reduxjs/toolkit'
export const fetchFakeData = createAsyncThunk('fakeData/fakeDataAdded',() => new Promise((resolve,reject)=>{
    fetch('http://localhost:3000/api.json').then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            throw error;
        }
    )
    .then(response => response.json())
    .then(response => {
        //console.log(response);
        resolve(response)
    })
    .catch(error => reject(error));
}))
