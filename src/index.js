import app from './app.js';

import { connectDB } from "./databases/mongoapuestas.js";
async function main() {
    await connectDB();
    app.listen(app.get("port"));

    console.log("Server on port", app.get("port"));
    console.log("Environment:", process.env.NODE_ENV);
}

main();


app.listen(3000)
