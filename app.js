var createClient = window.supabase.createClient;
const myElement = document.getElementById("heading");

var createClient = window.supabase.createClient;
const supabase = createClient(
  'https://amuqzcnqczhqldrmwtfb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdXF6Y25xY3pocWxkcm13dGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM3NDU3OTgsImV4cCI6MTk3OTMyMTc5OH0.pqMLmP6ylPZC-KHFxWN28o-0ixF8KgMBSBhzUxMiZKc'
);

Vue.component('chat',{
  props:[],
  data() {
    return {
      text: '',
      text1:''

    }
  },
  methods: {
      testChat: async function (argument) {
        const { data, error } = await supabase
          .from('messages')
          .insert([
          {   
            text: this.text
          }])
         supabase
          .from('messages')
          .on('insert', (payload) => {
            console.log('Change received!', payload)
          })
          .subscribe()
      },
  
  },
  template: `
  <div>
    <v-app >
                  <v-card 
                    max-width=60% 
                    height=60%
                    >
                    <v-card-title>
                        <span class="text-h5">Chat Test</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                          <v-row>
                              <v-col
                                cols="12"
                              >
                              <v-text-field
                                v-model="text"
                                solo
                                label="type a message"
                                clearable
                                height=100
                              ></v-text-field>
                              </v-col>  
                          </v-row>
                          <v-text-field
                                v-model="text1"
                                solo
                                label="receive a message"
                                clearable
                                height=100
                              ></v-text-field>
                      </v-container>
                      
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click.stop="testChat"
                          class="mr-6"
                        >
                          Send
                        </v-btn>
                    </v-card-actions>
                  </v-card>
    </v-app>
  </div>
            
  `
})


new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({

  }),
  methods:{
    
  }
})
