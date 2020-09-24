//return;
//test asdfdsfsdafsdf
// room E21S52 level 6, 2.28 million, Apr 2nd 2020
// room E21S55 Level 7 739km Apr 6th, 2020

// room E25S55 Level 5 June 9th, 2020
// room E25S55 Level 6 June 15th, 2020 6:00pm
// Aug 19, 2021 Added E25S51 & E27S51

// TRAVELER: heavy cpu use: builder _39269030, cpu: 1104 origin: [room E25S51 pos 25,35], dest: [room E25S51 pos 27,34]

//test 2




/* #region required files*/
// import modules
require('prototype.spawn')();
require('prototype.creep')();
//var events = require('events');
require('Traveler');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallRepairer');
var roleLongDistanceHarvester = require('role.longDistanceHarvester');
var roleLongDistanceBuilder = require('role.longDistanceBuilder');
var roleClaimer = require('role.claimer');
var roleReserver = require('role.reserveController');
var roleMiner = require('role.miner');
var roleMinerV2 = require('role.minerV2');
var roleLorry = require('role.lorry');
var roleTestCreep = require('role.Test');
var roleTerminalLorry = require('role.TerminalLorry');
var roleLDBuilder = require('role.LDBuilder');
var util = require('Util');
var link = require('Link');
var towers = require('Towers');
var testCode = require('role.TestCode');
var roleAttackScout = require('role.attackScout');
var roomE43S3 = require("room.E43S3");
var term = require('terminal');
var roleStorageToLink = require('role.StorageToLink');
var roleLinkToTerminal = require('role.LinkToTerminal');
var roleFlagToFlagHarvester = require('role.flagToFlagHarvester');
var roleStorageToExt = require('role.StorageToExt');
var roleLink1Harvester = require('role.Link1Harvester');
var roleRepairerRampart = require('role.repairerRampart');//
var roleUpgrader2x = require("role.Upgrader2x");//
var roleLink2Harvester = require("role.Link2Harvester");//
var roleRecycler = require("role.recycler");//
var roleUpgraderTargetedSource = require("role.UpgraderTargetedSource");
var roleTerminalToStorage = require("role.terminalToStorage");

/* #endregion */

var fileName = "Main        ";
var debugSpawnName = "Spawn4z";
var debugColor = "green";
var debugRoomName = "E27S51";



/* #region start header*/
console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');

console.log('[' + fileName + 'line:' + util.LineNumber() + '] **************************************  ');
console.log('[' + fileName + 'line:' + util.LineNumber() + '] *              Starting Main         *  ');
console.log('[' + fileName + 'line:' + util.LineNumber() + '] **************************************  ');

console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');

/* #endregion */

/* #region Steps for creating a new creep role */
// #myTemplate
// create role.Function.js file
// add  roleFunction= require('role.Function');
// add  StructureSpawn.prototype.createFunction = function (parm1, parm2, parm2){}
// add  if (creep.memory.role == 'role.Function') { create creep}
// add  else if (creep.memory.role == 'StorageToLink') {
//              roleStorageToLink.run(creep);
//       }
// add  var numberFunction= _.sum(creepsInRoom, (c) => c.memory.role == 'Function');
//
/* #endregion */

var currentTime = Date.now();
var currentTick = Game.time;
var currentProgress;
// currentProgress = Game.spawns.Spawn4.room.controller.progress;

// const startObj = [];
// startObj.push(currentTime);
// startObj.push(currentTick);
// startObj.push(currentProgress);

// Game.spawns.Spawn5.memory.startObj = startObj;
// Game.spawns.Spawn6.memory.startObj = startObj;



//  Game.spawns.Spawn2.memory.startTime = startTime;
//  Game.spawns.Spawn3.memory.startTime = startTime;
//     Game.spawns.Spawn4.memory.startTime = startTime;
//     Game.spawns.Spawn5.memory.startTime = startTime;
//     Game.spawns.Spawn6.memory.startTime = startTime;
//     Game.spawns.Spawn7.memory.startTime = startTime;
// Memory.startTime = startTime;


    // transferEnergyFromRoom = "E21S55";
    // transferEnergyToRoom = "E25S52";
    // transferEnergyAmount = 200000;   
    // var transferStats = term.transferEnergy(transferEnergyFromRoom, transferEnergyToRoom, transferEnergyAmount);


let consoleDelay = 5;
let unitsToTransfer = 51000;
unitsToTransfer = 200000; //test

  
 //term.transferEnergy("E27S51","E25S52",600);  //test

//term.transferEnergy("E45S2","E46S3",unitsToTransfer); 

//term.transferEnergy("E45S2","E43S3",unitsToTransfer); 

// term.transferEnergy("E43S3","E45S3",unitsToTransfer); 

//var Memory.

//term.transferEnergy("E44S3","E45S3",unitsToTransfer);  
//term.transferEnergy("E44S3","W15S17",1000);  

//term.transferEnergy("E46S3","E45S3",unitsToTransfer);  //

//// test
//let sp1 = Memory.spawns.Spawn1;
//let Spawn3 = Memory.spawns.Spawn3;

// KEEP: Clear memory
//errorObjectTest();








// err -6 is ERR_NOT_ENOUGH_ENERGY 


// injectNAME();

// global.forceInjectNAME = ()=>{global.NAMEInjected = false; injectNAME();}

for (let spawnName in Game.spawns) {
    let spawn = Game.spawns[spawnName];
    var placeRoomSourceContainers = spawn.room.controller.level >= 3 && 
        (spawn.memory.RoomBuilder.placeSourceContiners == false || 
            spawn.memory.RoomBuilder.placeSourceContiners == undefined);
    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] placeRoomSourceContainers is ' + placeRoomSourceContainers +'</>');
    if (placeRoomSourceContainers) {
        util.placeSourceContainers(spawn);
    }
   
    if (spawn.memory.roomInit != true) {
      //  util.spawnReset(spawn);
      
        util.flagContainer(spawn); 
        util.initFirstRoom(spawn);     
    }
  //  util.placeSourceContainers(spawn);
    
//test
}

//var sp1 = Memory.spawns.Spawn1;
//util.initFirstRoom(sp1);

//***************************************** */
//                 GAME LOOP
//***************************************** */

