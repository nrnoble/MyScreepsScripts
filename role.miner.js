var util = require('Util'); 
var fileName = "Miner       ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // get source
    
     //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] the creep name is ' +  creep.name + '  ');
       

     if (creep.ticksToLive == 75) {
           
        var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
             filter: { structureType: STRUCTURE_SPAWN}
         });
         
         var Spawn1 = spawns[0];
         Spawn1.memory.qMiner = Spawn1.memory.qMiner + 0;
 
        }



        util.pickupResources(creep,0); //5bbcafa89099fc012e63af90
        //let source = Game.getObjectById(creep.memory.sourceId);
        let source = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
        })[0];

       // console.log("Role.miner Unable to find a container " + container);
        if(container == null || container == undefined)
        {
            console.log("Role.miner Unable to find a container. Container is " + container);
            return;
        }

        // if creep is on top of the container
        if (container != null && creep.pos.isEqualTo(container.pos)) {
            // harvest source
            const currentStoredEngery = _.sum(container.store);
          
            if(currentStoredEngery <= 1999){
                creep.harvest(source);
            }
        }
        // if creep is not on top of the container
        else {
            // move towards it
            creep.moveTo(container);
        }
    }
};