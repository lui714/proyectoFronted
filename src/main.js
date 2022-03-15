import App from './App.vue'
import router from './router'
import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { DefaultApolloClient } from '@vue/apollo-composable';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.css';

const defaultClient = new ApolloClient({
    uri: 'http://localhost:3028/graphql',  // esto es URI DE SERVER GRAPHQL !!!!!
    cache: new InMemoryCache()
  })
  
  createApp(
    {
    setup (){
        provide( DefaultApolloClient, defaultClient)
            },
          render(){
            return h(App)
          }
    }
  ).use(router).mount('#app')
