var util = require('Util'); 
var fileName = "Upgrader    ";
module.exports = {
    // a function to run the logic for this role
    run: function (creep) {

    //    creep.say ("up: " + + creep.ticksToLive);

        //util.mySign(creep,"E44S2","Last of the Mohicans");
        //util.mySign(creep,"E46S1","Last of the Mohicans");


        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);
        var status = util.stayInTargetRoom(creep); 

       util.say(creep,"up ",300);
       util.stayInTargetRoom(creep);

       // if (creep.ticksToLive == 50) {
           
        //     var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
        //          filter: { structureType: STRUCTURE_SPAWN}
        //      });
             
        //      var Spawn1 = spawns[0];
        //      Spawn1.memory.qUpgrader = Spawn1.memory.qUpgrader + 0;
     
        //     }

        // ********************************************************************************//
        // Room Specific code
        // ********************************************************************************//

        // if (creep.room.name == "E44S2") {
        //     var time  = Game.time % 5;
        //     if (time == 0) {
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.time % 5 is  ' + Game.time % 5);
        //         return;
        //     }
    
        // }




        if (creep.room.name == "E45S2") {
            



            // backup original role
            if (creep.memory.orginalRole == undefined) {
                creep.memory.orginalRole = creep.memory.role             
            }
            const pos = new RoomPosition(42, 10, 'E45S2');
          // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!!! creep.pos is ' + creep.pos);
          // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!!!!      pos is ' + pos);
            if (creep.pos.isEqualTo (45,8)) {
                
                creep.travelTo (pos);
               // console.log('[' + fileName + 'line:' + util.LineNumber() + ']XXXXXXXXXXXXXXXXXXXXXXX the spot has been taken ' + creep.name);
            }

        }


        //console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is now running as a upgrader");
        
        // check to see if engery == 0 and ttl < 75
        //  var status = util.SelfSecide(creep);

        // if creep is bringing energy to the controller but has no energy left
        var workStatus = workCheck(creep);

        // ********************************************************************************//;
        //          if creep is supposed to transfer energy to the controller
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
                creep.travelTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffaa00' } });
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
        //             creep.travelTo(link, { visualizePathStyle: { stroke: '#ffaa00' } });
        //         }
        //     }

        // ********************************************************************************//;
        //         // if creep is supposed to get energy
        // ********************************************************************************//;
            else{
                let container
                if (util.isRoom(creep,"E44S2")) {
                    
                    container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: s =>( (
                                //s.structureType == STRUCTURE_CONTAINER 
                                // s.structureType == STRUCTURE_TERMINAL
                                //|| s.structureType == STRUCTURE_STORAGE) 
                                //&& s.store[RESOURCE_ENERGY] > 0 ) 
                                 (s.structureType == STRUCTURE_LINK)
                        ))
                            });
                }
                
                else
                {


                 console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xxcontainer is ' + container +'</>');


                var flagSource2 = Game.flags["Source2_" + creep.room.name];
            
                if (container == undefined) {
                    var roomStorage = creep.room.storage;
                    if (roomStorage != undefined) {
                        if (roomStorage.store[RESOURCE_ENERGY] >1000) {
                            container = roomStorage;
                        }
                    }     
                }     
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xxcontainer is ' + container +'</>');

                
                container = util.findNearestLinkToController(creep, 4);




                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xxcontainer is ' + container +'</>');

                if (container == undefined) {
                    container = flagSource2.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: s =>( (s.structureType == STRUCTURE_CONTAINER 
                                || s.structureType == STRUCTURE_TERMINAL
                                || s.structureType == STRUCTURE_STORAGE) 
                                && s.store[RESOURCE_ENERGY] > 0 ) 
                                || (s.structureType == STRUCTURE_LINK)                  
                    });
                }    

                }
                // if one was found


                if (container == undefined) {
                    var roomController = creep.room.controller;
                     // var ctr = creep.pos.findClosestByRange(FIND_STRUCTURES, 4, {
                     // filter: s =>( s.structureType == STRUCTURE_LINK)                  
                     // });
                  
                     // if (condition) {
                         
                     // }  
                  
                 //    const targets = creep.pos.findInRange(FIND_STRUCTURES, 4);
                 //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
               
                     links = roomController.pos.findInRange(FIND_STRUCTURES, 4, {
                         filter: s =>( s.structureType == STRUCTURE_LINK)                  
                     });

                     if (links.structureType == STRUCTURE_LINK) {
                         container = links;
                     }

                     // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] links is ' + links +'</>');
                     // var link;
                     // if (links.length > 0) {
                     //     link = links[0];
                     //     console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] links.length is ' + link.length +'</>');
                     // }
                 
                 }


                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] container is ' + container +'</>');

                if (container != undefined) {
                    // try to withdraw energy, if the container is not in range
                    var withdrawStatus = creep.withdraw(container, RESOURCE_ENERGY);
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] withdrawStatus is ' + withdrawStatus +'</>');
                    if (withdrawStatus == ERR_NOT_IN_RANGE) {
                        // move towards it
                        // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " switching is moving closer to container");
                        creep.travelTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                }
                else {
                    // find closest source
                    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                    // try to harvest energy, if the source is not in range
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        // move towards it
                    // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is moving closer to constroler");
                        creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                } // else
            }
        }
    
};

function findNearestLinkToController(container, creep) {
    if (container == undefined) {
        var roomController = creep.room.controller;
        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, 4);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        links = roomController.pos.findInRange(FIND_STRUCTURES, 4, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
        if (links.structureType == STRUCTURE_LINK) {
            container = links;
        }
    }
    return container ;
}

function workCheck(creep) {
    if (creep.memory.working == true && creep.carry.energy == 0) {
        // switch state
        return creep.memory.working = false;
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        // switch state
        return creep.memory.working = true;
    }
}
