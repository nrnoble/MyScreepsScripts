var util = require('Util');
var fileName = "Miner       ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // get source

        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] the creep name is ' +  creep.name + '  ');

        // death warning
        util.say(creep, "mine ", 300);
        util.stayInTargetRoom(creep);
        util.pickupResources(creep, 2);
        util.repairRoad(creep);
     


        if (creep.room.name == "E25S51" ) {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.store.getFreeCapacity() is ' + creep.store.getFreeCapacity() +'</>');
                
            if (creep.store.getFreeCapacity() >0) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.store.getFreeCapacity() is ' + creep.store.getFreeCapacity() +'</>');
                
              var dropStatus =  creep.drop(RESOURCE_ENERGY);     
              
              console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] dropStatus is ' + dropStatus +'</>');
            }
            
       }




        // Get energy Source Object by sourceId        
        let energySource = Game.getObjectById(creep.memory.sourceId);
        // find first container next to source that is 
        let container = energySource.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
                && s.store[RESOURCE_ENERGY] < 2001
        })[0];


        if (container == null || container == undefined) {
            let container = energySource.pos.findInRange(FIND_STRUCTURES, 1, {
                filter: s => s.structureType == STRUCTURE_CONTAINER
                //        && s.store[RESOURCE_ENERGY] < 2001
            })[0];
        }

        // **********************************************************
        // can not find container next to energy source
        // Travel to energy source and attempt to harvest energy
        // **********************************************************
        else if (container == null || container == undefined) {
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + creep.name + ', ' + creep.room.name + ', Unable to find a container. Container is ' + container);
            
            if (creep.pos.isNearTo(energySource)) {
                creep.harvest(energySource);
            }
            else{
                creep.travelTo(energySource);

            }
            return;
        }

        // if (creep is full transfer energy){


            // if (creep is next to storage and storage is not full) {
                // creep.Transfer Energy to storage
                // debug comment "Transfering energy to storage"
            //}  

            // else if (creep is next to terminal and terminal is not full) {
                // creep.Transfer Energy to terminal
                // debug comment "Transfering energy to terminal"
            //}  


            // else if (creep is next to container and container is not full) {
                // creep.Transfer Energy to container
                // debug comment "Transfering energy to container"
            //}
            
            // else{
                // drop energy on ground. Ideally this will only happen when all energy stores near energy source are full
                // output warning to console that energy stores are full 
            //}

            // Should a 'return' be placed here?


        //} 

        // if (creep energy is not full){

            // if (!creep.pos.nearTo(energySource)){
               // creep.travelTo(energySource);
            //}
            //else {

                // harverest energy from source until creep is full

            //}
        //}



        // ***************************************
        // if creep is on top of the container
        // ***************************************
        if (container != null && creep.pos.isEqualTo(container.pos)) {
            // harvest source
            const currentStoredEngery = _.sum(container.store);
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.store.getFreeCapacity() is ' + creep.store.getFreeCapacity() +'</>');
            if (creep.room.name == "E25S51" ) {
                
                if (creep.store.getFreeCapacity() == 0) {
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.store.getFreeCapacity() is ' + creep.store.getFreeCapacity() +'</>');
                    
                  var dropStatus =  creep.drop(RESOURCE_ENERGY);     
                  
                  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] dropStatus is ' + dropStatus +'</>');
                }
                
           }

            if (currentStoredEngery <= 1999) {
               
               if (creep.room.name == "E25S51") {
                    creep.drop(RESOURCE_ENERGY);                   
               } 
               
                creep.harvest(energySource);

            }
            else {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] room [' + creep.room.name + '] ****** Containter is full! Game.Time: ' + Game.time);
                let container = energySource.pos.findInRange(FIND_STRUCTURES, 1, {
                    filter: s => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] < 2000
                })[1];


                if (container != null && creep.pos.isEqualTo(container.pos)) {
                    // harvest source
                    const currentStoredEngery = _.sum(container.store);

                    if (currentStoredEngery <= 1999) {
                        creep.harvest(energySource);
                    }
                    else {
                        // move towards it
                        creep.travelTo(container);
                    }

                }
                // if creep is not on top of the container
                else {
                    // move towards it
                    creep.travelTo(container);
                }







            }
        }
        // ***************************************
        // if creep is not on top of the container
        // ***************************************
        else {
            // move towards it
            creep.travelTo(container);
        }

        creep.travelTo(container);
    }
};


function calcTiggerTime(creep, triggerTime) {
    if (creep.ticksToLive < 500 && creep.memory.triggerTime == undefined) {
        var spawns = creep.room.find(FIND_MY_SPAWNS);
        var spawn = spawns[0];
        var startPos = new RoomPosition(spawn.pos.x, spawn.pos.y, creep.room.name);
        var endPos = new RoomPosition(creep.pos.x, creep.pos.y, creep.room.name);
        var path = PathFinder.search(startPos, endPos);
        new RoomVisual(creep.room).poly(path, {stroke: '#fff', strokeWidth: .15,
        opacity: .2, lineStyle: 'dashed'}); 
        var Distance = path.path.length;
        triggerTime = Distance * 2.5 + (creep.body.length * 3);
        creep.memory.triggerTime = triggerTime;
    }
    return { spawns, spawn, startPos, endPos, path, Distance, triggerTime };
}