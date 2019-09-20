// import modules
require('prototype.spawn')();
//var events = require('events');
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
var fileName = "Main        ";
var roomE43S3 = require("room.E43S3");
var term = require('terminal'); 
var  roleStorageToLink = require('role.StorageToLink');

// create role.Function.js file
// add  roleFunction= require('role.Function');
// add  StructureSpawn.prototype.createFunction = function (parm1, parm2, parm2){}
// add  if (creep.memory.role == 'role.Function') { create spawn}
// add   else if (creep.memory.role == 'StorageToLink') {
//              roleStorageToLink.run(creep);
//       }
// add  var numberFunction= _.sum(creepsInRoom, (c) => c.memory.role == 'Function');
//

{ // dead code
// const E44S3_MINER_TTL = 25;
// const E44S2_MINER_TTL = 125;
// const E45S2_MINER_TTL = 125;
}


let consoleDelay = 5;
let unitsToTransfer = 25000;

//term.transferEnergy("E44S2","E45S2",unitsToTransfer); ////	//asdf
//term.transferEnergy("E44S3","E45S2",unitsToTransfer); //////

let sp1 = Memory.spawns.Spawn1;
let Spawn3 = Memory.spawns.Spawn3;

// KEEP: Clear memory
errorObjectTest();







// err -6 is ERR_NOT_ENOUGH_ENERGY 


// injectNAME();

// global.forceInjectNAME = ()=>{global.NAMEInjected = false; injectNAME();}



//***************************************** */
//                 GAME LOOP
//***************************************** */

