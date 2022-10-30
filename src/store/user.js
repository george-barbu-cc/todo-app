export default {
    state: {
        userID:""
    },
    getters: {
    },
    mutations: {
        login (state,userID) {
            state.userID = userID;
            localStorage.setItem('userID', userID);
        },
        logout(state){
            state.userID ="";
            localStorage.removeItem('userID');
        },
        initialiseStore(state) {
            if(localStorage.getItem('userID')){
                state.userID = localStorage.getItem('userID');
            }
        }
    },
    actions: {
    },
    modules: {
    }
}