const initialState = {
    characterList: [],
    favoriteList: [],
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                favoriteList: [...state.favoriteList, action.payload]
            }

        case "REM_FAV":
            // console.log("REDUCER", state.favoriteList.filter(char=>char.url !== action.payload));
            return {
                ...state,
                favoriteList: state.favoriteList.filter(char=>char.url !== action.payload)
            }
            // break;

        case "SAVE_CHAR_LIST":
            return {
                ...state,
                characterList: action.payload
            }
            
    
        default:
            return state;
    }
}

export default rootReducer;