var util = require('Util'); 
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');


var fileName = "attackScout    ";
//C:\Users\Neal\AppData\Local\Screeps\scripts\screeps.com\default\role.reserveController.js


module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
  
        // TODO this code maybe redunant
        var observer = Game.getObjectById("5d724309f146cf075e07c966");
        var status = observer.observeRoom("E45S3");
        var status = observer.observeRoom("E43S3");
        var room = Game.rooms['E43S3']
  
        // if in target room
        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ', looking for creeps to destroy ');

      //  creep.suicide()

      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ', creep.room.name != creep.memory.target  is ' + creep.room.name != creep.memory.target);


 console.log('[' + fileName + 'line:' + util.LineNumber() + '] before ');     
    if (creep.room.name != 'xxs') {
   
       console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' dffffffffffffffffffffffffffffffffffffffffffff ');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ', XXXXXXX creep.room.name != creep.memory.target  is ' + creep.room.name != creep.memory.target);
    
    }
    else{
       /// console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ', YYYYYYYY creep.room.name != creep.memory.target  is ' + creep.room.name != creep.memory.target);
       console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ssssssssssssssssssssssssssssssssssssssssss ');

    }
    console.log('[' + fileName + 'line:' + util.LineNumber() + '] after ');     

        


    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  creep.memory.target is ' + creep.memory.target);
    if (creep.room.name != creep.memory.target) {

            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
           // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  creep.memory.target is ' + creep.memory.target);
           // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  creep.room.name is ' + creep.room.name);

            //console.log('[' + fileName + 'line:' + util.LineNumber() + ']  exit status is ' + exit);

            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit));
        }
        else {

            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ', looking for creeps to destroy ');
            //var controller = Game.getObjectById("5bbcafa89099fc012e63af93");
           // var controller = creep.room.find (FIND_STRUCTURES, {filter: s=> s.structureType == STRUCTURE_CONTROLLER })
            var controller = creep.room.controller;
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ', controller.room is ' + creep.room.controller);

            var invaders = controller.room.find(FIND_HOSTILE_CREEPS);
            var LDHs = controller.room.find(FIND_MY_CREEPS, {filter: s=> s.memory.role == "longDistanceHarvester"});
            var invaderCount =  invaders.length;
            var LDHsCount = LDHs.length;
    
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  LDHsCount is ' + LDHsCount);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  invaderCount is ' + invaderCount);
            


            if (invaderCount > 0){
                var invader = LDHs[0];
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