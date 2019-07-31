var util = require('Util'); 
var fileName = "Miner       ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // get source
    
        util.pickupResources(creep,0);
        let source = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
        })[0];

        // if creep is on top of the container
        if (creep.pos.isEqualTo(container.pos)) {
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