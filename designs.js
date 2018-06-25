const width, height, colorInput; 

// Select size input
width = $("#inputWidth");
height = $("#inputHeight");

// Select color input
colorInput = $("#colorPicker");

// When size is submitted by the user, call makeGrid()
// Your code goes here!

$(document).ready(function(){

// call makeGrid function on form submit
	$("#sizePicker").submit(function(event){
		event.preventDefault();
		makeGrid();
	});

// Change cell background colour on click event	
	$("#pixelCanvas").click(function(event){
		let paint = colorInput.val();
		$(event.target).css("background-color", paint);
	});
});

function makeGrid(){
	let tgrid, row, col;
	tgrid = $("#pixelCanvas");
	tgrid.empty();

	row = height.val();
	col = width.val();

	for (let r = 0; r < row; r++){
		tgrid.append("<tr></tr>");
		for (let c = 0; c < col; c++){
			$("tr:last-child").append("<td></td>");
	}
	}
}

