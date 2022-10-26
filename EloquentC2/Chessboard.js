function chessboard(size) {
    for (let y = 0; y < size; y++) {
        let row = ""
        for (let x = 0; x < size; x++) {
            row += (x + y) % 2 ? " " : "#"; 
        };
        row += "\n";
        console.log(row);
    };
};

chessboard(12);