var path = require('path'),
  connect = require('connect'),
  serveStatic = require('serve-static');

var showReport;
var filterTest;
var debugMode;
var remoteDebug;
var dashboard;

process.argv.forEach(function (arg, i) {
  if (arg === 'report') {
    showReport = true;
  }
  if (/^debug/.test(arg)) {
    debugMode = true;
  }
  if (/^remoteDebug/.test(arg)) {
    remoteDebug = true;
  }
  if (/^test=/.test(arg)) {
    filterTest = arg.split('=')[1];
  }
  if (/^dashboard/.test(arg)) {
    dashboard = true;
  }
});

var flow = require('phantomflow').init({
  //earlyexit: true, // abort as soon as a test fails (also prevents report creation)
  debug: debugMode ? 2 : undefined,
  createReport: true,
  test: filterTest,
  remoteDebug: remoteDebug,
  dashboard: dashboard
});

if (showReport) {

  flow.report();

} else {

  var app = connect();
  app.use(serveStatic(path.join(__dirname, '..', 'ui_for_tests'))); // Serve the system under test for this example
  app.listen(9001);

  // flow.event.on('exit', function(){
  // 	process.exit(0);
  // });

  flow.run(function (code) {
    process.exit(code);
  });
}
