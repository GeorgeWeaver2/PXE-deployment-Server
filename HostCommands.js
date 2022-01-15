var execStdOut, execStdErr, execError, returnCode;
var exec = require('child_process').spawnSync, child;

child = exec('ping', ['www.temple.edu', '-n','1']);

console.log("stdout: " + child.stdout);
console.log("stderr: " + child.stderr);
console.log("Exit code: " + child.stdout);
execStdOut = child.stdout.toString().split(/\r?\n/);

for(var i = 0; i < execStdOut.lnegth;i++)
	console.log("stdout{" + i + "]: " + execStdOut[i]);
	