module.exports.loop = function () {
  
    statOverlay(Game.spawns.Spawn1,15,5,"yellow");
    statOverlay(Game.spawns.Spawn2,45,15,"yellow");
    statOverlay(Game.spawns.Spawn4,15,15,"yellow");
    statOverlay(Game.spawns.Spawn5,32,15,"yellow");
    statOverlay(Game.spawns.Spawn6,15,5,"yellow");





// //    let myDate = new Date(1589134000166);
//     var startObj = Game.spawns.Spawn1.memory.startObj
//     var startTime = startObj[0];
//     var startTick = startObj[1];
//     var startProgress = startObj[2];

//     currentTime = Date.now();
//     currentTick = Game.time;
//     currentProgress = Game.spawns.Spawn1.room.controller.progress;

//   //  currentProgress = Game.spawns.Spawn1.room.controller.progress;
//     currentProgress = Game.spawns.Spawn1.room.controller.progress;
//     const level8energy = Game.spawns.Spawn1.room.controller.progressTotal; // 10935000;
//   //  currentProgress = level8energy - currentProgress


    
//     const iProgress = currentProgress - startProgress;
//     const iRemainingProgress =  level8energy - currentProgress;
//     const iTime = currentTime - startTime;
//     const iSeconds = iTime / 1000;
//     const iMinutes = iSeconds / 60;
//     const iHours = iMinutes / 60;

//     const iTicks = currentTick - startTick; 



//     let myOffSet = new Date(3600000 * 7);
//     // start time in milliseconds = 1589134000166
//     let UTC = new Date();
//     let now = new Date() - UTC;

//     let myDate = new Date (startTime - myOffSet); 
// //    let myDate = new Date (startTime);

//     let iDate = new Date (iTime);

//     let month = iDate.getMonth() + 1;
//     // let year = myDate.getFullYear();
//     let day = iDate.getDate()-1;
//     let hours = iDate.getHours();
//     let minutes = iDate.getMinutes();
//     let seconds = iDate.getSeconds();


//     seconds = formatNumber(seconds);
//     minutes = formatNumber(minutes);
//     hours = formatNumber(hours);
//     day = formatNumber(day);




//     // let offSet = myDate.getTimezoneOffset();


//    // formatDate =  myDate.toLocaleString();

//  //   var iformatDate = month + "." + day + ":" + year + " " + hours + ":" + minutes + ":" + seconds + " (" + offSet + ")"; 
//     var iformatDate = day + "." + hours + ":" + minutes + ":" + seconds
//     var formatDate =  myDate.toLocaleString();
//     //var iformatDate =  iDate.toLocaleString();





//    // new RoomVisual(Game.spawns.Spawn1.room.name).text(formatDate,                                                                          15, 5, { color: 'green', font: 0.8, align: "right"  });
//     new RoomVisual(Game.spawns.Spawn1.room.name).text(iformatDate              + " (" + util.numberWithCommas(iTime) + ")",                15, 6, { color: 'green', font: 0.8, align: "right"  });
//     new RoomVisual(Game.spawns.Spawn1.room.name).text("Energy Per Hour: "       + util.numberWithCommas(Math.trunc(iProgress / iHours)),  15, 7, { color: 'green', font: 0.8, align: "right"  });
//     new RoomVisual(Game.spawns.Spawn1.room.name).text("Ticks Per Min: "        + util.numberWithCommas(Math.trunc(iTicks /  iMinutes )),       15, 8, { color: 'green', font: 0.8, align: "right"  });
//     new RoomVisual(Game.spawns.Spawn1.room.name).text("iMinutes: "             + Math.trunc(iMinutes),                                     15, 9, { color: 'green', font: 0.8, align: "right"  });


//      new RoomVisual(Game.spawns.Spawn2.room.name).text(formatDate, 5, 5, { color: 'green', font: 0.8 });






    //currentTime = Date.now();
    //currentTick = Game.time;
    // var mostRecentTimeTick = [];
    // mostRecentTimeTick.push(Date.now());
    // mostRecentTimeTick.push(Game.time);
    // Memory.mostRecentTimeTick = mostRecentTimeTick;
    

    var sp1 = Memory.spawns.Spawn1;
   // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] sp1.room.name is ' + sp1.room.name +'</>');
   //  util.initFirstRoom("W2N5");
    //  var workCost = BODYPART_COST[WORK];
    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] workCost is ' + workCost +'</>');
    //var energyRemainging = Game.rooms["E45S2"].terminal.energy
    // const energyRemainging = _.sum(Game.rooms['E45S2'].terminal.store);
    var energyRemainging;
    
    
    if (Memory.halt == true) {
        console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] WARNING! All scripts have been suspended. Memory.halt is ' + Memory.halt + '</>');
        new RoomVisual(sp1.name).text(Game.cpu.bucket, 1, 1, { color: 'green', font: 0.8 });
        return;
    }


    //************************************** */    
    // Clear dead creeps from game
    //************************************** */   
    
    if (Game.time % 1500 === 0) {
        clearMemory();
    }



    //#creeps
    // ********************************************************************************//;
    //     // loop through all the creeps
    // ********************************************************************************//;

    /* #region  Loop through all creeps */

    for (let name in Game.creeps) {
        // get the creep object




        /* #region  drop cpu use by half when CPU bucket is below 5000 */
        // if (Game.bucket < 5000) {
        //     if (Game.time % 2 == 0) {
        //         continue;
        //     }
        // }

        /* #endregion */


        // var creep = Game.creeps[name];
        // if (creep.room.name != "E46S1" || creep.room.name != "E45S2" || creep.room.name != "E44S3") {
        //     if (Game.time % 5 == 0) {
        //         sameSpawn = true
        //         if (Game.time % 100 == 0) {
        //             if (sameSpawn) {
        //                 console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] WARNING WARNING WARNING all creeps are running at half speed . Game Time:' + Game.time + '</>');

        //             }
        //         }
        //         continue;
        //     }

        // }


        // ********************************************************************************//;
        // Throttle CPU
        // ********************************************************************************//;
        /* #region  Throttle CPU */
        var creep = Game.creeps[name];
     //   var cpuThrottle = Memory.cpuThrottle; // 2 is 50% 4= is 25% 
        // if (Game.time % cpuThrottle == 0 && (creep.memory.role != "miner" || creep.memory.role != "storageToExt")) {
        //     sameSpawn = true
        //     if (Game.time % 100 == 0) {
        //         if (sameSpawn) {
        //             //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] WARNING WARNING WARNING all creeps are running at half speed . Game Time:' + Game.time + '</>');

        //         }
        //     }
        //     //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] skipping Tick is ' + Game.time + '</>');
        //     continue;
        // }

        /* #endregion */





        // ********************************************************************************//;
        //  Room E44S2 prevent all creeps from parking on specific locations
        // ********************************************************************************//;
        /* #region  Room E44S2 prevent all creeps from parking on specific locations */
        if (creep.room.name == "E44S2") {

            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxxxxx creep(pos) is ' + creep.pos);
            const pos = new RoomPosition(39, 3, 'E44S2');
            const reserveredLocation = new RoomPosition(35, 1, 'E44S2');

            if ((creep.pos.y < 3 || creep.pos > 35) && creep.memory.role == "minor" && creep.memory.role == "link1Harvester") {

                creep.travelTo(pos);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] Reservered location. Most move somewhere else '  + creep.name);
            }

            if (creep.pos.isEqualTo(reserveredLocation) && creep.memory.role != "link1Harvester") {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxxxxx need to move. Room is ' + creep.room.name + " creep.pos is " + creep.pos + " Creep name is " + creep.name);
                creep.travelTo(pos);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxxxxx Reservered location. Most move somewhere else '  + creep.name);
            }

            if (creep.pos.isEqualTo(reserveredLocation && creep.memory.role == "miner")) {
                const minerLocation = new RoomPosition(34, 2, 'E45S2');
                creep.travelTo(minerLocation);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] Reservered location. Most move somewhere else ' + creep.name);
            }

        }
        /* #endregion */



        // ********************************************************************************//;
        // run creep by role 
        // ********************************************************************************//;
        /* #region  run creep by role */
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }

        // if creep is attackScout, call harvester script
        else if (creep.memory.role == 'attackScout') {
            roleAttackScout.run(creep);
        }
        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }

        else if (creep.memory.role == 'upgrader2x') {
            roleUpgrader2x.run(creep);
        }
        // if creep is builder, call builder script
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        // if creep is repairer, call repairer script
        else if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        // if creep is wallRepairer, call wallRepairer script
        else if (creep.memory.role == 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
        // if creep is longDistanceHarvester, call longDistanceHarvester script
        else if (creep.memory.role == 'longDistanceHarvester') {
            roleLongDistanceHarvester.run(creep);
        }
        // if creep is claimer, call claimer script
        else if (creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        // if creep is reserver, call reserver script
        else if (creep.memory.role == 'reserver') {
            roleReserver.run(creep);
        }
        // if creep is miner, call miner script
        else if (creep.memory.role == 'miner') {
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' running miner ');
            roleMiner.run(creep);
        }
        // if creep is minerV2, call minerV2 script
        else if (creep.memory.role == 'minerV2') {
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' running miner ');
            roleMinerV2.run(creep);
        }
        // if creep is lorry, call miner lorry
        else if (creep.memory.role == 'lorry') {
            roleLorry.run(creep);
        }
        else if (creep.memory.role == 'linkToTerminal') {
            roleLinkToTerminal.run(creep);
        }
        else if (creep.memory.role == 'storageToLink') {
            roleStorageToLink.run(creep);
        }
        else if (creep.memory.role == 'longDistanceBuilder') {
            // console.log("Main [line " + util.LineNumber() + "] running roleLongDistanceBuilder: " + creep.name);
            roleLongDistanceBuilder.run(creep);
        }
        else if (creep.memory.role == 'roleTestCreep') {
            // console.log("[Main line " + util.LineNumber() + "] running TestCreep: " + creep.name);
            var sourceStorageId = "5d252e5a2aba2447ced2a570";
            var targetStorageID = "5d3d74d7576a94745c39de30";

            roleTestCreep.run(creep, sourceStorageId, targetStorageID);
        }

        else if (creep.memory.role == 'terminalToStorage') {
            // console.log("[Main line " + util.LineNumber() + "] running TestCreep: " + creep.name);
            var sourceStorageId = "5d252e5a2aba2447ced2a570";
            var targetStorageID = "5d3d74d7576a94745c39de30";

            roleTerminalToStorage.run(creep, sourceStorageId, targetStorageID);
        }
        else if (creep.memory.role == 'LDBuilder') {
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' running HDBuilder ');
            //testCode.run(creep);
            roleLDBuilder.run(creep);

        }
        else if (creep.memory.role == 'flagToFlagHarvester') {
            roleFlagToFlagHarvester.run(creep);

        }

        else if (creep.memory.role == 'flagToFlagHarvester2') {
            roleFlagToFlagHarvester.run(creep);

        }

        else if (creep.memory.role == 'link1Harvester') {
            roleLink1Harvester.run(creep);
        }

        else if (creep.memory.role == 'link2Harvester') {
            roleLink2Harvester.run(creep);
        }



        else if (creep.memory.role == 'repairerRampart') {
            roleRepairerRampart.run(creep);
        }

        else if (creep.memory.role == 'terminalLorry') {
            roleTerminalLorry.run(creep);
        }
        else if (creep.memory.role == 'storageToExt' || creep.memory.role == 'storageToExtMini') {
            roleStorageToExt.run(creep);
        }

        else if (creep.memory.role == 'recycler') {
            roleRecycler.run(creep);
        }

        else if (creep.memory.role == 'upgraderTargetedSource') {
            roleUpgraderTargetedSource.run(creep);
        }

        /* #endregion */



        // run for every creep

        if (Game.time % 5) {
            if (false) {

                console.log();
                console.log("********************************************************************************");

                testCode.run(creep);

                console.log("********************************************************************************");
                console.log();

            }
        }

    }


    /* #endregion */


    // //************************************** */
    // // All towers
    // //************************************** */

    towers.run();




    //************************************** */
    // iterate over all the spawns
    //************************************** */

    /* #region Loop through Spawns */
    for (let spawnName in Game.spawns) {


        

        // if (spawnName == "Spawn2" && Game.time % 2 == 0) {
        //     ////  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Skipping spawn: ' + spawnName +'</>');
        //     continue;
        // }
        // else {
        //     //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Not Skipping spawn: ' + spawnName +'</>');

        // }


        // if (spawnName == "Spawn6" && Game.time % 2 != 0) {
        //     ////  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Skipping spawn: ' + spawnName +'</>');
        //     continue;
        // }
        // else {
        //     //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Not Skipping spawn: ' + spawnName +'</>');

        // }


        /** @type {Spawn} */
        let spawn = Game.spawns[spawnName];
  
        if (spawn.name == debugSpawnName) {
            console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] debugSpawnName is ' + debugSpawnName +' is set to true </>');
        }
      //  console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn name is ' + spawn.name +'</>');
           
       // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] Date.now() is ' + Date.now() +'</>');
        //Memory.flags[flag.name]
        //var testFlag = Game.flags["Rampart_E21S52"];
        //             Game.flags.Flag1
        if (spawn.room.name== "E21S52") {
            var testFlag = Game.flags.Rampart_E21S52;
            var flag1 =  Game.flags.Flag1;
           // flag1.memory.foo = 1;
         //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] xxxtestFlag is ' + testFlag +'</>');
         //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] flag1 is ' + flag1 +'</>');
          //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] flag1.memory.foo is ' + flag1.memory.foo +'</>');
    
        }



        try {

            if (spawnName == "Spawn2") {
                var storage = spawn.room.storage;
                if (storage.store[RESOURCE_ENERGY] > 3000 ) {
                 //   spawn.memory.minStorageToExt = 1;
                }
            }

        }
        catch (e) {
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  trapped error ' + e );
        }



            util.placeStorageConstructionSite(spawn);
            util.placeTowerConstructionSite(spawn);
            //util.placeSourceContainers(spawn);
           // util.setupflagToFlagHarvesters(spawn);
           // util.placeExtensionConstructionSite(spawn);

        let creepsInRoom = spawn.room.find(FIND_MY_CREEPS);

        util.overlayInfo(spawn);


        if (spawn.room.name == "E46S1") {

            var currentRoom = spawn.room;
            var currentRoomController = currentRoom.controller;
            var controllerLevel = currentRoomController.level;

            //flags = currentRoom.find(FIND_FLAGS, {filter: s=> s.name.includes("Build_") }); 
            //flags = currentRoom.find(FIND_FLAGS, {filter: s=> s.name.includes("TestFlag_") }); 

            // currentRoom.createConstructionSite(flags[0],flags[0].memory);
            // currentRoom.createConstructionSite(flags[1],flags[1].memory);

            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] STRUCTURE_LINK is ' + STRUCTURE_LINK +'</>');
            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flags[0].memory is ' + flags[0].memory +'</>');
            // currentRoom.createConstructionSite(flags[1].pos.x,flags[1].pos.y,STRUCTURE_ROAD);


            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flags[0].memory is ' + flags[0].memory +'</>');
            // filter: (s) => (s.name.includes ("dismantle"))  
            // filter: s => s.structureType == STRUCTURE_CONTAINER &&
            if (controllerLevel == 5 && spawn.memory.init == undefined) {
                flags = currentRoom.find(FIND_FLAGS, { filter: s => s.name.includes("Build_") });
                currentRoom.createConstructionSite(flags[0], flags[0].memory);
                currentRoom.createConstructionSite(flags[1], flags[1].memory);
                spawn.memory.minBuilders = 3;
                spawn.memory.init = "Completed";
            }

            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] controllerLevel is ' + controllerLevel +'</>');
        }




        // if (spawnName == "Spawn6") {
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] spawnName is ' + spawnName +'</>');
        // }


        //var status = spawn.spawning.remainingTime;
        //     var status = spawn.spawning;
        //    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@@@@@@@@@@@@@@@@ spawn.Spawning.name is ' + status);

        //     if (status != null) {
        //       //  var status =  spawn.spawning.name.includes("upgrader2x");
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@@@@@@@@@@@@@@@@ spawn.Spawning.name is ' + spawn.spawning.name.includes("LDH"));
        //     }

        var progress = spawn.room.controller.progress;
        var progressTotal = spawn.room.controller.progressTotal;
        let room1 = spawn.memory.room1;
        let room2 = spawn.memory.room2;
        let room3 = spawn.memory.room3;

        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX');




        /* #region  Room Specific code per tick */

        // #Term trottle

        //5f55b0c5e18f3cb9a77022ab link next to controller


        if (spawn.room.name == "E27S51") {
          
  //          const link2Flag = Game.flags.Link2_E25S51;
   //         const link1Flag = Game.flags.Link1_E25S51;  
 
            var storageLinkObjId    = "5f5f2277099fd70709120d92";
            var source2LinkObjId     = "5f41860bd699f24fd8c2df3b";
            var controllerLinkObjId = "5f55b0c5e18f3cb9a77022ab";

           var storageLinkObj = Game.getObjectById(storageLinkObjId);
            var sourceLinkObj = Game.getObjectById(source2LinkObjId);
            var controllerLinkObj = Game.getObjectById(controllerLinkObjId);

            if (controllerLinkObj.store[RESOURCE_ENERGY] <=300 && sourceLinkObj.store[RESOURCE_ENERGY] >=200) {
                var status1 = link.transferEnergy(source2LinkObjId,controllerLinkObjId);
            }

            else if (storageLinkObj.store[RESOURCE_ENERGY] <=600 && sourceLinkObj.store[RESOURCE_ENERGY] >=200) {
                var status1 = link.transferEnergy(source2LinkObjId,storageLinkObjId);
              //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ' LinkTransferStatus is ' + status1 +'</>');
            }
        }



        if (spawn.room.name == "E25S51") {
          
            const link2Flag = Game.flags.Link2_E25S51;
            const link1Flag = Game.flags.Link1_E25S51;  

            var source2LinkObjId     = "5f425a5ddd7780b916b58555";
            var storageLinkObjId    = "5f424954eba63bf56a2b148c";
            var controllerLinkObjId = "5f576dcab0f4143f794cae32";

            var storageLinkObj = Game.getObjectById(storageLinkObjId);
            var sourceLinkObj = Game.getObjectById(source2LinkObjId);
            var controllerLinkObj = Game.getObjectById(controllerLinkObjId);


            if (controllerLinkObj.store[RESOURCE_ENERGY] <=350 && sourceLinkObj.store[RESOURCE_ENERGY] >=200) {
                var status1 = link.transferEnergy(source2LinkObjId,controllerLinkObjId);
              //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ' LinkTransferStatus is ' + status1 +'</>');
            }
             else if (storageLinkObj.store[RESOURCE_ENERGY] <=600 && sourceLinkObj.store[RESOURCE_ENERGY] >=200) {
                var status1 = link.transferEnergy(source2LinkObjId,storageLinkObjId);
              //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ' LinkTransferStatus is ' + status1 +'</>');
            }
        }


        if (spawn.room.name == "E25S52") {
          
            var source1LinkObjId    = "5f5f6b0a9abbdf393d46a509";
            var source2LinkObjId    = "5ee06dba136e4d69b39e87f7";
            var storageLinkObjId    = "5ee0844891989bfb4d891ee0";

            var source1LinkObj = Game.getObjectById(source1LinkObjId);
            var source2LinkObj = Game.getObjectById(source2LinkObjId);
            var storageLinkObj = Game.getObjectById(storageLinkObjId);



            if (storageLinkObj.store[RESOURCE_ENERGY] <=100 && source2LinkObj.store[RESOURCE_ENERGY] >=700) {
                var status1 = link.transferEnergy(source2LinkObjId,storageLinkObjId);
            }

            if (storageLinkObj.store[RESOURCE_ENERGY] <=100 && source1LinkObj.store[RESOURCE_ENERGY] >=700) {
                var status2 = link.transferEnergy(source1LinkObjId,storageLinkObjId);
            }
        }


        if (spawn.room.name == "E21S55") {
          
            var source2LinkObjId = "5e533960c750f25ea3df3d4f";
            var storageLinkObjId = "5e52663c1f34ba74d3b69c61"; //
            var minMineralLinkObjId = "5f0d8f074c057f31bc84ec1b"; //
            
            

            var storageLinkObj = Game.getObjectById(storageLinkObjId);
            var sourceLink2Obj = Game.getObjectById(source2LinkObjId);
            var mineralLinkObj = Game.getObjectById(minMineralLinkObjId);

            if (storageLinkObj.store[RESOURCE_ENERGY] >=200 && mineralLinkObj.store[RESOURCE_ENERGY] <=600) {
                var status2 = link.transferEnergy(storageLinkObjId, minMineralLinkObjId);
            }


            if (storageLinkObj.store[RESOURCE_ENERGY] >=200 && sourceLink2Obj.store[RESOURCE_ENERGY] <=600) {
                var status1 = link.transferEnergy(storageLinkObjId, source2LinkObjId);
            }

            
          //  term.transferEnergy(transferEnergyFromRoom, transferEnergyToRoom, transferEnergyAmount);
        }


        if (spawn.room.name == "E21S52") {
          
            var source2LinkObjId2 = "5e6418abf7aea39a48a365ed";
            var source2LinkObjId = "5f645b24c3531377e60ab590";
            var storageLinkObjId = "5e63fdf6a36376b7a1f7f293";
            var Source1LinkObjId = "5f659486df431218b9afd2a9"; //5f659486df431218b9afd2a9

            
            var sourceLink2Obj = Game.getObjectById(source2LinkObjId);
            var sourceLink1Obj = Game.getObjectById(Source1LinkObjId);
            var sourceLink2Obj2 = Game.getObjectById(source2LinkObjId2);
            var storageLinkObj = Game.getObjectById(storageLinkObjId);

            if (sourceLink1Obj.store[RESOURCE_ENERGY] >=200 && storageLinkObj.store[RESOURCE_ENERGY] <=100) {
                var status1 = link.transferEnergy(Source1LinkObjId, storageLinkObjId);
            }

            if (sourceLink2Obj.store[RESOURCE_ENERGY] >=200 && storageLinkObj.store[RESOURCE_ENERGY] <=100) {
                var status1 = link.transferEnergy(source2LinkObjId, storageLinkObjId);
            }
            

        }




 




        // if (spawnName == "Spawn5") {
        //     var storageLinkObjId = "5da30daa2f9e9b0001a77901";
        //     var controlLinkObjId = "5da33a7b86db5e00019fe09c";
        //     var transferStatus = link.transferEnergy(storageLinkObjId, controlLinkObjId);
        //     // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] transferStatus is '  + transferStatus + '</>');
        //     var constructionSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
        //     //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  constructionSites.length is ' + constructionSites.length +  '</>');
        //     if (constructionSites == 0) {
        //         // var havesterCreepsInRoom  = spawn.room.find(FIND_MY_CREEPS, {filter: s =>( s.memory.role == 'builder')});  
        //         spawn.memory.minBuilders = 0;

        //     }
        // }


        if (spawnName == "Spawn7x") {
            var source1LinkObjId = "5dd200fdb15610ec59943842";
            var storageLinkObjId = "5dea45a14919cef4e466ed04";

            var controlLinkObjId = "5dd1d69ea3d7f3742e5b782d";
            // var transferStatus = link.transferEnergy(source1LinkObjId, controlLinkObjId);
            // var transferStatus = link.transferEnergy(storageLinkObjId, controlLinkObjId);

            var source1Link = Game.getObjectById(source1LinkObjId);
            var storageLink = Game.getObjectById(storageLinkObjId);
            var controllerLink = Game.getObjectById(controlLinkObjId);


            var controllerLinkEnergy = controllerLink.store[RESOURCE_ENERGY];
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] controllerLinkEnergy is ' + controllerLinkEnergy +'</>');
            if (controllerLinkEnergy < 700) {
                var transferStatus = link.transferEnergy(source1LinkObjId, controlLinkObjId);

            }

            var storageLinkEnergy = storageLink.store[RESOURCE_ENERGY];
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] storageLinkEnergy is ' + storageLinkEnergy +'</>');
            if (storageLinkEnergy < 400 && controllerLinkEnergy > 700) {
                var transferStatus = link.transferEnergy(source1LinkObjId, storageLinkObjId);
            }

            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] transferStatus is '  + transferStatus + '</>');

            //#builders in room reset
            var constructionSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  constructionSites.length is ' + constructionSites.length +  '</>');
            if (constructionSites == 0) {
                // var havesterCreepsInRoom  = spawn.room.find(FIND_MY_CREEPS, {filter: s =>( s.memory.role == 'builder')});  
                spawn.memory.minBuilders = 0;

            }
        }

        /* #endregion */


        /** @type {Room} */
        let room = spawn.room;
        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] room name is ' + room);
        //console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.room.name is  ' + spawn.room.name);

        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creepsInRoom is ' + creepsInRoom);

        // count the number of creeps alive for each role in this room
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a specific role

        //#numberOf
        /* #region  calc number of creeps based on role */
        var numberOfHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
        var numberOfUpgraders = _.sum(creepsInRoom, (c) => c.memory.role == 'upgrader');
        var numberOfUpgrader2xs = _.sum(creepsInRoom, (c) => c.memory.role == 'upgrader2x');
        var numberOfBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'builder');




        var numberOfRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'repairer');
        var numberOfWallRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'wallRepairer');
        var numberOfMiners = _.sum(creepsInRoom, (c) => c.memory.role == 'miner');
        var numberOfMinerV2s = _.sum(creepsInRoom, (c) => c.memory.role == 'minerV2');
        var numberOfLorries = _.sum(creepsInRoom, (c) => c.memory.role == 'lorry'); //createCustumReparier
        var numberOfTerminalLorries = _.sum(creepsInRoom, (c) => c.memory.role == 'terminalLorry');
        var numberOfStorageToLink = _.sum(creepsInRoom, (c) => c.memory.role == 'storageToLink');
        var numberOfLinkToTerminals = _.sum(creepsInRoom, (c) => c.memory.role == 'linkToTerminal');
        var numberOfFlagToFlagHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'flagToFlagHarvester');
        var numberOfFlagToFlagHarvesters2 = _.sum(creepsInRoom, (c) => c.memory.role == 'flagToFlagHarvester2');
        var numberOfStorageToExtMinis = _.sum(creepsInRoom, (c) => c.memory.role == 'storageToExtMini');//  
        var numberOfLink1Harvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'link1Harvester');//
        var numberOfLink2Harvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'link2Harvester');//  
     //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] numberOfLink2Harvesters is ' + numberOfLink2Harvesters +'</>');

        // if (spawn.room.name == "E21S52") {
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] numberOfLink2Harvesters is ' + numberOfLink2Harvesters +'</>');
        // }


        var numberOfRepairRamparts = _.sum(creepsInRoom, (c) => c.memory.role == 'repairRampart');//  
        var numberOfRecyclers = _.sum(creepsInRoom, (c) => c.memory.role == 'recycler');//  
        var numberOfUpgraderTargetedSource = _.sum(creepsInRoom, (c) => c.memory.role == 'upgraderTargetedSource');
        var numberOfTerminalToStorage = _.sum(creepsInRoom, (c) => c.memory.role == 'terminalToStorage');// roleTerminalToStorage 


        var numberOfStorageToExt = _.sum(creepsInRoom, (c) => c.memory.role == 'storageToExt');// 


        var numberOflongDistanceBuildersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceBuilder' && c.memory.home == room1);
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']   numberOflongDistanceBuildersE44S2 is ' + numberOflongDistanceBuildersE44S2);
        //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']   spawn.memory.minLongDistanceBuildersE44S2 is ' + spawn.memory.minLongDistanceBuildersE44S2);
        //   spawn.memory.minLongDistanceBuildersE44S2

        // count the number of long distance harvesters globally
        var numberOfLongDistanceHarvestersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room1);
        var numberOfLongDistanceHarvestersroom2 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room2);
        var numberOfLongDistanceHarvestersroom3 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room3);
        var numberOfReservers = _.sum(Game.creeps, (c) => c.memory.role == 'reserver' && c.memory.target == room3);


        var numberOfScouts = _.sum(Game.creeps, (c) => c.memory.role == 'scout');
        var numberOfTargetedReparier = _.sum(creepsInRoom, (c) => c.memory.role == 'targetedReparier');

        var numberOfTestScreeps = _.sum(creepsInRoom, (c) => c.memory.role == 'roleTestCreep');
        // var numberOfReservers = _.sum(creepsInRoom, (c) => c.memory.role == 'Reserver');


        var numberOfLDBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'LDBuilder');




        var unitRemainingToNextLevel;

        if (spawn.room.controller.progress == 0) {
            unitRemainingToNextLevel = 0;
        }
        else {
            unitRemainingToNextLevel = spawn.room.controller.progressTotal - spawn.room.controller.progress;
        }

        //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn.room.controller.progressTotal is ' + spawn.room.controller.progressTotal +'</>');
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn.room.controller.progress is ' + spawn.room.controller.progress +'</>');
        /* #endregion */


        /* #region  Display stats in console */
        if (Game.time % 5 == 0) {

            var roomEnergy = spawn.room.energyCapacityAvailable;
            var d = new Date();
            var t = d.getTime();
            //numberOfTerminalLorriesspawn.minTerminalLorry
            // console.log('[' + fileName + 'line:' +
            //     util.LineNumber() +
            //     '] ' + spawn.name +
            //     //    ', spawn.minTerminalLorry: ' + spawn.memory.minTerminalLorry + 
            //     //  ", Reservers: " + numberOfReservers + 
            //     ', Harvesters: ' + numberOfHarvesters +
            //     ', Builders: ' + numberOfBuilders +
            //     ', Upgraders: ' + numberOfUpgraders +
            //     //  ', Repairers: ' +  numberOfRepairers + 
            //     ', WallRepairers: ' + numberOfWallRepairers +
            //     ', Miners: ' + numberOfMiners +
            //     ', Lorries: ' + numberOfLorries +
            //     ', TestScreeps: ' + numberOfTestScreeps +
            //     ', cpu.bucket: ' + util.pad(Game.cpu.bucket, 5) +
            //     ', roomEnergyCap: ' + util.pad(spawn.room.energyCapacityAvailable, 5) +
            //     ', EnergyAvaiable: ' + util.pad(spawn.room.energyAvailable, 5) +
            //     ', Level Progress: ' + util.pad(unitRemainingToNextLevel, 10) +
            //     ', Game.time: ' + util.numberWithCommas(Game.time));

        }
        /* #endregion */


        // var roomx = Game.rooms['E43S3']
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + 'DDDDDDDDDDDDD roomx ' + roomx.controller);



        //        var testController = Game.rooms["E45S3"].controller;
        //        console.log('[' + fileName + 'line:' + util.LineNumber() + ']  observer status: ' + status);
        //        console.log('[' + fileName + 'line:' + util.LineNumber() + ']  testController: ' + testController);

        //#energy management

        var energy = getRoomEnergy(spawn);

        if (spawn.room.name == "E25S51") {
            var energy = 600;
        }

        if (spawn.room.name == "E25S52") {
            var energy = 800;
        }

        if (spawn.room.name == "E25S51") {
            var energy = 600;
            var builderEnergy = spawn.memory.EnergyManagement.builder;
        }

        if (spawn.room.name == "E27S51") {
            energy = 600
        }

        if (spawn.room.name == "E21S55") {
            energy = 600;
        //    console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] energy is ' + energy +'</>');
        //    console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn.room.find(FIND_MY_CREEPS).length is ' + spawn.room.find(FIND_MY_CREEPS).length +'</>');
        }

        var numberOfCreepsInRoom = spawn.room.find(FIND_MY_CREEPS).length;
        if ( numberOfCreepsInRoom == 0) {
           
            console.log('<font color = "blue">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] WARNING: setting energy level to 300 </>');
            energy = 300;

            if(spawn.memory.minHarvesters == 0){
                 spawn.memory.minHarvesters = 1;
            }
              
        }

        // if (spawn.room.controller.level <= 2) {
            
        //     energy = spawn.room.energyCapacityAvailable;
            
        // }
        // else{

        //     energy = spawn.room.memory.energyLevel;
        //     upgrader2xEnergy = 800;
        //     storageToExtEnergy = 900 // spawn.room.memory.EnergyManagement.storageToExtEnergy;
        // }

        if (spawn.room.name =="E21S55") {
//console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] energy is ' + energy +'</>');
            
        }
       

        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] room name is ' + room);
        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] spawn.room.energyCapacityAvailable is ' + spawn.room.energyCapacityAvailable);

        if (spawn.room.name == "E46S3") {
            energy = spawn.room.energyCapacityAvailable;
            energy = 1200;
            //upgrader2xEnergy = 800;
            //  energy = 300;

        }



        if (spawn.room.name == 'E44S3') {

            // if (spawn.room.energyCapacityAvailable < energy) {
            //     energy = spawn.room.energyCapacityAvailable;
            // }
            // else {

            //     energy = 300;
            // }

            energy = 1200;
        }




        if (spawn.room.name == 'E43S3') {
            energy = 1200;
            upgrader2xEnergy = 1200;
            if (spawn.room.energyCapacityAvailable < energy) {
                energy = spawn.room.energyCapacityAvailable;
            }
        }


        //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.room.name is ' + spawn.room.name)

        if (spawn.room.name == 'E45S2') {
            energy = 750;
            //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.room.name is ' + spawn.room.name);
            //       console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' numberOfTargetedReparier is ' + numberOfTargetedReparier);
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.memory.foo is ' + spawn.memory.foo);
            if (numberOfTargetedReparier < spawn.memory.foo) {
                //   name = Game.spawns.Spawn1.createLongDistanceBuilder(energy, 5, room1, room2, 0);
                //  name = spawn.createTargetRepairer(spawn,"targetedRepairer", "5bbcafa89099fc012e63af8f", "5d4f2eb0ac2d2d20dcee9a27");
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creating a targeted Spawn. Status is ' + name);
            }

            if (spawn.room.energyCapacityAvailable < energy) {
                energy = spawn.room.energyCapacityAvailable;
            }
            else {

                energy = 1000;
            }
        }


        if (spawn.room.name == 'E45S3') {
            energy = spawn.room.energyCapacityAvailable;;
            energy = 1200;
            //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.room.name is ' + spawn.room.name);
            //       console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' numberOfTargetedReparier is ' + numberOfTargetedReparier);
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.memory.foo is ' + spawn.memory.foo);

        }


        if (spawn.room.name == 'E46S1') {
            energy = spawn.room.energyCapacityAvailable;;
            energy = 1200;
            //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.room.name is ' + spawn.room.name);
            //       console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' numberOfTargetedReparier is ' + numberOfTargetedReparier);
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.memory.foo is ' + spawn.memory.foo);

        }


     //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] energy is ' + energy +'</>');


        var name = undefined;

        // if (spawn.room.name = "E45S2") {


        //     if (true) {
        //         name = spawn.createMiner(spawn, "5bbcafa89099fc012e63af90");
        //     }

        // }

        // This code only gets triggered when there no miner creep in room
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] spawnName2 is ' + spawnName +'</>');

        //#miners 
        /* #region  Spawn a miner */

        var totalHarvesters = numberOfHarvesters + numberOfStorageToExt + numberOfStorageToExtMinis;




        if ((numberOfMiners == 1 || numberOfMiners == 0 && totalHarvesters > 0) || spawn.memory.spawnMiner1 == true)
        //    if (false)
        {
            {
                // if (spawn.name == "Spawn3_2") {
                //     spawn = Game.spawns["Spawn3"];
                // }
                // check if all sources have miners
                if (spawn.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] numberOfMiners is ' + numberOfMiners  +'</>');
                }


                let sources = spawn.room.find(FIND_SOURCES);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + spawn.name + ' sources = spawn.room.find(FIND_SOURCES) is' + sources);
                
                if (spawn.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] sources.length is ' + sources.length  +'</>');
                }
                
                // iterate over all sources
                for (let source of sources) {
                    //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name +'  '+ creep.name + '');
                  
                    // if the source has no miner
                    if (!_.some(creepsInRoom, c => c.memory.role == 'miner' && c.memory.sourceId == source.id)) {


                        // check whether or not the source has a container
                        let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
                            filter: s => s.structureType == STRUCTURE_CONTAINER
                        });
                        // if there is a container next to the source


                        //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  hack hack hack ');
                        //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.room.name is  ' + spawn.room.name);

                        if (containers.length > 0) {
                            // spawn a miner

      


                            //#createMiner

                                
                             name = spawn.createMiner(spawn, source.id);
                             if (spawn.room.name == debugRoomName) {
                                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] creating miner is ' + name  +'</>');
                             }
                            
                                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + " is try to create create miner with the name of " + name);
                            if (name == -4 || name == -6) {
                                //     return;
                            }
                            break;
                        }

                    }
                }

            }
        }


        // if no harvesters are left AND either no miners or no lorries are left
        //  create a backup creep
        if (numberOfLorries == 0) {
            // // if there are still miners left
            // if (numberOfMiners > 0 ||
            //     (spawn.room.storage != undefined && spawn.room.storage.store[RESOURCE_ENERGY] >= 150 + 550)) {
            //     // create a lorry
            //     name = spawn.createLorry(450);
            // }
            // // if there is no miner left
            // else {
            // 

            //     // create a harvester because it can work on its own
            //    // name = spawn.createCustomCreep(energy, 'harvester');
            //   //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name +' new creeep spawned: ' +  name + ' is a harvester');
            // }
        }
        // if no backup creep is required
        else {

 
            // check if all sources have miners
            let sources = spawn.room.find(FIND_SOURCES);
            //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + spawn.name + 'XOXOXOXOXOXOOXOOX  sources = spawn.room.find(FIND_SOURCES) is' + sources);
            // iterate over all sources
            for (let source of sources) {
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] XOXOXOXOXOXOOXOOX  ' + spawn.name +'  '+ creep.name + '');
                // if the source has no miner
            //    if (!_.some(creepsInRoom, c => c.memory.role == 'miner' || c.memory.role == 'minerV2' && c.memory.sourceId == source.id)) {
              
                if (!_.some(creepsInRoom, c => c.memory.role == 'miner' && c.memory.sourceId == source.id)) {


                    // check whether or not the source has a container
                    let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
                        filter: s => s.structureType == STRUCTURE_CONTAINER
                    });
                    // if there is a container next to the source


                    //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  hack hack hack ');
                    //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.room.name is  ' + spawn.room.name);

                    if (containers.length > 0) {
                        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] XOXOXOXOXOXOXOXOX  containers.length is'+ containers.length);

                        //  name = spawn.createMiner(spawn, source.id);
                        if (spawn.name != "Spawn6") {
                            name = spawn.createMiner(spawn, source.id);
                        }

                        if (Game.time % consoleDelay == 0) {
                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' is trying to create create miner. Time: ' + name);
                        }
                        if (!(name < 0)) {
                            // delete the claim order
                            //  spawn.memory.qMiner = spawn.memory.qMiner -1;
                        }


                        break;
                    }

                }
            }
        }

        if (spawn.name == debugSpawnName) {
            console.log('<font color = '+ debugColor +'>[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] Executing Creating new screeps </>');    
        }


        /* #endregion */

        // ********************************************************************************//
        // if none of the above caused a spawn command check for other roles
        // ********************************************************************************//

        /* #region  Spawn a new Creep based on role */
        if (spawn.room.name == "E44S2") {
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] spawnName3 is ' + spawnName +'</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] name is ' + name +'</>');

        }


        if (spawn.name == debugSpawnName) {
            console.log('<font color = '+ debugColor +'>[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] numberOfBuilders is ' + numberOfBuilders +'</>');    
            console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn.memory.minBuilders is ' + spawn.memory.minBuilders +'</>');
        }


        if (name == undefined) {
           
           
            //  console.log("[line " + util.LineNumber() + "] spawn.memory.claimRoom != undefined: " spawn.memory.claimRoom != undefined);
            //    if  (numberOfLongDistanceHarvestersroom3  < spawn.memory.minLDHroom3)
            //    {
            //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] aasdklfjas;ldfjka;lsdfjka;lsdfj;alsdfkja;ldkfja;lsdkfja;lsdfjkas;dlk ');
            //    }

            // console.log("[line " + util.LineNumber() + "] Starting:" + name);
            // util.debug(1, util.LineNumber(), "Starting", name);
            //    console.log("line 153 name == undefined");


            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ spawn.name + ' numberOfWallRepairers is ' + numberOfWallRepairers);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ spawn.name + ' minWallRepairers is ' + minWallRepairers);
            if (spawn.room.name == "E44S2") {
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] spawnName4 is ' + spawnName +'</>');
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] minStorageToExtMinis is ' + spawn.memory.minStorageToExtMinis +'</>');
            }

            if (spawn.memory.attackScout != undefined) {
                // try to spawn a 

                name = spawn.createAttackScout(spawn.Id, "E46S3");
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ' ' + spawn.name + '  creating an attack scout ' + name);

                // if that worked
                if ((typeof name) == "string") {
                    // delete from memory so that it does not spawn another creep
                    delete spawn.memory.attackScout;
                }

            }

            if (numberOfStorageToExt < spawn.memory.minStorageToExt) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                //  var flagSource = Game.flags[flagSource];             
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                //  if (flagSource == undefined || flagContainer == undefined) {
                //      spawn.memory.minflagToFlagHarvester = 0;
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                //      return;
                //  }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);
                //#createStorageToExt

   
              
               // name = spawn.createStorageToExt(spawn, "storageToExt", energy);

               var createStatus = spawn.createStorageToExt(spawn, "storageToExt", energy);
               if (createStatus == -6) {
                   energy = energy - 50;
                   if (energy <= 300) {
                       energy = 300;
                   }
               //    createStatus = myCreateStorageToExt(spawn, energy);
               }
           
               


            //   name = myCreateStorageToExt(spawn, energy);
             
             
             
                // if (name = -6) {
                //     console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] WARNING!!!! Investigate. This message not ever appear ' + energy +'</>');

                // }

                // if (name == -6) {
                //     energy = energy - 100;
                //     if (energy < 300) {
                //         energy = 300;
                //     }
                // name = spawn.createStorageToExt(spawn, "storageToExt", energy);
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] StorageToExt2x energy is ' + energy + '</>');
                // }

                // if (name == -6) {
                //     energy = energy - 100;
                //     if (energy < 300) {
                //         energy = 300;
                //     }
                //     name = spawn.createStorageToExt(spawn, "storageToExt", energy);
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] StorageToExt2x energy is ' + energy + '</>');

                // }

                // if (name == -6) {
                //     energy = energy - 100;
                //     if (energy < 300) {
                //         energy = 300;
                //     }
                //     name = spawn.createStorageToExt(spawn, "storageToExt", energy);
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] StorageToExt2x energy is ' + energy + '</>');

                // }

                // if (name == -6) {
                //     energy = energy - 100;
                //     if (energy < 300) {
                //         energy = 300;
                //     }
                //     name = spawn.createStorageToExt(spawn, "storageToExt", energy);
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] StorageToExt2x energy is ' + energy + '</>');

                // }

                // if (name == -6) {


                //     energy = 300;
                //     name = spawn.createStorageToExt(spawn, "storageToExt", energy);
                //     //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']room['+ spawn.room.name +']  StorageToExt2x energy is ' + energy +'</>');
                // }



                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + "]" + spawnName + "  is creating a storageToExt  creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }



            // if not enough harvesters
            if (numberOfHarvesters < spawn.memory.minHarvesters) {
                // try to spawn one
                // util.debug(1, util.LineNumber(), "spawn.memory.minHarvesters", spawn.memory.minHarvesters);
                console.log("[Main line " + util.LineNumber() + "] room['+ spawn.room.name +']  energy: " + energy);
                name = spawn.createCustomCreep(energy, 'harvester');
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' ' +  creep.name + '  numberOfHarvesters is ' + numberOfHarvesters);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' ' +  creep.name + '  spawn.memory.minHarvesters is ' + spawn.memory.minHarvesters);
                if (Game.time % consoleDelay == 0) {
                 //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + " is creating harvester: " + name);
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + ']  is creating Harvester ' + name +'</>');
                }
            }
            // if not enough lorries
            // else if (numberOfLorries < spawn.memory.minLorries)
            //    else if (numberOfLorries < spawn.memory.minLorries || (spawn.memory.qLorry > 0 && numberOfLorries < spawn.memory.minLorries + spawn.memory.qLorry ))
            if (numberOfLorries < spawn.memory.minLorries) {
                console.log("[line " + util.LineNumber() + "] @SAASDSADASD numberOfLorries < spawn.memory.minLorries");
                // try to spawn one
                console.log("[Main line " + util.LineNumber() + "] createLorry: " + name);
                name = spawn.createLorry(energy);

                if (Game.time % consoleDelay == 0) {
                    console.log("[Main line " + util.LineNumber() + "]" + spawnName + "  is creating a createLorry: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qLorry = spawn.memory.qLorry -1');
                    spawn.memory.qLorry = spawn.memory.qLorry - 1;
                }

            }

            if (numberOfStorageToLink < spawn.memory.minStorageToLink) {

                // try to spawn one

                name = spawn.createStorageToLink(energy);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' is creating a StorageToLink creep. Status is ' + name);

                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }

            }
            // if there is a claim order defined
            //  console.log("[line " + util.LineNumber() + "] spawn.memory.claimRoom != undefined: " spawn.memory.claimRoom != undefined);

            if (spawn.memory.claimRoom != undefined) {
                // try to spawn a claimer
                console.log("[line " + util.LineNumber() + "] createClaimer");
                name = spawn.createClaimer(spawn.memory.claimRoom);
                console.log("[line " + util.LineNumber() + "] create Claimer:" + spawn.remainingTime);
                // if that worked
                if ((typeof name) == "string") {
                    // delete the claim order
                    delete spawn.memory.claimRoom;
                }
                /// console.log("line 177");
            }

            // else if (numberOfReservers < spawn.memory.minReservers)
            // {
            //     // try to spawn a reserver

            //       name = spawn.createReserver(spawn.name, spawn.memory.reserveroom);
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' is creating a Reserver:  ' + spawn.memory.reserveroom);

            //     // if that worked
            //     if ((typeof name) == "string") {
            //         // delete the claim order
            //      //   delete spawn.memory.reserveroom;
            //     }
            //     /// console.log("line 177");
            // }

