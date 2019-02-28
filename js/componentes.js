Vue.component('Padre',{

template: //html
`
<div>
<div class="alert bg-danger text-white">
    <h4>{{titulo}}</h4>
    <tabla :Objeto="Objeto" :File="File" :Titulo="Titulo"></tabla>
    
</div>


</div>


`,

data(){

    return {

        Objeto:[{}],
        Titulo: this.titulo,
        File: this.file,
         

    }

},
props:['titulo','file']

});

Vue.component('tabla',{

    template: //html
    `
        <div class="table-responsive">
        
            <table class="table">
            
                <thead class="text-white">
                
                    <tr  >
                        <th>Index</th>
                        <th v-for="property in Ciclo">{{property}}</th>
                        
                    </tr>
                
                </thead>

                <tbody class="text-white">
                    <tr v-for="(item, index) of Objeto">

                        <td>{{index}}</td>
                        <td>{{item.Nombre}}</td>
                        
                        <td>{{item.Edad}}</td>
                        
                        <td>{{item.Experiencia}}</td>
                        
                        <td>{{item.Lenguaje}}</td>
                        
                        <td>{{item.Base_Datos}}</td>    
                        
                    </tr>
                    <div class="alert bg-white rounded col-sm-12 text-dark">

                        <h5>Hay {{Titulo }}</h5>
                        <button @click="GetObj(File)" class="btn btn-warning">Get</button>
                        
                        
                        
                    </div>
                </tbody>


            </table>


        
        </div>


    `,
    props:['Objeto','File', 'Titulo'],

    computed:{

        Ciclo(){
                var propiedades = []
                for (var key2 in this.Objeto[0]) {    
                 
                  propiedades.push(key2)
                  
                }
                return propiedades;
        },

        ...Vuex.mapState(['Objeto'])

    },


    methods:{
    
        ...Vuex.mapActions(['GetObj'])
    
    
    }



});