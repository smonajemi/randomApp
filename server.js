const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());
const port = 3000;


app.get('/', (req, res) => {
    res.send('API is working...')
})

app.post('/api/:apiName', async (req, res) => {
    const param = req.params.apiName
    const apiKey = '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'
    switch (param) {
        case 'generate-image':
            try {
                const response = await axios.post('https://api.openai.com/v1/images/generations', {
                  model: 'image-alpha-001',
                  prompt: req.body.prompt
                }, {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                  }
                });
            
                res.send(response.data);
              } catch (error) {
                res.status(500).send({ error: 'Failed to generate image\n' + error });
              }
            break;
            case 'correct-grammar':
                try {
                    const response = await axios.post('https://api.openai.com/v1/completions',{
                      model: 'text-davinci-003',
                      prompt: `correct the grammar: ${req.body.prompt}`
                    }, {
                      headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                      }
                    });
                    res.send(response.data.choices[0])
                  } catch (error) {
                    res.status(500).send({ error: 'Failed to correct sentence' + error });
                  }
            break;
        default:
            res.send('default....')
            break;
    }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