// gets past here

            // // if not enough upgraders
            // //console.log("line 180 spawn.memory.minUpgraders: " + spawn.memory.minUpgraders);
            if (numberOfUpgraders < spawn.memory.minUpgraders || (spawn.memory.qUpgrader > 0 && numberOfUpgraders < spawn.memory.minUpgraders + spawn.memory.qUpgrader)) {
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] numberOfUpgraders < spawn.memory.minUpgraders: ");
                // console.log("[Main line " + util.LineNumber() + "] energy: " + energy);
                name = spawn.createCustomCreep(energy, 'upgrader');


                if ((typeof name) == "string") {
                    // console.log("[line " + util.LineNumber() + "] create upgrader: " + name);
                }

                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qUpgrader = spawn.memory.qUpgrader -1');
                    spawn.memory.qUpgrader = spawn.memory.qUpgrader - 1;
                }


            }
            /* #region  Create upgrader2x */
            // else if (spawn.room.name == "E21S52") {
            //     console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] xxxxxnumberOfLink2Harvesters is ' + numberOfLink2Harvesters +'</>');
            // }

// reaches here

            /* #endregion */


            // if not enough repairers
            if (numberOfRepairers < spawn.memory.minRepairers || (spawn.memory.qRepairer > 0 && (numberOfRepairers < spawn.memory.minRepairers + spawn.memory.qRepairer))) {
                
                if (spawn.room.name == "E21S52") {
                    console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] xxxxxnumberOfLink2Harvesters is ' + numberOfLink2Harvesters +'</>');
                }
    
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'repairer');
                // console.log("[Main line " + util.LineNumber() + "] create repairer: " + name );
                if ((typeof name) == "string") {
                    //   console.log("[Main line " + util.LineNumber() + "] create repairer: " + name);
                }
                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qRepairer = spawn.memory.qRepairers -1');
                    spawn.memory.qRepairer = spawn.memory.qRepairer - 1;
                }
            }


            if (numberOfRepairRamparts < spawn.memory.minRepairerRamparts) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'repairRampart');
                // console.log("[Main line " + util.LineNumber() + "] create repairer: " + name );
                if ((typeof name) == "string") {
                    //   console.log("[Main line " + util.LineNumber() + "] create repairer: " + name);
                }
                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qRepairer = spawn.memory.qRepairers -1');
                    spawn.memory.qRepairer = spawn.memory.qRepairer - 1;
                }
            }


            // reaches here

            /* #region  Create Builder */

            if (numberOfBuilders < spawn.memory.minBuilders) {
                // try to spawn one
                // "[line " + util.LineNumber() + "]
                // console.log("[Main line " + util.LineNumber() + "] create builder: " + name);

                // if (spawn.room.name == "E21S52") {
                //     console.log('<font color = "greed">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] YOxxxxxnumberOfLink2Harvesters is ' + numberOfLink2Harvesters +'</>');
                // }
        
                                
                if (spawn.room.name == "E21S52" || spawn.room.name == "E21S55") {
                    energy = 1200;
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] energy is ' + energy +'</>');
                }

                if (spawn.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] energy is ' + energy +'</>');
                 
                 }

                if (spawn.memory.EnergyManagement.builder != undefined) {
                    energy = spawn.memory.EnergyManagement.builder;
                } 

                name = spawn.createCustomCreep(energy, 'builder');

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + " is try to create create builder. Status is " + name);
                }
                //  console.log("[Main      line " + util.LineNumber() + "] create builder: " + name);
                if ((typeof name) == "string") {

                    console.log("[line " + util.LineNumber() + "] create builder: " + name);
                }
                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qBuilder1 = spawn.memory.qBuilder1 -1');
                    //  spawn.memory.qBuilder = spawn.memory.qBuilder -1;
                }
            }


            /* #endregion */

            /* #region  Create Wallrepairer */

            if (numberOfWallRepairers < spawn.memory.minWallRepairers) {

                name = spawn.createCustomCreep(energy, 'wallRepairer');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' room 3 is XX-' + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);



                console.log("[Main      line " + util.LineNumber() + "] " + spawnName + " is Creating a wall repairer " + name);

                if ((typeof name) == "string") {

                    //util.debug(1, util.LineNumber(), "a WallRepairer has been created named:", name);
                    console.log("[Main      line " + util.LineNumber() + "] " + spawnName + " a WallRepairer has been created named:" + name);

                }
            }

            /* #endregion */

            if (numberOfUpgraderTargetedSource < spawn.memory.minUpgraderTargetedSource) {
                //   StructureSpawn.prototype.createUpgraderTargetedSource = function (SpawnObj, roleName, energy, SourceObjectId)
                name = spawn.createUpgraderTargetedSource(spawn, "upgraderTargetedSource", energy, "5dd744506630d0129c98220d");
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Placeholder for creating a UpgraderTargetedSource </>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creating a UpgraderTargetedSource  is ' + name + '</>');
            }

        //    else if (spawn.room.name == "E21S55") {
        //         console.log('<font color = "greed">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] 1 numberOfUpgrader2xs is ' + numberOfUpgrader2xs +'</>');
        //     }
        // else if (spawn.room.name == "E21S55" && spawn.name == "Spawn3") {
        //     console.log('<font color = "greed">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] xx3 numberOfUpgrader2xs is ' + numberOfUpgrader2xs +'</>');
        // }


            if (numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1) {
                // try to spawn one

                name = Game.spawns.Spawn1.createLongDistanceBuilder(energy, 5, room1, room2, 0);

                if (name == -4 || name == -6) {
                    console.log("[Main        line " + util.LineNumber() + "] " + spawnName + " is Creating a LongDistanceBuilder " + name);
                    return;
                }

                //return;

            }

            else if (numberOfTerminalLorries < spawn.memory.minTerminalLorry) {
                // try to spawn one
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] spawn.minTerminalLorry is ' + spawn.minTerminalLorry + '</>');
                name = spawn.createTerminalLorry(spawn, "terminalLorry");
                console.log("Main [line " + util.LineNumber() + "] Create TerminalLorry " + name);

            }


            if (numberOfTestScreeps < spawn.memory.minTesters) {

                // try to spawn one

                name = spawn.createTestCreep(spawn, "roleTestCreep");
                //  console.log("Main [line " + util.LineNumber() + "] Create createTestCreep" + name );
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + '  Create createTestCreep ' + name);

            }

