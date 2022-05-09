import { SELECTED_CV_SKILL } from "../constants/cv-skill-contants";

const initialState = 'designer';

export const selectedCVSkillReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECTED_CV_SKILL:
            return state = action.payload;
        default:
            return state;
    }
}