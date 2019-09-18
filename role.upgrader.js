var util = require('Util'); 
var fileName = "Upgrader    ";
module.exports = {
    // a function to run the logic for this role
    run: function (creep) {



        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);

        if (creep.ticksToLive == 50) {
           
            var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
                 filter: { structureType: STRUCTURE_SPAWN}
             });
             
             var Spawn1 = spawns[0];
             Spawn1.memory.qUpgrader = Spawn1.memory.qUpgrader + 0;
     
            }



        //console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is now running as a upgrader");
        
        // check to see if engery == 0 and ttl < 75
        //  var status = util.SelfSecide(creep);

        // if creep is bringing energy to the controller but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to the controller
        if (creep.memory.working == true) {
           // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " creep.memory.working == true)");
           // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " The room constroller is )" + creep.room.controller);
            
            // instead of upgraderController we could also use:
            // if (creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

            // try to upgrade the controller
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // if not in range, move towards the controller
               // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is moving closer to constroler");
                creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffaa00' } });
                util.repairRoad(creep);
            }
            else
            {
              //  console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " upgrading controller");
                // find closest container //s.structureType == STRUCTURE_CONTAINER || 
               var status = creep.upgradeController(creep.room.controller);
               // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " upgrading status " + status);

                

            }
        }
        // if creep is supposed to get energy
        // else{ 
        //     // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " creep.memory.working != true)");
        //     // find closest container //s.structureType == STRUCTURE_CONTAINER || 
        //     let link = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        //         filter: s => (s.structureType == STRUCTURE_LINK) && s.energy > 0});
        //         if (creep.room.name == "E44S3" && link != null && link != undefined){
        //            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' link engery is ' + link);
        //           //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' link engery is ' + link.energy);
        
        //         }
        //     if (link != undefined)
        //     {
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] Link found ');
        //         // try to withdraw energy, if the container is not in range
        //         if (creep.withdraw(link, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //             // move towards it
        //             // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " switching is moving closer to container");
        //             creep.moveTo(link, { visualizePathStyle: { stroke: '#ffaa00' } });
        //         }
        //     }
            else{



                let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s =>( (s.structureType == STRUCTURE_CONTAINER 
                            || s.structureType == STRUCTURE_TERMINAL
                            || s.structureType == STRUCTURE_STORAGE) 
                            && s.store[RESOURCE_ENERGY] > 0 ) 
                           // && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK

                           
                });
                // if one was found
                if (container != undefined) {
                    // try to withdraw energy, if the container is not in range
                    if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        // move towards it
                        // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " switching is moving closer to container");
                        creep.moveTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                }
                else {
                    // find closest source
                    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                    // try to harvest energy, if the source is not in range
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        // move towards it
                    // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is moving closer to constroler");
                        creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                } // else
            }
        }
    
};