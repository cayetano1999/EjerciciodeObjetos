Vue.component('Padre',{

template: //html
`
<div class="alert bg-danger text-white">
    <h4>Programadores</h4>
    <tabla :Programador="Programador"></tabla>

</div>

`,

data(){

    return {

        Programador:[
            {Nombre: 'Josue Alexander Cayetano',
            Edad : '18',
            Experiencia: '2 Años',
            Lenguaje: 'C# y PHP',
            DB: 'SQL Server'},

            {Nombre: 'Orbiz Alonzo Gutierrez',
            Edad : '18',
            Experiencia: '2 Años',
            Lenguaje: 'C# y PHP',
            DB: 'SQL Server'},

            {Nombre: 'Gabriel Solano Mota',
            Edad : '18',
            Experiencia: '2 Años',
            Lenguaje: 'C# y PHP',
            DB: 'SQL Server'},


        ]

    }

}


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
                    <tr v-for="(item, index) of Programador">

                        <td>{{index}}</td>
                        <td>{{item.Nombre}}</td>
                        
                        <td>{{item.Edad}}</td>
                        
                        <td>{{item.Experiencia}}</td>
                        
                        <td>{{item.Lenguaje}}</td>
                        
                        <td>{{item.DB}}</td>    
                        
                    </tr>
                    <div class="alert bg-white rounded col-sm-12 text-dark">

                        <h5>Hay {{Programador.length}} Programadores</h5>
                        
                        
                        
                    </div>
                </tbody>


            </table>


        
        </div>


    `,
    props:['Programador'],

    computed:{

        Ciclo(){
                var propiedades = []
                for (var key2 in this.Programador[0]) {    
                 
                  propiedades.push(key2)
                  
                }
                return propiedades;
        }

    }



});