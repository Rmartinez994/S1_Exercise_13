"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Tutorial Case

   Author: Rafael Martinez 
   Date: 3/5/19   

   Global Variables
   ================
   
   puzzleCells
      References the TD cells within the Hanjie table grid.
   
   cellBackground
      Stores the current background color of the puzzle
      cells during the mouseover event.
      
      
   Function List
   =============

   init()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   swapPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   setBackground(e)
      Sets the background color of the puzzle cells during the mousedown
      event

   extendBackground(e)
      Extends the background color of the original puzzle cell during
      the mouseenter event.
      
   endBackground()
      Ends the action of extending the cell backgrounds in response to the
      mouseup event.

   drawPuzzle(hint, rating, puzzle)
      Returns a text string of the HTML code to
      display a hanjie Web table based on the contents of
      multi-dimensional array, puzzle.
	
*/
window.onload = init;

var puzzleCells;

function init() {
      document.getElementById("puzzleTitle").innerHTML = "Puzzle 1";

      document.getElementById("puzzle").innerHTML = drawPuzzle(puzzle1Hint, puzzle1Rating, puzzle1);
      var puzzleButton = document.getElementsByClassName("puzzles");
      for (var i = 0; 1 = puzzleButtons.length; i++) {
            puzzleButton[i].onclick = swapPuzzle;
      }
      setupPuzzle();

}

function swapPuzzle(e) {
      //retive the ID of the clicked button
      var puzzleID = e.target.id;
      //retrive the value of the clicked button
      var puzzleTitle = e.target.value;
      document.getElementById("puzzleTitle").innerHTML = puzzleTitle;
      //display the puzle base on the value of the puzzle id variable
      switch (puzzleID) {
            case "puzzle1":
                  document.getElementById("puzzle").innerHTML = drawPuzzle(puzzle1Hint, puzzle1Rating, puzzle1);
                  break;
            case "puzzle2":
                  document.getElementById("puzzle").innerHTML = drawPuzzle(puzzle2Hint, puzzle2Rating, puzzle2);
                  break;
            case "puzzle3":
                  document.getElementById("puzzle").innerHTML = drawPuzzle(puzzle3Hint, puzzle3Rating, puzzle3);
                  break;
      }
      setupPuzzle();
}

function setPuzzle() {
      //match all of the data cells in the puzzle
      puzzleCells = document.querySelectorAll("table#hanjieGrid td");
      //set the inital color of each cell to gold 
      for (var i = 0; i < puzzleCells.length; i++) {
            puzzleCells[i].style.backgroundcolor = "rgb(233,207,29)";
            puzzleCells[i].onmousedown = setBackground;
      }
}

function setbackground(e) {
      cellBackground = "rgb(101,101,101)";
      e.target.style.backgroundColor = cellBackground;
      //crezte a event listener for every puzzle cell.
      for (var i = 0; i < puzzleCells.length; i++) {
            puzzleCells[i].addEventListener("mousecenter"), extendedBackground;
      }
}

function extendedBackground(e) {
      e.target.styles.backgroundColor = cellBackground;
}

function endBackground()
for (var i = 0; i = puzzleCells.length; i++) {
      puzzleCells[i].
}






/* ================================================================= */

function drawPuzzle(hint, rating, puzzle) {

      /* Initial HTML String for the Hanjie Puzzle */
      var htmlString = "";

      /* puzzle is a multidimensional array containing the
         Hanjie puzzle layout. Marked cells are indicated by
         the # character. Empty cells are indicated by an
         empty text string. First, determine the number of rows
         and columns in the puzzle */

      var totalRows = puzzle.length;
      var totalCols = puzzle[0].length;

      /* Loop through the rows to create the rowCount array
         containing the totals for each row in the puzzle */

      var rowCount = [];
      var spaceCount;
      for (var i = 0; i < totalRows; i++) {
            rowCount[i] = "";
            spaceCount = 0;

            for (var j = 0; j < totalCols; j++) {
                  if (puzzle[i][j] === "#") {
                        spaceCount++;
                        if (j === totalCols - 1) {
                              rowCount[i] += spaceCount + "&nbsp;&nbsp;";
                        }
                  } else {
                        if (spaceCount > 0) {
                              rowCount[i] += spaceCount + "&nbsp;&nbsp;";
                              spaceCount = 0;
                        }
                  }
            }

      }

      /* Loop through the columns to create the colCount array
         containing the totals for each column in the puzzle */

      var colCount = [];
      for (var j = 0; j < totalCols; j++) {
            colCount[j] = "";
            spaceCount = 0;

            for (var i = 0; i < totalRows; i++) {
                  if (puzzle[i][j] === "#") {
                        spaceCount++;
                        if (i === totalRows - 1) {
                              colCount[j] += spaceCount + "<br />";
                        }
                  } else {
                        if (spaceCount > 0) {
                              colCount[j] += spaceCount + "<br />";
                              spaceCount = 0;
                        }
                  }
            }

      }

      /* Create a Web table with the id, hanjieGrid, containing
         headers with the row and column totals.
         Each marked cell has the class name, marked; each
         empty cell has the class name, empty */

      htmlString = "<table id='hanjieGrid'>";
      htmlString += "<caption>" + hint + " (" + rating + ")</caption>";
      htmlString += "<tr><th></th>";

      for (var j = 0; j < totalCols; j++) {
            htmlString += "<th class='cols'>" + colCount[j] + "</th>";
      }
      htmlString += "</tr>";

      for (var i = 0; i < totalRows; i++) {
            htmlString += "<tr><th class='rows'>&nbsp;" + rowCount[i] + "</th>";

            for (var j = 0; j < totalCols; j++) {
                  if (puzzle[i][j] === "#") {
                        htmlString += "<td  class='filled'></td>";
                  } else {
                        htmlString += "<td class='empty'></td>";
                  }
            }

            htmlString += "</tr>";
      }

      htmlString += "</table>";

      return htmlString;
}