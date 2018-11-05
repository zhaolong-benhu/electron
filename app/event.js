var app = require('app');

var spawn = require("child_process");

var path = require("path");

function run(args, done) {
  const updateExe = path.resolve(path.dirname(process.execPath), "..", "Update.exe")
  spawn(updateExe, args, {
    detached: true
  })
    .on("close", done)
}

export default function handleStartupEvent() {
  if (process.platform !== "win32") {
    return false
  }

  const cmd = process.argv[1]
  const target = path.basename(process.execPath)
  if (cmd === "--squirrel-install" || cmd === "--squirrel-updated") {
    run(['--createShortcut=' + target + ''], app.quit)
    return true
  }
  else if (cmd === "--squirrel-uninstall") {
    run(['--removeShortcut=' + target + ''], app.quit)
    return true
  }
  else if (cmd === "--squirrel-obsolete") {
    app.quit()
    return true
  }
  else {
    return false
  }
}