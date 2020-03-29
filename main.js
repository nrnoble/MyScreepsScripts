//return;
//test asdfdsfsdafsdf

//test 2




/* #region required files*/
// import modules
require('prototype.spawn')();
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




let consoleDelay = 5;
let unitsToTransfer = 51000;
unitsToTransfer = 200000; //test


//term.transferEnergy("E44S2","E43S3",150000);  //test

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
     //   util.placeSourceContainers(spawn);
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
    clearMemory();



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
        var cpuThrottle = Memory.cpuThrottle; // 2 is 50% 4= is 25% 
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

        if (spawn.room.name == "E21S55") {
          
            var source2LinkObjId = "5e533960c750f25ea3df3d4f";
            var storageLinkObjId = "5e52663c1f34ba74d3b69c61";

            

            var storageLinkObj = Game.getObjectById(storageLinkObjId);
            var sourceLink2Obj = Game.getObjectById(source2LinkObjId);

            if (storageLinkObj.store[RESOURCE_ENERGY] >=200 && sourceLink2Obj.store[RESOURCE_ENERGY] <=600) {
                var status1 = link.transferEnergy(storageLinkObjId, source2LinkObjId);
            }
            

        }


        if (spawn.room.name == "E21S52") {
          
            var source2LinkObjId = "5e6418abf7aea39a48a365ed";
            var storageLinkObjId = "5e63fdf6a36376b7a1f7f293";

            
            var sourceLink2Obj = Game.getObjectById(source2LinkObjId);
            var storageLinkObj = Game.getObjectById(storageLinkObjId);

            if (sourceLink2Obj.store[RESOURCE_ENERGY] >=200 && storageLinkObj.store[RESOURCE_ENERGY] <=600) {
                var status1 = link.transferEnergy(source2LinkObjId, storageLinkObjId);
            }
            

        }

        if (spawn.room.name == "E44S3") {
            //    term.throttledTransfer("E44S3", "E46S1", 400, 150500, 295500, debug = false);
            // term.throttledTransfer("E44S2", "E46S3", 400, 150500, 295500, debug = false);
            //term.throttledTransfer("E45S2", "E46S3", 400, 150500, 295500, debug = false);


            // link next to storage 5d46b9cad16c4b73af5c1269
            // link next to controller 5d9fd0108fad390001e30945
            var storageLinkObj = "5d46b9cad16c4b73af5c1269";
            var sourceLink2Obj = "5d9fd0108fad390001e30945";
            var source1LinkObj = "5da2f14886db5e00019fbf17";
            var source2LinkObj = "5da2f8adb541ee0001bf98ab";
 //

            // var storageEnergy = spawn.room.storage.store[RESOURCE_ENERGY];
            var storageEnergy = spawn.room.storage.store.energy;
            var terminalEnergy = spawn.room.terminal.store.energy;

            // // disable the spawning of Tester spawn when Terminal is almost full
            // if (terminalEnergy > 290000) {
            //     spawn.memory.minTesters = 0;
            // }

            // // enable the spawning of Tester spawn when terminal energy falls below a specified value 
            // if (terminalEnergy < 250000) {
            //     spawn.memory.minTesters = 1;                
            // }


            //  console.log('<font color ="yellow" >[' + fileName + 'line:' + util.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxxxxstorageEnergy is ' + storageEnergy+ '</>');

            var storageLinkObjId = Game.getObjectById(storageLinkObj);
            var controllerLink = Game.getObjectById(sourceLink2Obj);
            var source1Link = Game.getObjectById(source1LinkObj);
            var source2Link = Game.getObjectById(source2LinkObj);


            var controllerLinkEngery = controllerLink.energy;
            var storageLinkEngery = storageLinkObjId.energy;

            var TargetLinkobj = storageLinkObj;
            var backupTargetLinkObj = sourceLink2Obj;
            if (controllerLinkEngery < 600) {
                TargetLinkobj = sourceLink2Obj;
                //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] xxxxxx setting taget to ControllerLink </>');
            }

            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']    source1Link.cooldown is ' + util.pad (source1Link.cooldown,3) + ', controllerLinkEngery is ' + util.pad(controllerLinkEngery,3) + '</>' ); 

            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']    source2Link.cooldown is ' + util.pad (source2Link.cooldown,3) + ',    storageLinkEngery is ' + util.pad (storageLinkEngery,3) + '</>');



            if (storageEnergy > 105000) {
                var status1 = link.transferEnergy(source1LinkObj, TargetLinkobj);
                if (status1 == -7 || status1 == -8 || status1 == -11) {
                    //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status1 is ' + status1 + '</>');
                    var status2 = link.transferEnergy(source1LinkObj, backupTargetLinkObj);
                    //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status2 is ' + status2 + '</>');
                }

                var status4 = link.transferEnergy(source2LinkObj, TargetLinkobj);
                if (status4 == -7 || status4 == -8 || status4 == -11) {
                    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status4 is ' + status4 + '</>');  
                    var status3 = link.transferEnergy(source2LinkObj, backupTargetLinkObj);
                    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');
                }

            }
            else {
                var status3 = link.transferEnergy(source2LinkObj, TargetLinkobj);

                // var status1 = link.transferEnergy(source1LinkObj, storageLinkObj);
                // var status4 = link.transferEnergy(source2LinkObj, storageLinkObj);

                //var status2 = link.transferEnergy(source1LinkObj, backupTargetLinkObj);
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');

            }






            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');



        }



        //        if (spawnName == "Spawn2") {
        if (spawn.room.name == "E44S2") {

            var flagTarget = spawn.pos.findClosestByPath(FIND_FLAGS, { filter: s => s.name.includes("destroy") });
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flagTarget is ' + flagTarget +'</>');

            //     var structures = flagTarget.room.lookAt(flagTarget); 
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structures.length is ' + structures.length +'</>');
            //     for (const key in structures) {

            //             const element = structures[key].type;
            //             console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] element is ' + element +'</>');         




            //     }


            //     var target = structures[0];

            // var structures = flagTarget.room.lookAt(flagTarget); 
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structures.length is ' + structures.length +'</>');

            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] target.structure.structureType is ' + target.structure.structureType +'</>');         
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structure.structureType is ' + structure.structureType +'</>');


            //5d4f7683b5e0621e0bbb07b6 is link by storage
            //5d836db1128ef459c47e20af is link by energy source
            //var status1 = link.transferEnergy("5d836db1128ef459c47e20af","5bbcaf979099fc012e63ad56");

            var status2 = link.transferEnergy("5d92bc8e0232ef0001c8b5ba", "5dc8b4cb8121d63ad927389d");

            // 5d836db1128ef459c47e20af -->5d4f7683b5e0621e0bbb07b6

            // # construction sites
            var constructionSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);

            if (constructionSites == 0) {
                // var havesterCreepsInRoom  = spawn.room.find(FIND_MY_CREEPS, {filter: s =>( s.memory.role == 'builder')});  
                spawn.memory.minBuilders = 0;

            } else {


                //TODO Put this in to a function

                var numberOfHarvestersInRoom = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
                var defaultHarverestCount = 1;
                switch (constructionSites.length) {
                    case 1:
                        spawn.memory.minBuilders = defaultHarverestCount;
                        break;
                    case 2:
                        spawn.memory.minBuilders = defaultHarverestCount;
                        break;
                    case 3:
                        spawn.memory.minBuilders = defaultHarverestCount;
                        break;
                    case 4:
                        spawn.memory.minBuilders = defaultHarverestCount;
                        break;

                    default:
                        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] constructionSites is ' + constructionSites + '</>');
                        spawn.memory.minBuilders = 1;
                        break;
                }

            }




        }


        if (spawnName == "Spawn3") {


            //   term.throttledTransfer("E45S2", "E45S3", 500, 200000, 46000, false);

            const terminalEnergyE45S2 = spawn.room.terminal.store.energy;
            var storageEnergyE45S2 = spawn.room.storage.store.energy;

            var sourceLink2Obj = "5d5542d8f0e41373bf60b75e";
            var source1LinkObj = "5d88c2f732a61a437872fb20";
            var source2LinkObj = "5d99e0fba33c040001cfced0";
            var storageLinkObj = "5d6b7e3252d12c73f0332b33";
            var backupTargetLinkObj = sourceLink2Obj;

            var controllerLink = Game.getObjectById(sourceLink2Obj);
            var source1Link = Game.getObjectById(source1LinkObj);
            var source2Link = Game.getObjectById(source2LinkObj);
            var storageLinkObjId = Game.getObjectById(storageLinkObj);

            var controllerLinkEngery = controllerLink.energy;
            var storageLinkEngery = storageLinkObjId.energy;

            var TargetLinkobj = storageLinkObj;

            if (controllerLinkEngery < 601) {
                TargetLinkobj = sourceLink2Obj;
                //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] xxxxxx setting taget to ControllerLink </>');
            }

            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  E45S2 source1Link.cooldown is ' + util.pad (source1Link.cooldown,3) + ', controllerLinkEngery is ' + util.pad(controllerLinkEngery,3) + '</>' );       
            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  E45S2 source2Link.cooldown is ' + util.pad (source2Link.cooldown,3) + ',    storageLinkEngery is ' + util.pad (storageLinkEngery,3) + '</>');

            if (storageEnergy > 76000) {
                var status1 = link.transferEnergy(source1LinkObj, TargetLinkobj);
                if (status1 == -7 || status1 == -8 || status1 == -11) {
                    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status1 is ' + status1 + '</>');
                    var status2 = link.transferEnergy(source1LinkObj, backupTargetLinkObj);
                    //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status2 is ' + status2 + '</>');
                }

                var status4 = link.transferEnergy(source2LinkObj, TargetLinkobj);
                if (status4 == -7 || status4 == -8 || status4 == -11) {
                    //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status4 is ' + status4 + '</>');
                    var status3 = link.transferEnergy(source2LinkObj, backupTargetLinkObj);
                    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');
                }

            }
            else {
                var status3 = link.transferEnergy(source2LinkObj, storageLinkObj);
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + ']  is ' + status3 + '</>');
                //TODO: Are these lines needed?
                var status2 = link.transferEnergy(source1LinkObj, backupTargetLinkObj);
                var status1 = link.transferEnergy(source1LinkObj, TargetLinkobj);

            }


            //var terminalEnergy = spawn.room.terminal.store.energy;

            // disable the spawning of Tester spawn when Terminal is almost full
            if (terminalEnergyE45S2 > 290000 && storageEnergyE45S2 < 500000) {
                spawn.memory.minTesters = 0;
            }

            // enable the spawning of Tester spawn when terminal energy falls below a specified value 
            if (terminalEnergyE45S2 < 250000 && storageEnergyE45S2 > 500000) {
                spawn.memory.minTesters = 1;
            }



        }



        // if (spawnName == "Spawn4")
        if (spawn.room.name == "E45S3") {

            const terminalEnergyE45S3 = spawn.room.terminal.store.energy;
            var storageEnergyE45S3 = spawn.room.storage.store.energy;
            //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] 1XXXXXXXXXXXXXXXXXXXXX terminalEnergyE45S3 is ' + terminalEnergyE45S3);
            //  const terminalEnergyE45S3 = _.sum(Game.rooms['E45S3'].terminal.store);
            //  const terminalEnergyE45S3 = creep.room.terminal.store.energy;

            if (terminalEnergyE45S3 < 300000) {
                // transfer to link next to terminal
                link.transferEnergy("5d99ba677069c70001aba38d", "5d99b0a69c30e60001320810");
            }


            //var terminalEnergy = spawn.room.terminal.store.energy;

            // disable the spawning of Tester spawn when Terminal is almost full
            // if (terminalEnergyE45S3 > 290000) {
            //     spawn.memory.minTesters = 0;
            // }

            // // enable the spawning of Tester spawn when terminal energy falls below a specified value 
            // if (terminalEnergyE45S3 < 250000) {
            //     spawn.memory.minTesters = 1;                
            // }


        }


        if (spawnName == "Spawn5") {
            var storageLinkObjId = "5da30daa2f9e9b0001a77901";
            var controlLinkObjId = "5da33a7b86db5e00019fe09c";
            var transferStatus = link.transferEnergy(storageLinkObjId, controlLinkObjId);
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] transferStatus is '  + transferStatus + '</>');
            var constructionSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  constructionSites.length is ' + constructionSites.length +  '</>');
            if (constructionSites == 0) {
                // var havesterCreepsInRoom  = spawn.room.find(FIND_MY_CREEPS, {filter: s =>( s.memory.role == 'builder')});  
                spawn.memory.minBuilders = 0;

            }
        }

        if (spawnName == "Spawn7") {
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


        if (spawn.room.name == "E46S1") {

            var storageLinkObjId = "5dda8e4e2c5bfb18f92a2102";
            // var controllerLinkObj = "";
            var source1LinkObjId = "5dda945fa065826943ba1714";
            //  var source2LinkObj ="";

            //  var storageLinkObjId = Game.getObjectById(storageLinkObj);
            //  var controllerLink = Game.getObjectById(controllerLinkObj);
            //  var source1Link = Game.getObjectById(source1LinkObj);
            // var source2Link = Game.getObjectById(source2LinkObj);

            var transferStatus = link.transferEnergy(source1LinkObjId, storageLinkObjId);


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
        var numberOfLorries = _.sum(creepsInRoom, (c) => c.memory.role == 'lorry'); //createCustumReparier
        var numberOfTerminalLorries = _.sum(creepsInRoom, (c) => c.memory.role == 'terminalLorry');
        var numberOfStorageToLink = _.sum(creepsInRoom, (c) => c.memory.role == 'storageToLink');
        var numberOfLinkToTerminals = _.sum(creepsInRoom, (c) => c.memory.role == 'linkToTerminal');
        var numberOfFlagToFlagHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'flagToFlagHarvester');
        var numberOfFlagToFlagHarvesters2 = _.sum(creepsInRoom, (c) => c.memory.role == 'flagToFlagHarvester2');
        var numberOfStorageToExtMinis = _.sum(creepsInRoom, (c) => c.memory.role == 'storageToExtMini');//  
        var numberOfLink1Harvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'link1Harvester');//
        var numberOfLink2Harvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'link2Harvester');//  
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
            console.log('[' + fileName + 'line:' +
                util.LineNumber() +
                '] ' + spawn.name +
                //    ', spawn.minTerminalLorry: ' + spawn.memory.minTerminalLorry + 
                //  ", Reservers: " + numberOfReservers + 
                ', Harvesters: ' + numberOfHarvesters +
                ', Builders: ' + numberOfBuilders +
                ', Upgraders: ' + numberOfUpgraders +
                //  ', Repairers: ' +  numberOfRepairers + 
                ', WallRepairers: ' + numberOfWallRepairers +
                ', Miners: ' + numberOfMiners +
                ', Lorries: ' + numberOfLorries +
                ', TestScreeps: ' + numberOfTestScreeps +
                ', cpu.bucket: ' + util.pad(Game.cpu.bucket, 5) +
                ', roomEnergyCap: ' + util.pad(spawn.room.energyCapacityAvailable, 5) +
                ', EnergyAvaiable: ' + util.pad(spawn.room.energyAvailable, 5) +
                ', Level Progress: ' + util.pad(unitRemainingToNextLevel, 10) +
                ', Game.time: ' + util.numberWithCommas(Game.time));

        }
        /* #endregion */


        // var roomx = Game.rooms['E43S3']
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + 'DDDDDDDDDDDDD roomx ' + roomx.controller);



        //        var testController = Game.rooms["E45S3"].controller;
        //        console.log('[' + fileName + 'line:' + util.LineNumber() + ']  observer status: ' + status);
        //        console.log('[' + fileName + 'line:' + util.LineNumber() + ']  testController: ' + testController);

        //#energy management

        var energy = getRoomEnergy(spawn);


        if (spawn.room.name == "E21S55") {
            energy = 500;
        //    console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] energy is ' + energy +'</>');
        //    console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn.room.find(FIND_MY_CREEPS).length is ' + spawn.room.find(FIND_MY_CREEPS).length +'</>');
        }

        var numberOfCreepsInRoom = spawn.room.find(FIND_MY_CREEPS).length;
        if ( numberOfCreepsInRoom <= 3) {
           
            console.log('<font color = "blue">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] WARNING: setting energy level to 300 </>');
            energy = 300;

            if(spawn.memory.minHarvesters <= 1){
                spawn.memory.minHarvesters  = spawn.memory.minHarvesters + 1;
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
                let sources = spawn.room.find(FIND_SOURCES);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + spawn.name + ' sources = spawn.room.find(FIND_SOURCES) is' + sources);
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

                            if (spawn.room.name == "E45S2") {



                            }


                            //#createMiner
                            //#cm
                          //  if (spawn.name != "Spawn2") {
                                name = spawn.createMiner(spawn, source.id);
                            //}
                            //  console.log("[Main line " + util.LineNumber() + "] " + spawnName +" is try to create create miner with the name of " + name);
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


        /* #endregion */

        // ********************************************************************************//
        // if none of the above caused a spawn command check for other roles
        // ********************************************************************************//

        /* #region  Spawn a new Creep based on role */
        if (spawn.room.name == "E44S2") {
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] spawnName3 is ' + spawnName +'</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] name is ' + name +'</>');

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

            else if (numberOfStorageToExt < spawn.memory.minStorageToExt) {
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
                name = myCreateStorageToExt(spawn, energy);
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
            else if (numberOfHarvesters < spawn.memory.minHarvesters) {
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
            else if (numberOfLorries < spawn.memory.minLorries) {
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

            else if (numberOfStorageToLink < spawn.memory.minStorageToLink) {

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

            else if (spawn.memory.claimRoom != undefined) {
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



            // // if not enough upgraders
            // //console.log("line 180 spawn.memory.minUpgraders: " + spawn.memory.minUpgraders);
            else if (numberOfUpgraders < spawn.memory.minUpgraders || (spawn.memory.qUpgrader > 0 && numberOfUpgraders < spawn.memory.minUpgraders + spawn.memory.qUpgrader)) {
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

            else if (numberOfUpgrader2xs < spawn.memory.minUpgrader2xs) {


                //StructureSpawn.prototype.createUpgrader2x = function (SpawnObj, roleName, energy) {

                // name = spawn.createCustomCreep(energy * 2, 'upgrader2x');

                name = spawn.createUpgrader2x(spawn, 'upgrader2x', energy);

                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creating upgader2x  name: ' + name);

                if ((typeof name) == "string") {
                    // console.log("[line " + util.LineNumber() + "] create upgrader: " + name);
                }

                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qUpgrader = spawn.memory.qUpgrader -1');
                    // spawn.memory.qUpgrader = spawn.memory.qUpgrader -1;
                }


            }

            /* #endregion */


            // if not enough repairers
            else if (numberOfRepairers < spawn.memory.minRepairers || (spawn.memory.qRepairer > 0 && (numberOfRepairers < spawn.memory.minRepairers + spawn.memory.qRepairer))) {
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

            else if (numberOfRepairRamparts < spawn.memory.minRepairerRamparts) {
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



            /* #region  Create Builder */

            else if (numberOfBuilders < spawn.memory.minBuilders || (spawn.memory.qBuilder > 0 && (numberOfBuilders < spawn.memory.minBuilders + spawn.memory.qBuilder))) {
                // try to spawn one
                // "[line " + util.LineNumber() + "]
                // console.log("[Main line " + util.LineNumber() + "] create builder: " + name);

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

            else if (numberOfWallRepairers < spawn.memory.minWallRepairers) {

                name = spawn.createCustomCreep(energy, 'wallRepairer');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' room 3 is XX-' + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);



                console.log("[Main      line " + util.LineNumber() + "] " + spawnName + " is Creating a wall repairer " + name);

                if ((typeof name) == "string") {

                    //util.debug(1, util.LineNumber(), "a WallRepairer has been created named:", name);
                    console.log("[Main      line " + util.LineNumber() + "] " + spawnName + " a WallRepairer has been created named:" + name);

                }
            }

            /* #endregion */

            else if (numberOfUpgraderTargetedSource < spawn.memory.minUpgraderTargetedSource) {
                //   StructureSpawn.prototype.createUpgraderTargetedSource = function (SpawnObj, roleName, energy, SourceObjectId)
                name = spawn.createUpgraderTargetedSource(spawn, "upgraderTargetedSource", energy, "5dd744506630d0129c98220d");
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Placeholder for creating a UpgraderTargetedSource </>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creating a UpgraderTargetedSource  is ' + name + '</>');
            }




            else if (numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1) {
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



            //  else if (numberOfTestScreeps < Memory.spawns.Spawn1.minTesters) {

            else if (numberOfTestScreeps < spawn.memory.minTesters) {

                // try to spawn one

                name = spawn.createTestCreep(spawn, "roleTestCreep");
                //  console.log("Main [line " + util.LineNumber() + "] Create createTestCreep" + name );
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + '  Create createTestCreep ' + name);

            }

            //numberOfTerminalToStorage

            else if (numberOfTerminalToStorage < spawn.memory.minTerminalToStorage) {

                // try to spawn one

                name = spawn.createTerminalToStorage(spawn, "terminalToStorage");
                //  console.log("Main [line " + util.LineNumber() + "] Create TerminalToStorage" + name );
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + '  Create TerminalToStorage ' + name);

            }



            // if not enough longDistanceHarvesters for room1
            else if (numberOfLongDistanceHarvestersroom1 < spawn.memory.minLDHroom1) {
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
            // if not enough longDistanceHarvesters for room2
            else if (numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2) {
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

            //            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3)
            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3) {
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
            else if (numberOfLDBuilders < spawn.memory.minLDBuilder) {
                // try to spawn
                name = spawn.createLDBuilder(energy, 1, spawn.room.name, room3, 0);
                console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' + creep.name + ' create LDBuilder: ' + name);


                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LDBuilder for room3", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }//            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3)
            else if (numberOfScouts < spawn.memory.minScouts) {
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

            else if (numberOfLinkToTerminals < spawn.memory.minLinkToTerminal) {

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
            else if (numberOfFlagToFlagHarvesters < spawn.memory.minflagToFlagHarvester) {
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

            else if (numberOfFlagToFlagHarvesters2 < spawn.memory.minflagToFlagHarvester2) {
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

            else if (numberOfLink1Harvesters < spawn.memory.minLink1Harvesters) {
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
            else if (numberOfLink2Harvesters < spawn.memory.minLink2Harvesters) {
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
            else if (numberOfRecyclers < spawn.memory.minRecyclers) {
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



        

            else if (numberOfStorageToExt < spawn.memory.minStorageToExt) {
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
            //#minStorageToExtMinis
            else if (numberOfStorageToExtMinis < spawn.memory.minStorageToExtMinis) {
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

            else {

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
            }
        }

        /* #endregion */


        if (typeof (name) == "string") {
            console.log("[line " + util.LineNumber() + "] Name Check: " + name);
            console.log(spawnName + " spawned new creep: " + name + " (" + Game.creeps[name].memory.role + ")");
            console.log("Harvesters    : " + numberOfHarvesters);
            console.log("Upgraders     : " + numberOfUpgraders);
            console.log("Builders      : " + numberOfBuilders);
            console.log("Repairers     : " + numberOfRepairers);
            console.log("WallRepairers : " + numberOfWallRepairers);
            console.log("Miners        : " + numberOfMiners);
            console.log("Lorries       : " + numberOfLorries);
            console.log("LDH room1     : " + numberOfLongDistanceHarvestersroom1);
            console.log("LDH room2     : " + numberOfLongDistanceHarvestersroom2);
            console.log("LDH room3     : " + numberOfLongDistanceHarvestersroom3);

        }

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