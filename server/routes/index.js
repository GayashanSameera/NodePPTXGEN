// routes/index.js and users.js
import express from 'express';
import { pptxGenerator } from './helpers';
import { updatePPTXTemplate } from './templates';
import { convert } from './htmltoimage';
const path = require('path');
const fs = require('fs').promises;

import libre from 'libreoffice-convert';
libre.convertAsync = require('util').promisify(libre.convert);

const router = express.Router();
router.get('/', async (req, res, next) => {
    const ext = '.pdf'
    const inputPath = path.join(__dirname, '/server/routes/gayashan-poc.pptx');
    const outputPath = path.join(__dirname, `/server/routes/example${ext}`);

    // Read file
    const docxBuf = await fs.readFile(inputPath);

    // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
    let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);

    // Here in done you have pdf file which you can save or transfer in another stream
    await fs.writeFile(outputPath, pdfBuf);


    // const exportName = `gayashan-poc.pptx`;
    // // const data = await updatePPTXTemplate();

    // convert();

    // res.send();
    // const data = await pptxGenerator();
    // console.log("data", data);
    // res.writeHead(200, { "Content-disposition": `attachment;filename=${exportName}`, "Content-Length": data.length });
    // res.end(new Buffer.from(data, "binary"));
});
export default router;