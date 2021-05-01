export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //remove after developing //
    token: 'BQDlQCWwJ_3n147ehb4vGeRTMIebWDpZhvknJdiVEzJPpX1j3gZ1889jWjLd-Vuxz30XgDbtFCk15f3QX3fg2lL1CgSTZXoPJVDD50Lyu6NHgwm26mKbV_K6nREVItaVdDAWyCq2Ys-J189IFnugZBYZNkjH',
};

// action is how we manipulate what the datalayer looks like; set user, set item.. //
const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
             };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;