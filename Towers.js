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

            var maxWallHits = 160000;
            var maxRampartsHits = 1000000;
            
            // for each tower
            for (let tower of towers) {


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
                }


                if (firstSpawn.memory.maxRampartsHits == undefined) {
                    firstSpawn.memory.maxRampartsHits = maxRampartsHits;
                }
                else{
                    maxRampartsHits = firstSpawn.memory.maxRampartsHits;
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
                    if (invadersCount > 0) {

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
                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!! evilCreep.getActiveBodyparts(HEAL) status  is ' + status);

                            if (evilCreepHeal.getActiveBodyparts(HEAL) > 0) {
                                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] HEAL ATTACK HEAL ATTACK HEAL ATTACK firing on evil creep status  is ' + status);
                                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + tower.room.name + ' HEAL ATTACK HEAL ATTAC ATTACK firing on evil creep status  is ' + status);

                                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] creep has heal parts is ' + +'</>');
                                // // if (tower.room.name == "W14S18") {
                                // //     if (evilCreepHeal.pos.y > 9 && evilCreepHeal.pos.y < 46) {
                                // //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] attack1 is ' + '</>');
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

                                tower.attack(evilCreepHeal);
                            }

                        }
                        else {
                            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] evilCreepHeal is ' + evilCreepHeal + '</>');

                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + tower.room.name + ' HEAL ATTACK HEAL ATTAC ATTACK firing on evil creep status  is ' + status);
                            tower.attack(evilCreep);
                            continue;
                        }





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


                // if (creep != null && tower.energy > 300)
                if (tower.energy > 599) {


        //          console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] maxWallHits is ' + maxWallHits +'</>');
                    var structure = tower.pos.findClosestByPath(FIND_STRUCTURES, {
                        // the second argument for findClosestByPath is an object which takes
                        // a property called filter which can be a function
                        // we use the arrow operator to define it
                        //filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
                        filter: (s) => s.structureType == STRUCTURE_ROAD && s.hits < s.hitsMax
                            || s.structureType == STRUCTURE_WALL && s.hits <   maxWallHits
                            || s.structureType == STRUCTURE_RAMPART && s.hits < maxRampartsHits 
                            || s.structureType == STRUCTURE_CONTAINER && s.hits < s.hitsMax

                    });
                    //  filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL});


                    // if one is found...750000
                    if (structure != undefined) {

                        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                        if (structure.hitsMax == 750000 && structure.structureType == STRUCTURE_ROAD && structure.hits < 750000) {
                            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                            var status = tower.repair(structure);
                        }
                        else if (structure.structureType == STRUCTURE_RAMPART && structure.hits < 100000) {
                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] Repairing rampart hitz is ' + structure.hits + " type  is " + structure.structureType);
                            var status = tower.repair(structure);
                        }
                        else if (structure.structureType == STRUCTURE_WALL && structure.hits < maxWallHits) {
                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] Repairing rampart hitz is ' + structure.hits + " type  is " + structure.structureType);
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


