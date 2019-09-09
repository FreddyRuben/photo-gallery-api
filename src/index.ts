import app from './app';
import connect from './database'

let main = async () =>{
    connect;
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();