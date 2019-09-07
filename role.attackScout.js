var util = require('Util'); 
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');


var fileName = "attackScout    ";
//C:\Users\Neal\AppData\Local\Screeps\scripts\screeps.com\default\role.reserveController.js


module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if in target room

      //  creep.suicide()
        if (creep.room.name != creep.memory.target) {
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit));
        }
        else {

            
            //var controller = Game.getObjectById("5bbcafa89099fc012e63af93");
            var controller = creep.room.find (FIND_STRUCTURES, {filter: s=> s.structureType == STRUCTURE_CONTROLLER })
            var controller = creep.room.controller;

            var invaders = controller.room.find(FIND_HOSTILE_CREEPS);
            var LDHs = controller.room.find(FIND_MY_CREEPS, {filter: s=> s.memory.role == "longDistanceHarvester"});
            var invaderCount =  invaders.length;
            var LDHsCount = LDHs.length;
    
            // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  LDHsCount is ' + LDHsCount);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  LDHs[0].id is ' + LDHs[0].id);
            

            if (invaderCount > 0){
                var invader = getObjectById(LDHs[0].id);
                if (creep.attack(invader) == ERR_NOT_IN_RANGE) {
                    // move towards the invader
                    creep.moveTo(invader);
                 
                    // var attackStatus = creep.attack(invader);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' reserve status is ' + attackStatus );

                    //myTestPos = new RoomPosition(42, 8, 'E45S2');
                    //creep.moveTo(myTestPos);
                    //creep.upgradeController(creep.room.controller);
                }
            else {


                //   myTestPos = new RoomPosition(42, 8, 'E45S2');
                //   creep.moveTo(myTestPos);

                }
            }
        }
    }
};