
const { Configuration, OpenAIApi } = require("openai");
const  express  = require('express');

const configuration = new Configuration({
    organization: "",
    apiKey: "",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

async function callApi() {

}

callApi();

const app = express();
const port = 3080;

app.post('/',async (req,res)=>{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
    //console.log(response.data);
    res.json({
        data:response.data
    })
});

app.listen(port ,()=>{
    console.log('example app listening at http://localhost:3080');
});





