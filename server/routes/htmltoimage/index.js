import nodeHtmlToImage from 'node-html-to-image';

export const convert = async () => {
    let name = "gaya";
    const image = await nodeHtmlToImage({
        output: './image.png',
        html: `<html>
                <head>
                    <style>
                        body {
                        width: 248px;
                        height: 350px;
                        }
                    </style>
                </head>
                <body>
                    <div>${name}</div>
                    <table>
                        <tr> <td>X</td> <td>X</td> <td>X</td> </tr>
                        <tr> <td>X</td> <td>X</td> <td>X</td> </tr>
                        <tr> <td>X</td> <td>X</td> <td>X</td> </tr>
                    </table>
                </body>
                </html>`,
        // selector: "div"
    });

    return true;
}