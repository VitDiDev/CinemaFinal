import {FilmState} from "../../../redux/Users/reducers/QuanLyPhimReducer";

export const FilmStateOptions = [
  {
    label: 'Tất cả',
    value: FilmState.TAT_CA,
  },
  {
    label: 'Đang chiếu',
    value: FilmState.DANG_CHIEU,
  },
  {
    label: 'Sắp chiếu',
    value: FilmState.SAP_CHIEU,
  }
];