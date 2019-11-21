var util = require('Util'); 
//************************* */
var fileName = "towersx        ";

    //************************************** */
    // find all towers
    //************************************** */

module.exports =
{
 
        run: function() 
        {
        
   // //************************************** */
    // // find all towers
    // //************************************** */
    
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
  
       //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] towers.length is ' + towers.length +'</>'); 
    // for each tower
    for (let tower of towers) {
        
      //  tower.memory.test = "test";
        // find closes hostile creep that has a heal part.
       
        
       // var invadersCount = tower.room.find(FIND_HOSTILE_CREEPS).length;
       var mycreeps = tower.room.find(FIND_MY_CREEPS);
     //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  @@@@@@ @@@@ mycreeps is ' + mycreeps);

         var results = _.filter(mycreeps,_.filter({'owner': 'nrnoble'}));   
    // /     console.log('[' + fileName + 'line:' + util.LineNumber() + ']  @@@@@@ @@@@ results is ' + results);
       // var mycreeps  = tower.room.find(FIND_MY_CREEPS);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + ']  JSON.stringify(mycreeps) is ' + JSON.stringify(mycreeps) );

    var invadersCount = tower.room.find(FIND_HOSTILE_CREEPS).length;
   // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  JSON.stringify(mycreeps) is ' + JSON.stringify(mycreeps) );
    
    if (invadersCount > 0) {
      
        if (invadersCount > 2) {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room: ' + tower.room.name + ' WARNING!!!!!! invadersCount is ' + invadersCount +'</>');
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room: ' + tower.room.name + ' WARNING!!!!!! invadersCount is ' + invadersCount +'</>');
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room: ' + tower.room.name + ' WARNING!!!!!! invadersCount is ' + invadersCount +'</>');
            
            
            //var spawns = tower.room.find(FIND_MY_STRUCTURES,{filter: {structureType: StructureSpawn}});
            //var spawn = spawns[0];
            var spawn = util.getSpawn(tower.room);
            // if (spawn.memory.safeModeCountDown == undefined) {
            //     spawn.memory.safeModeCountDown = 0;
            // }
          //  spawn.memory.safeModeCountDown = spawn.memory.safeModeCountDown + 1;
            // if (spawn.memory.safeModeCountDown > 90) {
            //     //activate safe mode
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room: ' + tower.room.name + ' Activating Safemode</>');
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room: ' + tower.room.name + ' Activating Safemode</>');
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room: ' + tower.room.name + ' Activating Safemode</>');
            //     // sent email
            //     spawn.memory.safeModeCountDown = 0;
            // }
            // else{
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] spawn.memory.safeModeCountDown  is ' + spawn.memory.safeModeCountDown  +'</>');
            // }


                    //     var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
        //          filter: { structureType: STRUCTURE_SPAWN}
        //      });
             
        //      var Spawn1 = spawns[0];

        

        }
        else{

        }


        var evilCreep = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        var evilCreepHeal = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: (s) => s.getActiveBodyparts(HEAL)});
        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@ww@@@ evilcreep is ' + evilCreep);
        
        // if one is found...

        var invaders = tower.room.find(FIND_HOSTILE_CREEPS);
        var mycreeps = tower.room.find(FIND_MY_CREEPS);


 //       Once I have a array of invaders, how can I use lodash to filter that array for invaders that have HEAL part.
        // I have not used lodash much. How can I filter an array for invaders that have HEAL part
       // `var invaders`

      
        if (evilCreepHeal != undefined) {
            // ...FIRE!
         
            var badguycreep = Game.getObjectById("5d6b2c15a15b166db2e08304");
             var status = evilCreepHeal.getActiveBodyparts(HEAL)   ;
             console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!! evilCreep.getActiveBodyparts(HEAL) status  is ' + status);

            if (evilCreepHeal.getActiveBodyparts(HEAL) > 0){
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] HEAL ATTACK HEAL ATTACK HEAL ATTACK firing on evil creep status  is ' + status);
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + tower.room.name + ' HEAL ATTACK HEAL ATTAC ATTACK firing on evil creep status  is ' + status);
              
               tower.attack(evilCreepHeal); 
                continue;
            }
          
        }
        else
        {
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + tower.room.name + ' HEAL ATTACK HEAL ATTAC ATTACK firing on evil creep status  is ' + status);
            tower.attack(evilCreep);
            continue;
        }


    }


    




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
        if (targetCreep != null && targetCreep.my == true && targetCreep.hits < targetCreep.hitsMax ) {
            // ...heal
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] healing creep ' + targetCreep);
            tower.heal(targetCreep);
            continue;
        }


        // if (creep != null && tower.energy > 300)
        if (tower.energy > 699)
        {
            var structure = tower.pos.findClosestByPath(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
//                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL &&   s.structureType != STRUCTURE_RAMPART});
                //filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL });
                filter: (s) =>  
                s.hits < s.hitsMax && s.structureType == STRUCTURE_ROAD 
                || s.hits < s.hitsMax && s.structureType == STRUCTURE_CONTAINER
                //|| s.hits < 350000 && s.structureType == STRUCTURE_WALL
                || s.hits < 1005000 && s.structureType == STRUCTURE_RAMPART
            });

