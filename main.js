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
var roleLDBuilder = require('role.LDBuilder');
var util = require('Util'); 
var link = require('Link'); 
var memoryfn = require('memory'); 
var fileName = "Main        ";
var towers = require('Towers');

const E44S3_MINER_TTL = 25;
const E44S2_MINER_TTL = 125;
const E45S2_MINER_TTL = 125;


// console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.memory.home  is ' + HOME);
// console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.memory.room1 is ' + room1);
// console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.memory.room2 is ' + room2);
// console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.memory.room3 is ' + room3);

// memoryfn.init(Game.spawns.Spawn3); //test test test

var test ="abcd";

var minNUmberofTestScreeps = Memory.spawns.Spawn1.minTesters; 
var sp1 = Memory.spawns.Spawn1;
var sp2 = Memory.spawns.Spawn2;
var sp3 = Memory.spawns.Spawn3;


var  postFixCount = sp1.creepCount;

// err -6 is ERR_NOT_ENOUGH_ENERGY 


global.injectNAME = function(){//*
    if(!global.NAMEInjected) {
        global.NAMEInjected = true;
        var output = `<SPAN>Trying to inject NAME code!</SPAN>
<SCRIPT>
​
</SCRIPT>`
	    console.log(output.replace(/(\r\n|\n|\r)\t+|(\r\n|\n|\r) +|(\r\n|\n|\r)/gm, ''));
    }
//*/
}

global.forceInjectNAME = ()=>{global.NAMEInjected = false; injectNAME();}



//***************************************** */
//                 GAME LOOP
//***************************************** */

