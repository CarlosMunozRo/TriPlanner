<template>
    <section>
        

        <v-container>
            <v-card elevation="2" class="px-5 mx-5" >
                <v-row justify="space-between" align="center">

                    <v-col cols="12" md="5" sm="12">
                        <v-row>
                            <v-col cols="12" md="6" sm="6">
                                <SitePicker text_label_sitePicker='Origen' icon="mdi-earth"/>
                            </v-col>
                            <v-col cols="12" md="6" sm="6">
                                <SitePicker text_label_sitePicker='Destino' icon="mdi-earth-arrow-right"/>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="5" sm="12">
                        <v-row>
                            <v-col cols="12" md="6" sm="6">
                                <v-menu
                                    v-model="menuDepart"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="dateDepart"
                                        label="Ida"
                                        prepend-icon="mdi-airplane-takeoff"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                    v-model="dateDepart"
                                    @input="menuDepart = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" md="6" sm="6">
                                <v-menu
                                    v-model="menuArrive"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="dateArrive"
                                        label="Vuelta"
                                        prepend-icon="mdi-airplane-landing"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                    v-model="dateArrive"
                                    @input="menuArrive = false"
                                    :min="dateDepart"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                        <v-row>
                            <v-col cols="12">
                                <v-btn
                                    color="secondary"
                                    elevation="2"
                                    large
                                    block
                                    
                                >
                                    Buscar <v-icon right dark >mdi-map-search</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>

       
      

    </section>
</template>

<script>

import SitePicker from './SitePicker.vue'

export default{
    data(){
        return{
            dateDepart: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            dateArrive: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menuDepart: false,
            menuArrive: false,
        }
    },
    components:{
        SitePicker,
    }
}

</script>