module.exports.loop = function () {
    var sp1 = Memory.spawns.Spawn1;


    roomE43S3.reserverSpawnCheck();

    // Dead code 9-3-2019
    {
  //  console.log("test");

  //  injectNAME();

//     console.log('[' + fileName + 'line:' + util.LineNumber() + '] sp1.creepCount is  ' + sp1.creepCount);
//     console.log('[' + fileName + 'line:' + util.LineNumber() + '] postFixCount is  ' +    postFixCount);
//     sp1.creepCount++;
//    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] postFixCount = Game.spawns.Spawn1.memory.creepCount is  ' + Game.spawns.Spawn1.memory.creepCount);
 // console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.room.energyCapacityAvailable is  ' + Game.spawns.Spawn1.room.energyCapacityAvailable);
  // console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.room.name is  ' +   Game.spawns.Spawn1.room.name ) ;
// energy = Game.spawns.Spawn1.room.name;

    //var energySource2 = Game.getObjectById("5d5101c06507e179e61a2ec3");
   // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  energySource2 ' + JSON.stringify(energySource2));

//   //  console.log('[' + fileName + 'line:' + util.LineNumber() + ']  test  is ' + test );
//     var sp1 = Memory.spawns.Spawn1;
//     var sp2 = Memory.spawns.Spawn2;


   
   // check for invaders
 
   // if invaders are in room, them all screeps head for exit to safe room
   // Add defender to to queque
   
    }




// *************************************************************************************************************************
// check for invaders in reserved room E45S3.
// *************************************************************************************************************************

// try {


    var controller;

       //TODO: Trying to get an object in an room that does not have a claimed controller or creeps will throw an error
       // need to find another way to ensure that the error is not throw so that it does not block rest of the script from 
       // executing correctly.
       // controller = Game.getObjectById("5bbcafa89099fc012e63af93");
   
      // var observer = Game.getObjectById("5d724309f146cf075e07c966");


      let observer = Game.getObjectById("5d724309f146cf075e07c966");
  
 var room = Game.rooms["E45S3"];
  //console.log('[' + fileName + 'line:' + util.LineNumber() + ']  room is  '  + room);
   
   
 
  //  var status = observer.observeRoom("E45S3");

    var controller = room.controller;
    //console.log('[' + fileName + 'line:' + util.LineNumber() + ']  rrrrrrrrrrrrrrrrrrrrrrrr controller is  '  + controller);

    var invaders = controller.room.find(FIND_HOSTILE_CREEPS);
    var LDHs = controller.room.find(FIND_MY_CREEPS, {filter: s=> s.memory.role == "longDistanceHarvester"});
    var invaderCount =  invaders.length;
    
    //console.log('[' + fileName + 'line:' + util.LineNumber() + ']  LDHsCount is ' + LDHsCount);
   // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  xxxxxxxxxxxxxxxxxxx LDHs[0].id is ' + LDHs[0].id);

   
    


    if (Spawn3.minLDHroom3Restore == undefined )
    {
        Spawn3.minLDHroom3Restore = Spawn3.minLDHroom3; 
    }   
    
      // console.log('[' + fileName + 'line:' + util.LineNumber() + '] iiiiiiiiiiiiiiiiiiiii invaderCount count is ' + invaderCount);
        if (invaderCount > 0 ) {
             console.log('[' + fileName + 'line:' + util.LineNumber() + '] iiiiiiiiiiiiiiiiiiiii invaderCount count is ' + invaderCount);
           // Spawn3.minLDHroom3 = 0;
            if (Spawn3.minLDHroom3Restore == undefined )
            {
                Spawn3.minLDHroom3Restore = Spawn3.minLDHroom3; 
            } 
          //  Spawn3.minLDHroom3 = 0;
            Game.notify("invader in the room");

            // create an attack invader that targets each invader    
            // Spawn3.attackScout = "E45S3";
            // Spawn3.attackScoutTarget = "E45S3";

            var attackScouts = controller.room.find(FIND_MY_CREEPS, {filter: s=> s.memory.role == "attackScout"});
           console.log('[' + fileName + 'line:' + util.LineNumber() + ']  AAAAAAAAAAAAAAAAAAAAAAAAAA Seraching for attackScouts  is ' + attackScouts);
           console.log('[' + fileName + 'line:' + util.LineNumber() + ']  AAAAAAAAAAAAAAAAAAAAAAAAAA attackScouts.length  is ' + attackScouts.length);
           console.log('[' + fileName + 'line:' + util.LineNumber() + ']  AAAAAAAAAAAAAAAAAAAAAAAAAA Spawn3.attackScout is ' + Spawn3.attackScout);

           if(Spawn3.attackScout == undefined)
           {

           console.log('[' + fileName + 'line:' + util.LineNumber() + ']  undefined undefined undefined undefined Spawn3.attackScout should be undefined ' + Spawn3.attackScout);
           }


            if(Spawn3.attackScout == undefined && attackScouts.length == 0)
            {
               console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ******************************************************************** ');
               console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ******************************************************************** ');

               console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ******************************************************************** ');

               console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ******************************************************************** ');


               // Spawn3.attackScout = "E45S3";
              //  Spawn3.attackScoutTarget = "E45S3";
            }
            else{
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  AAAAAAAAAAAAAAAAAAAAAAAAAA attackScouts  is ' + attackScouts);
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  AAAAAAAAAAAAAAAAAAAAAAAAAA attackScouts.length  is ' + attackScouts.length);
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] Skippping  Spawn3.attackScout = "E45S3"; ');
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  AAAAAAAAAAAAAAAAAAAAAAAAAA Spawn3.attackScout is ' + Spawn3.attackScout);

            }

            

            // if (Spawn3.minLDHroom3Restore == undefined )
            // {
            //     Spawn3.minLDHroom3Restore = Spawn3.minLDHroom3; 
            // }       
            
           // Spawn3.minLDHroom3 = 0;
            
            var creepsInRoom = room.find(FIND_MY_CREEPS);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  Evil creeps detected in room ' + controller.room.name);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  Evil creeps detected in room ' + controller.room.name);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  Evil creeps detected in room ' + controller.room.name);
            for (let index = 0; index < creepsInRoom.length; index++) {
                //creepsInRoom[index].memory.retreat = true;
               // creepsInRoom[index].memory.orginalTarget = creepsInRoom[index].memory.target;
                //creepsInRoom[index].memory.target = creepsInRoom[index].memory.home;
            }
            
        }

        /// ************************************************
        // else there are no invaders in room
        /// ************************************************

        else{
        //   // console.log('[' + fileName + 'line:' + util.LineNumber() + '] iiiiiiiiiiiiiiiiiiiiixxxx invaderCount count is ' + invaderCount);
        //    //console.log('[' + fileName + 'line:' + util.LineNumber() + '] iiiiiiiiiiiiiiiiiiiii minLDHroom3Restore count is ' + Spawn3.minLDHroom3Restore);

        //    var ldh = Game.rooms["E45S3"].find(FIND_MY_CREEPS, {filter: s=> s.memory.role == "longDistanceHarvesters"});
            
        //    if (ldh != undefined) {
        //         if (ldh.length == 0 && ( Spawn3.minLDHroom3 != Spawn3.minLDHroom3Restore)) {
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] resetting Spawn3.minLDHroom3 = Spawn3.minLDHroom3Restore;');
        //           //  Spawn3.minLDHroom3 = Spawn3.minLDHroom3Restore;
        //         }  
            
        //     }

        //             var reservers = Game.rooms["E45S3"].find(FIND_MY_CREEPS, {filter: s=> s.memory.role == "reserver"});
        //             var control =Game.rooms["E45S3"].controller;
                  
        //             if (reservers != undefined)
        //                 {
        //                 if (reservers.length == 0) {
        //                     console.log('[' + fileName + 'line:' + util.LineNumber() + ']  staging reserver creep for room  E45S3');
        //                    // Spawn3.reserveroom = 'E45S3';
        //                 }
        //         }

        //        if  (Spawn3.minLDHroom3 == 0 && Spawn3.minLDHroom3Restore !=  undefined && invaderCount <= 0)
        //        {
        //             Spawn3.minLDHroom3 = Spawn3.minLDHroom3Restore; 
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + ']  resetting Spawn3.minLDHroom3 = Spawn3.minLDHroom3Restore');
        //             var reservers = Game.rooms["E45S3"].find(FIND_MY_CREEPS, {filter: s=> s.memory.role == "reserver"});
        //             // if (reservers.length == 0) {
        //             //     Spawn3.reserveroom = 'E45S3';
        //             // }

        //        }

            

          ///  console.log('[' + fileName + 'line:' + util.LineNumber() + ']  No evil creeps detected in room ' + controller.room.name);
        //  creepsInRoom[index].memory.test = true;
        }
 
    // } catch (e) {
    //     console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');    
    //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************* ');
    //     console.log('[' + fileName + 'line:' + util.LineNumber() + ']  trapped error ' + e );
    //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************* ');
    //     console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');    
    // }

   if (Game.time % 1 == 0) {
     

    
  //  try {

        // search for a repairer in reserved room
        // if no repairer, then find structures in reserved room that have dropped 10%
        // if there are structures below 25%, then find LDH that has 250+ ticks remaining, and assign to be a repairer
       
       
       
       // TODO Remove hardcoded object. Get controller from room and creep.
        var controller = Game.getObjectById("5bbcafa89099fc012e63af93");
       
        // if (controller.room.name != "E45S3") {
        //   //  break;
        // }

        try {
            observer.observeRoom("E45S3");
        var repairsInRoom = controller.room.find(FIND_MY_CREEPS, {filter: s => s.memory.role == "repairer"} );     
     //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' repairsInRoom.length is ' + repairsInRoom.length);
        if (repairsInRoom.length == 0)
        {
   //         console.log('[' + fileName + 'line:' + util.LineNumber() + ']  there are no repairers currently in room ' + repairsInRoom);
            var LDHs = controller.room.find(FIND_MY_CREEPS, {filter: s => s.memory.role =="longDistanceHarvester"} );
          // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' sortedLDH[0] is ' + sortedLDH[0].ticksToLive);
           var structuresFound = controller.room.find(FIND_STRUCTURES, {filter: s => s.hits < (s.hitsMax - s.hitsMax *.10 )} ); 
            if(structuresFound.length >= 1 )
            {
               
             //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' structuresFound.length ' + structuresFound.length);
              //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' LDHs[0].memory.role is ' + LDHs[0].memory.role);
               // LDHs[0].memory.role = "repairer";
           
           
            }
        }
        
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' LDHs is ' + LDHs);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + ']  repairsInRoom is ' + repairsInRoom);


        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  Game.time ' + Game.time);

    } catch (e) {
    
        console.log('[' + fileName + 'line:' + util.LineNumber() + ']  Trapped error in reserved room. error is: '+  e );
    }

   }




    //Game.spawns.Spawn1.memory.minLDHroom1 = 0;
    //Game.spawns.Spawn1.memory.minLDHroom2 = 0;
   // Game.spawns.Spawn1.memory.minLDHroom3 = 5;

    //var HOME = 'E44S3'; //test sdfgdsfg
    // var HOME = Game.spawns.Spawn1.memory.home;
    // var room1 = Game.spawns.Spawn1.memory.room1;
    // var room2 = Game.spawns.Spawn1.memory.room2;
    // var room3 = Game.spawns.Spawn1.memory.room3;

    //***************************************/    
    // commented debug stuff
    {
        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] bucket time is  ' + Game.cpu.bucket.toString());
        
         //console.log('[' + fileName + 'line:' + util.LineNumber() + ']  Game.spawns.Spawn1.memory.minLDE43S3 is ' + sp1.minLDE43S3);
       //  console.log('[' + fileName  + util.LineNumber() + ']  spawn.memory.minLDE43S3 is ' + Game.spawns.Spawn1.memory.minLDE43S3);
        // console.log(JSON.stringify(Game.flags['myFlag1'].name));
        // console.log(JSON.stringify(Game.flags['myFlag1'].pos));
        // console.log(JSON.stringify(Game.flags['myFlag1'].room.name));
        // console.log(JSON.stringify(Game.flags));
         // var doItOnlyOnce = 0;
         // if (doItOnlyOnce == 0) {
         //     doItOnlyOnce++;
         //     name = Game.spawns.Spawn1.createTestCreep();
         //     console.log("Creating testcreep: " + name);
             
         // }
    }


  // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  LinkSource is '  + LinkSource);
  // LinkSource.is_receiver = false;
  // console.log('[' + fileName + 'line:' + util.LineNumber() + '] LinkSource ' + JSON.stringify(LinkSource));
   // link.transferEnergy("5d44be6bea104379d906cbaf","5d46b9cad16c4b73af5c1269");



   //************************************** */    
   // Clear dead creeps from game
   //************************************** */   
   clearMemory();





    
    for (let name in Game.creeps) {
        // get the creep object
        var creep = Game.creeps[name];
       // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  creep.room.name room is ' + creep.room.name);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Game.time '+ Game.time );
    //    if(creep.memory.lockedTargetId != undefined)
    //    {
    //         lockedTargetIds.push(lockTargetId);
    //    }

       // TODO HACK. For reasons unknown, screep wander into this room.
       if(creep.room.name == "E44S1" && creep.memory.role != "longDistanceHarvester"){

            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' is in the wrong room ' + creep.room.name);
            creep.memory.home = "E45S2";
            creep.memory.target = "E44S2";
            creep.memory.role = "longDistanceBuilder";
            // var exit = creep.room.findExitTo(creep.memory.home);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' exit is ' + exit);

            // //   console.log('LD Builder ' + util.LineNumber() + '] ' +  creep.name + ' Test');
            //    // move to exit
            //    var status =  creep.moveTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' moving toward exit. Status is ' + status);


       }



       


        // if( creep.room.name == "E45S2"){ 
        
        //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' room name is ' + creep.room.name);    
        //     return;
        // }else
        // {
        //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' room name is ' + creep.room.name); 
        // }

        // if creep is harvester, call harvester script
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        // if creep is harvester, call harvester script
        else if (creep.memory.role == 'attackScout') {
                    roleAttackScout.run(creep);
                }
        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
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
            roleMiner.run(creep);
        }
        // if creep is lorry, call miner lorry
        else if (creep.memory.role == 'lorry') {
            roleLorry.run(creep);
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

           roleTestCreep.run(creep,sourceStorageId, targetStorageID);
         }
         else if(creep.memory.role == 'LDBuilder') 
         {
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' running HDBuilder ');
            //testCode.run(creep);
            roleLDBuilder.run(creep);
        
         }
         //terminalLorry

         else if(creep.memory.role == 'terminalLorry') 
         {
            roleTerminalLorry.run(creep);
         }

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


    // //************************************** */
    // // All towers
    // //************************************** */

   towers.run();


    
    
    //************************************** */
    // iterate over all the spawns
    //************************************** */
    for (let spawnName in Game.spawns) {
        /** @type {Spawn} */
        let spawn = Game.spawns[spawnName];
        
        var progress = spawn.room.controller.progress;
        var progressTotal = spawn.room.controller.progressTotal;
        let room1 = spawn.memory.room1;
        let room2 = spawn.memory.room2;
        let room3 = spawn.memory.room3;

      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX');
    




      //  var linkCountTest = util.structuresInRoom(spawn,STRUCTURE_LINK);

    //TODO: HACK. 
      if (spawnName == "Spawn1" && spawn.room.name =="E44S3"){     
    
       link.transferEnergy("5d83549715c0ff3c201c2b82","5d46b9cad16c4b73af5c1269");
        //term.transferEnergy("E44S3","E45S2",100);


        }
        




        if (spawnName == "Spawn3")
        {
            if (Game.time  %2 == 0)
            {     
                link.transferEnergy("5d6b7e3252d12c73f0332b33","5d841c9f9c6f0448bfc4dd2e");
            }         //  link.transferEnergy("5d6b7e3252d12c73f0332b33","5d5542d8f0e41373bf60b75e");
            else{

//          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] skipping Spawn3  ');
                //var linkCountTest = util.structuresInRoom(spawn,STRUCTURE_LINK);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  linkCountTest is ' + linkCountTest);
                link.transferEnergy("5d6b40742f60936360c7d0cc","5d5542d8f0e41373bf60b75e");
               // link.transferEnergy("5d6b40742f60936360c7d0cc","5d841c9f9c6f0448bfc4dd2e");

  //          return;

            }            
                        //term.transferEnergy("E44S3","E45S2",100);
                


        }

        let creepsInRoom = spawn.room.find(FIND_MY_CREEPS);
        /** @type {Room} */
        let room = spawn.room;
        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] room name is ' + room);
        //console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.room.name is  ' + spawn.room.name);
       
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creepsInRoom is ' + creepsInRoom);

        // count the number of creeps alive for each role in this room
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a specific role
   
        var numberOfHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
        var numberOfUpgraders = _.sum(creepsInRoom, (c) => c.memory.role == 'upgrader');
        var numberOfBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'builder');
        var numberOfRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'repairer');
        var numberOfWallRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'wallRepairer');
        var numberOfMiners = _.sum(creepsInRoom, (c) => c.memory.role == 'miner');
        var numberOfLorries = _.sum(creepsInRoom, (c) => c.memory.role == 'lorry'); //createCustumReparier
        var numberOfTerminalLorries =_.sum(creepsInRoom, (c) => c.memory.role == 'terminalLorry');
        var numberOfStorageToLink =_.sum(creepsInRoom, (c) => c.memory.role == 'storageToLink');


        
        var numberOflongDistanceBuildersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceBuilder' && c.memory.home == room1);    
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']   numberOflongDistanceBuildersE44S2 is ' + numberOflongDistanceBuildersE44S2);
          //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']   spawn.memory.minLongDistanceBuildersE44S2 is ' + spawn.memory.minLongDistanceBuildersE44S2);
          //   spawn.memory.minLongDistanceBuildersE44S2

        // count the number of long distance harvesters globally
        var numberOfLongDistanceHarvestersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room1 );
        var numberOfLongDistanceHarvestersroom2 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room2);
        var numberOfLongDistanceHarvestersroom3 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room3);
        var numberOfReservers = _.sum(Game.creeps, (c) => c.memory.role == 'reserver' && c.memory.target == room3);


        var numberOfScouts = _.sum(Game.creeps, (c) => c.memory.role == 'scout');
        var numberOfTargetedReparier = _.sum(creepsInRoom, (c) => c.memory.role == 'targetedReparier'); 

        var numberOfTestScreeps = _.sum(creepsInRoom, (c) => c.memory.role == 'roleTestCreep');
        var numberOfLDBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'LDBuilder');
        
        if (Game.time %5 == 0) {
            
       


        console.log('[' + fileName + 'line:' + 
                           util.LineNumber() + 
                           '] ' + spawn.name +  
                            ',  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3 + 
                            ", Reservers: " + numberOfReservers + 
                            ', Harvesters: ' + numberOfHarvesters + 
                            ', Builders: ' + numberOfBuilders + 
                            ', Upgraders: ' + numberOfUpgraders +
                            ', Repairers: ' +  numberOfRepairers + 
                            ', WallRepairers: ' + numberOfWallRepairers + 
                            ', Miners: ' + numberOfMiners + 
                            ', numberOfTestScreeps: ' + numberOfTestScreeps + 
                            ', cpu.bucket: ' + Game.cpu.bucket);

        }


       // var roomx = Game.rooms['E43S3']
       // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + 'DDDDDDDDDDDDD roomx ' + roomx.controller);

        
        
