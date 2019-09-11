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
  

    // for each tower
    for (let tower of towers) {
        
      //  tower.memory.test = "test";
        // find closes hostile creep
        var evilCreep = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
       // console.log('[' + fileName + 'line:' + util.LineNumber() + '] evilcreep is ' + evilCreep);
        // if one is found...
        if (evilCreep != undefined) {
            // ...FIRE!
         
            var badguycreep = Game.getObjectById("5d6b2c15a15b166db2e08304");
             var status = evilCreep.getActiveBodyparts(HEAL)   ;
             console.log('[' + fileName + 'line:' + util.LineNumber() + '] firing on evil creep status  is ' + status);

            if (evilCreep.getActiveBodyparts(HEAL) > 0){
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] firing on evil creep status  is ' + status);
              
               tower.attack(evilCreep);
              
                continue;
            }

                console.log('[' + fileName + 'line:' + util.LineNumber() + '] firing on evil creep status  is ' + status);
               tower.attack(evilCreep);
                continue;
          
        }
      
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
        if (tower.energy > 749)
        {
            var structure = tower.pos.findClosestByPath(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL &&   s.structureType != STRUCTURE_RAMPART});

        // if one is found...750000
                if (structure != undefined)
                {
                    
                 //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                     if (structure.hitsMax == 750000 && structure.structureType == STRUCTURE_ROAD && structure.hits < 750000)
                     {
                       // console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                        var status = tower.repair(structure);
                     }
                     else if (structure.structureType == STRUCTURE_RAMPART && structure.hits < 100000) {
                        console.log('[' + fileName + 'line:' + util.LineNumber() + '] Repairing rampart hitz is '+ structure.hits + " type  is " + structure.structureType);
                        var status = tower.repair(structure);
                     }
                     else{

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
    
    