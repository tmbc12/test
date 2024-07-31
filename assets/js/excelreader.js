// List of Training Centers
let table = document.querySelector(".privateTcEast");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[4];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table id='modelTable' class='table table-bordered paginationModelTable' style='width:100%'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead>";
        htmlTable += "</tr></thead>";
        htmlTable += "<tbody>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }

        htmlTable += "</tbody>";
        htmlTable += "</tbody>";
        htmlTable += "</table>";
        table.innerHTML = htmlTable;

        $('#modelTable').paging({
            limit: 10,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 0,
            optional: true
        });

    } catch (error) {
        console.log(error);
    }
})();

// Certified Trainers and Assessors
let certified_trainer_table = document.querySelector(".trainers-data");
(async () => {
    try {
        let response = await fetch("assets/js/Certified Trainers and Assessors.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });

        let sheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table id='modelTable' class='table table-bordered paginationModelTable'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead><tbody id='modelTableData'>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody></table>";
        certified_trainer_table.innerHTML = htmlTable;

        $('#modelTable').paging({
            limit: 20,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 1,
            optional: true
        });

    } catch (error) {
        console.log(error);
    }
})();
let certified_mastertrainer_table = document.querySelector(".mastertrainer_table");
(async () => {
    try {
        let response = await fetch("assets/js/Certified Trainers and Assessors.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });

        let sheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table id='modelTable' class='table table-bordered paginationModelTable'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead><tbody id='modelTableData'>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody></table>";
        certified_mastertrainer_table.innerHTML = htmlTable;

        $('#modelTable').paging({
            limit: 20,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 1,
            optional: true
        });

    } catch (error) {
        console.log(error);
    }
})();
let certified_master_assessors_table = document.querySelector(".master_assessors_table");
(async () => {
    try {
        let response = await fetch("assets/js/Certified Trainers and Assessors.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });

        let sheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table id='modelTable' class='table table-bordered paginationModelTable'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead><tbody id='modelTableData'>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody></table>";
        certified_master_assessors_table.innerHTML = htmlTable;

        $('#modelTable').paging({
            limit: 20,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 1,
            optional: true
        });

    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table1 = document.querySelector(".privateTcNorth-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[5];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table id='rplModel' class='table paginationTable table-bordered'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead>";
        htmlTable += "<tbody>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody>";
        htmlTable += "</table>";
        table1.innerHTML = htmlTable;

        $('#rplModel').paging({
            limit: 10,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 0,
            optional: true
        });
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table2 = document.querySelector(".privateTcWest-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[6];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table id='sampleModel' class='table table-bordered' style='width:100%'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead>";
        htmlTable += "<tbody>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody>";
        htmlTable += "</table>";
        table2.innerHTML = htmlTable;

        $('#sampleModel').paging({
            limit: 10,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 0,
            optional: true
        });
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table3 = document.querySelector(".privateTcSouth-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[7];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead>";
        htmlTable += "<tbody>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody>";
        htmlTable += "</table>";
        table3.innerHTML = htmlTable;

        $('.paginationModelTable').paging({
            limit: 10,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 0,
            optional: true
        });
    } catch (error) {
        console.log(error);
    }
})();

let table4 = document.querySelector(".privateTcInternational-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[8];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead>";
        htmlTable += "<tbody>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody>";
        htmlTable += "</table>";
        tabl43.innerHTML = htmlTable;

        $('.paginationModelTable').paging({
            limit: 10,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 0,
            optional: true
        });
    } catch (error) {
        console.log(error);
    }
})();



// List of Training Centers
let table5 = document.querySelector(".govtTcEast-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead>";
        htmlTable += "<tbody>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody>";
        htmlTable += "</table>";
        table5.innerHTML = htmlTable;

        $('.paginationModelTable').paging({
            limit: 10,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 0,
            optional: true
        });
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table6 = document.querySelector(".govtTcNorth-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[1];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead>";
        htmlTable += "<tbody>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody>";
        htmlTable += "</table>";
        table6.innerHTML = htmlTable;

        $('.paginationModelTable').paging({
            limit: 10,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 0,
            optional: true
        });
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table7 = document.querySelector(".govtTcWest-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[2];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead>";
        htmlTable += "<tbody>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody>";
        htmlTable += "</table>";
        table7.innerHTML = htmlTable;

        $('.paginationModelTable').paging({
            limit: 10,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 0,
            optional: true
        });
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table8 = document.querySelector(".govtTcSouth-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[3];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<thead><tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr></thead>";
        htmlTable += "<tbody>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</tbody>";
        htmlTable += "</table>";
        table8.innerHTML = htmlTable;

        $('.paginationModelTable').paging({
            limit: 10,
            previous: true,
            previousText: '<',
            next: true,
            nextText: '>',
            first: true,
            firstText: '<<',
            last: true,
            lastText: '>>',
            navigationWrapper: null,
            navigationClass: 'page-navigation',
            initialPage: 0,
            optional: true
        });
    } catch (error) {
        console.log(error);
    }
})();