import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchdatas:[],
    fav: [] 
};

const dataSlice = createSlice({
    name: 'datastore',
    initialState,
    reducers: {
     
        setsearchdatas:(state,actions)=>{
            state.searchdatas=actions.payload
        },

        setfav: (state, action) => {
            const newItem=action.payload;
            const isDuplicate=state.fav.find((item)=>item.mealId===newItem.mealId);
            if(!isDuplicate)
            {
               state.fav.push(newItem);
            }
        },
        removefav: (state, action) => {
            const remove=action.payload;
            state.fav = state.fav.filter(item => item.mealId !== action.payload);
        },
    }
});

export const { setfav, removefav } = dataSlice.actions;

export default dataSlice.reducer;