//        var testController = Game.rooms["E45S3"].controller;
//        console.log('[' + fileName + 'line:' + util.LineNumber() + ']  observer status: ' + status);
//        console.log('[' + fileName + 'line:' + util.LineNumber() + ']  testController: ' + testController);

        
        var energy = spawn.room.energyCapacityAvailable;

        var energy = 1000;


      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] room name is ' + room);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] spawn.room.energyCapacityAvailable is ' + spawn.room.energyCapacityAvailable);


    

        if (room =='room1')
        {
    
            if (spawn.room.energyCapacityAvailable < energy){
                energy = spawn.room.energyCapacityAvailable;
            }
            else{
            
                energy = 900;
            }
        }

     
//        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.room.name is ' + spawn.room.name)

        if (spawn.room.name =='E45S2')
        {
            energy = 750;
           //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.room.name is ' + spawn.room.name);
            //       console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' numberOfTargetedReparier is ' + numberOfTargetedReparier);
              //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.memory.foo is ' + spawn.memory.foo);
            if (numberOfTargetedReparier < spawn.memory.foo)
            {
             //   name = Game.spawns.Spawn1.createLongDistanceBuilder(energy, 5, room1, room2, 0);
              //  name = spawn.createTargetRepairer(spawn,"targetedRepairer", "5bbcafa89099fc012e63af8f", "5d4f2eb0ac2d2d20dcee9a27");
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creating a targeted Spawn. Status is ' + name);
            }
    
            if (spawn.room.energyCapacityAvailable < energy){
                energy = spawn.room.energyCapacityAvailable;
            }
            else{
            
                energy = 900;
            }
        }


        if (spawn.room.name =='E45S3')
        {
            energy = spawn.room.energyCapacityAvailable;;
           //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.room.name is ' + spawn.room.name);
            //       console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' numberOfTargetedReparier is ' + numberOfTargetedReparier);
              //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' spawn.memory.foo is ' + spawn.memory.foo);
            if (numberOfTargetedReparier < spawn.memory.foo)
            {
             //   name = Game.spawns.Spawn1.createLongDistanceBuilder(energy, 5, room1, room2, 0);
              //  name = spawn.createTargetRepairer(spawn,"targetedRepairer", "5bbcafa89099fc012e63af8f", "5d4f2eb0ac2d2d20dcee9a27");
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creating a targeted Spawn. Status is ' + name);
            }
    
            if (spawn.room.energyCapacityAvailable <= energy){
                energy = spawn.room.energyCapacityAvailable;
            }
            else{
            
                energy = 750;
            }
        }


        var name = undefined;
       




        if (numberOfMiners == 0){
            {
                // check if all sources have miners
                let sources = spawn.room.find(FIND_SOURCES);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + spawn.name + ' sources = spawn.room.find(FIND_SOURCES) is' + sources);
                // iterate over all sources
                for (let source of sources)
                {
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
                                name = spawn.createMiner(spawn, source.id);
                              //  console.log("[Main line " + util.LineNumber() + "] " + spawnName +" YYYYYYYY is try to create create miner with the name of " + name);
                                console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + spawnName + " is try to create create miner with the name of " + name);
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
        if (numberOfLorries == 3) {
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
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + spawn.name + ' sources = spawn.room.find(FIND_SOURCES) is' + sources);
            // iterate over all sources
            for (let source of sources)
            {
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
                            name = spawn.createMiner(spawn, source.id);
                            if (Game.time % consoleDelay == 0) {
                               console.log('[' + fileName + 'line:' + util.LineNumber() + ']' + spawn.name +' is trying to create create miner. Time: ' + name); 
                            }
                            if (!(name < 0)) {
                                // delete the claim order
                                 spawn.memory.qMiner = spawn.memory.qMiner -1;
                            }
                            
                            
                            break;
                        }
                    
                }
            }
        }






      
        // if none of the above caused a spawn command check for other roles
        if (name == undefined)
        {
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
           
            if (spawn.memory.attackScout != undefined)
         
            {
                // try to spawn a 

                name = spawn.createAttackScout(spawn.Id, "E45S3");
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ' ' + spawn.name + '  creating an attack scout ' + name);

                // if that worked
                if ((typeof name) == "string") {
                    // delete from memory so that it does not spawn another creep
                    delete spawn.memory.attackScout;
                }
               
            }


            // if not enough harvesters
            else if (numberOfHarvesters < spawn.memory.minHarvesters) {
                // try to spawn one
                // util.debug(1, util.LineNumber(), "spawn.memory.minHarvesters", spawn.memory.minHarvesters);
                // console.log("[Main line " + util.LineNumber() + "] energy: " + energy);
                name = spawn.createCustomCreep(energy, 'harvester');
               //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' ' +  creep.name + '  numberOfHarvesters is ' + numberOfHarvesters);
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' ' +  creep.name + '  spawn.memory.minHarvesters is ' + spawn.memory.minHarvesters);
               if(Game.time % consoleDelay == 0){
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + " is creating harvester: " + name);
               }
            }
            // if not enough lorries
           // else if (numberOfLorries < spawn.memory.minLorries)
         //    else if (numberOfLorries < spawn.memory.minLorries || (spawn.memory.qLorry > 0 && numberOfLorries < spawn.memory.minLorries + spawn.memory.qLorry ))
             else if (numberOfLorries < spawn.memory.minLorries )
             {
               // console.log("[line "+ util.LineNumber() + "] numberOfLorries < spawn.memory.minLorries");
                // try to spawn one
                // console.log("[Main line " + util.LineNumber() + "] createLorry: " + name);
                name = spawn.createLorry(energy);
                
                if (Game.time % consoleDelay == 0) {
                    console.log("[Main line " + util.LineNumber() + "]" + spawnName +  "  is creating a createLorry: " + name);
                }

                if ((typeof name) == "string") {
                   
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qLorry = spawn.memory.qLorry -1');
                    spawn.memory.qLorry = spawn.memory.qLorry -1;
                }

            }

            else if (numberOfStorageToLink < spawn.memory.minStorageToLink  )
            {
             
               // try to spawn one
         
               name = spawn.createStorageToLink (energy);
               
               if (Game.time % consoleDelay == 0) {
                   console.log("[Main line " + util.LineNumber() + "]" + spawnName +  "  is creating a StorageToLink creep: " + name);
               }

               if ((typeof name) == "string") {
                  
                   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                                 }

           }


            // if there is a claim order defined
          //  console.log("[line " + util.LineNumber() + "] spawn.memory.claimRoom != undefined: " spawn.memory.claimRoom != undefined);

            else if (spawn.memory.claimRoom != undefined)
            {
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
            
            else if (spawn.memory.reserveroom != undefined)
            {
                // try to spawn a reserver

                name = spawn.createReserver(spawn.name, spawn.memory.reserveroom);
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' is creating a Reserver ');

                // if that worked
                if ((typeof name) == "string") {
                    // delete the claim order
                    delete spawn.memory.reserveroom;
                }
                /// console.log("line 177");
            }



            // // if not enough upgraders
            // //console.log("line 180 spawn.memory.minUpgraders: " + spawn.memory.minUpgraders);
            else if (numberOfUpgraders < spawn.memory.minUpgraders || (spawn.memory.qUpgrader > 0 && numberOfUpgraders < spawn.memory.minUpgraders + spawn.memory.qUpgrader )) {
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] numberOfUpgraders < spawn.memory.minUpgraders: ");
                // console.log("[Main line " + util.LineNumber() + "] energy: " + energy);
                name = spawn.createCustomCreep(energy, 'upgrader');
                

                if ((typeof name) == "string") {
                   // console.log("[line " + util.LineNumber() + "] create upgrader: " + name);
                }

                if (!(name < 0)) {
                   
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qUpgrader = spawn.memory.qUpgrader -1');
                    spawn.memory.qUpgrader = spawn.memory.qUpgrader -1;
                }

                
            }
            // if not enough repairers
            else if (numberOfRepairers < spawn.memory.minRepairers || (spawn.memory.qRepairer > 0 && (numberOfRepairers < spawn.memory.minRepairers + spawn.memory.qRepairer ) )) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'repairer');
               // console.log("[Main line " + util.LineNumber() + "] create repairer: " + name );
                if ((typeof name) == "string") {
                 //   console.log("[Main line " + util.LineNumber() + "] create repairer: " + name);
                }
                if (!(name < 0)) {
                   
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qRepairer = spawn.memory.qRepairers -1');
                    spawn.memory.qRepairer = spawn.memory.qRepairer -1;
                }
            }
        //    if not enough builders
            else if (numberOfBuilders < spawn.memory.minBuilders || (spawn.memory.qBuilder > 0 && (numberOfBuilders < spawn.memory.minBuilders + spawn.memory.qBuilder) )) {
                // try to spawn one
                // "[line " + util.LineNumber() + "]
               // console.log("[Main line " + util.LineNumber() + "] create builder: " + name);

                name = spawn.createCustomCreep(energy, 'builder');
                if(Game.time % consoleDelay == 0){
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName +" is try to create create builder. Status is " + name);
                    }
                //  console.log("[Main      line " + util.LineNumber() + "] create builder: " + name);
                if ((typeof name) == "string") {
                   
                    console.log("[line " + util.LineNumber() + "] create builder: " + name);
                }
                if (!(name < 0)) {
                   
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qBuilder1 = spawn.memory.qBuilder1 -1');
                    spawn.memory.qBuilder = spawn.memory.qBuilder -1;
                }
            }
          //  if not enough wallRepairers
            else if (numberOfWallRepairers < spawn.memory.minWallRepairers) {
            
                name = spawn.createCustomCreep(energy, 'wallRepairer');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);



                    console.log("[Main      line " + util.LineNumber() + "] " + spawnName + " is Creating a wall repairer " + name );

               if ((typeof name) == "string") {
                   
                    //util.debug(1, util.LineNumber(), "a WallRepairer has been created named:", name);
                    console.log("[Main      line " + util.LineNumber() + "] " + spawnName + " a WallRepairer has been created named:" + name);

                }
            }
            else if (numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1) {
                // try to spawn one

                name = Game.spawns.Spawn1.createLongDistanceBuilder(energy, 5, room1, room2, 0);
               
                if(name == -4 || name == -6)
                {
                    console.log("[Main        line " + util.LineNumber() + "] " + spawnName + " is Creating a LongDistanceBuilder " + name );
                    return;
                }
                
                //return;

            }

            else if (numberOfTerminalLorries < Memory.spawns.Spawn1.minTerminalLorry) {
                // try to spawn one
                
                name = Game.spawns.Spawn1.createTerminalLorry(sp1,"terminalLorry");
                console.log("Main [line " + util.LineNumber() + "] Create TerminalLorry " + name );

            }
            
            

         //  else if (numberOfTestScreeps < Memory.spawns.Spawn1.minTesters) {
             
            else if (numberOfTestScreeps < spawn.memory.minTesters) {

                // try to spawn one
                
                name = spawn.createTestCreep( spawn,"roleTestCreep");
              //  console.log("Main [line " + util.LineNumber() + "] Create createTestCreep1 T" + name );
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + '  Create createTestCreep ' + name );

            }
            
            
            
            
            // if not enough longDistanceHarvesters for room1
            else if (numberOfLongDistanceHarvestersroom1  < spawn.memory.minLDHroom1)
            {
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  '  + spawn.name + " numberOfLongDistanceHarvestersroom1 < spawn.memory.minLDHroom2" + numberOfLongDistanceHarvestersroom1 < spawn.memory.minLDHroom2);
               
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
            else if (numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2)
            {
               console.log('[' + fileName + 'line:' + util.LineNumber() + ']  '  + spawn.name + " numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2" + numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2);
                // try to spawn one
               // console.log("[Main    line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
               console.log('[' + fileName +  util.LineNumber() + '] ' +  creep.name + '  create LongDistanceHarvester ' + name);
                name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, room2, 0);
                

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room2", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }

//            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3)
            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3)
            {
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
             //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);
             
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfLongDistanceHarvestersroom3 is ' + numberOfLongDistanceHarvestersroom3);
             //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ------------------------ spawn: ' + spawn.name + '  energy is ' + energy );
                name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, room3, 0);
                
                if(Game.time % consoleDelay == 0){
                    console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' +  spawn.name + ' is creating a LongDistanceHarvester: ' + name);
                }

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room3", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }
            else if (numberOfLDBuilders < spawn.memory.minLDBuilder)
            {
                // try to spawn
                name = spawn.createLDBuilder(energy, 1, spawn.room.name, room3, 0);
                console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' +  creep.name + ' create LDBuilder: ' + name);
                

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LDBuilder for room3", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }//            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3)
            else if (numberOfScouts < spawn.memory.minScouts)
            {
            //  try to spawn one
            //  console.log("[line " + util.LineNumber() + "] create Scout: " + name);
            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);
            //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ------------------------ spawn: ' + spawn.name + '  energy is ' + energy );
                name = spawn.createScout(energy, 1, spawn.room.name, room3, 0);
                
                if(Game.time % consoleDelay == 0){
                    console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' +  spawn.name + ' is creating a Scout: ' + name);
                }

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "created a scout", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
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

            }
        }

       //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' Name ' + name);
       // util.debug(1, util.LineNumber(), "Name Check", name); // ("[line " + util.LineNumber() + "] Name Check: " + name);  

        //if (name !== undefined) {
        //    util.debug(1, util.LineNumber(), "Name Check", name); // ("[line " + util.LineNumber() + "] Name Check: " + name);  
        //}


        // print name to console if spawning was a success
        // name > 0 would not work since string > 0 returns false
        if (typeof (name) == "string")
        {
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


    //console.trace();
   // var thisline = new Error().lineNumber;
   // var stack = new Error().stack;
    //console.log(' ');
    // console.log('thisline: ' + thisline);
    // console.log('stack: ' + stack);


};


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
