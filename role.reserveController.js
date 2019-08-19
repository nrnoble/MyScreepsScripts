var util = require('Util'); 
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');


var fileName = "Reserver    ";
//C:\Users\Neal\AppData\Local\Screeps\scripts\screeps.com\default\role.reserveController.js


module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if in target room

        
        // room E45S2 controller ID = 5bbcafa89099fc012e63af8e
        // room E43S3 controller ID = 5bbcaf869099fc012e63ab6c    
        // room E44S3 Spawn1 = 5d1314a8f1c8960c5d83fec7
        creep.memory.spawnId = "5d1314a8f1c8960c5d83fec7"; 
        creep.memory.cachedSource = "5bbcaf869099fc012e63ab6c";

        // var ttl = creep.ticksToLive
        // if(ttl == 12)
        // {
        //     var spawn = Game.getObjectById(creep.memory.spawnId);
        //     spawn.memory.reserveroom = "E43S3";
        //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting  Reserve room');
        //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting  Reserve room');
        //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting  Reserve room');
        //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting  Reserve room');
        // }


        let controller = Game.getObjectById(creep.memory.cachedSource);

        if (creep.room.name != creep.memory.target) {
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit));
        }
        else {


            // try to claim controller
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' reserving room');
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.room is '+ creep.room);
          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.room.controller is '+ controller);
            if (creep.reserveController(controller) == ERR_NOT_IN_RANGE) {
             //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.moveTo(controller)');
               // creep.moveTo(creep.room.controller);
               // myTestPos = new RoomPosition(42, 7, 'E45S2');
               // myTestPos = new RoomPosition(17, 27, 'E43S3');

                
                // move towards the controller
                creep.moveTo(controller);
                // creep.moveTo(myTestPos);
                var reserveStatus = creep.reserveController(controller);
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' reserve status is ' + reserveStatus );

                //myTestPos = new RoomPosition(42, 8, 'E45S2');
                //creep.moveTo(myTestPos);
                //creep.upgradeController(creep.room.controller);
            }
            else
            {

                var claimstatus = creep.reserveController(controller);
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' reserve controller status is ' + claimstatus );
              //  myTestPos = new RoomPosition(42, 8, 'E45S2');
              //  creep.moveTo(myTestPos);
                //upgradeStatus =  creep.upgradeController(creep.room.controller);
              //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' upgradeStatus  is ' + upgradeStatus);
                // if (upgradeStatus != 0)
                // {
                //   //  roleHarvester.run(creep);
                   
                //   //  creep.harvest();
                    
                //     if (creep.carry.energy == creep.carryCapacity)
                //     {

                //     }

                // }

            }
        }
    }
};