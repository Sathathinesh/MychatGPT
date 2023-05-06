
const { Configuration, OpenAIApi } = require("openai");
const  express  = require('express');
const  bodyParser = require('body-parser');
const  cors = require('cors');

const configuration = new Configuration({
    organization: "",
    apiKey: "",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

const app = express();
const port = 3080;

app.use(bodyParser.json());
app.use(cors())

app.post('/',async (req,res)=>{
    const { message } = req.body;
    console.log(message);
    
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
    //console.log(response.data);

    res.json({
        //data:response.data
        //data:message
        message: response.data.choices[0].text,
    })
});

app.listen(port ,()=>{
    console.log('app listening at http://localhost:3080');
});





