(function(c){var d="seajs-nocache="+(new Date).getTime();c.on("fetch",function(a){var b=a.requestUri||a.uri;-1===b.indexOf("seajs-nocache=")&&(a.requestUri+=(-1===b.indexOf("?")?"?":"&")+d)})})(seajs);
