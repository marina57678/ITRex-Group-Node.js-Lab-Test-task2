
let task=
[
	['#','#','#','#','#','#','#','#','#'],
	['#','+','+','+','#','+','+','+','#'],
	['#','+','#','+','#','+','#','+','#'],
	['+','+','#','+','0','+','#','+','#'],
	['#','#','#','+','#','#','#','#','#'],
	['#','#','+','+','#','#','#','#','#'],
	['#','#','+','#','#','#','#','#','#'],
	['#','#','#','#','#','#','#','#','#'], 
]

console.log(task);
// #стена
let way =[];
function checkPath(start,end){

	task[start.y][start.x] = '*';
	

	let siblings = getValsdSib(start);
	
	for(let i=0; i<siblings.length;i++)
	way.push(siblings[i].step)
	console.log(way);
	console.log(siblings);
	
	if(siblings.length>0){
		for(let i=0;i<siblings.length;i++){
			let current = siblings[i];
			let isSolved = current.x === end.x && current.y === end.y;
			let notVisited = task[current.y][current.x] !== '*'
			

			if(isSolved || (notVisited&& checkPath(current,end)) ){
				
				return true;
			
			}
		}
	}
	return false;
}
function getValsdSib(cord){
	let {x, y } = cord;
	let cords = [];
	if(task[y-1] !== undefined){
		cords.push({x:x,y:y-1, val : task[y-1][x],step: 'top'});
	}
	if(task[y+1] !== undefined){
		cords.push({x:x,y:y+1, val : task[y+1][x],step : 'bot'});	
	}
	if(task[y][x-1] !== undefined){
		cords.push({x:x-1,y:y, val : task[y][x-1],step : 'left'});	
		}
		
	if(task[y][x+1] !== undefined){
		cords.push({x:x+1,y:y, val : task[y][x+1],step : 'right'});		
	}

	
	
	return cords.filter(el=> el.val === "+");
}

console.log(checkPath({x:4,y:3},{x:0,y:3}));

