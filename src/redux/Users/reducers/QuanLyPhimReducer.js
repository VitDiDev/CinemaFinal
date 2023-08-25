import {GET_FILMLIST, SET_FILM_COMING_SOON, SET_FILM_FILTER, SET_FILM_SHOWING} from "../type/QuanLyPhimType";
import { SET_DETAIL_FILM } from "../type/QuanLyRapType";

export const FilmState = {
    NOT_FILTER: 'NOT_FILTER',
    DANG_CHIEU: 'DANG_CHIEU',
    SAP_CHIEU: 'SAP_CHIEU',
}

const initialState = {
    arrFilm: [

    ],
    dangChieu: true,
    sapChieu: true,
    filter: {
        dangChieu: false,
        sapChieu: false,
    },
    filmState: FilmState.NOT_FILTER,
    arrFilmDefault: [],
    filmDetail: {}
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FILMLIST: {
            state.arrFilm = action.filmList;
            state.arrFilmDefault = state.arrFilm;
            return { ...state }
        }

        case SET_FILM_SHOWING: {
            state.dangChieu = !state.dangChieu;
            state.arrFilm = state.dangChieu && state.arrFilmDefault.filter(film => film.dangChieu)
            return { ...state }
        }

        case SET_FILM_COMING_SOON: {
            state.sapChieu = !state.sapChieu;
            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu)
            return { ...state }
        }

        case SET_FILM_FILTER: {
            state.filmState = action.payload;

            switch (state.filmState) {
                case FilmState.SAP_CHIEU: {
                    state.arrFilm = state.arrFilmDefault.filter(t => t.sapChieu);
                    break;
                }
                case FilmState.DANG_CHIEU: {
                    state.arrFilm = state.arrFilmDefault.filter(t => t.dangChieu);
                    break;
                }
                default: {
                    state.arrFilm = state.arrFilmDefault
                }
            }
        }

        case SET_DETAIL_FILM: {
            state.filmDetail = action.filmDetail
            return { ...state }
        }


        default:
            return state
    }
}
