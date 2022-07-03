<template>

    <div class="login" >

        <v-row>

            <v-col cols="12" md="6" sm="12" class="primary py-5">
                <v-container class="fotm-container">
                    <v-form v-model="valid"  >
                        <v-row>
                            <v-col
                            cols="12"
                            >   
                                <div class="d-flex justify-center">
                                    <v-img
                                        alt="Vuetify Logo"
                                        class="shrink mr-2"
                                        contain
                                        src="/img/Logos/Logo.svg"
                                        transition="scale-transition"
                                        width="70"
                                    />
                                    <v-img
                                        alt="Vuetify Name"
                                        class="shrink mt-1 hidden-sm-and-down"
                                        contain
                                        min-width="100"
                                        src="/img/Logos/logoText.png"
                                        width="190"
                                    />
                                </div>
                            <v-col
                            cols="12"
                            class="text-center"
                            
                            >   
                                <span class="white--text login-title">Bienvenido de Vuelta!</span>
                            </v-col>
                            </v-col>
                            <v-col
                            cols="12"
                            >
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="10"
                                label="First name"
                                dark
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            >
                                <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Last name"
                                    dark
                                ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            >
                                <v-row align="center">
                                    <v-col cols="6">
                                        <v-checkbox
                                            v-model="keep_login"
                                            :label="`Keep me logged in`"
                                            dark
                                        ></v-checkbox>
                                    </v-col>
                                    <v-col cols="6" class="text-right">
                                        <v-btn text dark left href="/fooRoute" target="_blank">Forget your password?</v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>

                            <v-col
                            cols="12"
                            >
                            <v-btn block color="white"><span class="primary--text">Login</span></v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
            </v-col>
            <v-col cols="12" md="6" sm="12">

            </v-col>

        </v-row>

    </div>

</template>

<script>

  export default {
    data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        keep_login:false,
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
    metaInfo: {
        title: 'Login',
    },
  }

</script>

<style lang="scss">



    .fotm-container{
        max-width: 500px;
        min-height: calc(100vh - 116px);
        display: flex;
        align-items: center;
        .login-title{
            font-size: 36px;
            font-weight: 500;
        }
    }

</style>