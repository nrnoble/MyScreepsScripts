var roleUpgrader = require('role.upgrader');
//var roleHarvester = require('role.harvester');
//var roleHarvester = require('role.harvester');

var util = require('Util'); 
var fileName = "Builder     ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
       
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
        var status =     util.stayInTargetRoom(creep);
        if (status == 0) {
            return;
        }


        if (creep.room.name == "E46S3") {
           // return
        }


    if (creep.room.name=="E45S3" || creep.room.name == "E43S3") {
        var havesterCreepsInRoom  = creep.room.find(FIND_MY_CREEPS, {filter: s =>( s.memory.role == 'harvester')});  
        if (havesterCreepsInRoom.length == 0) {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  havesterCreepsInRoom.length is '+ havesterCreepsInRoom.length + '</>');    
            creep.memory.role = "harvester";
            return;
        }
        
    }





        // if target is defined and creep is not in target room
        if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
            // find exit to target room\\
         //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!! creep.memory.target is ' + creep.memory.target);
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.target is ' + creep.memory.target);

            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            // return the function to not do anything else
        //   /  return;
        }

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

              //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!! no constructionSite is found ');
                // go upgrading the controller
               // roleHarvester.run(creep);
                roleUpgrader.run(creep);

                util.repairRoad(creep);
                return;
            }
        }
        
        
        // ********************************************************************************//
        // if creep is supposed to get energy
        // ********************************************************************************//
        
        else {
            
         if (creep.room.name =="E44S2") {
            // container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //     filter: s =>( (s.structureType == STRUCTURE_CONTAINER 
            //             || s.structureType == STRUCTURE_TERMINAL
            //             || s.structureType == STRUCTURE_STORAGE) 
            //           && s.store[RESOURCE_ENERGY] > 0  
            //         || (s.structureType == STRUCTURE_LINK))
                    

            //     });
        
            
            container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s =>( s.structureType == STRUCTURE_LINK)
                    

                });
    //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] container.pos is ' + container.pos +'</>');

        }

         if (creep.room.name =="E45S2") {
            // container = creep.room.storage.pos.findClosestByPath(FIND_STRUCTURES, {
            //     filter: (s) =>(
            //       //  s.structureType == STRUCTURE_CONTAINER 
            //          // s.structureType == STRUCTURE_TERMINAL
            //         // s.structureType == STRUCTURE_STORAGE
            //           //  && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK)
            //          // s.structureType == STRUCTURE_LINK 
            //           s.id == "5d6b40742f60936360c7d0cc"
            //           && s.store[RESOURCE_ENERGY] > 0 )

    
            // });

            // if (container == undefined) {
            //     container = creep.room.storage;
            // }

            container = creep.room.storage;
          //  container = Game.getObjectById ("5d6b40742f60936360c7d0cc");
            }
            else if  (creep.room.name =="E45S2" && creep.room.name =="E43S3") {
                container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s =>(
                      //  s.structureType == STRUCTURE_CONTAINER 
                         // s.structureType == STRUCTURE_TERMINAL
                         s.structureType == STRUCTURE_STORAGE
                          //  && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK)
                           && s.store[RESOURCE_ENERGY] > 0 )
        
                });
            }
        


           // else if (creep.room.name == "E46S1" && creep.memory.primarySource != undefined) {
        
        
        
           else if (creep.memory.primarySource != undefined) {
 
                    var target = creep.memory.primarySource;
                 //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] target is ' + target +'</>');
                    var primarySource = Game.flags[target];
                  //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] primarySourceFlag is ' + primarySource +'</>');
                 //   ClosestContainer = creep.pos.findClosestByPath(primarySource)
                      ClosestContainer = primarySource.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) => (s.structureType == STRUCTURE_CONTAINER)
                        });
                   
                 //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  ClosestContainer is ' + ClosestContainer +'</>');
            }
            
        else{



    

            container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s =>( (s.structureType == STRUCTURE_CONTAINER 
                        || s.structureType == STRUCTURE_TERMINAL
                        || s.structureType == STRUCTURE_STORAGE) 
                    //  && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK)
                    && s.store[RESOURCE_ENERGY] > 0 )

                });
            }
            var source1 = Game.getObjectById("5bbcafc09099fc012e63b1c8");
           // container = creep.pos.findClosestByPath(source1);
            container = creep.room.storage;


            if (creep.room.name =="E44S2") {
                // container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                //     filter: s =>( (s.structureType == STRUCTURE_CONTAINER 
                //             || s.structureType == STRUCTURE_TERMINAL
                //             || s.structureType == STRUCTURE_STORAGE) 
                //           && s.store[RESOURCE_ENERGY] > 0  
                //         || (s.structureType == STRUCTURE_LINK))
                        
    
                //     });
            
                
                container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s =>( s.structureType == STRUCTURE_LINK)
                    });

         //           console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] container.pos is ' + container.pos +'</>');
    
            }

        }
        // if one was found
        if (container != undefined) {
           // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] container is ' + container +'</>');
          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] try to withdraw energy, if the container is not in range ');
            // try to withdraw energy, if the container is not in range
          
            // if  (creep.room.name =="E45S2") {
            //     container = Game.getObjectById ("5d4dd12e31f4ac407ed9c69b");
            // }
          
            if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // move towards it
           //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] moving towards container: ' + container +'</>');

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