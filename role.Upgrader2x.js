//role.Upgrader2x.js

 var util = require('Util'); 
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
 
 
var fileName = 'E43S3   ';
var fileName = 'up2x    ';
 
 
module.exports = {
    run: function (creep) {
 
 
    //    creep.say ("up: " + + creep.ticksToLive);

        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);
        var status = util.stayInTargetRoom(creep); 

       util.say(creep,"up2x ",300);
       util.stayInTargetRoom(creep);
       util.TimeToDie2(creep,"E43S3",53,0); // die before getting more energy
       util.TimeToDie2(creep,"E44S3",53,0); // die before getting more energy
       util.TimeToDie2(creep,"E45S2",53,0); // die before getting more energy


 

        // ********************************************************************************//
        //                       Room Specific code
        // ********************************************************************************//


        if (creep.room.name == "E44S2") {
            
            // only upgrade controller while Storage is above 310K energy units
            var storageEnergy = creep.room.storage.store.energy;
            if (storageEnergy < 310500) {
                return;
            }

            

        }

        if (creep.room.name == "E45S2") {
            

            // only upgrade controller while Storage is above 125K energy units
            var storageEnergy = creep.room.storage.store.energy;
            if (storageEnergy < 125500) {
                return;
            }

            // backup original role
            if (creep.memory.orginalRole == undefined) {
                creep.memory.orginalRole = creep.memory.role             
            }
            const pos = new RoomPosition(42, 10, 'E45S2');
          // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!!! creep.pos is ' + creep.pos);
          // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!!!!      pos is ' + pos);
            if (creep.pos.isEqualTo (45,8)) {
                
                creep.moveTo (pos);
               // console.log('[' + fileName + 'line:' + util.LineNumber() + ']XXXXXXXXXXXXXXXXXXXXXXX the spot has been taken ' + creep.name);
            }

        }



        if (creep.room.name == "E45S3") {
            
            // only upgrade controller while Storage is above 450K energy units
            var storageEnergy = creep.room.storage.store.energy;
            if (storageEnergy < 450600) {
                return;
            }
        }



        if (creep.room.name == "E43S3") {
            
            // only upgrade controller while Storage is above 100K energy units
            storageEnergy = creep.room.storage.store.energy;
            if (storageEnergy < 100500) {
                return;
            }

            

        }

        //console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is now running as a upgrader");
  

        // if creep is bringing energy to the controller but has no energy left
        workCheck(creep);

        // ********************************************************************************//;
        //         transfer energy to the controller
        // ********************************************************************************//;
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

            }
        }
      
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


        // ********************************************************************************//;
        //             creep gets energy
        // ********************************************************************************//;
            else{
                let container = undefined;
                if (creep.room.name == "E44S3" || creep.room.name == "E43S3"  || creep.room.name == "E45S2") {
                    
                
                container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s => (s.structureType == STRUCTURE_STORAGE
                             || s.structureType == STRUCTURE_TERMINAL)
                           
                            
                            && s.store[RESOURCE_ENERGY] > 0  
                            || (s.structureType == STRUCTURE_LINK)

                           
                });

                }
                else {    
                    container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: s => (s.structureType == STRUCTURE_STORAGE
                                || s.structureType == STRUCTURE_TERMINAL) 
                                && s.store[RESOURCE_ENERGY] > 0 
                            // && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK

                            
                    });
                }


                


                if (container == undefined) {
                    
               
                        let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: s =>( (s.structureType == STRUCTURE_CONTAINER 
                                || s.structureType == STRUCTURE_TERMINAL
                                || s.structureType == STRUCTURE_STORAGE) 
                                && s.store[RESOURCE_ENERGY] > 0 ) 
                               // && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK
    
                               
                    });
                
                }
                // let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                //     filter: s =>( (s.structureType == STRUCTURE_CONTAINER 
                //             || s.structureType == STRUCTURE_TERMINAL
                //             || s.structureType == STRUCTURE_STORAGE) 
                //             && s.store[RESOURCE_ENERGY] > 0 ) 
                //            // && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK

                           
                // });
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
                    // // find closest source
                    // var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                    // // try to harvest energy, if the source is not in range
                    // if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    //     // move towards it
                    // // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is moving closer to constroler");
                    //     creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                    // }
                } // else
            }
        }
 
    
};

function workCheck(creep) {
    if (creep.memory.working == true && creep.carry.energy == 0) {
        // switch state
        creep.memory.working = false;
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        // switch state
        creep.memory.working = true;
    }
}

function respawn(creep, status) {
    var triggerTime = 100;
    if (creep.room.name == "E44S3") {
        triggerTime = 125;
    }
    if (creep.room.name == "E44S2") {
        triggerTime = 125;
    }
    if (creep.room.name == "E45S2") {
        triggerTime = 150;
    }
    //
    if (creep.ticksToLive < triggerTime) {
        var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
        var status = creep.memory.respawn;
        if (status == undefined) {
            var name;
            var status;
            //  name = spawn.createMiner(spawn, creep.memory.sourceId);
            name = spawn.createCustomCreep(1000 * 2, 'upgrader2x');
            var spawnStatus;
            if (spawn.spawning != null) {
                spawnStatus = spawn.spawning.name.includes("upgrader2x");
            }
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name + ",   spawn.spawning.name.includes('upgrader2x') is " + spawnStatus);
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
            if (name == -4 && spawnStatus == true) {
                creep.memory.respawn = false;
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] X!C!CC!C!!!CC!C! creep.memory.respawn is ' + creep.memory.respawn);
            }
        }
    }
    return status;
}
