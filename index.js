import app from './app.js';

import { connectDB } from "./databases/mongoapuestas.js";

const port = process.env.PORT || 3000

async function main() {
    await connectDB();
    app.listen(port, () => console.log(`app listening on port ${port}!`))

}

main();

