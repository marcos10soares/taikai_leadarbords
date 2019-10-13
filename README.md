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
{ 
  title: 'medGPS',
  description:
   'Permite a um utente pesquisar as Farmácias em que os Produtos de que necessita estão disponíveis',
  backers: '5',
  avatar:
   'https://cdn.taikai.network/iUDMffD7oduscEepSrmw-16l2JYrILpvSiMz-Aj1Oi4/rs:fit:640:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy80ODA3ODI5MC1lYzNlLTExZTktYWE1OS02ZDM1MDc3MTMxMWFtZWRHUFNfbWFwYTMuUE5H',
  url:
   'https://taikai.network/glinttinov/challenges/hackinghealth/projects/ck1luphtkmm2f0a44c7rqie8r',
  devs:
   [ { dev: 'carolinasalgueiro',
       url: 'https://taikai.network/carolinasalgueiro' },
     { dev: 'margaridacastilho',
       url: 'https://taikai.network/margaridacastilho' },
     { dev: 'tiagosantos85',
       url: 'https://taikai.network/tiagosantos85' },
     { dev: 'nrap', url: 'https://taikai.network/nrap' } ],
  funding: '8.000',
  funding_int: 8000 
}
```

Vue + Bulma table visualization using this projects data: https://codepen.io/marcos10soares/pen/vYYLbZd