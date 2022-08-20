import app from './app.js';

import { connectMongoDB } from "./databases/mongoconnection.js";
import { connectPostgresDB } from "./databases/postgresconnection.js";


const port = process.env.PORT || 3000

async function main() {
    await connectMongoDB();
    await connectPostgresDB();
    app.listen(port, () => console.log(`app listening on port ${port}!`))

}

main();

