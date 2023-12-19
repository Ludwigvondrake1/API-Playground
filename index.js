const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


  app.get('/randomqoute',async(request,response)=>{
  
    const fetchApi = await fetch(
        'https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist'
    );



    const randomQouteResponse = await fetchApi.json()
    console.log('randomQouteResponse')
    response.json(randomQouteResponse);

        })