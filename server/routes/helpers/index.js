
import pptxgen from 'pptxgenjs';
import { genSlides_Chart, genSlide01, genSlide02 } from './sampleData';
import { addHTML } from './htmltopptx';

export const pptxGenerator = async () => {


    const pptx = new pptxgen();
    const slide_1 = pptx.addSlide();
    slide_1.addText(
        [
            { text: "Gayashan ", options: { fontSize: 48, color: '000507', breakLine: true } },
            { text: "Sameera", options: { fontSize: 24, color: '000507', breakLine: true } },
            { text: "NodeJs app", options: { fontSize: 24, color: '000507' } },
        ],
        { x: 0, y: 0, w: "100%", h: "100%", align: "center" }
    );
    // slide_1.background = { path: "https://1billiontech.com/assets/images/logo.svg", transparency: 50 };
    const slide_2 = pptx.addSlide();
    slide_2.addText(
        [
            { text: "React ", options: { fontSize: 48, color: '0481C9', breakLine: true } },
            { text: "Node", options: { fontSize: 24, color: '0481C9', breakLine: true } },
            { text: "AWS", options: { fontSize: 24, color: '0481C9' } },
        ],
        { x: 0, y: 0, w: "100%", h: "100%", align: "center", fill: pptx.colors.BACKGROUND2 }
    );
    const slide_3 = pptx.addSlide();
    let dataChartAreaLine = [
        {
            name: "Actual Sales",
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            values: [1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 12789, 10123, 15121],
        },
        {
            name: "Projected Sales",
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            values: [1000, 2600, 3456, 4567, 5010, 6009, 7006, 8855, 9102, 10789, 11123, 12121],
        },
    ];

    slide_3.addChart(pptx.ChartType.line, dataChartAreaLine, { x: 1, y: 1, w: 8, h: 4 });

    const slide_4 = pptx.addSlide();
    addHTML(slide_4);

    genSlide01(pptx);

    try {
        const data = await pptx.stream();
        console.log("data 1", data);

        return data;
    } catch (error) {
        console.log("ERROR: " + error);
        throw error;
    }

};
