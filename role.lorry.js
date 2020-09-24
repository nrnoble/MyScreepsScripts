var util = require('Util'); 
const { overlayInfo } = require('Util');
var fileName = "Lorry       ";
var debugRoomName = "E21S52";
var debugColor = "Yellow";


module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        // if creep is bringing energy to a structure but has no energy left
       
        util.pickupResources(creep,3);
        util.TimeToDie(creep,10,0);


       if (creep.ticksToLive == 25) {
           
       var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
            filter: { structureType: STRUCTURE_SPAWN}
        });

      //  var Spawn1 = spawns[0];
        var Spawn1 = creep.room.spawn;


       // Spawn1.memory.qLorry = Spawn1.memory.qLorry + 1;

       }
       

       if (creep.room.name == "E25S51") {
           if (!creep.pos.isEqualTo(26,35)) {
                creep.moveTo(new RoomPosition(26,35,creep.room.name));
           }
       }


        workCheck(creep);

        // ********************************************************************************//;
        //          if creep is supposed to transfer energy to a structure
        // ********************************************************************************//;
        if (creep.memory.working == true) {
            // find closest spawn, extension or tower which is not full
            var targetStructure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it

                // filter: (s) => (s.structureType == STRUCTURE_SPAWN
                //     || s.structureType == STRUCTURE_EXTENSION
                //     || s.structureType == STRUCTURE_TOWER)
                //     && s.energy < s.energyCapacity


                filter: (s) => (
                 //   s.structureType == STRUCTURE_SPAWN
                     s.structureType == STRUCTURE_STORAGE)
                    //|| s.structureType == STRUCTURE_TERMINAL
                   // || s.structureType == STRUCTURE_CONTAINER)
                    && s.energy < s.energyCapacity
            
                });

            // #Hack E21S52 Room Hack
            if (creep.room.name == "E21S52") {
                targetStructure = creep.room.storage;
            }    


            if (creep.room.name == debugRoomName) {
                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targetStructure is ' + targetStructure +'</>');
             
             }


            if (targetStructure == undefined) {
                targetStructure = creep.room.terminal;
            }

            // if we found one
            if (targetStructure != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(targetStructure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(targetStructure);
                }
            }
        }
       // ********************************************************************************//;
       // else creep is supposed to get energy
       // ********************************************************************************//;
        else {
           
            if (creep.room.name =="E44S2") {
                var energyTargets = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => (
                    s.structureType == STRUCTURE_SPAWN 
                    || s.structureType == STRUCTURE_EXTENSION
                    && s.energy < s.energyCapacity)
             
                 });
            }
            else{      
                var energyTargets = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => (
                s.structureType == STRUCTURE_SPAWN 
                || s.structureType == STRUCTURE_EXTENSION
                && s.energy < s.energyCapacity)
            
                });
            }
            // find closest container

            // let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //     filter: s => s.structureType == STRUCTURE_LINK || s.structureType == STRUCTURE_CONTAINER

            // if (room contains links)
            // {
            //     let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //         filter: s => s.structureType == STRUCTURE_LINK
            //     });
            // } 
            // else
            // {
            //     let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //        filter: s => s.structureType == STRUCTURE_CONTAINER
            // }   

                



            let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_LINK
            });



            // if (container == undefined  || container.energy == 0) {
            //     container = creep.room.storage;
            // }

            // if one was found
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(container);
                }
            }
        }
    }
};

function workCheck(creep) {
    if (creep.memory.working == true && creep.carry.energy == 0) {
        // switch state
        creep.memory.working = false;
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        // switch state
        creep.memory.working = true;
    }
}
