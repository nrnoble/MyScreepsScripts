
var util = require('Util');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');


var fileName = 'StorageToExt ';



module.exports = {
    run: function (creep) {
        //return;
        //  creep.say ("S2E " + creep.ticksToLive);

        util.say(creep, "S2E", 300);





        util.repairRoad(creep);
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] *           running  role. StorageToExt creep: ' + creep.name);
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



        //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXtesting 123 ');

        //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] running test creep ');     

        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep, 0);
        util.TimeToDie(creep, 50, 0);


        workCheck(creep);

        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creep.memory.working is '  + creep.memory.working);


        // ********************************************************************************//;
        //  // if creep is supposed to transfer energy to a structure
        // ********************************************************************************//;
        /* #region  transfer energy to a structure */

  
        if (creep.memory.working == true) {
            
        
            // console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is true: " + creep.name + " (" + creep.memory.role + ")");

            // energy in room is too low, only supple spawn and extentions. 
            // Skip towers while rooom energy is low.
            if (creep.memory.spawnSourcesOnly == true) {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  creep.memory.spawnSourcesOnly is set to ' + creep.memory.spawnSourcesOnly);
                // find closest spawn, extension or tower which is not full
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_CONTAINER
                        || s.structureType == STRUCTURE_EXTENSION)
                        && s.store < s.storeCapacity
                });

            }
            // room energy is OK, so supple towers.
            //  else {
            // find closest spawn, extension or tower which is not full
            var structure
            if (creep.room.name == "W46S3") {
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_EXTENSION
                        || s.structureType == STRUCTURE_SPAWN
                    )
                        && s.energy < s.energyCapacity
                    //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

                });
            }


            structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_SPAWN)
                    && s.energy < s.energyCapacity
                    && s.name != "Spawn2"

                //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

            });


            if (structure == undefined) {
            structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_EXTENSION
                    && s.energy < s.energyCapacity)

            });

        }


            if (structure == undefined) {
                var id = "5d4dd12e31f4ac407ed9c69b";
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity - 300
                        && s.energy < s.energyCapacity
                        && s.id != "5d4dd12e31f4ac407ed9c69b")
                    //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

                });
            }




            if (structure == undefined) {
                var id = "5d4dd12e31f4ac407ed9c69b";
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity - 200
                        && s.energy < s.energyCapacity
                        && s.id != "5d4dd12e31f4ac407ed9c69b")
                    //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

                });
            }







            if (structure == undefined) {     
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_NUKER && s.store[RESOURCE_ENERGY] < 300000)                      
                });

            }

            if (structure == undefined) {
                var id = "5d4dd12e31f4ac407ed9c69b";
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity - 100
                        && s.energy < s.energyCapacity
                        && s.id != "5d4dd12e31f4ac407ed9c69b")
                    //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

                });
            }


            if (structure == undefined && creep.room.name == "E46S3") {
                structure = Game.getObjectById("5dd7a7cb08787c1e7ff922f4");
              //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] structure is ' + structure +'</>');
            }




            if (structure == undefined) {     
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity)                      
                });

            }

            if (structure == undefined) {     
                var structure = util.findNearestLinkToStorage(creep,4);
                console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] findNearestLinkToStorage  is ' + structure +'</>');
               
                // structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                //     filter: (s) => (s.structureType == STRUCTURE_LINK && s.store[RESOURCE_ENERGY] < 750)                      
                // });
            }
 

   
            if (creep.room.name == "E46S3") {
            
           //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] structure is ' + structure +'</>');
            }


            if (structure == undefined) {
                
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_LINK && s.energy < s.energyCapacity 
                    && s.id != "5dd200fdb15610ec59943842" 
                    && s.id != "5dd1d69ea3d7f3742e5b782d" 
                    && s.id != "5da33a7b86db5e00019fe09c"
                    && s.id != "5da2f14886db5e00019fbf17"
                    && s.id != "5d46b9cad16c4b73af5c1269"
                    && s.id != "5da2f8adb541ee0001bf98ab"
                    && s.id != "5d9fd0108fad390001e30945"
                    && s.id != "5dc8b4cb8121d63ad927389d"
                    && s.id != "5d6b7e3252d12c73f0332b33" // E45S2
                    && s.id != "5d99e0fba33c040001cfced0" // E45S2
                    && s.id != "5d88c2f732a61a437872fb20" // E45S2
                    && s.id != "5d5542d8f0e41373bf60b75e" // E45S2
                    && s.id != "5dcb8e543233e1124785143a" // E45S2 
                    && s.id != "5dda945fa065826943ba1714" // E46S1 
                    && s.id != "5d99b0a69c30e60001320810" // E45S3 
                    && s.id != "5dd200fdb15610ec59943842" // E45S3 
                    && s.id != "5dd1d69ea3d7f3742e5b782d" // E45S3 

                    && s.room.name != "E46S1" // E46S1
                    && s.room.name != "E45S2") // E46S1





                });


            }


            if (structure == undefined) {
                
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
 
                    filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity)                      

                });

            }



            if (structure == undefined) {
                storage = creep.room.storage;
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] storage is ' + storage +'</>');
                //  var structures = creep.room.lookForAtArea(FIND_MY_STRUCTURES, storage.pos.y-10, storage.pos.x-10, storage.pos.y+10, storage.pos.x+10, true);
                //      var structure1 = structures[0];    
            }




            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' AAAAAAAAAAAAAAAAAAAA structure is ' + structure);

            if (structure != null) {

                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Supple Target is ' + structure.structureType);
            }
            //}



            if (structure == undefined) {
                //  console.log("structure structure is undefined " + creep.name + " (" + creep.memory.role + ")");
                structure = creep.room.storage;
                //  structure = creep.room.terminal;
                if (structure == undefined) {
                    // TODO: Hack
                    if (creep.room.name == "E44S2") {
                        //  console.log("Harvesterstructure is undefined, run as upgrader " + creep.name + " (" + creep.memory.role + ")");
                        console.log('[' + fileName + util.LineNumber() + '] ' + creep.name + '  structure is undefined, run as builder. Creep role: ' + creep.memory.role);

                        //    roleBuilder.run(creep);
                    }
                }

            }

            // if we found have a structure that needs energy
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                // console.log("roleHarverster.js [line " + util.LineNumber() + "] " + creep.name + " (" + creep.memory.role + ")");

                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  SSSSSSSSSSSSSSSSSSSSSSSSstructure is ' + structure);
                if (creep.lockedTargetId == undefined) {

                    creep.lockedTargetId = structure.id;
                }


                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' transfer energy.......... ');

                var statusTransfer = creep.transfer(structure, RESOURCE_ENERGY);
                
                // if (creep.room.name == "E46S3") {
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] statusTransfer is ' + statusTransfer +'</>');
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] structure is ' + structure +'</>');
                  
                // }
              
              
               if (statusTransfer == -9) {
                    
                    creep.travelTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                }
            }
        }

        /* #endregion */


        // ********************************************************************************//;
        // // if creep is supposed to harvest energy from source
        // ********************************************************************************//;
        /* #region  harvest energy from source */

        else {


            var ClosestContainer 
            if (util.isRoom(creep, "E44S2") || !util.isRoom(creep, "E45S3")) {
                ClosestContainer = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    // filter: s => s.structureType == STRUCTURE_CONTAINER &&
                    // s.store[RESOURCE_ENERGY] > 75
                  //  filter: s => s.structureType == STRUCTURE_STORAGE
                    filter: s => s.structureType == STRUCTURE_TERMINAL && s.store[RESOURCE_ENERGY] >100000

                });

                if (creep.room.name == "E46S3") {
                    console.log('<font color = "reds">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xcxcxcxc11 ClosestContainer is ' + ClosestContainer +'</>');
                    ClosestContainer = undefined;
                }
            }



            if (creep.room.name == "E46S3") {
                
                var storageLink = Game.getObjectById("5dea45a14919cef4e466ed04");

                var storageLinkEnergy = storageLink.store[RESOURCE_ENERGY];
                if (storageLinkEnergy >= 650) {
                    ClosestContainer = storageLink;
                }


                // ClosestContainer = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                //     // the second argument for findClosestByPath is an object which takes
                //     // a property called filter which can be a function
                //     // we use the arrow operator to define it
                //     // filter: s => s.structureType == STRUCTURE_CONTAINER &&
                //     // s.store[RESOURCE_ENERGY] > 75
                //     filter: s => s.structureType == STRUCTURE_LINK && s.store[RESOURCE_ENERGY] >=650
                //     //filter: s => s.structureType == STRUCTURE_TERMINAL
                // });
            }

            if (creep.room.name == "E46S3") {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xcxcxcxc11 ClosestContainer is ' + ClosestContainer +'</>');
            }

            if (ClosestContainer == undefined ){


                ClosestContainer = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {

                    filter: s => s.structureType == STRUCTURE_STORAGE
                    //filter: s => s.structureType == STRUCTURE_TERMINAL

                });

                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room [' + creep.room.name + '] ClosestContainer is ' + ClosestContainer +'</>');

            }


            if (creep.room.name == "E46S3") {
               //s console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xcxcxcxc11 ClosestContainer is ' + ClosestContainer +'</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xcxcxcxc22 ClosestContainer is ' + ClosestContainer +'</>');

            }


            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' ClosestContainer engery is ' + ClosestContainer);

            if (ClosestContainer != undefined) {
                // try to withdraw energy, if the container is not in range
                var withDrawStatus = creep.withdraw(ClosestContainer, RESOURCE_ENERGY);
                if (creep.room.name == "E46S3") {
                    console.log("-----------------------------------------------------------------");
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] withDrawStatus is ' + withDrawStatus +'</>');
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] ClosestContainer is ' + ClosestContainer +'</>');
                    console.log("-----------------------------------------------------------------");
                    console.log();           
                }

                
                if (withDrawStatus == -9) {
                    creep.travelTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);

                } else {
                    // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a upgrader ");
                    //  roleUpgrader.run(creep);
                    //  return;

                }

            }
            else {




                var status = creep.harvest(ClosestContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + creep.room.name + " " +  creep.name + ' current harvest status is ' + status );
                //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ClosestContainer is  ' + ClosestContainer);
                if (ClosestContainer != undefined || ClosestContainer != null && (creep.harvest(ClosestContainer) == ERR_NOT_IN_RANGE) && (creep.harvest(ClosestContainer) == -7)) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a container ');
                    creep.travelTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                    return;
                } else {
                    // find closest source
                    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                    if (source == null) {
                        // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " findClosestByPath(" + FIND_SOURCES_ACTIVE + ") is " + source);
                        // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a upgrader ");

                        //roleUpgrader.run(creep);
                        //return;
                    }

                    if (source == undefined || source == null) {
                        //console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " Source is set to creep.room.storage;");

                        source = creep.room.storage;

                        if (source == undefined || source == null) {
                            console.log("[" + fileName + "line:" + util.LineNumber() + "]  " + creep.name + "creep.room.storage is " + source);
                            console.log("[" + fileName + "line:" + util.LineNumber() + "]  " + creep.name + " running as a builder ");

                            // roleUpgrader.run(creep);
                            return;
                        }

                    }

                    // try to harvest energy, if the source is not in range
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        // move towards the source

                        // console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " travelTo (" + source + ")");

                        creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                        util.repairRoad(creep);
                    }
                }
            }

        }
        /* #endregion */
    }
};


/* #region  local functions */

function workCheck(creep) {
    if (creep.memory.working == undefined) {
        creep.memory.working = false;
    }
    // if creep is bringing energy to a structure but has no energy left
    if (creep.memory.working == true && creep.carry.energy == 0) {
        // switch state
        creep.memory.working = false;
        //  console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is false name:" + creep.name + " (" + creep.memory.role + ")");
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.carry.energy > 0) {
        // switch state
        creep.memory.working = true;
    }
}

/* #endregion */