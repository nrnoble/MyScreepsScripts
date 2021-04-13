var util = require('Util');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');


var fileName = 'StorageToExt ';
var debugRoomName = "E25S52x";  



module.exports = {
    run: function (creep) {
      
        //  creep.say ("S2E " + creep.ticksToLive);

        var debugColor =  "yellow";
        util.say(creep, "S2E", 300);

        if (creep.room.name == debugRoomName) {
 //           console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  is on pause </>');
   //         return;
         }


//         if (creep.room.name == "E25S51") {
// //            return;
//         }

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

       // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!! creep.memory.target is ' + creep.memory.target);
       // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.target is ' + creep.memory.target);


       if (creep.room.name == debugRoomName) {
        console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 1creep.memory.target is ' + creep.memory.target +'</>');
       }
        // if target is defined and creep is not in target room
        if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
          
            // find exit to target room
              // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!! creep.memory.target is ' + creep.memory.target);
              // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.target is ' + creep.memory.target);
    
              if (creep.room.name == debugRoomName) {
                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 2creep.memory.target is ' + creep.memory.target +'</>');
             
             }
    


                var exit = creep.room.findExitTo(creep.memory.target);
                // move to exit
                creep.travelTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
                // return the function to not do anything else
                if (creep.room.name != creep.memory.target) {
                    return;
                 } 
            }
    




        workCheck(creep);

        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creep.memory.working is '  + creep.memory.working);






//#TransferEnergy

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
            var structure = undefined;




            structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_SPAWN)
                    && s.energy < s.energyCapacity
                    && s.name != "Spawn3"
                    && s.name != "Spawn10"
                    && s.name != "Spawn8"
                    && s.id != "5f787a7e55e26496f356afa8" // spawn9, room E27S51

                    && s.name != "Spawn7" //5f787a7e55e26496f356afa8
                    //&& s.name != "Spawn7" //5f6480b16072c400c56227a9
                    && s.id != "5f6480b16072c400c56227a9" //E21S53 spawn7 
                    && s.id != "5e87d19155f68952705de66a" // spawn3 in room E21S55 near controller
                //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

            });

        //     if (structure == undefined) {
            
        //         var storageLink = util.findNearestLinkToStorage(creep,10);

        //         if (creep.room.name == "E21S55" ) {
        //             if (storageLink.store[RESOURCE_ENERGY] < 600) {
        //                 structure = storageLink;
        //             }
      
        //         }

        //         // structure = creep.room.storage.findClosestByPath(FIND_MY_STRUCTURES, {
        //         //     // the second argument for findClosestByPath is an object which takes
        //         //     // a property called filter which can be a function
        //         //     // we use the arrow operator to define it
        //         //     filter: (s) => (s.structureType == STRUCTURE_LINK
        //         //         && s.energy < 600)
        //         //});

        //     }

            if (structure == undefined) {
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_EXTENSION
                    && s.energy < s.energyCapacity)

            });

         }

        //     // tower less than 100
        //     if (structure == undefined) {
        //         var id = "5d4dd12e31f4ac407ed9c69b";
        //         structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        //             // the second argument for findClosestByPath is an object which takes
        //             // a property called filter which can be a function
        //             // we use the arrow operator to define it
        //             filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < 100
        //                 && s.energy < s.energyCapacity
        //                 && s.id != "5d4dd12e31f4ac407ed9c69b")
        //             //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

        //         });
        //     }


        //     // tower less than 200
        //     if (structure == undefined) {
        //         var id = "5d4dd12e31f4ac407ed9c69b";
        //         structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        //             // the second argument for findClosestByPath is an object which takes
        //             // a property called filter which can be a function
        //             // we use the arrow operator to define it
        //             filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < 200
        //                 && s.energy < s.energyCapacity
        //                 && s.id != "5d4dd12e31f4ac407ed9c69b")
        //             //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

        //         });
        //     }

        // // tower less than 300
        //     if (structure == undefined) {
        //         var id = "";
        //         structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        //             // the second argument for findClosestByPath is an object which takes
        //             // a property called filter which can be a function
        //             // we use the arrow operator to define it
        //             filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < 300
        //                 && s.energy < s.energyCapacity)
        //            //     && s.id != "5d4dd12e31f4ac407ed9c69b")
        //             //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

        //         });
        //     }


        //     if (structure == undefined) {
        //         var id = "";
        //         structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        //             // the second argument for findClosestByPath is an object which takes
        //             // a property called filter which can be a function
        //             // we use the arrow operator to define it
        //             filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < 400
        //                 && s.energy < s.energyCapacity)
        //            //     && s.id != "5d4dd12e31f4ac407ed9c69b")
        //             //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

        //         });
        //     }
        //     if (structure == undefined) {
        //         var id = "";
        //         structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        //             // the second argument for findClosestByPath is an object which takes
        //             // a property called filter which can be a function
        //             // we use the arrow operator to define it
        //             filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < 500
        //                 && s.energy < s.energyCapacity)
        //            //     && s.id != "5d4dd12e31f4ac407ed9c69b")
        //             //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

        //         });
        //     }

        //     if (structure == undefined) {
              
        //         structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        //             // the second argument for findClosestByPath is an object which takes
        //             // a property called filter which can be a function
        //             // we use the arrow operator to define it
        //             filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < 600
        //                 && s.energy < s.energyCapacity)
        //            //     && s.id != "5d4dd12e31f4ac407ed9c69b")
        //             //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 

        //         });
        //     }

            for (let index = 1; index < 9; index++) {
                var energyAmount = index * 100;
                if (structure == undefined) {
              
                    structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                        filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < energyAmount
                            && s.energy < s.energyCapacity)                
                    });
                }

                if (structure != undefined) {
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] EnergyAmount is ' + energyAmount +'</>');
                    break;
                }
    
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






            if (structure == undefined) {     
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity)                      
                });

            }

            if (structure == undefined) {     
             if (creep.room.name != "E25S51" || creep.room.name != "E27S51"  || creep.room.name != "E25S52") {
                 var bTest = creep.room.name != "E25S51";
                
                var structure = util.findNearestLinkToStorage(creep,4);
                if (structure !=null && (structure.id == "5f417aa3af7ac84d1ee8e936" 
                || structure.id == "5f659486df431218b9afd2a9"
                || structure.id == "5f645b24c3531377e60ab590" 
                || structure.id == "5f5f6b0a9abbdf393d46a509" 
                || structure.id == "5f7a72e19643c0861252006f" 
                || structure.id == "5e6418abf7aea39a48a365ed" || structure.id == "5e63fdf6a36376b7a1f7f293" || structure.id == "5ee0844891989bfb4d891ee0" || structure.id == "5f424954eba63bf56a2b148c"|| structure.id == "5f5f2277099fd70709120d92")) {
                    structure = undefined;
               
                    if (creep.room.name == debugRoomName) {
                        console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xfindNearestLinkToStorage  is ' + structure +'</>');
                        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xbTest  is ' + bTest +'</>');
                    }
               
                }
              
                if (creep.room.name == debugRoomName) {
                    console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] findNearestLinkToStorage  is ' + structure +'</>');
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] bTest  is ' + bTest +'</>');
                } 
  
            }
               
                // structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                //     filter: (s) => (s.structureType == STRUCTURE_LINK && s.store[RESOURCE_ENERGY] < 750)                      
                // });
            }
 

   
            if (creep.room.name == debugRoomName) {
            
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] structure is ' + structure +'</>');
            }


            if (structure == undefined) {
                
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_LINK && s.energy < s.energyCapacity 
                    && s.id != "5f424954eba63bf56a2b148c" // E25S52 Shard 0 
                    && s.id != "5f425a5ddd7780b916b58555" // E25S52 Shard 0 
                    && s.id != "5f41860bd699f24fd8c2df3b" // E27S52 Shard 0 
                    && s.id != "5f44d436caf0ddc5565514e7" // E27S51 Shard 0 
                    && s.id != "5f417aa3af7ac84d1ee8e936" // E27S51 shard 0 
                    && s.id != "5f55b0c5e18f3cb9a77022ab" // E27S51 shard 0 
                    && s.id != "5ee0844891989bfb4d891ee0" // E25S52 shard 0 
                    && s.id != "5ee06dba136e4d69b39e87f7" // E25S52 shard 0 
                    && s.id != "5f424954eba63bf56a2b148c" // E25S51 shard 0 
                    && s.id != "5f5f2277099fd70709120d92" // E27S51 shard 0 
                    && s.id != "5e63fdf6a36376b7a1f7f293" // E27S51 shard 0 
                    && s.id != "5e6418abf7aea39a48a365ed" // E27S51 shard 0  
                    && s.id != "5f645b24c3531377e60ab590" // E27S51 shard 0   
                    && s.id != "5f659486df431218b9afd2a9" // E21S52 shard 0   
                    && s.id != "5f5f6b0a9abbdf393d46a509" // E25S51 shard 0  
                    && s.id != "5f7a72e19643c0861252006f" // E25S51 shard 0  
                   


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
                    && s.id != "5e63fdf6a36376b7a1f7f293" // E45S3 

                ) // E46S1

                });

                // if(structure.id.includes ("5f424954eba63bf56a2b148c") ){
                //     structure = undefined;
                // }
            
            

                if (creep.room.name == debugRoomName) {
                 console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']1 Target Energy Source is ' + structure +'</>');
                 }
            }

            if (creep.room.name == debugRoomName) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']2 Target Energy Source is ' + structure +'</>');
                }

            if (structure == undefined) {
                
                structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity)                      

                });

            }



            if (structure == undefined) {
                storage = creep.room.storage;
                
                if (creep.room.name == "E25S51") {

                    var parkPosition = new RoomPosition(30,35,creep.room.name);
                    creep.travelTo(parkPosition, { visualizePathStyle: { stroke: '#ffaa00' } });
                    return;
                    
                }
              
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

            if (creep.room.name == debugRoomName) {
              

                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] structure is ' + structure +'</>');
             
             }

            // ************************************************************
            // if we found have a structure that needs energy
            // ************************************************************
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                // console.log("roleHarverster.js [line " + util.LineNumber() + "] " + creep.name + " (" + creep.memory.role + ")");

                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  SSSSSSSSSSSSSSSSSSSSSSSSstructure is ' + structure);
                if (creep.lockedTargetId == undefined) {

                    creep.lockedTargetId = structure.id;
                }

                if (creep.room.name ==  debugRoomName) {
                  // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' transfer energy.......... ');
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Transfering energy to structure: ' + structure +'</>');
                }

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

//#GetEnergy
        // ********************************************************************************//;
        // // if creep is supposed to harvest energy from source
        // ********************************************************************************//;
        /* #region  harvest energy from source */

        else {


            var ClosestContainer 


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
            // **************************************
            // use storage if storage is defined
            // **************************************
            if (ClosestContainer == undefined ){
                if (creep.room.storage != undefined) {
                    ClosestContainer =  creep.room.storage;   
                }

//      console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room [' + creep.room.name + '] ClosestContainer is ' + ClosestContainer +'</>');

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