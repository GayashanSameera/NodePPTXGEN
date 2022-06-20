const html2pptxgenjs = require('html2pptxgenjs');

export const addHTML = (slide) => {
    const elements = [
        `
        <h1 style="font-family:Courier New;color:maroon;">Coronavirus Advice</h1>

        <ol>
            <li><span class="question">How can I avoid getting infected?</span>
                <ul>
                    <li>Wash your hands frequently
                    <li>Stay two meters away from people who may be infected
                </ul>
            <li><span class="question">How can I avoid infecting others?</span>
                <ul>
                    <li>Cough or sneeze into your elbow or use a tissue, dispose the tissue immediately
                    <li>Wash your hands frequently
                    <li>Stay two meters away from people
                </ul>
            <li><span class="question">What is physical distancing and why and how should I do it?</span>
                <ul>
                    <li>Physical distancing aims to reduce physical contact between potentially infected people and healthy people
                    <li>Isolate yourself if you know you have the virus that causes COVID-19, or if you have suggestive respiratory symptoms, or if you belong to a high-risk group (i.e. you are aged 70 years or more, or you have an underlying health condition)
                </ul>
        </ol>
        <p>For more information visit <a href="http://www.salute.gov.it/">Q &amp; A on COVID-19</a>
        `
    ];

    // Options
    let options = {};

    options.css = `
h1 {
    color: blue;
    text-align: center;
}
.question {
    color: red;
    font-size: 1.2em;
}
`;

    elements.forEach(text => {

        const items = html2pptxgenjs.htmlToPptxText(text, options);

        slide.addText(items, { x: 0.5, y: 0, w: 9.5, h: 6, valign: 'top' });

        return items;
    });


}