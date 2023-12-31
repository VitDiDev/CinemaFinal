import { getBanner } from "../../../services/Admins/ManagerFilms";
import { SET_CAROUSEL } from "../type/QuanLyPhimType";

export const getCarouselAction = () => {

  return async (dispatch2) => {
    try {
      const result = await getBanner()
      dispatch2({
        type: SET_CAROUSEL,
        bannerList: result.data.content
      })
    } catch (error) {
      console.log('error', error)
    }
  }
}