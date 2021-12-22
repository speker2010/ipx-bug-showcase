import { createIPX, createIPXMiddleware } from "ipx";
import express from 'express';

const ipx = createIPX({
    dir: 'images'
});
const app = express();
app.use('/image', createIPXMiddleware(ipx));

app.listen(3000, () => {
    console.log(`Example app`);
})