var util = require('Util'); 
var util = require('Util'); 
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');

var fileName = "Harvester   ";


module.exports = {
    // a function to run the logic for this role
    run: function (creep) {


        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);

        // check to see if engery == 0 and ttl < 75
        //var status = util.SelfSecide(creep);
        //console.log(status);
         //console.log("roleHarverster.js [line " + util.LineNumber() + "] Name: " + creep.name + " (" + creep.memory.role + ")");
        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
          //  console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is false name:" + creep.name + " (" + creep.memory.role + ")");

        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }
        

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {
           // console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is true: " + creep.name + " (" + creep.memory.role + ")");

            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_SPAWN
                    || s.structureType == STRUCTURE_EXTENSION
                    || s.structureType == STRUCTURE_TOWER)
                    && s.energy < s.energyCapacity
            });

            if (structure == undefined) {
             //  console.log("structure structure is undefined " + creep.name + " (" + creep.memory.role + ")");
                structure = creep.room.storage;
                // if (structure == undefined)
                // {
                    
                //     if( creep.room.name == "E44S2"){    
                //       //  console.log("Harvesterstructure is undefined, run as upgrader " + creep.name + " (" + creep.memory.role + ")");
                //         console.log('[' + fileName +  util.LineNumber() + '] ' +  creep.name + '  structure is undefined, run as repairer. Creep role: ' + creep.memory.role);
                       
                //         roleRepairer.run(creep);
                //     }
                // }
            
            }

            // if we found one
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                // console.log("roleHarverster.js [line " + util.LineNumber() + "] " + creep.name + " (" + creep.memory.role + ")");

                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
        }
        // if creep is supposed to harvest energy from source
        else {
            // find closest source
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (source == null) {
              console.log("roleHarvester [line " + util.LineNumber() + "]  "+ creep.name + " findClosestByPath(" + FIND_SOURCES_ACTIVE + ") is " + source);
              console.log("roleHarvester [line " + util.LineNumber() + "]  "+ creep.name + " running as a upgrader ");

              roleUpgrader.run(creep);
              return;
            }

            if (source == undefined || source == null ) {
                //console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " Source is set to creep.room.storage;");

                source = creep.room.storage;
            }

            // try to harvest energy, if the source is not in range
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                // move towards the source

                // console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " moveTo (" + source + ")");

                creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        }
    }
};