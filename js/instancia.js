const store = new Vuex.Store({

state:{

    Objeto:[{}]

},

mutations:{

    GetObjeto(state, ObjAction){
        state.Objeto = ObjAction;
    }



},

actions:{

        GetObj : async function({commit}, file){
        const data = await fetch(file); //la constante data sera igual a la espera de la promesa del fetch
        const Objeto = await data.json();
        commit('GetObjeto', Objeto)
        console.log(Objeto);
        }


}





});





const app = new Vue({

el:'#app',
store: store


});