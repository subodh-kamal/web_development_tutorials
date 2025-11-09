// 1. Native Modules or Core Modules or Node.js Modules. No need to provide extention . All the below module codes are written in binary form in node.exe file that we have downloaded while downloading the node application.

// import fs from "fs"; // We can write this code as:
import fs from "node:fs"; // fs module is used for handling files. fs module is an Object.
import net from "node:net"; // We provide node: to indiacate that it is the core module of Node.
import dgram from "node:dgram"; // to build UDP servers
import http from "node:http";
import https from "node:https";
import child_process from "node:child_process";
import cluster from "node:cluster";
import zlib from "node:zlib";
import worker_threads from "node:worker_threads";
import crypto from "node:crypto";

console.log(fs);

// ---------------------------------------------------------------------------------------------------

// 2. User Modules. extention is mandatory
import { num } from "./math.js";

// ---------------------------------------------------------------------------------------------------

// NPM Modules.
import axios from "axios"; // We do not need to provide path here same as core node modules.