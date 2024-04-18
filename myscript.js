function generateTable(){
    var startValue = parseInt(document.getElementById("startVal").value);
    var endValue = parseInt(document.getElementById("endVal").value);
    var multTable = document.getElementById("multTable");
    multTable.innerHTML = "";


    if ((startValue<=10)&&(startValue>=2)&&(endValue<=10)&&(endValue>=2)){
        multTable.style.border = "2px solid black";
        
        for (var row = 1; row <= startValue; row++) {
            var rowCreate = multTable.insertRow();
            for (var column = 1; column <= endValue; column++) {
                var cellCreate = rowCreate.insertCell();
                var idName = "cell_" + row + "_" + column;
                cellCreate.id = idName;
                document.getElementById(idName).innerHTML = row * column;
            }
        }
    }
    else{
        alert("Please enter numbers between 2 and 10.");
    }
    return false;
}