export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    
    //REMOVE after finished developing...
    //token: "BQAQxC0jSULQZKhVfE2TMbrGBdmRxpETLTqLG1tB-eRyyPPw4LR4FZ8WYBkHCAAwCXClo8pzoXJtl4Rg8kcwx52SBg_GLw8gv6Tohem1h4m633ZDh8aXvtwvbx4Wl_EpBv3aFWeF3wNJtfWUzUlrFYY_J0rTkh6COO0ZIGcBwqqSCeOe5_SR",
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer