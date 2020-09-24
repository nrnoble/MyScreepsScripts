var util = require('Util'); 


module.exports = function () {

    var fileName = "test      ";

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
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] debug  is ' + lookObject[LOOK_STRUCTURES].structureType  +'</>');
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

    Creep.prototype.findNearestSpawn = function(range)
    {
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