// reaches here xxx


            //numberOfTerminalToStorage

            if (numberOfTerminalToStorage < spawn.memory.minTerminalToStorage) {

                // try to spawn one

                name = spawn.createTerminalToStorage(spawn, "terminalToStorage");
                //  console.log("Main [line " + util.LineNumber() + "] Create TerminalToStorage" + name );
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + '  Create TerminalToStorage ' + name);

            }



            // if not enough longDistanceHarvesters for room1
            if (numberOfLongDistanceHarvestersroom1 < spawn.memory.minLDHroom1) {
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + spawn.name + " numberOfLongDistanceHarvestersroom1 < spawn.memory.minLDHroom2" + numberOfLongDistanceHarvestersroom1 < spawn.memory.minLDHroom2);

                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + '  numberOfLongDistanceHarvestersroom1 is' + numberOfLongDistanceHarvestersroom1);
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] type: " + (typeof name));
                name = spawn.createLongDistanceHarvester(energy, 2, spawn.room.name, room1, 0);
                util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room1", name);
                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room1", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }
            
         
            if (numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2) {
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + spawn.name + " numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2" + numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2);
                // try to spawn one
                // console.log("[Main    line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                console.log('[' + fileName + util.LineNumber() + '] ' + creep.name + '  create LongDistanceHarvester ' + name);
                name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, room2, 0);


                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room2", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }


            if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3) {
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfLongDistanceHarvestersroom3 is ' + numberOfLongDistanceHarvestersroom3);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ------------------------ spawn: ' + spawn.name + '  energy is ' + energy );
                name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, room3, 0);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' + spawn.name + ' is creating a LongDistanceHarvester: ' + name);
                }

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room3", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }


            
// reaches here xxx

            if (numberOfLDBuilders < spawn.memory.minLDBuilder) {
                // try to spawn
                name = spawn.createLDBuilder(energy, 1, spawn.room.name, room3, 0);
                console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' + creep.name + ' create LDBuilder: ' + name);


                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LDBuilder for room3", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }//            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3)
          
          
            if (numberOfScouts < spawn.memory.minScouts) {
                //  try to spawn one
                //  console.log("[line " + util.LineNumber() + "] create Scout: " + name);
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ------------------------ spawn: ' + spawn.name + '  energy is ' + energy );
                name = spawn.createScout(energy, 1, spawn.room.name, room3, 0);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' + spawn.name + ' is creating a Scout: ' + name);
                }

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "created a scout", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }

            if (numberOfLinkToTerminals < spawn.memory.minLinkToTerminal) {

                // try to spawn one
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!!!!!!!!!!!!!numberOfLinkToTerminals is ' + numberOfLinkToTerminals);
                name = spawn.createLinkToTerminal(energy);

                if (Game.time % consoleDelay == 0) {
                    console.log("[Main line " + util.LineNumber() + "]" + spawnName + "  is creating a LinkToTerminal creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }
       
            //#spawn.memory.minflagToFlagHarvester
            if (numberOfFlagToFlagHarvesters < spawn.memory.minflagToFlagHarvester) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');  //



                //  var flagSource = Game.flags[flagSource];             
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                if (flagSource == undefined || flagContainer == undefined) {
                    spawn.memory.minflagToFlagHarvester = 0;
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                    return;
                }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);
                if (spawn.room.name == "E45S3" || spawn.room.name == "E44S2") {
                    // the creep is just a few ticks between source and storage. No need to create a large create.
                    energy = 300;
                }

                if (spawn.room.controller.level >= 7) {
                    energy = 300;
                }


                name = spawn.createFlagToFlagHarvester(spawn, "flagToFlagHarvester", energy, flagSource, flagContainer);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + "  is creating a LinkToTerminal creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

// reaches here xx

            if (numberOfFlagToFlagHarvesters2 < spawn.memory.minflagToFlagHarvester2) {
                var flagSource = Game.flags["Source2_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                //  var flagSource = Game.flags[flagSource];             
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                if (flagSource == undefined || flagContainer == undefined) {
                    spawn.memory.minflagToFlagHarvester2 = 0;
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                    return;
                }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

                if (spawn.room.name == "E45S3" || spawn.room.name == "E44S2") {
                    // the creep is just a few ticks between source and storage. No need to create a large create.
                    energy = 300;
                }

                if (spawn.room.controller.level >= 7) {
                    energy = 300;
                }

                name = spawn.createFlagToFlagHarvester2(spawn, "flagToFlagHarvester2", energy, flagSource, flagContainer);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + "  is creating a LinkToTerminal creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

            if (numberOfLink1Harvesters < spawn.memory.minLink1Harvesters) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Link1_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                if (flagSource == undefined || flagContainer == undefined) {
                    spawn.memory.minLink1Harvesters = 0;
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + ']    Resetting minLink1Harvesters to ' + spawn.memory.minLink1Harvesters);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                    return;
                }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

                name = spawn.createLink1Harvester(spawn, "link1Harvester", energy, flagSource, flagContainer);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + "  is creating a link1Harvester creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }
         
            if (numberOfLink2Harvesters < spawn.memory.minLink2Harvesters) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] numberOfLink2Harvesters is ' + numberOfLink2Harvesters +'</>');
              
              if (spawn.room.name == "E21S53") {
                  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] numberOfLink2Harvesters is ' + numberOfLink2Harvesters +'</>');
              }
              
                var flagSource = Game.flags["Source2_" + spawn.room.name];
                var flagContainer = Game.flags["Link2_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                if (flagSource == undefined || flagContainer == undefined) {
                    spawn.memory.minLink2Harvesters = 0;
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']    Resetting minLink1Harvesters to ' + spawn.memory.minLink2Harvesters);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                    return;
                }



                name = spawn.createLink2Harvester(spawn, "link2Harvester", energy, flagSource, flagContainer);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + "  is creating a link2Harvester creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

            // #recycler 
            if (numberOfRecyclers < spawn.memory.minRecyclers) {
                //    return;
                //  try to spawn one
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] numberOfRecyclers is ' + numberOfRecyclers + '</>');
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ------------------------ spawn: ' + spawn.name + '  energy is ' + energy );
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Spawning a Recycler ' + '</>');
                //                          SpawnObj, roleName, energy
                name = spawn.createRecycler(spawn, "recycler", 200);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' + spawn.name + ' is creating  Recycler: ' + name);
                }

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "created a Recycler", name);

                }

            }






            if (numberOfStorageToExt < spawn.memory.minStorageToExt) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                //  var flagSource = Game.flags[flagSource];             
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                //  if (flagSource == undefined || flagContainer == undefined) {
                //      spawn.memory.minflagToFlagHarvester = 0;
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                //      return;
                //  }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

             //  name = spawn.createStorageToExt(spawn, "storageToExt", storageToExtEnergy);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + "]" + spawnName + "  is creating a LinkToTerminal creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }
            //#StorageToExtMinis
            if (numberOfStorageToExtMinis < spawn.memory.minStorageToExtMinis) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] "                   spawn.name is ' + spawn.name);

                console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);

                console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                //  var flagSource = Game.flags[flagSource];             
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                //  if (flagSource == undefined || flagContainer == undefined) {
                //      spawn.memory.minflagToFlagHarvester = 0;
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                //      return;
                //  }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

                name = spawn.createStorageToExt(spawn, "storageToExtMini", storageToExtEnergy / 2);

                if (Game.time % consoleDelay == 0) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] is creating a storageToExtMini creep: ' + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

            //#Upgrader2xs
            if (numberOfUpgrader2xs < spawn.memory.minUpgrader2xs) {
                // try to spawn one


              name = spawn.createUpgrader2x (spawn, 'upgrader2x' , energy); 
                
                if (Game.time % 5 == 0) {
                    //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creating upgader2x  name: ' + name);             
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] create Upgrader2x is ' + name +'</>');
                }

                if (spawn.name == debugSpawnName) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' xcreating upgader2x  name: ' + name);             
                }



                if ((typeof name) == "string") {
                    // console.log("[line " + util.LineNumber() + "] create upgrader: " + name);
                }

                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qUpgrader = spawn.memory.qUpgrader -1');
                    // spawn.memory.qUpgrader = spawn.memory.qUpgrader -1;
                }


            }
         
          //  else {

                // else try to spawn a builder
                // console.log("[line " + util.LineNumber() + "] energy:" + energy);
                //console.log("[line " + util.LineNumber() + "] room total energy " + spawn.room.energyCapacityAvailable);


                //     if (spawn.room.energyCapacityAvailable > 8000) {

                //         console.log("[line " + util.LineNumber() + "] room total energy " + spawn.room.energyCapacityAvailable);
                //         var createtype = "builder";
                //         //console.log("Main [line " + util.LineNumber() + "] Creating createtype:" + energy);
                //    //  name = spawn.createCustomCreep(1000, createtype);
                //         console.log("Main [line " + util.LineNumber() + "] " + createtype +", "+ name);
                //      }

                // console.log("creating builder: " + name);
                // console.log("[line " + util.LineNumber() + "] name:"  + name);
                // name = -1;
                //numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1
                /// console.log("Main [line " + util.LineNumber() + "] numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1 " + spawn.memory.minLongDistanceBuildersroom1);

                //   console.log("[" + fileName + "Line " + util.LineNumber() + "] " + spawn.name + " is idle. Game Time: " + util.numberWithCommas(Game.time));
                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ spawn.name + ' spawn.memory.minLinkToTerminal is ' + spawn.memory.minLinkToTerminal);
                //    console.log('[' + fileName + 'line:' + util.LineNumber() + ']'+ spawn.name + ' numberOfLinkToTerminals is ' + numberOfLinkToTerminals);
           // }
        }

        /* #endregion */


        // if (typeof (name) == "string") {
        //     console.log("[line " + util.LineNumber() + "] Name Check: " + name);
        //     console.log(spawnName + " spawned new creep: " + name + " (" + Game.creeps[name].memory.role + ")");
        //     console.log("Harvesters    : " + numberOfHarvesters);
        //     console.log("Upgraders     : " + numberOfUpgraders);
        //     console.log("Builders      : " + numberOfBuilders);
        //     console.log("Repairers     : " + numberOfRepairers);
        //     console.log("WallRepairers : " + numberOfWallRepairers);
        //     console.log("Miners        : " + numberOfMiners);
        //     console.log("Lorries       : " + numberOfLorries);
        //     console.log("LDH room1     : " + numberOfLongDistanceHarvestersroom1);
        //     console.log("LDH room2     : " + numberOfLongDistanceHarvestersroom2);
        //     console.log("LDH room3     : " + numberOfLongDistanceHarvestersroom3);

        // }

        //   console.log('end loop1');
    }

    /* #endregion Loop through Spawns */

    //console.trace();
    // var thisline = new Error().lineNumber;
    // var stack = new Error().stack;
    //console.log(' ');
    // console.log('thisline: ' + thisline);
    // console.log('stack: ' + stack);


};

