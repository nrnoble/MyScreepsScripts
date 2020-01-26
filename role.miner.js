var util = require('Util');
var fileName = "Miner       ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // get source

        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] the creep name is ' +  creep.name + '  ');

        // death warning
        util.say(creep, "mine ", 300);
        util.stayInTargetRoom(creep);
        util.pickupResources(creep, 2);
        util.repairRoad(creep);
        //
        //   if (creep.room.name == "E45S2") {


        /* #region  Respawn before death */
        var triggerTime = 100;

        if (creep.room.name == "E46S1") {
            triggerTime = 100;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
         //   triggerTime = 200;
        }



        if (creep.room.name == "E46S3") {
            triggerTime = 100;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
        }

        if (creep.room.name == "E43S3") {
            triggerTime = 65;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
        }


        if (creep.room.name == "E44S3") {
            triggerTime = 60;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
        }

        if (creep.room.name == "E44S2") {
            triggerTime = 45;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
        }

        if (creep.room.name == "E45S2") {
            var creep2xDeathTime = 11694653;
            var thisCreepDeathTime = 11694700;

          //  var myCreep = creep.room.find (FIND_MY_CONSTRUCTION_SITES);


            triggerTime = 115;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }

          // triggerTime = 200;
        }

        if (creep.room.name == "E45S3") {
            triggerTime = 60;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
        }




        /* #region  Call Respawn XX ticks before death. Don't randomally mess with logic.  */
        if (creep.ticksToLive < triggerTime) {

            //5bbcaf979099fc012e63ad55 is room source ID
            var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
            var respawnStatus = creep.memory.respawn;
            // respawnStatus = undefined;
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! creep.memory.respawn is ' + creep.memory.respawn);
            if (respawnStatus == undefined) {
                var name;
                var status

                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! creep.memory.respawn is ' + creep.memory.respawn);




                name = spawn.createMiner(spawn, creep.memory.sourceId);
              //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creating miner is ' + name + ' </>');
                var spawnStats = false;
                if (spawn.spawning != null) {
                    spawnStatus = spawn.spawning.name.includes("mine");
                }


                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name);


                if (name == -4 && spawnStatus == true) {
                    creep.memory.respawn = false;

                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.name ' + spawn.name + ",   spawn.spawning.name.includes('mine') is " + status);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.respawn is ' + creep.memory.respawn);

                }
            }
        }

        /* #endregion */

        //   }

        if (creep.ticksToLive == 75) {

            var spawns = creep.room.find(FIND_MY_STRUCTURES, {
                filter: { structureType: STRUCTURE_SPAWN }
            });

            var Spawn1 = spawns[0];
            spawns[0].memory.spawnMiner = false;

        }

        /* #endregion */






        let source = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
                && s.store[RESOURCE_ENERGY] < 2001
        })[0];


        if (container == null || container == undefined) {
            let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
                filter: s => s.structureType == STRUCTURE_CONTAINER
                //        && s.store[RESOURCE_ENERGY] < 2001
            })[0];
        }
        else if (container == null || container == undefined) {
            // console.log("Role.miner Unable to find a container " + container);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + creep.name + ', ' + creep.room.name + ', Unable to find a container. Container is ' + container);
            return;
        }

        // if creep is on top of the container
        if (container != null && creep.pos.isEqualTo(container.pos)) {
            // harvest source
            const currentStoredEngery = _.sum(container.store);

            if (currentStoredEngery <= 1999) {
                creep.harvest(source);
            }
            else {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] room [' + creep.room.name + '] ****** Containter is full! Game.Time: ' + Game.time);
                let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
                    filter: s => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] < 2000
                })[1];


                if (container != null && creep.pos.isEqualTo(container.pos)) {
                    // harvest source
                    const currentStoredEngery = _.sum(container.store);

                    if (currentStoredEngery <= 1999) {
                        creep.harvest(source);
                    }
                    else {
                        // move towards it
                        creep.travelTo(container);
                    }

                }
                // if creep is not on top of the container
                else {
                    // move towards it
                    creep.travelTo(container);
                }







            }
        }
        // if creep is not on top of the container
        else {
            // move towards it
            creep.travelTo(container);
        }
        creep.travelTo(container);
    }
};


function calcTiggerTime(creep, triggerTime) {
    if (creep.ticksToLive < 500 && creep.memory.triggerTime == undefined) {
        var spawns = creep.room.find(FIND_MY_SPAWNS);
        var spawn = spawns[0];
        var startPos = new RoomPosition(spawn.pos.x, spawn.pos.y, creep.room.name);
        var endPos = new RoomPosition(creep.pos.x, creep.pos.y, creep.room.name);
        var path = PathFinder.search(startPos, endPos);
        new RoomVisual(creep.room).poly(path, {stroke: '#fff', strokeWidth: .15,
        opacity: .2, lineStyle: 'dashed'}); 
        var Distance = path.path.length;
        triggerTime = Distance * 2.5 + (creep.body.length * 3);
        creep.memory.triggerTime = triggerTime;
    }
    return { spawns, spawn, startPos, endPos, path, Distance, triggerTime };
}