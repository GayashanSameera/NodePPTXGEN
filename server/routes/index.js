// routes/index.js and users.js
import express from 'express';
import { pptxGenerator } from './helpers';
import { updatePPTXTemplate } from './templates';
import { convert } from './htmltoimage';
const router = express.Router();
router.get('/', async (req, res, next) => {
    const exportName = `gayashan-poc.pptx`;
    // const data = await updatePPTXTemplate();

    convert();

    res.send();
    // const data = await pptxGenerator();
    // console.log("data", data);
    // res.writeHead(200, { "Content-disposition": `attachment;filename=${exportName}`, "Content-Length": data.length });
    // res.end(new Buffer.from(data, "binary"));
});
export default router;