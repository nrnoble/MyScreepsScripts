var util = require('Util'); 


module.exports = function () {

    var fileName = "creep Proto ";
    var debugRoomName = "E27S51";
    var debugColor = "Red";

    Creep.prototype.debug = function (textColor, fileName, lineNumber, debugText) {
        console.log('<font color = "' + textColor + '">[' + fileName + 'line:' + lineNumber + '] ' + debugText +'</>');
    }



 //   var containerUnderMiner = creep.room.lookAt(creepCurrentPos)[0];
    Creep.prototype.getObjectAtCreepPos = function(myStructureType)
    {
        const look = this.room.lookAt(this.pos);
        returnValue = undefined;
        look.forEach(function(lookObject) {
           if (lookObject[LOOK_STRUCTURES]  == undefined) {
               return;
           }
        
         //   console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] lookObject[LOOK_STRUCTURES]  is ' + lookObject[LOOK_STRUCTURES]  +" structureType:"+ lookObject[LOOK_STRUCTURES].structureType +'</>');
          
        //console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] lookObject[LOOK_STRUCTURES]  is ' + JSON.stringify(lookObject[LOOK_STRUCTURES]) + '</>');

            if(lookObject.type == LOOK_STRUCTURES &&
                lookObject[LOOK_STRUCTURES].structureType == myStructureType) {
               // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] debug  is ' + lookObject[LOOK_STRUCTURES].structureType  +'</>');
                returnValue = lookObject[LOOK_STRUCTURES];
            
                }
            });

        return returnValue;

    }  

    Creep.prototype.getObjectAtCreepPos2 = function(myStructureType)
    {
        const look = this.room.lookAt(this.pos);
       
      return  look.forEach(function(value,index, _look) {
             if (value.structureType === myStructureType) {
                 return value;
             }

           // return value;
            
            
        });
      
     //   return;


    }

    Creep.prototype.findConstructionSite = function(range)
    {
        const constructionTargets = this.pos.findInRange(FIND_CONSTRUCTION_SITES, range);
        if (constructionTargets.length > 0)
        {
            return constructionTargets[0];
        }else{
            return undefined;
        }
    }

    Creep.prototype.findNearestStructureToRepair = function(range)
    {

        // if (this.room.name == debugRoomName) {
        //     console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + '] findNearestStructureToRepair </>');
         
        //  }
        var structures = this.room.lookForAtArea(LOOK_STRUCTURES, this.pos.y-1, this.pos.x-1, this.pos.y+1, this.pos.x+1, true);

        if (structures == undefined)
        {
            return undefined;
        }

        try {
         //   var structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y-1, creep.pos.x-1, creep.pos.y+1, creep.pos.x+1, true);
         //   console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structures is ' + structures);
           
            var workParts = this.getActiveBodyparts(WORK);
            if (workParts == 0) {
                return -1;
            }

            if (structures == undefined || structures == [])
            {
                return;
            }




            for (let i = 0; i < structures.length; i++) {

                var targetRepairStructure =  structures[i].structure;

                if (targetRepairStructure.structureType != STRUCTURE_ROAD 
                    && targetRepairStructure.structureType != STRUCTURE_CONTAINER
                    && targetRepairStructure.structureType != STRUCTURE_SPAWN
                    && targetRepairStructure.structureType != STRUCTURE_LINK
                    && targetRepairStructure.structureType != STRUCTURE_TERMINAL
                    && targetRepairStructure.structureType != STRUCTURE_RAMPART
                    ) 
                    {
                    
                        if (this.room.name == debugRoomName) {
                    //        console.log('<font color = '+ 'yellow '  + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + '] Skipping targetRepairStructure.structureTyp: ' + targetRepairStructure.structureType +' </>');
                         
                         }
                        continue;
                        return;
                }
               
              // console.log ("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                // if (this.room.name == debugRoomName) {
                //     console.log('<font color = '+ 'yellow '  + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + '] targetRepairStructure: ' + targetRepairStructure +' </>');
                 
                //  }

                var  hitsMax = targetRepairStructure.hitsMax;
                if(targetRepairStructure.structureType == STRUCTURE_RAMPART)
                {
                    
                    hitsMax = 1890000;
                }

                if (targetRepairStructure.hits < hitsMax) {
                    var repairStatus = this.repair(targetRepairStructure);
                    if (this.room.name == debugRoomName) {
                        console.log('<font color = '+ 'green' + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + ']  Miner is repairing structure: '+targetRepairStructure +'</>');
                     
                     }

                //    if (this.room.name == "E46S1") {
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] repairStatus is ' + repairStatus +'</>');
                    // console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);
               //    }                   

                  //  break;

                  return;
                
                }
                else{
                    if (this.room.name == debugRoomName) {
                     //   console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + ']  Miner is NOT repairing structure: '+targetRepairStructure +'</>');
                     
                     }
                }

            
                 
            }
        } catch (e) {
        
            console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + this.room.name + ' ' + this.name + ' Trapped error while repairing roads is ' + e);
        }



    }
    
    Creep.prototype.findNearestLink = function(range)
    {
        const constructionTargets = this.pos.findInRange(FIND_MY_STRUCTURES, range,{filter: {structureType: STRUCTURE_LINK}});
        if (constructionTargets.length > 0)
        {
            return constructionTargets[0];
        }else{
            return undefined;
        }
    }


    // *************************************************************************************
    // Could return undefined or null of creep is in a unclaimed room.
    // *************************************************************************************
    Creep.prototype.findNearestSpawn = function(range)
    {
        // spawn could be undefined or null of creep is in a unclaimed room.
        // const spawn = this.pos.findClosestByRange(FIND_MY_SPAWNS,range);
        // return spawn;

        const spawns = this.pos.findInRange(FIND_MY_STRUCTURES, range,{filter: {structureType: STRUCTURE_SPAWN}});
        if (spawns.length > 0)
        {
            return spawns[0];
        }else{
            return undefined;
        }
    }

    Creep.prototype.pause = function(){
        if (this.memory.pause != undefined)
        {
            return this.memory.pause;
        }
    }

    Creep.prototype.pickupResources = function pickupResources(range){
        util.pickupResources(this,range);
    }
    
    Creep.prototype.repairRoad = function repairRoad(){
        util.repairRoad(this);
    }

    


}