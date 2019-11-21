var roleUpgrader = require('role.upgrader');
//var roleHarvester = require('role.harvester');
//var roleHarvester = require('role.harvester');

var util = require('Util'); 
var fileName = "Builder     ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
    
        //return;
        // Test code. If the creep is a harverst, then directly run as upgrader. 
        // remove or comment out when done with thise
        if (creep.name.includes ("harvester")) {
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] skipping  builder. Running '+ creep.name +' as a upgader ' +'</>');
            var upgraderStatus = roleUpgrader.run(creep);  
            return;          
        }



        let container = undefined;
        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);

      
        
        util.say(creep,"bld ",300);
        util.TimeToDie(creep,32,0);

        if (creep.room.name == "E43S3") {
            util.TimeToDie(creep,125,0);
        }
        

//        u til.TimeToDie(creep,32,0);

     //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] 0000000000000000000000 creep.pos.y is ' + creep.pos.y);
        // var status =     util.stayInTargetRoom(creep);
        // if (status == 0) {
        //     return;
        // }

    if (creep.room.name=="E45S3" || creep.room.name == "E43S3") {
        var havesterCreepsInRoom  = creep.room.find(FIND_MY_CREEPS, {filter: s =>( s.memory.role == 'harvester')});  
        if (havesterCreepsInRoom.length == 0) {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  havesterCreepsInRoom.length is '+ havesterCreepsInRoom.length + '</>');    
            creep.memory.role = "harvester";
            return;
        }
        
    }

    if (creep.memory.target == "W15S17") {
        if (creep.room.name == "W14S18") {
            var exit = creep.room.findExitTo("W14S17");
            var status = creep.moveTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            return;
        }
        else{

            exit = creep.room.findExitTo(creep.memory.target);
            var status = creep.moveTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            if (creep.room.name != "W15S17") {
                return;
            }
            else{
               
            }   
          
        }
    }

    //     // if target is defined and creep is not in target room
    //     if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
    //         // find exit to target room\\
    //      //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!! creep.memory.target is ' + creep.memory.target);
    //        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.target is ' + creep.memory.target);
    //     var location = new RoomPosition(29, 19, 'W15S17');
    //    // var exit = creep.room.findExitTo("W14S17");
    //      //   var roomLocation = new RoomPosition(20, 45, 'W14S17');
    //     var exit = creep.room.findExitTo(creep.memory.target);
    //   //var exit = creep.room.findExitTo(location);
    //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] exit is ' + exit +'</>');


    //         // move to exit
    //         var status = creep.moveTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
    //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status is ' +status + ' </>');
    //         // return the function to not do anything else
    //          return;
    //     }

//        return;
exit = creep.room.findExitTo(creep.memory.target);


        // if creep is trying to complete a constructionSite but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] XXXXXXXXXXXXXXXXXXXXXXXXX creep.memory.working == true && creep.carry.energy == 0');
            creep.memory.working = false;
        }
        
        
        // ********************************************************************************//
        // if creep is harvesting energy but is full
        // ********************************************************************************//

        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            
         //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!! creep.memory.working == false && creep.carry.energy == creep.carryCapacity');
            // switch state
            creep.memory.working = true;
        }

        
        // ********************************************************************************//
        //  if creep is supposed to complete a constructionSite
        // ********************************************************************************//
      //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.name is ' + creep.name +'</>');
        
        if (creep.memory.working == true) {
        //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.working == true ');

            // find closest constructionSite
            var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] constructionSite.length is ' + constructionSite.length);
            // if one is found
            if (constructionSite != undefined) {
                // try to build, if the constructionSite is not in range
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    // move towards the constructionSite
                    creep.moveTo(constructionSite, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                   

                }
                return;
            }
            // if no constructionSite is found
            else {
               // creep.memory.working = false;
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!! no constructionSite is found ');
                // go upgrading the controller
               // roleHarvester.run(creep);
             //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.name + ' is calling upgrader role'  +'</>');
                var upgraderStatus = roleUpgrader.run(creep);
                if (creep.name !=upgraderStatus) {
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] WE HAVE A PROBLEM. Investigate!!!' +'</>');
                }
                else{
                   // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] The creep name match when return from calling upgrade role: ' + creep.name +'</>');

                }
                //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.name before calling upgrader role is ' + creep.name +'</>');
                //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] return from running upgrader. upgraderStatus is ' + upgraderStatus +  '</>');
                util.repairRoad(creep);
                return;
            }
        }
        
        
        // ********************************************************************************//
        // else creep is supposed to get energy
        // ********************************************************************************//
        
        else {
            
         //   var terminalCount = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => (s.structureType == STRUCTURE_TERMINAL)}).length;  
         


         if (creep.room.name == "W15S17") {
            
            var creepCarryCapacity =  creep.store.getCapacity();
         //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creepCarryCapacity is ' + creepCarryCapacity +'</>');
            container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s =>( (s.structureType == STRUCTURE_CONTAINER )
                         || s.structureType == STRUCTURE_TERMINAL
                         || s.structureType == STRUCTURE_STORAGE) 
                         && s.store[RESOURCE_ENERGY] > 0 
                          || (s.structureType == STRUCTURE_LINK)
                       // && s.store[RESOURCE_ENERGY] >= creepCarryCapacity
                    });  
         
           // container = creep.room.storage;
        }
        else{


         container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s =>( (s.structureType == STRUCTURE_CONTAINER )
                     || s.structureType == STRUCTURE_TERMINAL
                     || s.structureType == STRUCTURE_STORAGE) 
                //   //  && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK)
                    && s.store[RESOURCE_ENERGY] > 0
                    
                   

        });
    }

        }
        // if one was found
        if (container != undefined) {
            
          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] try to withdraw energy, if the container is not in range ');
            // try to withdraw energy, if the container is not in range
            if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // move towards it
                creep.moveTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        }
        else {
            // find closest source

          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] XXXfind closest sourceXXX  ');
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(source == null ){
              //      console.log("[" +  fileName + " line " + util.LineNumber() + "]  " + creep.name + " source is null");

            }

                // try to harvest energy, if the source is not in range
                // console.log("[" +  fileName + " line " + util.LineNumber() + "]  " + creep.name + " moveTo (" + source + ")");
                var status = creep.harvest(source)
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
                else{
        //            console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.harvest(source) status is '  + creep.harvest(source));
                }

            //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Energy is gone and source is on cool down ');
            }
        }
    
};