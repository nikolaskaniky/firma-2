import { SELECTED_CV_SKILL } from "../constants/cv-skill-contants"

export const getCVSkillAction = (id) => async(dispatch, getState) => {
    dispatch({
        type: SELECTED_CV_SKILL,
        payload: id,
    })
}