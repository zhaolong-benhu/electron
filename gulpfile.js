var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: 'H:\\Git\\navExe\\app\\src',
    outputDirectory: 'H:\\Git\\navExe\\dist\\win',
    authors: 'My App Inc.',
    exe: 'myapp.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
