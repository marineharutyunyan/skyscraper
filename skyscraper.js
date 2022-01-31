const size = 4;
const rules =  [
	[2,3,1,2],
	[2,2,3,1],
	[2,1,2,2],
	[2,4,3,1]
];

function initializeBoard () {
	let a =  [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	return a;
};

function printBoard(board)
{
	console.log(board);
}

function checkLeftRight(x, board, size, rules)
{
	let i = -1;
	let max = 0;
	let counter = 0;
	
	while (++i < size)
	{	
		if(max < board[x][i])
		{
			max = board[x][i];
			counter++; 
		}
	}

	if(counter != rules[2][x])
		return 0;

	i = size;
	max = 0;
	counter = 0;
	while (--i >= 0)
	{		
		if(max < board[x][i])
		{
			max = board[x][i];
			counter++; 
		} 		
	}

	if(counter != rules[3][x])
		return 0;
	return 1;
}

function checkUpDown(y, board, size, rules)
{
	let i = -1;
	let max = 0;
	let counter = 0;
	while(++i < size)
	{
		if (max < board[i][y])
		{
			max = board[i][y];
			counter++;
		}
	}
	if(counter != rules[0][y])
		return 0;
	i = size;
	max = 0;
	counter = 0;
	while (--i >= 0)
	{		
		if(max < board[i][y])
		{
			max = board[i][y];
			counter++; 
		} 		
	}
	if(counter != rules[1][y])
		return 0;
	return 1;
}

function check(board, x, y)
{
	let i = -1;
	while (++i < size)
	{
		if (board[i][y] == board[x][y] && i != x && board[i][y] != 0)
			return 0;
		if (board[x][i] == board[x][y] && i != y && board[x][i] != 0)
			return 0;
	}
	if (x == size - 1)
		if (!checkUpDown(y, board, size, rules))
			return 0;
	if (y == size - 1)
		if (!checkLeftRight(x, board, size, rules))
			return 0;	
	return 1
}

function insertValue(board, size, x, y)
{
    let value = 0;
    let is_end;
    while(++value <= size)
    {
        board[x][y] = value;
        if(check(board, x, y))
        {
        	if(y+1 < size)
        		is_end = insertValue(board, size, x, y+1)
        	else if (x + 1 < size)
				is_end = insertValue(board, size, x + 1, 0);
			else
            	return 1;
            if (is_end)
				return (1);
        }
    }

    board[x][y] = 0;
    return 0;
}

let board = initializeBoard();
insertValue(board, size, 0, 0);
printBoard(board);