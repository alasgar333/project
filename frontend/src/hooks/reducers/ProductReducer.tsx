import { CATEGORY_FAIL, CATEGORY_REQUEST, CATEGORY_SUCCESS } from "../constans/ProductConstans";


const initialState = {
    categorys : [],
    loading: false,
    error: null,
};

const categoryReducer = (state = initialState, action)=>{
    switch(action.type){
        case CATEGORY_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case CATEGORY_SUCCESS:
            return{
                ...state,
                loading:false,
                categorys:action.payload,
            };
        case CATEGORY_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}

export default categoryReducer;