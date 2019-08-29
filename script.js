var value="";
        function input(num){
            value = num;
        }
        function display(numb){
            document.getElementById(numb).innerHTML = value;
            var boxone = document.querySelectorAll('.box1');
            var boxtwo = document.querySelectorAll('.box2');
            var boxthree = document.querySelectorAll('.box3');
            var boxfour = document.querySelectorAll('.box4');
            var boxfive = document.querySelectorAll('.box5');
            var boxsix = document.querySelectorAll('.box6');
            var boxseven = document.querySelectorAll('.box7');
            var boxeight = document.querySelectorAll('.box8');
            var boxnine = document.querySelectorAll('.box9');
            var rowone = document.querySelectorAll('.row1');
            var rowtwo = document.querySelectorAll('.row2');
            var rowthree = document.querySelectorAll('.row3');
            var rowfour = document.querySelectorAll('.row4');
            var rowfive = document.querySelectorAll('.row5');
            var rowsix = document.querySelectorAll('.row6');
            var rowseven = document.querySelectorAll('.row7');
            var roweight = document.querySelectorAll('.row8');
            var rownine = document.querySelectorAll('.row9');
            var colone = document.querySelectorAll('.col1');
            var coltwo = document.querySelectorAll('.col2');
            var colthree = document.querySelectorAll('.col3');
            var colfour = document.querySelectorAll('.col4');
            var colfive = document.querySelectorAll('.col5');
            var colsix = document.querySelectorAll('.col6');
            var colseven = document.querySelectorAll('.col7');
            var coleight = document.querySelectorAll('.col8');
            var colnine = document.querySelectorAll('.col9');
            console.log(boxone[1].innerHTML);
            for (var i=0; i < 9; i++){
                for (var j=0; j<9;j++)
                if (Number(boxone[i].innerHTML) == Number(boxone[j].innerHTML) && i != j && Number(boxone[j].innerHTML) !="" && Number(boxone[i].innerHTML) !="") {
                    alert("Wrong Input");
                    console.log("ith Value " +boxone[i].innerHTML);
                    console.log("jth Value " +boxone[j].innerHTML);
                    console.log("i is " + i);
                    console.log("j is " + j);
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(boxtwo[i].innerHTML) == Number(boxtwo[j].innerHTML) && i != j && Number(boxtwo[j].innerHTML) !="" && Number(boxtwo[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(boxthree[i].innerHTML) == Number(boxthree[j].innerHTML) && i != j && Number(boxthree[j].innerHTML) !="" && Number(boxthree[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(boxfour[i].innerHTML) == Number(boxfour[j].innerHTML) && i != j && Number(boxfour[j].innerHTML) !="" && Number(boxfour[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(boxfive[i].innerHTML) == Number(boxfive[j].innerHTML) && i != j && Number(boxfive[j].innerHTML) !="" && Number(boxfive[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(boxsix[i].innerHTML) == Number(boxsix[j].innerHTML) && i != j && Number(boxsix[j].innerHTML) !="" && Number(boxsix[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(boxseven[i].innerHTML) == Number(boxseven[j].innerHTML) && i != j && Number(boxseven[j].innerHTML) !="" && Number(boxseven[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(boxeight[i].innerHTML) == Number(boxeight[j].innerHTML) && i != j && Number(boxeight[j].innerHTML) !="" && Number(boxeight[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(boxnine[i].innerHTML) == Number(boxnine[j].innerHTML) && i != j && Number(boxnine[j].innerHTML) !="" && Number(boxnine[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(rowone[i].innerHTML) == Number(rowone[j].innerHTML) && i != j && Number(rowone[j].innerHTML) !="" && Number(rowone[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(rowtwo[i].innerHTML) == Number(rowtwo[j].innerHTML) && i != j && Number(rowtwo[j].innerHTML) !="" && Number(rowtwo[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(rowthree[i].innerHTML) == Number(rowthree[j].innerHTML) && i != j && Number(rowthree[j].innerHTML) !="" && Number(rowthree[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(rowfour[i].innerHTML) == Number(rowfour[j].innerHTML) && i != j && Number(rowfour[j].innerHTML) !="" && Number(rowfour[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(rowfive[i].innerHTML) == Number(rowfive[j].innerHTML) && i != j && Number(rowfive[j].innerHTML) !="" && Number(rowfive[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(rowsix[i].innerHTML) == Number(rowsix[j].innerHTML) && i != j && Number(rowsix[j].innerHTML) !="" && Number(rowsix[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(rowseven[i].innerHTML) == Number(rowseven[j].innerHTML) && i != j && Number(rowseven[j].innerHTML) !="" && Number(rowseven[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(roweight[i].innerHTML) == Number(roweight[j].innerHTML) && i != j && Number(roweight[j].innerHTML) !="" && Number(roweight[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(rownine[i].innerHTML) == Number(rownine[j].innerHTML) && i != j && Number(rownine[j].innerHTML) !="" && Number(rownine[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(colone[i].innerHTML) == Number(colone[j].innerHTML) && i != j && Number(colone[j].innerHTML) !="" && Number(colone[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(coltwo[i].innerHTML) == Number(coltwo[j].innerHTML) && i != j && Number(coltwo[j].innerHTML) !="" && Number(coltwo[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(colthree[i].innerHTML) == Number(colthree[j].innerHTML) && i != j && Number(colthree[j].innerHTML) !="" && Number(colthree[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(colfour[i].innerHTML) == Number(colfour[j].innerHTML) && i != j && Number(colfour[j].innerHTML) !="" && Number(colfour[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(colfive[i].innerHTML) == Number(colfive[j].innerHTML) && i != j && Number(colfive[j].innerHTML) !="" && Number(colfive[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(colsix[i].innerHTML) == Number(colsix[j].innerHTML) && i != j && Number(colsix[j].innerHTML) !="" && Number(colsix[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(colseven[i].innerHTML) == Number(colseven[j].innerHTML) && i != j && Number(colseven[j].innerHTML) !="" && Number(colseven[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(coleight[i].innerHTML) == Number(coleight[j].innerHTML) && i != j && Number(coleight[j].innerHTML) !="" && Number(coleight[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }
                else if (Number(colnine[i].innerHTML) == Number(colnine[j].innerHTML) && i != j && Number(colnine[j].innerHTML) !="" && Number(colnine[i].innerHTML) !="") {
                    alert("Wrong Input");
                    document.getElementById(numb).innerHTML = "";
                    break;
                }

            }
        }

