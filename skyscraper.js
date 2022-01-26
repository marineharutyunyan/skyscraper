const size = 4;

function initializeBoard () {
	let a =  [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];	
	let b =  [
		[1,2,3,2],
		[4,6,7,8],
		[1,10,11,12],
		[13,14,15,16]
	]; 
	return a;
};

function printBoard(board)
{
	let i = -1;
	while(++i < size)
	{
		let j = -1;
		while(++j < size)
		{
			//console.log("i = ",board[i], "j = ", board[j]);
			console.log(board[i][j]);
			//console.log(board);
		}
	}
}

function checkDuplicates(board)
{
	let i = -1;
	while(++i < size)
	{
		let j = -1;
		while(++j < size)
		{
			let k = j;
			while(++k < size)
			{
				// check horizontal
				let itemToBeCompared = board[i][j];
				if( board[i][k] === itemToBeCompared)
				{
					console.log("duplicated item in the row", board[i][k]); 
					return 1;
				}

				//check vertical 
				itemToBeCompared = board[j][i];
				if (board[k][i] === itemToBeCompared)
				{
					console.log("duplicated item in the column", board[k][i]); 
					return 1;
				}
			}
		}
	}
	return 0
}

let board = initializeBoard();
printBoard(board);
checkDuplicates(board);
let number = 0;