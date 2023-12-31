function columnRowTable(table) {
    let row;
    let rows = table.rows;
    let baseRow = rows[0];
    let data = {};
    let obj = {};
    let stateOrders = []

    for (let i=1; i<rows.length; i++) {
        row = rows[i];
        obj = {};
        
        for(let j=1; j<row.cells.length; j++) {
            obj[baseRow.cells[j].textContent] = row.cells[j].textContent;
        }
        data[row.cells[0].textContent] = obj;

        if(!stateOrders.includes(row.cells[0].textContent)) {
            stateOrders.push(row.cells[0].textContent);
        }
    }

    return {
        "json": data,
        "stateOrder": stateOrders
    }
}

function getClosureJson(table) {
    let row;
    let rows = table.rows;
    let data = {};

    for (let i=0; i<rows.length; i++) {
        row = rows[i];
        data[row.cells[1].textContent] = row.cells[2].textContent;
    }

    return data;
}