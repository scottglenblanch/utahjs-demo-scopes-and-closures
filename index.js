
(function initializeEverything() {


    appendTableToMain({ 
        tableElement: createTableElement({ width: 5, height: 5}), 
        mainElement: getMainElement()
    });

    function createTableElement({ width, height }) {
        const tableElement = document.createElement('table');

        new Array(height).fill(null).map((o, rowIndex) => {
            const tableRow = document.createElement('tr');
    
            new Array(width).fill(null).map((u, cellIndex) => {
                const tableCell = document.createElement('td');
    
                tableCell.addEventListener('click', () => {
                    const message = `You clicked row ${rowIndex}, cell ${cellIndex}`;
                    showMessage(message);
                })

                tableRow.appendChild(tableCell);
            });
    
    
            tableElement.appendChild(tableRow);
        })

        return tableElement;
    }

    function getMainElement() {
        return document.querySelector('main');
    }

    function appendTableToMain({tableElement, mainElement}) {
        mainElement.appendChild(tableElement)
    }

    function showMessage(message) {
        const messageElement = document.querySelector('p');
        
        console.log(message);
        messageElement.textContent = message;
    }
}());
