import app from './app.js';

import { connectMongoDB } from "./databases/mongoconnection.js";
import { pgpool } from "./databases/postgresconnection.js";

const port = process.env.PORT || 3000

async function main() {
    await connectMongoDB();
    //await pgpool.connect();
    app.listen(port, () => console.log(`app listening on port ${port}!`))

}

main();

