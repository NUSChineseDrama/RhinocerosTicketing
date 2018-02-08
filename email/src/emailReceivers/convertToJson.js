'use strict';
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    sourceFile: '8d826b98ef2c9_.xlsx',
    header:{
	    rows: 1
	},
	columnToKey: {
		A: 'submissionId',
        G: 'name',
        H: 'email',
        J: 'showTime',
        M: 'numberOfTix'
    },
    outputJSON: true
});