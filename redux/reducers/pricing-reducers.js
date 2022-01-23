import { SELECTED_PRICING_USER } from '../constants/pricing-constants';

export const selectedPricingUserReducer = (
    state = 0, action
) => {
    switch(action.type) {
        case SELECTED_PRICING_USER:
            return state = action.payload;
        default:
            return state;
    }
}