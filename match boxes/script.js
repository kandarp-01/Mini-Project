const color=["blue","red","greenyellow","gold","palevioletred","seagreen","darkorange","crimson"];
const button=[["b1","b2","b3","b4"],["b5","b6","b7","b8"],["b9","b10","b11","b12"],["b13","b14","b15","b16"]];
const current_button=[["white","white","white","white"],["white","white","white","white"],["white","white","white","white"],["white","white","white","white"]];
const default_button=[["white","white","white","white"],["white","white","white","white"],["white","white","white","white"],["white","white","white","white"]];
var default_color="white";
var current_color="white";
var s=0;

// Color picker function
function select_color(clr_index){
    current_color = color[clr_index - 1];   
}

// Color filler function
function make_color(filler_index){
    let i = Math.floor((filler_index - 1) / 4);
    let j = (filler_index - 1) % 4;

    let ind = button[i][j];
    document.getElementById(ind).style.backgroundColor = current_color; 
    current_button[i][j] = current_color;

    check_pair();
}

// Check for row or column matches
function check_pair(){
    for(let i = 0; i < 4; i++){
        check_row(i); // Check each row
        check_column(i); // Check each column
    }
}

// Check and update the matched row
function check_row(row){
    let first_color = current_button[row][0];
    if(first_color === "white") return; // Ignore if first is white
    
    let match = true;
    for(let j = 1; j < 4; j++){
        if(current_button[row][j] !== first_color){
            match = false;
            break;
        }
    }

    if(match){
        setTimeout(() => Update_colorbyRow(row), 500);
    }
}

// Check and update the matched column
function check_column(col){
    let first_color = current_button[0][col];
    if(first_color === "white") return; // Ignore if first is white
    
    let match = true;
    for(let i = 1; i < 4; i++){
        if(current_button[i][col] !== first_color){
            match = false;
            break;
        }
    }

    if(match){
        setTimeout(() => Update_colorbyColumn(col), 500);
    }
}

// Update colors for the matched row
function Update_colorbyRow(row){
    for(let j = 0; j < 4; j++){
        let ind = button[row][j];
        document.getElementById(ind).style.backgroundColor = default_color;
        current_button[row][j] = default_color;
    }
    s += 4;
    document.getElementById("s").innerText = s;
}

// Update colors for the matched column
function Update_colorbyColumn(col){
    for(let i = 0; i < 4; i++){
        let ind = button[i][col];
        document.getElementById(ind).style.backgroundColor = default_color;
        current_button[i][col] = default_color;
    }
    s += 4;
    document.getElementById("s").innerText = s;
}
