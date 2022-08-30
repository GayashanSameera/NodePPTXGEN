import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
export default app;


const a =


{
    schemeName: "sample scheme",
    trusteeName: {
        text: "sample trustee",
        styles: {
            fontcolor: "",
            fontSize: 3,
        }
    },
    imageOne: {
        url: "../1.png",
        dimentions: { left: 1, top: 1, height: 3, width: 8 }
    },
    sample_data_1: {
        data: [{ name: "Kamal", age: 12 }, { name: "Amal", age: 22 }, { name: "Nuwan", age: 32 }],
        textStyles: {
            fontcolor: "",
            fontSize: 3,
        }
    },
    cashFlows: {
        headers: ["cashflow year", "cashflow fixed", "cashflow real"],
        row_count: 10,
        colum_count: 3,
        table_count_per_slide: 4,
        styles: {
            top: 1,
            width: 0.6,
            row_height: 0.04,
        },
        rows: [
            {
                "cashflow_year": "2020", "cashflow_fixed": "1", "cashflow_real": "123123"
            },
            {
                "cashflow_year": "2020", "cashflow_fixed": "2", "cashflow_real": "123123"
            },
            {
                "cashflow_year": "2020", "cashflow_fixed": "3", "cashflow_real": "123123"
            },
            {
                "cashflow_year": "2020", "cashflow_fixed": "4", "cashflow_real": "123123"
            }
        ]
    },
    dataTable_rowName: False,
    dataTtable_columnName: False,
    dataFetch: {
        scheme: ["scheme_data"],
        analytics: ["r1b", "c1"],
        charts: ["assets", "liabilities"]
    }
}
