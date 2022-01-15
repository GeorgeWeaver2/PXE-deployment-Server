//
// Write a program that is passed the name of a node to ping. The program calls 
// a function which pings that node and  captures the output.
//
// The ping command on a Windows machine looks like:
//
//		ping www.temple.edu -n 1
//
// The ping command on a Mac looks like:
//
//		ping -c 1 www.temple.edu
//
// If the Exit Code is 0 the function returns the message “The node is reachable” 
// and just the “Reply” line from stdout on a Windows machine or the line that reports 
// 'bytes from' on a Mac.  
//
// If the Exit Code not equal to 0 the function returns the message “The node is not reachable”.  
//
// Steps:
//	1) Execute the PING command passing the appropriate parameters, capturing the .status
//		and the .stdout.
//	2) if the status is 0 then the PING command was successful:
//			a) Convert the stdout to a string and split the stdout into records.
//			b) Loop through the stdout records and find the line that includeds the 
//				reply line (a line that starts with "Reply" on a Windows machine or a
//				line that includes "bytes from" on a Mac).
//			c) return 'The node is reachable' along with the reply line found above.
//	3) if the status is not 0 then return 'The node is not reachable".
//

function myPing(nodeToPing) {
	
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////

	var execStdOut, execStdErr, execError, returnCode;
	var exec = require('child_process').spawnSync, child;
	
	child = exec('ping', ['nodeToPing','-n','1']);
	
	execStdOut = child.stdout.toString().split(/\r?\n/);
	returnCode = child.status;
	
	if( returnCode == 0)
	{
		console.log('the node is reachable');
		
		for (i = 0; i < execStdOut.length; i++)
		{
			var Replay = execStdOut[i].includes("Reply from ");
			if (Replay == true)
			{
			console.log("Responce is " + execStdOut[i]);
			}
		}
	}
	
	else
	{
		console.log('The node is not reachable');
	}
	
	
	
	
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
	
}

var readlineSync = require('readline-sync');
var nodeToPing = readlineSync.question("What node would you like to ping? ");

console.log(myPing(nodeToPing));