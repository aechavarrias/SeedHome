// read a csv file in react

// import React, { useState } from 'react';
// import Papa from 'papaparse';
// import { CSVLink } from 'react-csv';

// const CsvReader = () => {
//     const [csvData, setCsvData] = useState([]);
//     const [csvHeaders, setCsvHeaders] = useState([]);
//     const [csvFileName, setCsvFileName] = useState('data.csv');
    
//     const handleFileRead = (e) => {
//         const content = e.target.result;
//         const results = Papa.parse(content, { header: true });
//         const headers = results.meta.fields;
//         setCsvHeaders(headers);
//         setCsvData(results.data);
//     };

//     const handleFileChosen = (file) => {
//         setCsvFileName(file.name);
//         const reader = new FileReader();
//         reader.onloadend = handleFileRead;
//         reader.readAsText(file);
//     };

//     return (
//         <div>
//             <input
//                 type="file"
//                 accept=".csv"
//                 onChange={e => handleFileChosen(e.target.files[0])}
//             />
//             <CSVLink data={csvData} headers={csvHeaders} filename={csvFileName}>
//                 Download CSV
//             </CSVLink>
//         </div>
//     );
// }

// export default CsvReader;





// function that takes a csv file and returns a json object
function csvJSON(csv) {
    var lines = csv.split("");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
    }

    // // create an object
    // var obj = csvJSON(csv);
    // // stringify JSON Object
    // var jsonContent = JSON.stringify(obj);
    // // write JSON string to a file
    // fs.writeFile("jsonfile.json", jsonContent, 'utf8', function (err) {
    //   if (err) {
    //     console.log("An error occured while writing JSON Object to File.");
    //     return console.log(err);
    //   }
    //   console.log("JSON file has been saved.");
    // }