//             var structure = tower.pos.findClosestByPath(FIND_STRUCTURES, {
//                 // the second argument for findClosestByPath is an object which takes
//                 // a property called filter which can be a function
//                 // we use the arrow operator to define it
// //                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL &&   s.structureType != STRUCTURE_RAMPART});
//                 //filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL });
//                 filter: (s) =>  
//                // s.hits < s.hitsMax && s.structureType == STRUCTURE_ROAD 
//                // || s.hits < s.hitsMax && s.structureType == STRUCTURE_CONTAINER
//                 s.hits < 350000 && s.structureType == STRUCTURE_WALL
//                // || s.hits < 1005000 && s.structureType == STRUCTURE_RAMPART
//             });







        // if one is found...750000
                if (structure != undefined)
                {
                    
                    // const rampart = new RoomPosition(35, 2, 'E44S2');
                    // if (structure.pos.isEqualTo(rampart)) {
                    //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] rampart found is ' +'</>');
                    // }



                 //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!!! Structure is defined as ' + structure.structureType);
                     if (structure.hitsMax == 750000 && structure.structureType == STRUCTURE_ROAD && structure.hits < 750000)
                     {
                     //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] XXXXXXXX Structure is defined as ' + structure.structureType);
                        var status = tower.repair(structure);
                     }

                     else if (structure.structureType == STRUCTURE_RAMPART) {
                        const reserveredLocation = new RoomPosition(35, 2, 'E44S2');
                        if (structure.pos.isEqualTo(reserveredLocation)) {
                            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] rampart found is ' +'</>');
                        }
                        
                        if (structure.hits < 1005000) {
                             
                         
                        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] Repairing rampart hitz is '+ structure.hits + " type  is " + structure.structureType);
                            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Repairing rampart hitz is '+ structure.hits + " type  is " + structure.structureType +'</>');
                            var status = tower.repair(structure);
                        }
                    }

                    else if (structure.structureType == STRUCTURE_WALL) {
                        // const reserveredLocation = new RoomPosition(35, 2, 'E44S2');
                        // if (structure.pos.isEqualTo(reserveredLocation)) {
                        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] rampart found is ' +'</>');
                        // }
                        
                        if (structure.hits < 350000) {
                             
                         
                     //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] Repairing rampart hitz is '+ structure.hits + " type  is " + structure.structureType);
                            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room: ' + tower.room.name + ' Repairiing wall hitz is '+ structure.hits + " type  is " + structure.structureType +'</>');
                            var status = tower.repair(structure);
                        }
                    }


                     else{
                       // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Else Repairing structure is '+ structure.hits + " type  is " + structure.structureType + '</>');
                        var status = tower.repair(structure);
                        if(status != 0){
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
                 else{   


            //    var status = tower.repair(structure);
            //    if(status != 0){
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + ']   Repair Status is ' + status);      
            //    }
            }

        }

     }


    }
}
    
    
