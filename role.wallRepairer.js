var roleBuilder = require('role.builder');
var util = require('Util'); 
var fileName = "WallRepair  ";


module.exports = {
    // a function to run the logic for this role
    run: function (creep) {

        if (creep.room.name == "E25S51") {
            creep.memory.targetStructureId = "5f48b794b6228e24a0785de3"; 
        }

        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);

        // check to see if engery == 0 and ttl < 75
        var status = util.SelfSecide(creep);

       // var status = util.stayInTargetRoom(creep); 


        // if creep is trying to repair something but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to repair something
        if (creep.memory.working == true) {
            // find all walls in the room

                        
            if(creep.memory.targetStructureId != undefined){
                //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  creep.memory.targetStructure is ' + creep.memory.targetStructureId);
                 wall = Game.getObjectById(creep.memory.targetStructureId);
                 // if (structure.hits == structure.hitsMax) {
                 
                 //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' hits = MaxHits. Changing target to undefined  ');
                 //     creep.memory.targetStructureId = undefined;
                 // }
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' XXXXXXXXXstructure is '  + structure);
                 var repairStatus = creep.repair(wall);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' repair status is ' + repairStatus);
                     if (repairStatus == ERR_NOT_IN_RANGE) {
                         creep.travelTo(wall, { visualizePathStyle: { stroke: '#ffaa00' } });
                     }

                     // only one target, so there nothing else that needs to be done
                     return;
             }
 

             
            var walls = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_WALL
                && (s.x != 42 && s.y !=29)
            });

            var target = undefined;

            


            // loop with increasing percentages
            // for (let percentage = 0.0001; percentage <= 1; percentage = percentage + 0.0001) {
       
            for (let percentage = 0.00001; percentage <= 1; percentage = percentage + 0.0001) {
                // find a wall with less than percentage hits
                for (let wall of walls) {
                    if (wall.hits / wall.hitsMax < percentage) {
                        target = wall;
                        break;
                    }
                }

                // if there is one
                if (target != undefined) {
                    // break the loop
                    break;
                }
            }

            // if we find a wall that has to be repaired


           // console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] target is ' + target +'</>');
          //  console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] target.pos.x  is ' + target.pos.x + ', target.pos.y '+target.pos.y  +' Room:'+ target.room.name +'</>');

            if (target != undefined) {
                // try to repair it, if not in range
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(target, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                }
            }
            // if we can't fine one
            else {
                // look for construction sites
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] target is ' + target +'</>');
                roleBuilder.run(creep);
                util.repairRoad(creep);
            }
        }
        // if creep is supposed to get energy
        else {
            // find closest container //s.structureType == STRUCTURE_CONTAINER || 
            let container = undefined;
            if (creep.room.name =="E46S1") {
                container = Game.getObjectById ("5dd7de292ec20e5002db0690");
            }
            else{

                container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s => (
                        s.structureType == STRUCTURE_CONTAINER
                         || s.structureType == STRUCTURE_STORAGE) &&
                        s.store[RESOURCE_ENERGY] > 0
                });

                container = creep.room.storage;
                
            }
            // if one was found
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
            else {
                // find closest source
                var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] FIND_SOURCES_ACTIVE is ' + source);
                // try to harvest energy, if the source is not in range
                if (creep.harvest(source) != 0) {
                    // move towards it
                    creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
        }
    }
};