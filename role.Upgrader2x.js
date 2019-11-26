//role.Upgrader2x.js

 var util = require('Util'); 
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
 
 

var fileName = 'up2x    ';
 
 
module.exports = {
    run: function (creep) {
 
        // if (creep.room.name == "E44S3") {
        //     var roomController = creep.room.controller;
        //    var signStatus = creep.signController(roomController,"Last of the Mochicans");
        //    if (signStatus == ERR_NOT_IN_RANGE) {
        //      creep.moveTo(roomController)
        //    }
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] signStatus is ' + signStatus +'</>');
        // }
    //    creep.say ("up: " + + creep.ticksToLive);

        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);
        var status = util.stayInTargetRoom(creep); 

       util.say(creep,"up2x ",300);
       util.stayInTargetRoom(creep);

       var timeToDie = 53;
       var travelTime = 25;

       var workBodyParts =  creep.getActiveBodyparts(WORK);
       //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] workBodyParts * 50/5 is ' + workBodyParts * 50 /5 +'</>');


       timeToDie = (workBodyParts * 50/5) + 5;

       util.TimeToDie2(creep,"E43S3",timeToDie,0); // die before getting more energy
       util.TimeToDie2(creep,"E44S3",timeToDie,0); // die before getting more energy
       util.TimeToDie2(creep,"E45S2",timeToDie,0); // die before getting more energy
       util.TimeToDie2(creep,"E46S3",timeToDie,0); // die before getting more energy
       
              
       //util.TimeToDie2(creep,"W14S18",(workBodyParts * 50/5) + 5,0); // die before getting more energy

      //  var workparts = creep.getBodyParts


       // HACK: calucate how much total energy is required to build creep.
       // TODO: This should be done when created. This is reduntant
       var energy = 0; 
       if (creep.memory.energy == undefined) {
            creep.memory.energy =  util.convertPartsToEnergy(creep);
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.energy is ' + creep.memory.energy +'</>');
            energy = creep.memory.energy;
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] energy is ' + energy +'</>'); 
        }
 

        // ********************************************************************************//
        //                       Room Specific code
        // ********************************************************************************//
        if (creep.room.name == "E43S3") {
            
            // // only upgrade controller while Storage is above 100K energy units
            // storageEnergy = creep.room.storage.store.energy;
            // if (storageEnergy < 100500) {
            //     return;
            // }

            //respawnStatus == undefined && minUpgrader2xs >0 && numberOfUpgrader2xs <=  minUpgrader2xs 

        }

        if (creep.room.name == "E44S2") {
             travelTime = 25;
            // // only upgrade controller while Storage is above 310K energy units
            // var storageEnergy = creep.room.storage.store.energy;
            // if (storageEnergy < 310500) {
            //     return;
            // }

            

        }


        if (creep.room.name == "E44S3") {
             travelTime = 35;
            // only upgrade controller while Storage is above 670K energy units
            storageEnergy = creep.room.storage.store.energy;
            if (storageEnergy < 500600) {
              //  return;
            }

            

        }


        if (creep.room.name == "E45S2") {
            
            var travelTime = 25;
            // only upgrade controller while Storage is above 125K energy units
            var storageEnergy = creep.room.storage.store.energy;
            // if (storageEnergy < 125500) {
            //     return;
            // }

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
             travelTime = 0;
            // only upgrade controller while Storage is above 450K energy units
            var storageEnergy = creep.room.storage.store.energy;
            if (storageEnergy < 350600) {
              //  return;
            }
        }



        if (creep.room.name == "E46S3") {
            travelTime = 20;
           // only upgrade controller while Storage is above 450K energy units
        //    var storageEnergy = creep.room.storage.store.energy;
        //    if (storageEnergy < 350600) {
        //      //  return;
        //    }
       }


        
    //    if (creep.room.name == "E44S2") {
            energy = creep.memory.energy;
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify (creep.body.length) is ' + JSON.stringify (creep.body.length) +'</>');
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify (creep.body.length *3) is ' + JSON.stringify (creep.body.length*3) +'</>');
           var triggerTime = creep.body.length * 3;
           
         
           //triggerTime = -1
         //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  creep.room.spawn is ' +  creep.room.spawn +'</>');
         //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.ticksToLive  is ' + creep.ticksToLive  +'</>');
          //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] energy is ' + energy+'</>');
        
      //    var spawn = creep.room.find(FIND_MY_SPAWNS)[0];                              
       //   var minUpgrader2xs = spawn.memory.minUpgrader2xs;
         // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] minUpgrader2xs is ' + minUpgrader2xs +'</>');

        if (creep.room.name == "E43S3" && creep.name == "upgrader2x _12858070") {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] receached here1 ' + '</>');
        }
        
          if (creep.ticksToLive < triggerTime  + timeToDie - travelTime) {
            var spawn = creep.room.find(FIND_MY_SPAWNS)[0];     
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name +'] trying to create a new Upgrader2x is </>');
            
            
             
                var respawnStatus = creep.memory.respawn;
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! creep.memory.respawn is ' + creep.memory.respawn);
                var minUpgrader2xs = spawn.memory.minUpgrader2xs;
                let creepsInRoom = spawn.room.find(FIND_MY_CREEPS);
                var numberOfUpgrader2xs = _.sum(creepsInRoom, (c) => c.memory.role == 'upgrader2x');
                if (respawnStatus == undefined && minUpgrader2xs >0 && numberOfUpgrader2xs <=  minUpgrader2xs ) {
                    var name;
                    var status; 
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name +'] minUpgrader2xs is ' + minUpgrader2xs +'</>');
                //  name = spawn.createUpgrade2x(spawn, creep.memory.sourceId);
                    name = spawn.createCustomCreep(energy , 'upgrader2x');  
                    var spawnStats = false;
                    if (spawn.spawning != null) {
                        spawnStatus =  spawn.spawning.name.includes("upgrader2x");
                    }
                
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name);

                    if (name == -4 && spawnStatus == true) {
                    creep.memory.respawn = false;
                    
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name +",   spawn.spawning.name.includes('upgrader2x') is "+ status);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');                
                    
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] X!C!CC!C!!!CC!C! creep.memory.respawn is ' + creep.memory.respawn);

                    }
                }
            }
      //  }


      if (creep.room.name == "E43S3" && creep.name == "upgrader2x _12858070") {
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] receached here2 ' + '</>');
    }

        // if creep is bringing energy to the controller but has no energy left
        var workStatus = workCheck(creep);



        // ********************************************************************************//;
        //         transfer energy to the controller
        // ********************************************************************************//;
        if (creep.memory.working == true) {
       
            if (creep.room.name == "E43S3" && creep.name == "upgrader2x _12858070") {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] working is true' + '</>');
            }
            // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " creep.memory.working == true)");
           // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " The room constroller is )" + creep.room.controller);
            
            // instead of upgraderController we could also use:
            // if (creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {


            // ********************************************************************************//;
            // // block controller upgrade when storage is below a specific limit.
            // ********************************************************************************//;
            
            // if (creep.room.name == "E43S3") {
        
            //     // only upgrade controller while Storage is above 100K energy units
            //    var storageEnergy = creep.room.storage.store.energy;
            //     if (storageEnergy < 100500) {
            //         creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffaa00' } });
            //         util.repairRoad(creep);
            //         return;
            //     }
            // }

            if (upgradeStorageThrottle(creep,"E43S3",100500) == true)
            {
              //  return;
            }
            // if (upgradeStorageThrottle(creep,"E44S2",110500) == true) {
            //     return;
            // }
            

            // if (creep.room.name == "E44S2") {
            
            //     // only upgrade controller while Storage is above 310K energy units
            //     var storageEnergy = creep.room.storage.store.energy;
            //     if (storageEnergy < 310500) {
            //         creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffaa00' } });
            //         util.repairRoad(creep);
            //         return;
            //     }
            // }
    

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
      



        // ********************************************************************************//;
        //             creep gets energy
        // ********************************************************************************//;
            else{
                let container = undefined;
                if (creep.room.name == "E44S3" || creep.room.name == "E43S3"  || creep.room.name == "E45S2"  || creep.room.name == "E46S3") {
                    
                
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
        return false;
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        // switch state
        creep.memory.working = true;
        return true;
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

function upgradeStorageThrottle(creep,room,storageMin)
{
    if (creep.room.name == room) {
        
        // only upgrade controller while Storage is above 100K energy units
       var storageEnergy = creep.room.storage.store.energy;
        if (storageEnergy < storageMin) {
            creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffaa00' } });
            util.repairRoad(creep);
            return true;
        }
    }
    return false;
}
