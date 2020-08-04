var roleUpgrader = require('role.upgrader');
//var roleHarvester = require('role.harvester');
//var roleHarvester = require('role.harvester');

var util = require('Util'); 
var fileName = "Builder     ";
var debugRoom = "E25S52";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {

        if (creep.room.name == "E21S55") {
            
            console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ' WARNING HACK: Creep.memory.primarySource = "ControllerLink"</>');    
            creep.memory.primarySource = "StorageLink";
           // creep.memory.primarySource = "ControllerLink";
           // creep.memory.primarySource = "hydrogen";
        }    


        


        //return;
        let container = undefined;
        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);

      
        
        util.say(creep,"bld ",300);
        util.TimeToDie(creep,32,0);

        if (creep.room.name == "E43S3") {
            util.TimeToDie(creep,125,0);
        }
        
      //  return;
//        u til.TimeToDie(creep,32,0);

    //  //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] 0000000000000000000000 creep.pos.y is ' + creep.pos.y);
    //     var status =     util.stayInTargetRoom(creep);
    //     if (status == 0) {
    //         return;
    //     }


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


    // if (creep.room.name == "E21S52") {
    //     creep.memory.target = "E22S51";
    //   }

    // if (creep.room.name == "E22S51") {
    //     creep.memory.target = "E22S52";

    //   }

    //   if (creep.room.name == "E22S52") {
    //     creep.memory.target = "E23S52";
    //   }

    //   if (creep.room.name == "E22S52") {
    //     creep.memory.target = "E25S52";
    //   }

    //   if (creep.room.name == "E23S52") {
    //     creep.memory.target = "E26S52";
    //  //   creep.memory.home = "E25S52";
    //   }


    //   if (creep.room.name == "E25S52") {
    //     creep.memory.target = "E25S52";
    //     creep.memory.home   = "E25S52";
    //   }



        // if target is defined and creep is not in target room
        if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
          
        // find exit to target room
           console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!! creep.memory.target is ' + creep.memory.target);
           console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.target is ' + creep.memory.target);

            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.travelTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            // return the function to not do anything else
             return;
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
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.memory.working is ' + creep.memory.working +'</>');
        // /creep.memory.primarySource
            // find closest constructionSite
            var constructionSite;
            creep.memory.primarySource = constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES,{filter: s => s.progress > 0 && s.progress < s.progressTotal});
         //   var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
    
            if (constructionSite == undefined)
            {
                var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            }  
            
            // if one is found
            if (constructionSite != undefined) {
                // try to build, if the constructionSite is not in range
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    // move towards the constructionSite
                    creep.travelTo(constructionSite, { visualizePathStyle: { stroke: '#ffaa00' } });
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
            //           && s.store[RESOURCES_ALL] > 0  
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
            //           //  && s.store[RESOURCES_ALL] > 0 ) || (s.structureType == STRUCTURE_LINK)
            //          // s.structureType == STRUCTURE_LINK 
            //           s.id == "5d6b40742f60936360c7d0cc"
            //           && s.store[RESOURCES_ALL] > 0 )

    
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
                          //  && s.store[RESOURCES_ALL] > 0 ) || (s.structureType == STRUCTURE_LINK)
                           && s.store[RESOURCES_ALL] > 0 )
        
                });
        }
        


           // else if (creep.room.name == "E46S1" && creep.memory.primarySource != undefined) {
        var ClosestContainer;
        if (creep.memory.primarySource == undefined)
        {
            creep.memory.primarySource = "Source2x";
        }
        
        else if (creep.memory.primarySource != undefined) {
            debugRoom = "E21S55"
            var target = creep.memory.primarySource;
                   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.primarySource is ' + creep.memory.primarySource +'</>');
            var primarySource = Game.flags[creep.memory.primarySource + "_" + creep.room.name];
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] primarySourceFlag is ' + primarySource +'</>');
              ClosestContainer = creep.pos.findClosestByPath(primarySource)
              console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] primarySourceFlag is ' + primarySource +'</>');
              
              if (creep.room.name == debugRoom) {
                     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] primarySource is ' + primarySource +'</>');                
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  ClosestContainer is ' + ClosestContainer + '</>');
            }
            
            if (creep.room.name == debugRoom) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] primarySource is ' + primarySource +'</>');                
            }
               // ClosestContainer = creep.room.storage;

                if (ClosestContainer == undefined) {
                    
         //           ClosestContainer = creep.room.storage;
                }

                if (ClosestContainer == undefined && primarySource != undefined) {
                console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] primarySource is ' + primarySource +'</>');
                   
                    ClosestContainer = primarySource.pos.findClosestByPath(FIND_STRUCTURES, 3, {
                       // filter: (s) => (s.structureType == STRUCTURE_CONTAINER)
                        });
                   
                }
               // debug(creep, ClosestContainer);
                if (creep.room.name == debugRoom) {
                    //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] primarySource is ' + primarySource +'</>');                
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  ClosestContainer is ' + ClosestContainer + '</>');
                }
 
            }
            
        else{

            if (creep.room.name == debugRoom) {
                     console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + ']  ClosestContainer is ' + ClosestContainer +'</>');
                
                 }
  
            container = undefined;


            // if (creep.memory.containerId  == undefined){
            //     container = getLinkNearController(container, creep);

            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] container is ' + container +'</>');
            //    // creep.memory.containerId = container.id;
            // }
            // else{
            //     container = Game.getObjectById(creep.memory.containerId);
            // }
            
               container = getLinkNearController(container, creep);


            var flagSource = Game.flags["Source_" + creep.room.name];
            
            //console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] flagSource2 is ' + flagSource +'</>');
           
            if (creep.room.name == debugRoom) {
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] primarySource is ' + primarySource +'</>');                
                     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  ClosestContainer is ' + ClosestContainer +'</>');
                
                 }
  



            if (container == undefined) {

                if (creep.room.storage != undefined) {
                    storage = creep.room.storage;
                    if (storage.store[RESOURCE_ENERGY] > 1000) {
                        container = creep.room.storage;
                    }
                    else{
                        container = undefined;
                    }
                }
            }

            if (container == undefined) {

                     container = flagSource.pos.findClosestByRange(FIND_STRUCTURES, {
                     filter: s =>s.structureType == STRUCTURE_CONTAINER 
                         //  && s.store[RESOURCES_ALL] > 0 ) || (s.structureType == STRUCTURE_LINK)
                        // && s.store[RESOURCES_ALL] > 0 )
                }); 
            }

            if (creep.room.name == "E25S52") {
                 console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']zzzzzzz container is ' + container +'</>');
            }
           
            // if (container == undefined) {
            //     container = flagSource.pos.findClosestByRange(FIND_STRUCTURES, {
            //         filter: s =>( (s.structureType == STRUCTURE_CONTAINER )
            //             //  && s.store[RESOURCES_ALL] > 0 ) || (s.structureType == STRUCTURE_LINK)
            //             && s.store[RESOURCES_ALL] > 0 )
            //     });
            // }
        }



        //     if (creep.room.name =="E44S2") {
        //         // container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        //         //     filter: s =>( (s.structureType == STRUCTURE_CONTAINER 
        //         //             || s.structureType == STRUCTURE_TERMINAL
        //         //             || s.structureType == STRUCTURE_STORAGE) 
        //         //           && s.store[RESOURCES_ALL] > 0  
        //         //         || (s.structureType == STRUCTURE_LINK))
                        
    
        //         //     });
            
                
        //         container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        //             filter: s =>( s.structureType == STRUCTURE_LINK)
        //             });

        //  //           console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] container.pos is ' + container.pos +'</>');
    
        //     }

        }
        // if one was found

        // ClosestContainer = primarySource.pos.findClosestByPath(FIND_STRUCTURES, 3, {
        //     filter: (s) => (s.structureType == STRUCTURE_CONTAINER)
        //     });

       // debug(creep, ClosestContainer);
        if (creep.room.name == debugRoom) {
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] primarySource is ' + primarySource +'</>');                
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  ClosestContainer is ' + ClosestContainer + '</>');
        }

        if (ClosestContainer != undefined) {
           
            if (creep.room.name == debugRoom) {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  u xxxxxxxxxxx container is ' + container +'</>');
         //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] u container.pos.x: ' + container.pos.x +', container.pos.y:'+ container.pos.y +'</>');
            }

            if (creep.withdraw(ClosestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // move towards it
           //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] moving towards container: ' + container +'</>');

                creep.travelTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
            }

        }
        else {
        
            // find closest source
        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] XXXfind closest sourceXXX  ');  
        //    var flaggedSource = creep.memory.flaggedSource;
          var flaggedSource = "Source2_";
          if(flaggedSource == undefined){
            flaggedSource = creep.memory.flaggedSource = "Source2_";
          }
          else{
            var flaggedSource = creep.memory.flaggedSource;
          }
          var flaggedSource = "Source2_";
          var flagSource = Game.flags[flaggedSource + creep.room.name];
            

        


          var source = flagSource.pos.findClosestByPath(FIND_SOURCES);
            if(source == null ){
              //      console.log("[" +  fileName + " line " + util.LineNumber() + "]  " + creep.name + " source is null");

            }

                // try to harvest energy, if the source is not in range
                // console.log("[" +  fileName + " line " + util.LineNumber() + "]  " + creep.name + " travelTo (" + source + ")");
                
                
                
                var status = creep.harvest(source)
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
                else{
                     creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } }); 
                     console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.harvest(source) status is '  + creep.harvest(source));
                }

            //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Energy is gone and source is on cool down ');
            }
        }
    
};

function debug(creep, ClosestContainer) {
    if (creep.room.name == debugRoom) {
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] primarySource is ' + primarySource +'</>');                
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  ClosestContainer is ' + ClosestContainer + '</>');
    }
}

function getLinkNearController(container, creep) {
    if (container == undefined) {
      //  console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] container is ' + container + '</>');
        var isControllerInRange = util.isInRange(creep, STRUCTURE_CONTROLLER, 10);
        if (isControllerInRange == true) {
        //    console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] isControllerInRange is ' + isControllerInRange + '</>');
            var isLinkInRange = util.isInRange(creep.room.controller, STRUCTURE_LINK, 10);
          //  console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] isLinkInRange is ' + isLinkInRange +'</>');
            if (isLinkInRange == true) {
                container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s => (s.structureType == STRUCTURE_LINK)
                });
            }
        }
    }

   // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] getLinkNearController is returning ' + container +'</>');
    return container;
}
