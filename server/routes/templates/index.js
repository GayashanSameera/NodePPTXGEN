import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import fs from 'fs';
import path from 'path';

export const updatePPTXTemplate = async () => {
    // Load the docx file as binary content
    const content = await fs.readFileSync(
        path.resolve(__dirname, "../../../assets/gayashan-poc.pptx"),
        "binary"
    );
    const zip = new PizZip(content);
    const pptx = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });
    // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
    pptx.render({
        first_name: "Gayashan",
        last_name: "Sameera",
        phone: "123456788",
        description: "PPTX template update",
        web: "React",
        BE: "node",
        cloud: "aws",
        title: "Default title",
        "products": [
            {
                "title": "Excubed",
                "name": "tpip navigator",
                "reference": "lgim.com"
            },
            {
                "title": "Excubed support",
                "name": "tpip navigator support",
                "reference": "navigatorSupport.com"
            }
        ],
        "users": [
            {
                "name": "John"
            },
            {
                "name": "Mary"
            },
            {
                "name": "Jane"
            },
            {
                "name": "Sean"
            }
        ],
        html: "<p>Hello <b>John</b></p>"

    });

    const buf = pptx.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
    });

    // buf is a nodejs Buffer, you can either write it to a
    // file or res.send it with express for example.

    return buf;
    // fs.writeFileSync(path.resolve(__dirname, "../../../output.pptx"), buf);
}