function formatNumber(number) {
    // if (number < 10) {
    //     number = "0" + number;
    // }
    // return number;

   return number.toString().padStart(2,'0');
}

/**
 * Get the energy level for the current room. Levels 1-3 is spawn.room.energyAvailable
 */
function getRoomEnergy(spawn) {
    if (spawn.room.controller.level <= 3) {
        var energy = spawn.room.energyCapacityAvailable;
       // var energy = spawn.room.energyAvailable;
    }
    else {
      //  var energy = spawn.memory.EnergyManagement.throttleRoomEngeryLevel;
        //var energy = spawn.room.energyCapacityAvailable;
        var energy  = 800 + (spawn.room.energyCapacityAvailable - 800) /2;

    }
    return energy;
}

/* #region local functions*/

function errorObjectTest() {
    var thisError = new Error("This is a new error");
    //  var stack = new Error().stack;
    console.log(' ');
    console.log('thisError: ' + thisError);
    console.log('stack: ' + thisError.stack);
    console.log('JSON.stringify (thisError): ' + JSON.stringify(thisError));
    // console.log('lineNumber: ' + thisError.lineNumber );
}

function clearMemory() {
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  name + ' is undefined. Clearing from memory');
            delete Memory.creeps[name];
        }
    }
}

function myCreateStorageToExt(spawn, energy) {
    var createStatus = spawn.createStorageToExt(spawn, "storageToExt", energy);
    if (createStatus == -6) {
        energy = energy - 50;
        if (energy <= 300) {
            energy = 300;
        }
        createStatus = myCreateStorageToExt(spawn, energy);
    }

    return createStatus

    //    createStorageToExt(energy);
    //    name = spawn.createStorageToExt (spawn,"storageToExt", energy);
    //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room['+ spawn.room.name +'] StorageToExt2x energy is ' + energy +'</>');

    /* #endregion */
}

