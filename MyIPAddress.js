//
// Write a function that executes the "IPCONFIG /ALL" command on a Windowsand
// machine or the "ifconfig" command on a Mac and captures the output.
//
// Display the string, “My IP Address is xxx.xxx.xxx.xxx” where "xxx.xxx.xxx.xxx"
// is my IP address
//
// Steps:
//	1) On a Windows machine:
//		a) Execute the command "IPCONFIG /ALL" and capture the stdout.
//		b) Convert the stdout to a string and split it up into records.
//		c) Loop through the records.
//		d) Find the record that includes the string "IPv4 Address".
//		e) Use the substr() method to pull the IP address out of this record.
//		f) Return the IP Address
//	   On a Mac:
//		a) Execute the command "ifconfig" and capture the stdout.
//		b) Convert the stdout to a string and split it up into records.
//		c) Loop through the records,
//		d) Find the record that includes the string "inet ".
//		e) Use one of the string methods to pull the IP address out of this record.
//		f) Return the IP address.
//

function myIPAddress() {
	
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
	
	var execStdOut, execStdErr, execError, returnCode;
	var exec = require('child_process').spawnSync, child;
	
	child = exec('IPCONFIG' ,['/ALL']);
	
	execStdOut = child.stdout.toString();
	return execStdOut;
	console.log(child.stdout);
	
	//////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
	
}

console.log('My IP Address is ' + myIPAddress());