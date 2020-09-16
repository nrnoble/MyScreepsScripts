var util = require('Util');
var fileName = "Miner       ";
let debugRoomName = "E25S51";
let debugColor = "yellow";


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


        


      //  creep.debug("yellow",fileName, util.LineNumber(), "creep.name:" +  creep.name);


        //
        //   if (creep.room.name == "E45S2") {


        /* #region  Respawn before death */
        var triggerTime = 100;




        if (creep.room.name == "E25S52") {
            triggerTime = 100;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
        }

        if (creep.room.name == "E25S51") {
            triggerTime = 100;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
        }

        if (creep.room.name == "E27S51") {
            triggerTime = 100;
            triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
        }



        /* #region  Call Respawn XX ticks before death. Don't randomally mess with logic.  */
        if (creep.ticksToLive < triggerTime) {

            //5bbcaf979099fc012e63ad55 is room source ID
            var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
            var respawnStatus = creep.memory.respawn;
            // respawnStatus = undefined;
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! creep.memory.respawn is ' + creep.memory.respawn);
            if (respawnStatus == undefined) {
                var name;
                var status;

                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! creep.memory.respawn is ' + creep.memory.respawn);




                name = spawn.createMiner(spawn, creep.memory.sourceId);
              //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creating miner is ' + name + ' </>');
                var spawnStats = false;
                if (spawn.spawning != null) {
                    spawnStatus = spawn.spawning.name.includes("mine");
                }


                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name);


                if (name == -4 && spawnStatus == true) {
                    creep.memory.respawn = false;

                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.name ' + spawn.name + ",   spawn.spawning.name.includes('mine') is " + status);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.respawn is ' + creep.memory.respawn);

                }
            }
        }

        /* #endregion */

        //   }

        if (creep.ticksToLive == 75) {

            var spawns = creep.room.find(FIND_MY_STRUCTURES, {
                filter: { structureType: STRUCTURE_SPAWN }
            });

            var Spawn1 = spawns[0];
            spawns[0].memory.spawnMiner = false;

        }

        /* #endregion */






        let energySource = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let container = energySource.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
              //  && s.store[RESOURCE_ENERGY] < 2001
        })[0];


        if (container == null || container == undefined) {
            let container = energySource.pos.findInRange(FIND_STRUCTURES, 1, {
                filter: s => s.structureType == STRUCTURE_CONTAINER
                //        && s.store[RESOURCE_ENERGY] < 2001
            })[0];
        }
        else if (container == null || container == undefined) {
            // console.log("Role.miner Unable to find a container " + container);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + creep.name + ', ' + creep.room.name + ', Unable to find a container. Container is ' + container);
            return;
        }



         if (creep.store.getFreeCapacity() <=4){
            
            debugColor = "green";
            if (creep.room.name == debugRoomName) {
                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.store.getFreeCapacity()  is ' +  creep.store.getFreeCapacity() +'</>');
                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']     creep.store.getCapacity()  is ' +  creep.store.getCapacity() +'</>');
             
             }

             var nearToterminalStatus = creep.pos.isNearTo(creep.room.terminal);
             var nearToStorageStatus = creep.pos.isNearTo(creep.room.storage);
             var storageFreeCapacity = creep.room.storage.store.getFreeCapacity();
             
             try {
                var link2Flag = Game.flags["Link2_" + creep.room.name];
               
               if (link2Flag != undefined) {
                var link2 = link2Flag.pos.findInRange(FIND_STRUCTURES, 1, {
                    filter: s => (s.structureType == STRUCTURE_LINK)
                    })[0];
    
                    var nearToLink2Status= creep.pos.isNearTo(link2);
               }
                // var link2 = link2Flag.pos.findInRange(FIND_STRUCTURES, 1, {
                // filter: s => (s.structureType == STRUCTURE_LINK)
                // })[0];

                // var nearToLink2Status= creep.pos.isNearTo(link2);
                // var link2Flag = Game.flags["Link2_" + creep.room.name];
             }
             catch (e) {
                 console.log('[' + fileName + 'line:' + util.LineNumber() + ']  trapped error ' + e );
                 console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] link2Flag is ' + link2Flag +'</>');
                 console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  trapped error ' + e +'</>');

             }

             

             if (creep.room.name == debugRoomName) {
                 console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] link2Flag is ' + link2Flag +'</>');
              
              }




        //      var link2 = link2Flag.pos.findInRange(FIND_STRUCTURES, 1, {
        //         filter: s => (s.structureType == STRUCTURE_LINK)
        //         })[0];

        //    var nearToLink2Status= creep.pos.isNearTo(link2);

             if (creep.room.name == debugRoomName) {
               //  console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] nearToterminalStatus is ' + nearToterminalStatus +'</>');
               //  console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  nearToStorageStatus is ' + nearToStorageStatus +'</>');
              //   console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  storageFreeCapacity is ' + storageFreeCapacity +'</>');
              }

              
              if (nearToStorageStatus == true && creep.room.storage.store.getFreeCapacity() >= 100 ) {
                var storageTransferStatus = creep.transfer(creep.room.storage,RESOURCE_ENERGY);
                if (creep.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] storageTransferStatus is ' + storageTransferStatus +'</>');
                 }  
                 if (storageTransferStatus == 0) {
                    return;
                }  

             }
             else if (nearToterminalStatus == true) {
                var transferStatus = creep.transfer(creep.room.terminal,RESOURCE_ENERGY);
                if (creep.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transferStatus is ' + transferStatus +'</>');
                 }
                 if (transferStatus == 0) {
                     return;
                 }  
             }

             else if (nearToLink2Status == true) {
                var transferStatus = creep.transfer(link2,RESOURCE_ENERGY);
                if (creep.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transfer Status To Link2 is ' + transferStatus +'</>');
                 }
                 if (transferStatus == 0) {
                     return;
                 }  
             }



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


        } 

        // if (creep energy is not full){

            // if (!creep.pos.nearTo(energySource)){
               // creep.travelTo(energySource);
            //}
            //else {

                // harverest energy from source until creep is full

            //}
        //}







        // *************************************************
        // if creep is on top of the container
        // *************************************************

        // if the source is at zero
        if (energySource.energy == 0 && container.store.getFreeCapacity(RESOURCE_ENERGY) >0) {
           
           if (creep.room.name == debugRoomName) {
               console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] energySource.energy is ' + energySource.energy +'</>');
            
            }
           
            var withDrawStatus = creep.withdraw (container,RESOURCE_ENERGY);
            if (creep.room.name == debugRoomName) {
                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] withDrawStatus is ' + withDrawStatus +'</>');
             
             }

            return;
        }


        if (container != null && creep.pos.isEqualTo(container.pos)) {
            // harvest source
            const currentStoredEngery = _.sum(container.store);

            creep.harvest(energySource);
             if (currentStoredEngery <= 1999) {
            //     creep.harvest(energySource);
             }
            else {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] room [' + creep.room.name + '] ****** Containter is full! Game.Time: ' + Game.time);
                let container = energySource.pos.findInRange(FIND_STRUCTURES, 1, {
                    filter: s => s.structureType == STRUCTURE_CONTAINER // && s.store[RESOURCE_ENERGY] < 2000
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
        // if creep is not on top of the container
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