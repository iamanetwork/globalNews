import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Api_KEY, Api_URL } from '../utils/Url';

export interface itemProps {
      content: string;
      description: string;
      image: string;
      publishedAt: string;
      source: {
          name: string;
          url: string;
      };
      title: string;
      url: string;
}

export interface HomeState {
  homeData: any;
  getArticleError: string | null;
  getArticleStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  savedData: itemProps[];

 }

const initialState: HomeState = {
  homeData: null,
  getArticleError: null,
  getArticleStatus: 'idle',
  savedData: [],
};

export const fetchHomeData = createAsyncThunk(
  'home/getQuote',
  async (_, { rejectWithValue }) => {

    try {
      const response = await axios.get(`${Api_URL}top-headlines?category=general&lang=en&country=us&max=10&apikey=${Api_KEY}`);
         return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || 'Something went wrong';
      return rejectWithValue(message);
    }
  },
);



export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleBookmark: (state, action: { payload: itemProps }) => {
      if (!state.savedData) {
        state.savedData = [];
      }
    
      const index = state.savedData.findIndex(
        (saved) => saved.title === action.payload.title
      );
    
      if (index >= 0) {
        state.savedData.splice(index, 1);
      } else {
        state.savedData.push(action.payload);
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchHomeData.pending, state => {
        state.getArticleStatus = 'loading';
        state.getArticleError = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {

        state.getArticleStatus = 'succeeded';
        state.getArticleError = null;
        state.homeData = action.payload.articles

      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.getArticleStatus = 'failed';
        state.getArticleError = action.error.message || 'Failed to fetch data';
      })
      ;
  },
});

export const { toggleBookmark } = homeSlice.actions

export default homeSlice.reducer;
