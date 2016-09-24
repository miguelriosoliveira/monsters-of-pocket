/**
 * Created by miguel on 23/09/16.
 */

function redirectLog(loggerTag) {
	console.log = function (message) {
		// redirect message to the logger
		loggerTag.innerHTML += message + '\n';
		loggerTag.scrollTop = loggerTag.scrollHeight;
	};
}