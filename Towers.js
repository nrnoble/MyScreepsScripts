var util = require('Util');
//************************* */
var fileName = "towersx        ";

//************************************** */
// find all towers
//************************************** */

module.exports =
    {

        run: function () {

            // //************************************** */
            // // find all towers
            // //************************************** */

            var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);

            var maxWallHits = 100000;
            var maxRampartsHits = 1100000;
            var debugRoomName = "E21S52x"; 
            var towerId = 0;

            // for each tower
            for (let tower of towers) {

                towerId++;
             //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  tower.room.Test is ' + tower.room.Test  +'</>');
                //  tower.memory.test = "test";
                // find closes hostile creep that has a heal part.
            //   var room_1 = Object.keys(Game.rooms)[0].name;


            // Room.prototype.getSpawns = function(): StructureSpawn[] {
            //     return this.find(FIND_MY_SPAWNS) as StructureSpawn[];
            // };



//                var firstSpawn = tower.room.find(FIND_MY_SPAWNS)[0];
              //  var firstSpawn = tower.room.getSpawns();
            
            
               // var firstSpawn = tower.room.getFirstSpawn;
                var firstSpawn = tower.room.find(FIND_MY_SPAWNS)[0];
            
                if (firstSpawn.memory.maxWallHits == undefined) {
                    firstSpawn.memory.maxWallHits = maxWallHits;
                }
                else{
                    
                    maxWallHits =  firstSpawn.memory.maxWallHits;

                    if (Game.time % 100 == 0 && tower.room.storage.store[RESOURCE_ENERGY] > 998000) {
                        firstSpawn.memory.maxWallHits = firstSpawn.memory.maxWallHits //+1667;
                        maxWallHits =  firstSpawn.memory.maxWallHits + 1000;
                    }
                    
                    


                }


                if (firstSpawn.memory.maxRampartsHits == undefined) {
                    firstSpawn.memory.maxRampartsHits = maxRampartsHits;
                }
                else{
                    if (Game.time % 100 == 0 && tower.room.storage.store[RESOURCE_ENERGY] > 998000) {
                        if (firstSpawn.name != "E21S52") {
                            firstSpawn.memory.spawnRampartHits = firstSpawn.memory.spawnRampartHits + 200;
                            }
                        }


                        spawnRampartHits = firstSpawn.memory.spawnRampartHits;

                        if(tower.room.storage.store[RESOURCE_ENERGY] > 998000)
                        {
                            spawnRampartHits =  300000000;

        
                        }
        

                    if (Game.time % 200 == 0 && tower.room.storage.store[RESOURCE_ENERGY] > 998000) {
                        if (firstSpawn.name != "E21S52") {
                            firstSpawn.memory.maxRampartsHits = firstSpawn.memory.maxRampartsHits + 75;  
                        }
                    }
                    
                    maxRampartsHits = firstSpawn.memory.maxRampartsHits;

                }



             

                // maxRampartsHits
                if (tower.room.name == debugRoomName) {
                    // console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  is ' +  +'</>');
                     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] 1maxRampartsHits is ' + maxRampartsHits + '</>');
                  
                  }


           //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  firstSpawn is ' + firstSpawn +'</>');

             // var rampartMaxHits =  firstSpawn.memory.rampartMaxHits;
               // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  JSON.stringify(tower.room) is ' + JSON.stringify(tower.room)  +'</>');

            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  rampartMaxHits is ' + rampartMaxHits +'</>');
                 // var invadersCount = tower.room.find(FIND_HOSTILE_CREEPS).length;
                var mycreeps = tower.room.find(FIND_MY_CREEPS);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  @@@@@@ @@@@ mycreeps is ' + mycreeps);

                var results = _.filter(mycreeps, _.filter({ 'owner': 'nrnoble' }));
                // /     console.log('[' + fileName + 'line:' + util.LineNumber() + ']  @@@@@@ @@@@ results is ' + results);
                // var mycreeps  = tower.room.find(FIND_MY_CREEPS);
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + ']  JSON.stringify(mycreeps) is ' + JSON.stringify(mycreeps) );

                var invadersCount = tower.room.find(FIND_HOSTILE_CREEPS).length;
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  JSON.stringify(mycreeps) is ' + JSON.stringify(mycreeps) );

                var roomController = tower.room.controller;
                var safeModeTimeRemaining = roomController.safeMode;


                // safemode is undefined when not active, otherwise it has a count down value
                // there no point in attacking invaders during safeMode, just a waste of energy.
                /* #region  Attack only when Safe mode is undefied. */
                if (safeModeTimeRemaining == undefined) {
                    if (invadersCount == 1) {

                        var evilCreep = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                        var evilCreepHeal = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, { filter: (s) => s.getActiveBodyparts(HEAL) });
                        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@ww@@@ evilcreep is ' + evilCreep);

                        // if one is found...

                        var invaders = tower.room.find(FIND_HOSTILE_CREEPS);
                        var mycreeps = tower.room.find(FIND_MY_CREEPS);


                        //       Once I have a array of invaders, how can I use lodash to filter that array for invaders that have HEAL part.
                        // I have not used lodash much. How can I filter an array for invaders that have HEAL part
                        // `var invaders`

                        if (tower.room.name == "W14S18") {
                            if ((evilCreep.pos.y > 7 && evilCreep.pos.y < 49) || evilCreep.pos.x > 46 ) {
                               
                                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] attack1 is ' + '</>');
                                tower.attack(evilCreep);
                                continue;
                            }
                        }
                        else if (evilCreepHeal != undefined) {
                            // ...FIRE!

                            //   var badguycreep = Game.getObjectById("5d6b2c15a15b166db2e08304");
                            var status = evilCreepHeal.getActiveBodyparts(HEAL);
                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!sss  evilCreep.getActiveBodyparts(HEAL) status  is ' + status);

                            if (evilCreepHeal.getActiveBodyparts(HEAL) > 0) {
                                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] HEAL ATTACK HEAL ATTACK HEAL ATTACK firing on evil creep status  is ' + status);
                                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + tower.room.name + ' HEAL ATTACK HEAL ATTAC ATTACK firing on evil creep status  is ' + status);

                                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] XXXXXXX creep has heal parts is ' + status +'</>');
                                // // if (tower.room.name == "W14S18") {
                                // //     if (evilCreepHeal.pos.y > 9 && evilCreepHeal.pos.y < 46) {
                                // //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.n ame + '] attack1 is ' + '</>');
                                // //          tower.attack(evilCreepHeal);
                                // //         continue;
                                // //     }
                                // // }
                                // // else {
                                // //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] creep DOES NOT HAVE heal parts is ' +  +'</>');

                                // //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] attack2 is ' + '</>');

                                // //     //  tower.attack(evilCreepHeal);
                                // //     continue;
                                // // }

                                if (evilCreep.owner.username != "Sky-Net") {
                                  
                                  var attackStatus =  tower.attack(evilCreepHeal);
                     //             console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] attackStatus is ' + attackStatus +'</>');
                                }
                               // tower.attack(evilCreepHeal);
                               continue;
                            }

                        }
                        else {
                            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] evilCreepHeal is ' + evilCreepHeal + '</>');

                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + tower.room.name + ' HEAL ATTACK HEAL ATTAC ATTACK firing on evil creep status  is ' + status);
                           
                            if (evilCreep.owner.name != "Sky-Net") {
                                tower.attack(evilCreep);
                            }
                            //tower.attack(evilCreep);
                           
                            continue;
                        }





                    }
                    else
                    {
                    //   hostileCreeps =  tower.room.find(FIND_HOSTILE_CREEPS)
                    //   if (towerId % 2 == 0) {
                    //     var attackStatus =  tower.attack(evilCreepHeal[towerId]);
                    //     //
                    //   } 
                    //   else if(towerId % 3 == 0){
                    //     var attackStatus =  tower.attack(evilCreepHeal[towerId]);
                    //   } 
                    }

                }


                //heal
                /* #region  Tower Heals damaged creeps */
                var damagedCreep = tower.pos.findClosestByRange(FIND_MY_CREEPS, { filter: s => s.hits < s.hitsMax });
                if (damagedCreep != undefined) {
                    tower.heal(damagedCreep);
                }
                /* #endregion */



                /* #endregion */






                // if (evilCreep == null) {


                //     //  tower.memory.test = "test";
                //     // find closes hostile creep
                //     var evilCreep = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] evilcreepevilcreepevilcreepevilcreep evilcreep is ' + evilCreep);
                //     // if one is found...
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] firing on evil creep status  is ' + status);
                //     tower.attack(evilCreep);
                //     continue;

                // }


                var targetCreep = tower.pos.findClosestByRange(FIND_CREEPS);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] targetCreep.my is ' + targetCreep.my);




                // if one is found...
                if (targetCreep != null && targetCreep.my == true && targetCreep.hits < targetCreep.hitsMax) {
                    // ...heal
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] healing creep ' + targetCreep);
                    tower.heal(targetCreep);
                    continue;
                }
            
            //    console.log('test')
                // if(tower.room.name == "E25S1"){
                //     console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] maxWallHits is ' + maxWallHits +'</>');
                // }

               
                // if (creep != null && tower.energy > 300)
                if (tower.energy > 599) {

                    if(tower.room.name == "E25S51"){
                        console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] maxWallHits is ' + maxWallHits +'</>');
                    }

                    var structure = tower.pos.findClosestByPath(FIND_STRUCTURES, {
                        // the second argument for findClosestByPath is an object which takes
                        // a property called filter which can be a function
                        // we use the arrow operator to define it
                        //filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
                        filter: (s) => s.structureType == STRUCTURE_ROAD && s.hits < s.hitsMax
                            || s.structureType == STRUCTURE_WALL && s.hits <   maxWallHits
                                && s.pos.y >= 24
                                && s.id != "5f48b794b6228e24a0785de3" 
                                && s.id != "6002b6364327f569bab92f45" // 11,6
                                && s.id != "6002b6417751e2416a8cf963" 
                                && s.id != "6002b621c2d8d92c2239d707" // 8,6
                                && s.id != "6002b64c095866dda7d4160c" 
                                && s.id != "6002b62c330db8d34d50f361"  // 11,5
                                && s.id != "6002b64c095866dda7d4160c"  // 8,6
                                && s.id != "6002b61622fe5b0531d0f159"  // 8,4
                                && s.id != "6002b60c6f9a2a16d2698414"  // 8,3
                                && s.id != "6002b65876b38a6cf4e62c62"  // 8,2
                                && s.id != "6002b601330db8533350f34e"  // 9,2
                                
                                
                                

                            || s.structureType == STRUCTURE_RAMPART && s.hits < maxRampartsHits
                            || s.structureType == STRUCTURE_CONTAINER && s.hits < s.hitsMax
                            && s.id != "5f3cc42d516442320c95e5a9"  // E25S1 10,4
                            && s.id != "5f94c6e3c27fd1514042dc92"  // E25S2 41,13
                            

                            
                            || s.structureType == STRUCTURE_RAMPART && s.pos.isEqualTo(firstSpawn) && s.hits < spawnRampartHits
                            || s.structureType == STRUCTURE_RAMPART && s.pos.isEqualTo(firstSpawn.room.storage) && s.hits < spawnRampartHits    

                    });
                    //  filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL});
                  
            
                    // if (tower.room.name == "E25S52") {
                    //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                        
                    // }


                    // if one is found...750000
                    if (structure != undefined) {

                        if (tower.room.name == "E25S52x") {
                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                            
                        }
                        
                        
                        if (structure.hitsMax == 750000 && structure.structureType == STRUCTURE_ROAD && structure.hits < 750000) {
                            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                            var status = tower.repair(structure);
                        }
                        else if (structure.structureType == STRUCTURE_RAMPART && structure.hits < 100000) {
                            //console.log('[' + fileName + 'line:' + util.LineNumber() + '] 222 Repairing rampart hitz is ' + structure.hits + " type  is " + structure.structureType);
                            
                            if (tower.room.name == debugRoomName) {
                                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  structure is ' + structure  +'</>');
                                
                            }
                         
                         
                            var status = tower.repair(structure);
                        }
                        else if (structure.structureType == STRUCTURE_WALL && structure.hits < maxWallHits) {
                         //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] Repairing rampart hitz is ' + structure.hits + " type  is " + structure.structureType);
                            var status = tower.repair(structure);
                        }
                        else {



                            var status = tower.repair(structure);
                            if (status != 0) {
                                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  tower is repairing ' + structure.structureType + '". Repair Status is ' + status);
                            }

                        }

                    }
                    //  else if ( structure != undefined && struture.structureType == STRUCTURE_RAMPART)
                    //  {
                    //      if (structure.hits < 75000){
                    //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType); 
                    //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] Tower is repainging rampart  Hits remainging: ' + structure.hits); 

                    //         var status = tower.repair(structure);
                    //      }
                    //  }
                    else {


                        //    var status = tower.repair(structure);
                        //    if(status != 0){
                        //     console.log('[' + fileName + 'line:' + util.LineNumber() + ']   Repair Status is ' + status);      
                        //    }
                    }

                }

            }


        }
    }


