import { connect } from 'mongoose';

const URI = 'mongodb://localhost/photo-gallery-db';

export default connect(URI, {useNewUrlParser: true, useFindAndModify: false})
    .then((db) => {console.log("db is connected")})
    .catch(err => console.error(err));

// also you can do it as follows:

// export async function startConnection(){
//     await connect(URI, {useNewUrlParser: true});
//     console.log("db is connected");
// }
