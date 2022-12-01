import express from 'express';
import bodyParser from 'body-parser';
import config     from 'config';
import router from '../src/routes.js'

export function sets() {
  const app = express();
  
  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));
  // MIDDLEWARES
  app.use(bodyParser.json()); 
  app.use(router)
  
  const port = app.get('port');
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
  });
  
  return app;
};
