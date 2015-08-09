$(document).ready(function(){

	//creatre 16X16 grid
	populateContainer(16);

    //handle click on the button
    $("button").click(function(){
    	var grid = prompt("Please provide new grid layout");
    	if (grid > 64) {
    		grid = prompt("Please provide new grid layout with value less then 64");
    	}
    	$("#container > div").remove();
    	populateContainer(grid);
    });

});

//function to populate div container
function populateContainer(value) {
	var size = (960-((value-1)*2+2)*2)/value;
	for (var x = 0; x < value; x++) {
        for (var y = 0; y < value; y++) {
        	//adding cells
            $("<div></div>").appendTo("#container");
        }
    }
    //adding width, height and hanvle hover function
    $("#container > div").css("width",size);
    $("#container > div").css("height",size);
    $("#container > div").hover(function(){
        $(this).css("background-color", "black")
    });
}