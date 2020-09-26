var util = require('Util');
var fileName = "Miner       ";
//let debugRoomName = "E25S51";
let debugRoomName = "E21S52x";
let debugColor = "green";


module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // get source

        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] the creep name is ' +  creep.name + '  ');

        // death warning
        util.say(creep, "mine ", 300);
        util.stayInTargetRoom(creep);
        util.pickupResources(creep, 2);
        util.minorRepairer(creep);

 
        var nearToterminalStatus = creep.pos.isNearTo(creep.room.terminal);
        var nearToStorageStatus = creep.pos.isNearTo(creep.room.storage);
        var storageFreeCapacity = creep.room.storage.store.getFreeCapacity();
        var nearestLink = creep.findNearestLink(1);
        var nearestSpawn = creep.findNearestSpawn(1);
    

        


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

        if (creep.room.name == "E21S52") {
          //  triggerTime = 50;
          //  triggerTime =  calcTiggerTime(creep, triggerTime) 

            if ( creep.memory.triggerTime != undefined) {
                triggerTime = creep.memory.triggerTime;
            }
            else{
                triggerTime = 50;
                triggerTime =  calcTiggerTime(creep, triggerTime)     

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
               // var spawnStats = false;
                var spawnStatus = false;
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



        // fill contaiuner underneath creep first so that once source has run out of engery, there is energy to be
        // transfered while waiting for energy source to reset
        // if (container!= undefined 
        //     && container.store.getFreeCapacity() != 0  
        //     && creep.store.getFreeCapacity() > 0) {
        //     transferStatus = creep.transfer(container,RESOURCE_ENERGY);
        //     if (creep.room.name == debugRoomName) {
        //         console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transferStatus to container under miner ' + transferStatus +'</>');
             
        //      }
        //      // should not be anything else for miner to do during this tick
        //      return;    
        // }

        
        // **********************************************************************************************
        // if miner is full, then transfers energy to another structure based on priority
        // **********************************************************************************************
        if (creep.store.getFreeCapacity() <=4){
            
            var link2Flag = Game.flags["Link2_" + creep.room.name];
            var source2 = Game.flags["Source2_" + creep.room.name];
            var constructionSitesNearMinor = creep.findConstructionSite(1);
            if (creep.room.name == debugRoomName) {
                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] contructionSiteNearMiner is ' + constructionSitesNearMinor +'</>');
             
             }

            if (constructionSitesNearMinor != undefined) {
                var buildStatus = creep.build(constructionSitesNearMinor);
                if (creep.room.name == debugRoomName) {
                  //  debugColor = "blue";
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] buildStatus is ' + buildStatus +'</>');
                    
                }

            }


            if (creep.room.name == debugRoomName) {
                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.store.getFreeCapacity()  is ' +  creep.store.getFreeCapacity() +'</>');
                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']     creep.store.getCapacity()  is ' +  creep.store.getCapacity() +'</>');
             
             }

             // var spawnNearSource2 = util.getSpawnNearSource2(creep);


            // spawns = source2.pos.findInRange(FIND_STRUCTURES, 3, {
            //     filter: s => (s.structureType == STRUCTURE_SPAWN)
            // });

            // var  spawnNearSource2 = undefined
            // if (spawns.length == 0) {
            //     spawnNearSource2 = spawns[0];
            // }

            //  var nearToterminalStatus = creep.pos.isNearTo(creep.room.terminal);
            //  var nearToStorageStatus = creep.pos.isNearTo(creep.room.storage);
            //  var storageFreeCapacity = creep.room.storage.store.getFreeCapacity();
            //  var nearestLink = creep.findNearestLink(1);
            //  var nearestSpawn = creep.findNearestSpawn(1);

             if (creep.room.name == debugRoomName) {
                 console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX nearestSpawn is ' + nearestSpawn +'</>');
              
              }


             // *************************************************************************************
             // get container structure underneath miner           
             // *************************************************************************************
          //   if (creep.room.name == debugRoomName) {
             if (true) {

              
                var containerUnderMiner = creep.getObjectAtCreepPos(STRUCTURE_CONTAINER);

                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] containerUnderMiner is ' + containerUnderMiner  +'</>');

                if (containerUnderMiner !=  undefined && containerUnderMiner.store.getFreeCapacity() !=0 && energySource.energy != 0 ) {
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] dropping energy </>');
                    var dropEnergyStatus = creep.drop(RESOURCE_ENERGY);
                    if (creep.room.name == debugRoomName) {
                        console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx dropEnergyStatus is ' + dropEnergyStatus +'</>');           
                     }
                }
                 console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] containerUnderMiner is ' + containerUnderMiner +'</>');
              }

            //   if (spawnNearSource2 !=  undefined) {
            //     if (spawnNearSource2.store.getFreeCapacity() > 0 ) {
            //         creep.transfer(spawnNearSource2,RESOURCE_ENERGY);
            //       }
    
            //   }


            //  try {
                
               
            //    if (link2Flag != undefined) {
            //     var link2 = link2Flag.pos.findInRange(FIND_STRUCTURES, 1, {
            //         filter: s => (s.structureType == STRUCTURE_LINK)
            //         })[0];
    
            //         var nearToLink2Status= creep.pos.isNearTo(link2);
            //    }
            //     // var link2 = link2Flag.pos.findInRange(FIND_STRUCTURES, 1, {
            //     // filter: s => (s.structureType == STRUCTURE_LINK)
            //     // })[0];

            //     // var nearToLink2Status= creep.pos.isNearTo(link2);
            //     // var link2Flag = Game.flags["Link2_" + creep.room.name];
            //  }
            //  catch (e) {
            //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']  trapped error ' + e );
            //      console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] link2Flag is ' + link2Flag +'</>');
            //      console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  trapped error ' + e +'</>');

            //  }

             

             if (creep.room.name == debugRoomName) {
                 console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] link2Flag is ' + link2Flag +'</>');
              
              }




        //      var link2 = link2Flag.pos.findInRange(FIND_STRUCTURES, 1, {
        //         filter: s => (s.structureType == STRUCTURE_LINK)
        //         })[0];

        //    var nearToLink2Status= creep.pos.isNearTo(link2);

            //  if (creep.room.name == debugRoomName) {
            //     console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] nearToterminalStatus is ' + nearToterminalStatus +'</>');
            //     console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  nearToStorageStatus is ' + nearToStorageStatus +'</>');
            //     console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  storageFreeCapacity is ' + storageFreeCapacity +'</>');
            //   }




            // *******************************************************************************
            // If spawn is next to minor, make sure it full of energy
            // *******************************************************************************
            if (nearestSpawn != null && (nearestSpawn.store.getFreeCapacity()  == null || nearestSpawn.store.getFreeCapacity() > 0)) {
                if (creep.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] KKKKKKKKKKK nearestSpawn is ' + nearestSpawn + '</>');
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] KKKKKKKKKKK nearestSpawn.store is ' + nearestSpawn.store + '</>');
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] KKKKKKKKKKK nearestSpawn.store.getFreeCapacity() is ' + nearestSpawn.store.getFreeCapacity() + '</>');
                }
            //     if (creep.room.name == debugRoomName) {
            //         debugColor = "red";
            //         console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] where is code here!!!!  nearestSpawn.store.getFreeCapacity(): ' + nearestSpawn.store.getFreeCapacity() +' </>');
            //     }

            //     debugColor = "green";
                        creep.transfer(nearestSpawn,RESOURCE_ENERGY);
            //        return;
        
            }


            // if (creep.room.name == debugRoomName) {
            //     debugColor = "green";
              

            //      if (nearestSpawn != null && (nearestSpawn.store.getFreeCapacity()  == null || nearestSpawn.store.getFreeCapacity() > 0)) {
            //         console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] KKKKKKKKKKK nearestSpawn is ' + nearestSpawn + '</>');
            //         console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] KKKKKKKKKKK nearestSpawn.store is ' + nearestSpawn.store + '</>');
            //         console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] KKKKKKKKKKK nearestSpawn.store.getFreeCapacity() is ' + nearestSpawn.store.getFreeCapacity() + '</>');
                 
            //     //     if (creep.room.name == debugRoomName) {
            //     //         debugColor = "red";
            //     //         console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] where is code here!!!!  nearestSpawn.store.getFreeCapacity(): ' + nearestSpawn.store.getFreeCapacity() +' </>');
            //     //     }

            //     //     debugColor = "green";
            //                 creep.transfer(nearestSpawn,RESOURCE_ENERGY);
            //     //        return;
            //      }else{
            //       //  console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] YYYYYYYYYYYY nearestSpawn.store is ' + nearestSpawn.store.getFreeCapacity() + '</>');

            //      }


            //}


            // if ((nearestSpawn != undefined || nearestSpawn != null) && (nearestSpawn.store.getFreeCapacity() > 0 || nearestSpawn.store.getFreeCapacity() ==null )) {
            //     if (creep.room.name == debugRoomName) {
            //         debugColor = "red";
            //         console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] where is code here!!!!  nearestSpawn.store.getFreeCapacity(): ' + nearestSpawn.store.getFreeCapacity() +' </>');
            //     }
            //     debugColor = "green";
            //         creep.transfer(nearestSpawn,RESOURCE_ENERGY);
            //     return;
            // }





            // *********************************************************************************
            // deposit energy into Storage when next to miner
            // *********************************************************************************
            if (nearToStorageStatus == true && creep.room.storage.store.getFreeCapacity() >= 100 ) {
                var storageTransferStatus = creep.transfer(creep.room.storage,RESOURCE_ENERGY);
                if (creep.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] storageTransferStatus is ' + storageTransferStatus +'</>');
                 }  
                 if (storageTransferStatus == 0) {
                    return;
                }  
             }
            // *********************************************************************************
            // deposit energy into Terminal when next to miner
            // *********************************************************************************
            else if (nearToterminalStatus == true) {
                var transferStatus = creep.transfer(creep.room.terminal,RESOURCE_ENERGY);
                if (creep.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transferStatus is ' + transferStatus +'</>');
                 }
                if (transferStatus == 0) {
                     return;
                }  
            }

            //  else if (nearToLink2Status == true) {
            //     var transferStatus = creep.transfer(link2,RESOURCE_ENERGY);
            //     if (creep.room.name == debugRoomName) {
            //         console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transfer Status To Link2 is ' + transferStatus +'</>');
            //      }
            //      if (transferStatus == 0) {
            //          return;
            //      }  
            //  }



             // *********************************************************************************
             // deposit energy into link next to miner
             // *********************************************************************************
             else if (nearestLink != undefined) {
                var transferStatus = creep.transfer(nearestLink,RESOURCE_ENERGY);
                if (creep.room.name == debugRoomName) {
                    console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transfer Status To Link2 is ' + transferStatus +'</>');
                 }
                 if (transferStatus == 0) {
                     return;
                 }  
             }



       


        } 








        // ************************************************************************
        // if the source is at zero
        // ************************************************************************
        if (creep.room.name == debugRoomName) {
            console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] energySource.energy is ' + energySource.energy +'</>');
            console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] container.store.getFreeCapacity(RESOURCE_ENERGY) ' + container.store.getFreeCapacity(RESOURCE_ENERGY) +'</>');
         
         }

        if (energySource.energy == 0 && container.store.getUsedCapacity(RESOURCE_ENERGY) <= 2000) {
           
            if (creep.room.name == debugRoomName) {
               console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] energySource.energy is ' + energySource.energy +'</>')   
            }
           
            var withDrawStatus = creep.withdraw (container,RESOURCE_ENERGY);
            if (creep.room.name == debugRoomName) {
                console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] withDrawStatus is ' + withDrawStatus +'</>');
             
            }

            return;
        }


        // ************************************************************************
        // Harvest Energy from Source1 or Source2
        // ************************************************************************
        
        if (container != null && creep.pos.isEqualTo(container.pos)) {
            // harvest source
            const currentStoredEngery = _.sum(container.store);

            creep.harvest(energySource);
             if (currentStoredEngery <= 2000) {
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
        // var spawns = creep.room.find(FIND_MY_SPAWNS);
        var spawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS,1);
        if (creep.room.name == debugRoomName) {
            console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] YYYYYYYYYYYY closest spawn to miner is ' + spawn +'</>');
         
         }


       // var spawn = spawns[0];
        var startPos = new RoomPosition(spawn.pos.x, spawn.pos.y, creep.room.name);
        var endPos = new RoomPosition(creep.pos.x, creep.pos.y, creep.room.name);
        var path = PathFinder.search(startPos, endPos);
        new RoomVisual(creep.room).poly(path, {stroke: '#fff', strokeWidth: .15,
        opacity: .2, lineStyle: 'dashed'}); 
        var Distance = path.path.length;
        triggerTime = Distance * 2.5 + (creep.body.length * 3);
        triggerTime = triggerTime -10;
        if (triggerTime < 10) {
            triggerTime = 10;
        }
        creep.memory.triggerTime = triggerTime;
    }
    //return { spawns, spawn, startPos, endPos, path, Distance, triggerTime };
    return  creep.memory.triggerTime;
}