function statOverlay(spawn,x,y,displayColor){
    var startObj = spawn.memory.startObj
    var startTime = startObj[0];
    var startTick = startObj[1];
    var startProgress = startObj[2];
    //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1 startProgress is ' + startProgress +'</>');
    startProgress = startProgress >>>0;
   // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 2 startProgress is ' + startProgress +'</>');

    var currentTime = Date.now();
    var currentTick = Game.time;
    var currentProgress = spawn.room.controller.progress;
        currentProgress = currentProgress >>>0;
  //  currentProgress = Game.spawns.Spawn1.room.controller.progress;
  //  currentProgress = spawn.room.controller.progress;
    const level8energy = spawn.room.controller.progressTotal; // 10935000;
  //  currentProgress = level8energy - currentProgress


    
//    const iProgress = currentProgress - startProgress;
    var iProgress = currentProgress - startProgress;  iProgress = iProgress >>>0;
    var iRemainingProgress =  level8energy - currentProgress; iRemainingProgress >>>0;
    var iTime = currentTime - startTime; iTime = iTime >>>0; 


    const iSeconds = iTime / 1000;
    const iMinutes = iSeconds / 60;
    const iHours = iMinutes / 60;
    const iTicks = currentTick - startTick; 
    const remainTicksToCompleteLevel = iRemainingProgress / (iProgress / iTicks)
    const remainingMinutesToCompleteLevel = remainTicksToCompleteLevel / (iTicks /  iMinutes )
    var remainingMilsecToCompleteLevel = remainingMinutesToCompleteLevel * 60 * 1000;
    remainingMilsecToCompleteLevel = remainingMilsecToCompleteLevel >>>0;


    let myOffSet = new Date(3600000 * 7);
    // start time in milliseconds = 1589134000166
    let UTC = new Date();
    let now = new Date() - UTC;

    let myDate = new Date (startTime - myOffSet);
  //  let myDate = new Date (startTime);

    let iDate = new Date (remainingMilsecToCompleteLevel);
//    let iDate = new Date (iTime);

    let month = iDate.getMonth();
    // let year = myDate.getFullYear();
    let day = iDate.getDate()-1;
    let hours = iDate.getHours();
    let minutes = iDate.getMinutes();
    let seconds = iDate.getSeconds();


    seconds = formatNumber(seconds);
    minutes = formatNumber(minutes);
    hours = formatNumber(hours);
    day = formatNumber(day);




    // let offSet = myDate.getTimezoneOffset();


   // formatDate =  myDate.toLocaleString();

 //   var iformatDate = month + "." + day + ":" + year + " " + hours + ":" + minutes + ":" + seconds + " (" + offSet + ")"; 
    var iformatDate = month +"m :" + day + "d :" + hours + "h :" + minutes + "m :" +seconds +"s"; // + seconds +"s"
    var formatDate =  myDate.toLocaleString();
    var xnow = Date.now();
    var estCompleteDate = new Date (Date.now() + (remainingMilsecToCompleteLevel - (3600000 * 7)));

    //var iformatDate =  iDate.toLocaleString();


    // var storageRampart = spawn.pos.findClosestByPath(FIND_STRUCTURES, {
    //     filter:
    //     (s) => s.structureType == STRUCTURE_RAMPART && s.pos.isEqualTo(spawn.room.storage)
    // });


   var storageRampart = getRampartAt(spawn.room.storage);
   var terminalRampart = getRampartAt(spawn.room.terminal);

 //iiProgress   iRemainingProgress level8energy currentProgress

    //new RoomVisual(Game.spawns.Spawn1.room.name).text(formatDate,                                                                                       x, y++, { color: 'green', font: 0.8, align: "right"  });
    new RoomVisual(spawn.room.name).text(formatDate,                                                                                                    x, y++, { color: displayColor, font: 0.8, align: "right"  });
    new RoomVisual(spawn.room.name).text("Energy Per Hour: "                + util.numberWithCommas(Math.trunc(iProgress / iHours)),                    x, y++, { color: displayColor, font: 0.8, align: "right"  });
    new RoomVisual(spawn.room.name).text("Energy Per Tick: "                + util.numberWithCommas((iProgress / iTicks).toFixed(2)),                    x, y++, { color: displayColor, font: 0.8, align: "right"  });
    new RoomVisual(spawn.room.name).text("Ticks Per Min: "                  + util.numberWithCommas((iTicks /  iMinutes ).toFixed(2)),                   x, y++, { color: displayColor, font: 0.8, align: "right"  });
  //  new RoomVisual(spawn.room.name).text("iProgress: "                      + util.numberWithCommas(Math.trunc(iProgress)),                              x, y++, { color: displayColor, font: 0.8, align: "right"  });
   // new RoomVisual(spawn.room.name).text("iHours: "                         + util.numberWithCommas(Math.trunc(iHours)),                              x, y++, { color: displayColor, font: 0.8, align: "right"  });
   // new RoomVisual(spawn.room.name).text("Current Progress: "                   + util.numberWithCommas(Math.trunc(level8energy)),                              x, y++, { color: displayColor, font: 0.8, align: "right"  });
   // new RoomVisual(spawn.room.name).text("iHours: "                         + util.numberWithCommas(Math.trunc(currentProgress)),                              x, y++, { color: displayColor, font: 0.8, align: "right"  });

    // new RoomVisual(spawn.room.name).text("TicksToCompleteLevel: "           + util.numberWithCommas(Math.trunc(remainTicksToCompleteLevel)),            x, y++, { color: displayColor, font: 0.8, align: "right"  });
   // new RoomVisual(spawn.room.name).text("MinutesToCompleteLevel: "         + util.numberWithCommas(Math.trunc(remainingMinutesToCompleteLevel)),       x, y++, { color: displayColor, font: 0.8, align: "right"  });
   // new RoomVisual(spawn.room.name).text("MilsecToCompleteLevel: "          + util.numberWithCommas(Math.trunc(remainingMilsecToCompleteLevel)),        x, y++, { color: displayColor, font: 0.8, align: "right"  });
   //new RoomVisual(spawn.room.name).text("iRemainingProgress: "             + util.numberWithCommas(Math.trunc(iRemainingProgress)),                    x, y++, { color: displayColor, font: 0.8, align: "right"  });
   //new RoomVisual(spawn.room.name).text(iformatDate                        + " (" + util.numberWithCommas(iRemainingProgress) + ")",                                x, y++, { color: displayColor, font: 0.8, align: "right"  });
   new RoomVisual(spawn.room.name).text(iformatDate                        + " (" + util.numberWithCommas(remainingMilsecToCompleteLevel) + ")",                                x, y++, { color: displayColor, font: 0.8, align: "right"  });
   new RoomVisual(spawn.room.name).text(estCompleteDate.toLocaleString(),                                                                                                x, y++, { color: displayColor, font: 0.8, align: "right"  });
  if (storageRampart != undefined) {
   new RoomVisual(spawn.room.name).text("Storage Rampart: "                  + util.numberWithCommas((storageRampart.hits).toFixed(2)),                   x, y++, { color: displayColor, font: 0.8, align: "right"  });
  }
  if (terminalRampart != undefined) {
    new RoomVisual(spawn.room.name).text("terminal Rampart: "                  + util.numberWithCommas((terminalRampart.hits).toFixed(2)),                   x, y++, { color: displayColor, font: 0.8, align: "right"  });
   }

};

function getRampartAt(someStructure){
   if (someStructure ==  undefined) {
       return someStructure;
   }
   
    var rampart = someStructure.pos.findClosestByPath(FIND_STRUCTURES, {
        filter:
        (s) => s.structureType == STRUCTURE_RAMPART && s.pos.isEqualTo(someStructure)
    });

    return rampart;
}