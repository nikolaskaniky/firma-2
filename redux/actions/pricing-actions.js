import { SELECTED_PRICING_USER } from "../constants/pricing-constants"

export const getPricingUserAction = (id) => async(dispatch, getState) => {
    {
        dispatch({
            type: SELECTED_PRICING_USER,
            payload: id
        })
    }  
}