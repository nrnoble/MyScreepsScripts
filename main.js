// import modules
require('prototype.spawn')();
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallRepairer');
var roleLongDistanceHarvester = require('role.longDistanceHarvester');
var roleLongDistanceBuilder = require('role.longDistanceBuilder');
var roleClaimer = require('role.claimer');
var roleMiner = require('role.miner');
var roleLorry = require('role.lorry');
var roleTestCreep = require('role.Test');
var util = require('Util'); 
var fileName = "Main        ";



// console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.memory.home  is ' + HOME);
// console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.memory.room1 is ' + room1);
// console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.memory.room2 is ' + room2);
// console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.memory.room3 is ' + room3);


var test ="abcd";

var minNUmberofTestScreeps = 2; //Test Test test Test testfoobar99 Neal Nobleewas testsdf
var sp1 = Memory.spawns.Spawn1;
var sp2 = Memory.spawns.Spawn2;

var  postFixCount = sp1.creepCount;

// err -6 is ERR_NOT_ENOUGH_ENERGY 

module.exports.loop = function () {
    var sp1 = Memory.spawns.Spawn1;
    var sp2 = Memory.spawns.Spawn2;

 //   var postFixCount = Game.spawns.Spawn1.memory.creepCount
    

//     console.log('[' + fileName + 'line:' + util.LineNumber() + '] sp1.creepCount is  ' + sp1.creepCount);
//     console.log('[' + fileName + 'line:' + util.LineNumber() + '] postFixCount is  ' +    postFixCount);
//     sp1.creepCount++;
//    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] postFixCount = Game.spawns.Spawn1.memory.creepCount is  ' + Game.spawns.Spawn1.memory.creepCount);





//   //  console.log('[' + fileName + 'line:' + util.LineNumber() + ']  test  is ' + test );
//     var sp1 = Memory.spawns.Spawn1;
//     var sp2 = Memory.spawns.Spawn2;

    Game.spawns.Spawn1.memory.minLDHroom1 = 0;
    Game.spawns.Spawn1.memory.minLDHroom2 = 2;
    Game.spawns.Spawn1.memory.minLDHroom3 = 2;

    //var HOME = 'E44S3'; //test sdfgdsfg
var HOME = Game.spawns.Spawn1.memory.home;
var room1 = Game.spawns.Spawn1.memory.room1;
var room2 = Game.spawns.Spawn1.memory.room2;
var room3 = Game.spawns.Spawn1.memory.room3;

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
    var sp2 = Memory.spawns.Spawn2;

    sp1.count++;

   //console.log("sp1.count:" + sp1.count); 
   // console.log(JSON.stringify(sp1));
   // console.log("sp1.minerCount:" + sp1.minerCount);
   // console.log("sp1.count: " + sp1.count++);


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
    for (let name in Game.creeps) {
        // get the creep object
        var creep = Game.creeps[name];


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
            roleTestCreep.run(creep);
         }
    }


    //************************************** */
    // find all towers
    //************************************** */
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    // for each tower
    for (let tower of towers) {
        // find closes hostile creep
        var evilCreep = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        // if one is found...
        if (evilCreep != undefined) {
            // ...FIRE!
            tower.attack(evilCreep);
            continue;
           
        }
      
        var targetCreep = tower.pos.findClosestByRange(FIND_CREEPS);
       // console.log('[' + fileName + 'line:' + util.LineNumber() + '] targetCreep.my is ' + targetCreep.my);


        
        // if one is found...
        if (targetCreep != null && targetCreep.my == true && targetCreep.hits < targetCreep.hitsMax ) {
            // ...heal
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] healing creep ' + targetCreep);
            tower.heal(targetCreep);
            continue;
        }



        if (creep != null && tower.energy > 300)
        {
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL  && s.structureType != STRUCTURE_RAMPART });

        // if one is found...
            if (structure != undefined)
            {
               var status = tower.repair(structure);
               if(status != 0){
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + structure.room + '\'s tower is repairing "' + structure.structureType + '". Repair Status is ' + status);      
            }

        }

     }


    }


    //************************************** */
    // iterate over all the spawns
    //************************************** */
    for (let spawnName in Game.spawns) {
        /** @type {Spawn} */
        let spawn = Game.spawns[spawnName];
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
        var numberOfLorries = _.sum(creepsInRoom, (c) => c.memory.role == 'lorry');
        
        var numberOflongDistanceBuildersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceBuilder' && c.memory.home == room1);    
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']   numberOflongDistanceBuildersE44S2 is ' + numberOflongDistanceBuildersE44S2);
          //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']   spawn.memory.minLongDistanceBuildersE44S2 is ' + spawn.memory.minLongDistanceBuildersE44S2);
          //   spawn.memory.minLongDistanceBuildersE44S2

        // count the number of long distance harvesters globally
        var numberOfLongDistanceHarvestersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room1 );
        var numberOfLongDistanceHarvestersroom2 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room2);
        var numberOfLongDistanceHarvestersroom3 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room3);
       
        var numberOfTestScreeps = _.sum(Game.creeps, (c) => c.memory.role == 'roleTestCreep');

        var energy = spawn.room.energyCapacityAvailable;
        var energy = 800;
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] room name is ' + room);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] spawn.room.energyCapacityAvailable is ' + spawn.room.energyCapacityAvailable);

        if (room ='room1')
        {
            energy = 800;
        }

        var name = undefined;
       
        // if no harvesters are left AND either no miners or no lorries are left
        //  create a backup creep
        if (numberOfHarvesters == 0 && numberOfLorries == 0) {
            // if there are still miners left
            if (numberOfMiners > 0 ||
                (spawn.room.storage != undefined && spawn.room.storage.store[RESOURCE_ENERGY] >= 150 + 550)) {
                // create a lorry
                name = spawn.createLorry(450);
            }
            // if there is no miner left
            else {
                // create a harvester because it can work on its own
                name = spawn.createCustomCreep(energy, 'harvester');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] new creeep spawned: ' +  name + ' is a harvester');
            }
        }
        // if no backup creep is required
        else {
            // check if all sources have miners
            let sources = spawn.room.find(FIND_SOURCES);
     
            // iterate over all sources
            for (let source of sources)
            {
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '');
                // if the source has no miner
                if (!_.some(creepsInRoom, c => c.memory.role == 'miner' && c.memory.sourceId == source.id)) {
               

                    // check whether or not the source has a container
                    let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
                        filter: s => s.structureType == STRUCTURE_CONTAINER
                    });
                    // if there is a container next to the source
                   

                        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  hack hack hack ');
                        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.room.name is  ' + spawn.room.name);

                        if (containers.length > 0) {
                            // spawn a miner
                            name = spawn.createMiner(source.id);
                            console.log("[Main line " + util.LineNumber() + "] " + spawnName +" is try to create create miner with the name of " + name);
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
                console.log("[Main line " + util.LineNumber() + "] create harvester: " + name);

            }
            // if not enough lorries
            else if (numberOfLorries < spawn.memory.minLorries)
            {
               // console.log("[line "+ util.LineNumber() + "] numberOfLorries < spawn.memory.minLorries");
                // try to spawn one
                // console.log("[Main line " + util.LineNumber() + "] createLorry: " + name);
                name = spawn.createLorry(energy);
                console.log("[Main line " + util.LineNumber() + "] createLorry: " + name);
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
            }
            // if not enough upgraders
            //console.log("line 180 spawn.memory.minUpgraders: " + spawn.memory.minUpgraders);
            else if (numberOfUpgraders < spawn.memory.minUpgraders) {
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] numberOfUpgraders < spawn.memory.minUpgraders: ");
                // console.log("[Main line " + util.LineNumber() + "] energy: " + energy);
                name = spawn.createCustomCreep(energy, 'upgrader');
                    // console.log("[Main line " + util.LineNumber() + "] create upgrader: " + name);

                    if ((typeof name) == "string") {
                   // console.log("[line " + util.LineNumber() + "] create upgrader: " + name);
                }
                
            }
            // if not enough repairers
            else if (numberOfRepairers < spawn.memory.minRepairers) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'repairer');
               // console.log("[Main line " + util.LineNumber() + "] create repairer: " + name );
                if ((typeof name) == "string") {
                 //   console.log("[Main line " + util.LineNumber() + "] create repairer: " + name);
                }
            }
            // if not enough builders
            else if (numberOfBuilders < spawn.memory.minBuilders) {
                // try to spawn one
                // "[line " + util.LineNumber() + "]
               // console.log("[Main line " + util.LineNumber() + "] create builder: " + name);

                name = spawn.createCustomCreep(energy, 'builder');

                console.log("[Main line " + util.LineNumber() + "] " + spawnName +" is try to create create builder. Status is " + name);
              //  console.log("[Main line " + util.LineNumber() + "] create builder: " + name);
                if ((typeof name) == "string") {
                   
                    console.log("[line " + util.LineNumber() + "] create builder: " + name);
                }
            }
            // if not enough wallRepairers
            else if (numberOfWallRepairers < spawn.memory.minWallRepairers) {
               // util.debug(1, util.LineNumber(), "creating WallRepairer", name);
                name = spawn.createCustomCreep(energy, 'wallRepairer');
               if ((typeof name) == "string") {
                   
                    util.debug(1, util.LineNumber(), "creating WallRepairer", name);
                }
            }
            else if (numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1) {
                // try to spawn one

                name = Game.spawns.Spawn1.createLongDistanceBuilder(energy, 5, room1, room2, 0);
                console.log("[Main line " + util.LineNumber() + "] Create createLongDistanceBuilder " + name );

            }
            else if (numberOfTestScreeps < minNUmberofTestScreeps) {
                // try to spawn one

                name = Game.spawns.Spawn1.createTestCreep(sp1,"roleTestCreep");
                console.log("Main [line " + util.LineNumber() + "] Create createTestCreep " + name );

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
                console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' +  creep.name + ' create LongDistanceHarvester: ' + name);
                

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room3", name);
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