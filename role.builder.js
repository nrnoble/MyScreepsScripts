var roleUpgrader = require('role.upgrader');
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
        

//        util.TimeToDie(creep,32,0);

     //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] 0000000000000000000000 creep.pos.y is ' + creep.pos.y);
        var status =     util.stayInTargetRoom(creep);
        if (status == 0) {
            return;
        }

      //  var status = util.stayInTargetRoom(creep); 

        // if (creep.ticksToLive == 50) {
           
        //     var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
        //          filter: { structureType: STRUCTURE_SPAWN}
        //      });
     
        //      var Spawn1 = spawns[0];
        //      Spawn1.memory.qBuilder = Spawn1.memory.qBuilder + 0;
     
        // }
    

        // if (Game.creeps[creep.name].memory.home == undefined)
        // {
        //     Game.creeps[creep.name].home =="E44S2";
        //     Game.creeps[creep.name].target =="E44S2";
        // }

        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' running');
        // creep.memory.home2 =="E44S2";
        // Game.spawns.Spawn1.creep['builder_9'].foo = "test";
        // Game.creeps[creep.name].memory.foo = "test2";

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
            
         //   var terminalCount = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => (s.structureType == STRUCTURE_TERMINAL)}).length;  
            
         container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s =>( (s.structureType == STRUCTURE_CONTAINER 
                    || s.structureType == STRUCTURE_TERMINAL
                    || s.structureType == STRUCTURE_STORAGE) 
                  //  && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK)
                   && s.store[RESOURCE_ENERGY] > 0 )

        });

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