module.exports.loop = function () {
    var sp1 = Memory.spawns.Spawn1;

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

// try {

    
//  var controller = Game.getObjectById("5bbcaf869099fc012e63ab6c");
//  var tte = controller.reservation.ticksToEnd;
//  // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  tte is ' + tte);
//   var creepsInRoom = controller.room.find(FIND_MY_CREEPS);
//   var numberOfreserverCreeps =  _.sum(creepsInRoom, (c) => c.memory.role == 'reserver');
//  //console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfreserverCreeps is ' + numberOfreserverCreeps);

//  if((tte == 4020 || tte == 3660 || tte == 3500 || tte == 3250 || tte == 3025 || tte == 2750 || tte == 2525 || tte == 2250 || tte == 2000 || tte == 1712 || tte == 1500 || tte == 1250 || tte == 1000 || tte == 750 || tte == 500 ||  tte == 250) && numberOfreserverCreeps == 0)
// {
//     var spawn = Game.getObjectById("5d1314a8f1c8960c5d83fec7");
//     spawn.memory.reserveroom = "E43S3";
//     console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting  Reserve room');
// }

// } catch (e) {

//     console.log('[' + fileName + 'line:' + util.LineNumber() + '] Can not see controller in room E43S3. Error is ' + e);
// }



// try {

    
//     var controller = Game.getObjectById("5bbcafa89099fc012e63af93");
//     var tte = controller.reservation.ticksToEnd;
//     // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  tte is ' + tte);
//      var creepsInRoom = controller.room.find(FIND_MY_CREEPS);
//      var numberOfreserverCreeps =  _.sum(creepsInRoom, (c) => c.memory.role == 'reserver');
//     //console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfreserverCreeps is ' + numberOfreserverCreeps);
   
//     if((tte == 4020 || tte == 3925 || tte == 3500 || tte == 3000 || tte == 2750 || tte == 2500 || tte == 2250 || tte == 2000 || tte == 1750 || tte == 1500 || tte == 2000 || tte == 1750 || tte == 1250 || tte == 1000|| tte == 750|| tte == 500 || tte == 250) && numberOfreserverCreeps == 0)
//    {
//        var spawn = Game.getObjectById("5d4c4994d2b64f7a1b14871f");
//        spawn.memory.reserveroom = "E45S3";
//        console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting  Reserve room');
//    }
   
//    } catch (e) {
   
//        console.log('[' + fileName + 'line:' + util.LineNumber() + '] Can not see controller in room E45S3. Error is ' + e);
//    }

   
   // check for invaders
 
   // if invaders are in room, them all screeps head for exit to safe room
   // Add defender to to queque
   

   if (Game.time % 10 == 0){
       //TODO: Trying to get an object in an room that does not have a claimed controller or creeps will throw an error
       // need to find another way to ensure that the error is not throw so that it does not block rest of the script from 
       // executing correctly.
    var controller = Game.getObjectById("5bbcafa89099fc012e63af93");
    var invaders = controller.room.find(FIND_HOSTILE_CREEPS);
    var invaderCount =  invaders.length;


        if (invaderCount > 0) {
            

            if (spawn.memory.minLDHroom3Restore)
            {
                spawn.memory.minLDHroom3Restore = spawn.memory.minLDHroom3; 
            }     
            
                spawn.memory.minLDHroom3 = 0;
            
            var creepsInRoom = controller.room.find(FIND_MY_CREEPS);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  Evil creeps detected in room ' + controller.room.name);
            for (let index = 0; index < creepsInRoom.length; index++) {
                creepsInRoom[index].memory.retreat = true;
                creepsInRoom[index].memory.orginalTarget = creepsInRoom[index].memory.target;
                creepsInRoom[index].memory.target = creepsInRoom[index].memory.home;
            }
            
        }
        else{
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  No evil creeps detected in room ' + controller.room.name);
        //  creepsInRoom[index].memory.test = true;
        }
    


   }


   if (Game.time % 10 == 0) {
       
        // search for a repairer in reserved room
        // if no repairer, then find structures in reserved room that have dropped 10%
        // if there are structures below 25%, then find LDH that has 250+ ticks remaining, and assign to be a repairer
       
       
       
       // TODO Remove hardcoded object. Get controller from room and creep.
        var controller = Game.getObjectById("5bbcafa89099fc012e63af93");
       
        if (controller.room.name != "E45S3") {
          //  break;
        }


        var repairsInRoom = controller.room.find(FIND_MY_CREEPS, {filter: s => s.memory.role == "repairer"} );     
        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' repairsInRoom.length is ' + repairsInRoom.length);
        if (repairsInRoom.length == 0)
        {
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  there are no repairers currently in room ' + repairsInRoom);
            var LDHs = controller.room.find(FIND_MY_CREEPS, {filter: s => s.memory.role =="longDistanceHarvester"} );
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' LDHs.length is ' + LDHs.length);
           var sortedLDH = _.sortBy(LDHs);
           console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' sortedLDH[0] is ' + sortedLDH[0].ticksToLive);
           var structuresFound = controller.room.find(FIND_STRUCTURES, {filter: s => s.hits < (s.hitsMax - s.hitsMax *.10 )} ); 
            if(structuresFound.length >= 1 )
            {
               
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' structuresFound.length ' + structuresFound.length);
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' LDHs[0].memory.role is ' + LDHs[0].memory.role);
                LDHs[0].memory.role = "repairer";
           
           
            }
        }
        
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + controller.room.name + ' LDHs is ' + LDHs);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + ']  repairsInRoom is ' + repairsInRoom);


        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  Game.time ' + Game.time);
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
    //***************************************/    

    var sp1 = Memory.spawns.Spawn1;
 //   var sp2 = Memory.spawns.Spawn2;

  //  sp1.count++;

   //console.log("sp1.count:" + sp1.count); 
   // console.log(JSON.stringify(sp1));
   // console.log("sp1.minerCount:" + sp1.minerCount);
   // console.log("sp1.count: " + sp1.count++);


   var LinkSource = Game.getObjectById("5d44be6bea104379d906cbaf")
  // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  LinkSource is '  + LinkSource);
  // LinkSource.is_receiver = false;
  // console.log('[' + fileName + 'line:' + util.LineNumber() + '] LinkSource ' + JSON.stringify(LinkSource));
   // link.transferEnergy("5d44be6bea104379d906cbaf","5d46b9cad16c4b73af5c1269");



   //************************************** */    
   // Clear dead creeps from game
   //************************************** */   
   for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  name + ' is undefined. Clearing from memory');
            delete Memory.creeps[name];
        }
    }



    //************************************** */
    // for every creep name in Game.creeps execute roles
    //************************************** */
    var lockedTargetIds = [];
    
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
            roleLDBuilder.run(creep);
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
        
        var HOME = spawn.memory.home;
        let room1 = spawn.memory.room1;
        let room2 = spawn.memory.room2;
        let room3 = spawn.memory.room3;
    




      //  var linkCountTest = util.structuresInRoom(spawn,STRUCTURE_LINK);

    //TODO: HACK. 
      if (spawnName == "Spawn1" && spawn.room.name =="E44S3"){     
            link.transferEnergy("5d44be6bea104379d906cbaf","5d46b9cad16c4b73af5c1269");

        }
        


        if (spawnName == "Spawn3")
        {
//          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] skipping Spawn3  ');
                //var linkCountTest = util.structuresInRoom(spawn,STRUCTURE_LINK);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  linkCountTest is ' + linkCountTest);
                link.transferEnergy("5d6b40742f60936360c7d0cc","5d5542d8f0e41373bf60b75e");
  //          return;
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

        var numberOfCustumRepariers = _.sum(creepsInRoom, (c) => c.memory.role == 'CustomReparier'); 

        
        var numberOflongDistanceBuildersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceBuilder' && c.memory.home == room1);    
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']   numberOflongDistanceBuildersE44S2 is ' + numberOflongDistanceBuildersE44S2);
          //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']   spawn.memory.minLongDistanceBuildersE44S2 is ' + spawn.memory.minLongDistanceBuildersE44S2);
          //   spawn.memory.minLongDistanceBuildersE44S2

        // count the number of long distance harvesters globally
        var numberOfLongDistanceHarvestersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room1 );
        var numberOfLongDistanceHarvestersroom2 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room2);
        var numberOfLongDistanceHarvestersroom3 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room3);

        var numberOfTargetedReparier = _.sum(creepsInRoom, (c) => c.memory.role == 'targetedReparier'); 

       
        var numberOfTestScreeps = _.sum(Game.creeps, (c) => c.memory.role == 'roleTestCreep');
        var numberOfLDBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'LDBuilder');


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
            
                energy = 800;
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
                            console.log("[Main line " + util.LineNumber() + "] " + spawnName +" XXXXXXX is try to create create miner with the name of " + name);
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

           // console.log("[line " + util.LineNumber() + "] Starting:" + name);
           // util.debug(1, util.LineNumber(), "Starting", name);
            //    console.log("line 153 name == undefined");

            // if not enough harvesters
            if (numberOfHarvesters < spawn.memory.minHarvesters) {
                // try to spawn one
                // util.debug(1, util.LineNumber(), "spawn.memory.minHarvesters", spawn.memory.minHarvesters);
                // console.log("[Main line " + util.LineNumber() + "] energy: " + energy);
                name = spawn.createCustomCreep(energy, 'harvester');
               //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' ' +  creep.name + '  numberOfHarvesters is ' + numberOfHarvesters);
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' ' +  creep.name + '  spawn.memory.minHarvesters is ' + spawn.memory.minHarvesters);
              
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + " is creating harvester: " + name);
            }
            // if not enough lorries
           // else if (numberOfLorries < spawn.memory.minLorries)
             else if (numberOfLorries < spawn.memory.minLorries || (spawn.memory.qLorry > 0 && numberOfLorries < spawn.memory.minLorries + spawn.memory.qLorry ))
            {
               // console.log("[line "+ util.LineNumber() + "] numberOfLorries < spawn.memory.minLorries");
                // try to spawn one
                // console.log("[Main line " + util.LineNumber() + "] createLorry: " + name);
                name = spawn.createLorry(energy);
                console.log("[Main line " + util.LineNumber() + "]" + spawnName +  " is creating a createLorry: " + name);
                if (!(name < 0)) {
                   
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qLorry = spawn.memory.qLorry -1');
                    spawn.memory.qLorry = spawn.memory.qLorry -1;
                }

            }
            // if there is a claim order defined
          //  console.log("[line " + util.LineNumber() + "] spawn.memory.claimRoom != undefined: " spawn.memory.claimRoom != undefined);

            else if (spawn.memory.claimRoom != undefined)
            {
                // try to spawn a claimer
                console.log("[line " + util.LineNumber() + "] createClaimer");
                name = spawn.createClaimer(spawn.memory.claimRoom);
                console.log("[line " + util.LineNumber() + "] create Claimer:" + name);
                // if that worked
                if (!(name < 0)) {
                    // delete the claim order
                    delete spawn.memory.claimRoom;
                }
                /// console.log("line 177");
            } else if (spawn.memory.reserveroom != undefined)
            {
                // try to spawn a claimer
                console.log("[line " + util.LineNumber() + "] createReserver");
                name = spawn.createReserver(spawn, spawn.memory.reserveroom);
                console.log("[line " + util.LineNumber() + "] create Reserver:" + name);
                // if that worked
                if (!(name < 0)) {
                    // delete the claim order
                    delete spawn.memory.reserveroom;
                }
                /// console.log("line 177");
            }



            // if not enough upgraders
            //console.log("line 180 spawn.memory.minUpgraders: " + spawn.memory.minUpgraders);
            else if (numberOfUpgraders < spawn.memory.minUpgraders || (spawn.memory.qUpgrader > 0 && numberOfUpgraders < spawn.memory.minUpgraders + spawn.memory.qUpgrader )) {
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] numberOfUpgraders < spawn.memory.minUpgraders: ");
                // console.log("[Main line " + util.LineNumber() + "] energy: " + energy);
                name = spawn.createCustomCreep(energy, 'upgrader');
                    // console.log("[Main line " + util.LineNumber() + "] create upgrader: " + name);

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
            // if not enough builders
            else if (numberOfBuilders < spawn.memory.minBuilders || (spawn.memory.qBuilder > 0 && (numberOfBuilders < spawn.memory.minBuilders + spawn.memory.qBuilder) )) {
                // try to spawn one
                // "[line " + util.LineNumber() + "]
               // console.log("[Main line " + util.LineNumber() + "] create builder: " + name);

                name = spawn.createCustomCreep(energy, 'builder');

                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName +" is try to create create builder. Status is " + name);
                //  console.log("[Main      line " + util.LineNumber() + "] create builder: " + name);
                if ((typeof name) == "string") {
                   
                    console.log("[line " + util.LineNumber() + "] create builder: " + name);
                }
                if (!(name < 0)) {
                   
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qBuilder1 = spawn.memory.qBuilder1 -1');
                    spawn.memory.qBuilder = spawn.memory.qBuilder -1;
                }
            }
            // if not enough wallRepairers
            else if (numberOfWallRepairers < spawn.memory.minWallRepairers) {
            
                name = spawn.createCustomCreep(energy, 'wallRepairer');


                if(name == -4 || name == -6)
                {
                    console.log("[Main      line " + util.LineNumber() + "] " + spawnName + " is Creating a wall repairer " + name );
                    return;
                }

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
            else if (numberOfTestScreeps < Memory.spawns.Spawn1.minTesters) {
                // try to spawn one
                
                name = Game.spawns.Spawn1.createTestCreep(sp1,"roleTestCreep");
                console.log("Main [line " + util.LineNumber() + "] Create createTestCreep1 " + name );

            }
            
            
            
            
            // if not enough longDistanceHarvesters for room1
            else if (numberOfLongDistanceHarvestersroom1  < spawn.memory.minLDHroom1)
            {
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
                // try to spawn one
               // console.log("[Main    line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
               console.log('[' + fileName +  util.LineNumber() + '] ' +  creep.name + '  create LongDistanceHarvester ' + name);
                name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, room2, 0);
                

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room2", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }

            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3)
            {
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, room3, 0);
                console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' +  spawn.name + ' is creating a LongDistanceHarvester: ' + name);
                

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

            }

            else {
                
                // else try to spawn a builder
                // console.log("[line " + util.LineNumber() + "] energy:" + energy);
                //console.log("[line " + util.LineNumber() + "] room total energy " + spawn.room.energyCapacityAvailable);


                if (spawn.room.energyCapacityAvailable > 8000) {

                    console.log("[line " + util.LineNumber() + "] room total energy " + spawn.room.energyCapacityAvailable);
                    var createtype = "builder";
                    //console.log("Main [line " + util.LineNumber() + "] Creating createtype:" + energy);
                    name = spawn.createCustomCreep(1000, createtype);
                    console.log("Main [line " + util.LineNumber() + "] " + createtype +", "+ name);
                 }

                // console.log("creating builder: " + name);
                // console.log("[line " + util.LineNumber() + "] name:"  + name);
                // name = -1;
                //numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1
               /// console.log("Main [line " + util.LineNumber() + "] numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1 " + spawn.memory.minLongDistanceBuildersroom1);

               // console.log("[" + fileName + "Line " + util.LineNumber() + "]  Doing nothing name: " + sp1.count);

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
            console.log("LDH room1     : " + numberOfLongDistanceHarvestersroom1 );
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