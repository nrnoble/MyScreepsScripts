var util = require('Util'); 
var fileName = "Miner       ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // get source
    
     //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] the creep name is ' +  creep.name + '  ');
     
     // death warning
     util.say(creep,"mine ",300);
    util.stayInTargetRoom(creep);
    util.pickupResources(creep,2);
//
 //   if (creep.room.name == "E45S2") {
      
     //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! creep.memory.respawn is ' + creep.memory.respawn);
        var triggerTime = 100;
     
        if (creep.room.name == "E43S3") {
            triggerTime = 65;
        }


        if (creep.room.name == "E44S3") {
            triggerTime = 160; 
        }

        if (creep.room.name == "E44S2") {
            triggerTime = 45;
        }

        if (creep.room.name == "E45S2") {
            var creep2xDeathTime = 11694653;
            var thisCreepDeathTime = 11694700;

            triggerTime = 65;

        }

        if (creep.room.name == "E45S3") {
            triggerTime = 35;
        }


      
        if (creep.ticksToLive < triggerTime) {
          
            //5bbcaf979099fc012e63ad55 is room source ID
            var spawn = creep.room.find(FIND_MY_SPAWNS)[0];      
            var respawnStatus = creep.memory.respawn;
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! creep.memory.respawn is ' + creep.memory.respawn);
            if (respawnStatus == undefined) {
                var name;
                var status 
                
                


                name = spawn.createMiner(spawn, creep.memory.sourceId);
                var spawnStats = false;
                if (spawn.spawning != null) {
                    spawnStatus =  spawn.spawning.name.includes("mine");
                }
             
               
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name);


                if (name == -4 && spawnStatus == true) {
                   creep.memory.respawn = false;
                
                   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                   console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name +",   spawn.spawning.name.includes('mine') is "+ status);
                   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');                
                   
                 
                 
                   console.log('[' + fileName + 'line:' + util.LineNumber() + '] X!C!CC!C!!!CC!C! creep.memory.respawn is ' + creep.memory.respawn);

                }
            }
        }


 //   }

     if (creep.ticksToLive == 75) {
           
        var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
             filter: { structureType: STRUCTURE_SPAWN}
         });
         
         var Spawn1 = spawns[0];
         spawns[0].memory.spawnMiner = false;
 
        }

//#Miner

        util.pickupResources(creep,0); //5bbcafa89099fc012e63af90

        util.repairRoad(creep);
        //let source = Game.getObjectById(creep.memory.sourceId); 5bbcaf979099fc012e63ad59
        let source = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER 
            && s.store[RESOURCE_ENERGY] < 2001
        })[0];

        
        if (container == null || container == undefined) {
            let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
                filter: s => s.structureType == STRUCTURE_CONTAINER 
        //        && s.store[RESOURCE_ENERGY] < 2001
            })[0];
        } 
        else if(container == null || container == undefined)
        {
           // console.log("Role.miner Unable to find a container " + container);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  '+ creep.name + ', '+ creep.room.name + ', Unable to find a container. Container is ' + container  );
            return;
        }

        // if creep is on top of the container
        if (container != null && creep.pos.isEqualTo(container.pos)) {
            // harvest source
            const currentStoredEngery = _.sum(container.store);
          
            if(currentStoredEngery <= 1999){
                creep.harvest(source);
            }
            else
            {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] room ['+ creep.room.name +'] ****** Containter is full! Game.Time: ' + Game.time );
                let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
                    filter: s => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] < 2000
                })[1];


                if (container != null && creep.pos.isEqualTo(container.pos)) {
                    // harvest source
                    const currentStoredEngery = _.sum(container.store);
                  
                    if(currentStoredEngery <= 1999){
                        creep.harvest(source);
                    }
                    else {
                        // move towards it
                        creep.moveTo(container);
                    }    

                }
                // if creep is not on top of the container
                else {
                    // move towards it
                    creep.moveTo(container);
                }      






                
            }
        }
        // if creep is not on top of the container
        else {
            // move towards it
            creep.moveTo(container);
        }
        creep.moveTo(container);
    }
};