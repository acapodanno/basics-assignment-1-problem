const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            name:"Alessandro",
            age:404,
            imageLink:"https://images.unsplash.com/photo-1580845884960-cfd5eb28d212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
            placeholder:"test"
        }
    },
    methods:{
        generateRandomNumber(){
            const rand = Math.random();
            if(rand<0.5){
                return 0;
            }else{
                return 1;
            }
        }
    }
});
app.mount("#assignment");