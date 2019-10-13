# taikai_leaderboards
A simple nodejs scraper to get any Taikai.network event leaderboard in json.

## Requirements
- axios
- cheerio

## Usage

```javascript
const taikai_leaderboards = require('./app.js')

taikai_leaderboards.getEvent("https://taikai.network/glinttinov/challenges/hackinghealth/projects").then(res => {
    // gets winner of hackathon
    console.log(res.projects[0])
})
```

## Example project json
```javascript
{ title: 'medGPS',
  description:
   'Permite a um utente pesquisar as Farmácias em que os Produtos de que necessita estão disponíveis',
  devs:
   [ { dev: 'carolinasalgueiro',
       url: 'https://taikai.network/carolinasalgueiro' },
     { dev: 'margaridacastilho',
       url: 'https://taikai.network/margaridacastilho' },
     { dev: 'tiagosantos85',
       url: 'https://taikai.network/tiagosantos85' },
     { dev: 'nrap', url: 'https://taikai.network/nrap' } ],
  funding: '8.000',
  funding_int: 8000 }
```