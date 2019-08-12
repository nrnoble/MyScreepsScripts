var util = require('Util'); 
var fileName = "LD Harvester ";
module.exports = {
    // a function to run the logic for this role
    run: function (creep) {

        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);

        var ttl = creep.ticksToLive;
        var energyRemaining = creep.carry.energy;

        if(ttl < 190 && creep.memory.home == "E44S3" && energyRemaining == 0)
        {
            console.log("Time to die: " + creep.name + "(Long Distantance Harvester)");
            return creep.suicide();
        }


        if ((ttl < 110) && (energyRemaining == 0)) {

            //this.debug(1, this.lineNumber(), "time to Die", creep.name);
            console.log("Time to die: " + creep.name + "(Long Distantance Harvester)");
            return creep.suicide();

        }


        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {
            // if in home room
            if (creep.room.name == creep.memory.home) {
                // find closest spawn, extension or tower which is not full
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_SPAWN
                        || s.structureType == STRUCTURE_EXTENSION
                        || s.structureType == STRUCTURE_LINK
                        
                        || s.structureType == STRUCTURE_TOWER)
                        && s.energy < s.energyCapacity
                });

                if (structure == undefined) {
                    structure = creep.room.storage;
                }

                // if we found one
                if (structure != undefined) {
                    // try to transfer energy, if it is not in range
                    if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.moveTo(structure);
                    }
                }
            }
            // if not in home room...
            else {
                // find exit to home room
                var exit = creep.room.findExitTo(creep.memory.home);
                // and move to exit
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
        }
        // if creep is supposed to harvest energy from source
        else {
            // if in target room
            if (creep.room.name == creep.memory.target) {
                // find source
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' is in target room ' + creep.room.name);
                var source = creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex];
                var sourcePos = source.pos;
                if (source != null){}
                {
                    //exit = new RoomPosition(24, 21, 'E44S2'); 
                 //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' sourcePos is ' + sourcePos);
                    sourcePos = source.pos;
                }
               
              //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' source in room is ' + source);
                status = creep.harvest(source);
             //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  creep.harvest(source) statis is ' + status);
                // try to harvest energy, if the source is not in range
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards the source
                    //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  moving towards source that is ' + source);
                    //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' SourcePos is ' + sourcePos);
                    status = creep.moveTo(source);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' MoveTo Status is ' + status );    

                }else
                {
                 //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + '  '+  creep.name + ' unable to move. Status is ' );
                    status = creep.moveTo(source);
                }
            }
            // if not in target room
            else {
                // find exit to target room
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' Trying to move toward exit ');
                var exit = creep.room.findExitTo(creep.memory.target);
               // console.log("roleLDHarvester [line " + util.LineNumber() + "] exit: " + exit);
                // move to exit
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
        }
    }
};