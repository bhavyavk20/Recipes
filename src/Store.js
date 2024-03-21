import {configureStore } from "@reduxjs/toolkit";
import datas from './DataSlice'

export const store=configureStore({
    reducer:{
        datastore:datas
    }
    
})