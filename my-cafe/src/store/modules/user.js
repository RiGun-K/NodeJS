export default{
    state:()=>({
        userId:'user'
    }),
    mutations:{
        updateUserId(state, newId){
            state.userId = newId;
        }
    }
}