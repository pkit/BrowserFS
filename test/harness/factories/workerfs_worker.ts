/// <reference path="../../../typings/index.d.ts" />
import * as BrowserFS from "../../../src/main";
import WorkerFS from "../../../src/backend/WorkerFS";
import inmemfs_factory from './inmemory_factory';

// Construct an in-memory file system,
inmemfs_factory((name, objs) => {
  BrowserFS.initialize(objs[0]);
  // Listen for API requests.
  WorkerFS.attachRemoteListener(<Worker> <any> self);
  // Tell the main thread that we are ready.
  (<Worker> <any> self).postMessage("Ready");
});

