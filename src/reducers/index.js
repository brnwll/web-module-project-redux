import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import movieReducer from "./movieReducer";

const reducer = combineReducers({ favoritesReducer, movies: movieReducer });

export default reducer;
