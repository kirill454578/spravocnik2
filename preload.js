const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
    message: "Привет из preload.js!"
});
