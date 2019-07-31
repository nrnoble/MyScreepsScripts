// var roleUpgrader = require('role.upgrader');
// var util = require('Util'); 

// module.exports = {
//     // a function to run the logic for this role
//     run: function (creep) {
//         return;
        
        
//         // if target is defined and creep is not in target room
//         if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
//             // find exit to target room
//             var exit = creep.room.findExitTo(creep.memory.target);
//             // move to exit
//             creep.moveTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
//             // return the function to not do anything else
//             return;
//         }

//         // if creep is trying to complete a constructionSite but has no energy left
//         if (creep.memory.working == true && creep.carry.energy == 0) {
//             // switch state
//             creep.memory.working = false;
//         }
//         // if creep is harvesting energy but is full
//         else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
//             // switch state
//             creep.memory.working = true;
//         }

//         // if creep is supposed to complete a constructionSite
//         if (creep.memory.working == true) {
//             // find closest constructionSite
//             var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
//             // if one is found
//             if (constructionSite != undefined) {
//                 // try to build, if the constructionSite is not in range
//                 if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
//                     // move towards the constructionSite
//                     creep.moveTo(constructionSite, { visualizePathStyle: { stroke: '#ffaa00' } });
//                 }
//             }
//             // if no constructionSite is found
//             else {
//                     // go upgrading the controller
//                     roleUpgrader.run(creep);
//             }
//         }
//         // if creep is supposed to get energy
//         else {
//             // find closest container
//             let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
//                 filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
//                     s.store[RESOURCE_ENERGY] > 0
//             });
//             // if one was found
//             if (container != undefined) {
//                 // try to withdraw energy, if the container is not in range
//                 if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//                     // move towards it
//                     creep.moveTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
//                 }
//             }
//             else {
//                 // find closest source
//                // [source #5bbcaf979099fc012e63ad55]
//                 var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);

           
//                 creep.memory.cachedSource = "5bbcaf979099fc012e63ad55";

//                 var myRoomSource = Game.getObjectById("5bbcaf979099fc012e63ad55")
//                 //console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " myRoomSource (" + myRoomSource + ")");

                 
                
//                 //var source = creep.memory.cachedSource;
//                /// console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " moveTo (" + source.Id + ")");
//                 // if (source == null)
//                 // {
//                 //     source = new RoomPosition(35, 3, 'E44S2');
//                 // }
//                 // try to harvest energy, if the source is not in range
               

//                 if (creep.harvest(myRoomSource) == ERR_NOT_IN_RANGE) {
//                     // move towards it
//                 console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " is moving closer");

//                     creep.moveTo(myRoomSource, { visualizePathStyle: { stroke: '#ffaa00' } });
//                 }
//             }
//         }
//     }
// };


var util = require('Util'); 
var fileName = "Test        ";

 ///creep.carry.energy == creep.carryCapacity

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // get source
        
        //  if (creep.room.name = "E44S2")
        //  {

        //     if (creep.carry.energy > 0)      
        //     {
        //         upgrade concoller
        //           var myRoomSource = Game.getObjectById("5bbcaf979099fc012e63ad56")
        //           creep.upgradeController(myRoomSource);
        //     }
        //     else
        //     {
        //        console.log(' someFile ' + util.LineNumber() + '] ' +  creep.name + 'TEST');
        //            myTestPos = new RoomPosition(27, 24, 'E45S2');
        //            var status = creep.moveTo(myTestPos);
        //     }


    

        // }

       // console.log('Test ' + util.LineNumber() + '] ' +  creep.name + 'creep.carry.energy == creep.carryCapacity IS' + creep.carry.energy == creep.carryCapacity);

        // myTestPos = new RoomPosition(28, 33, 'E44S2');
        
        
     //   var engergySource_E45S2S = Game.getObjectById("5bbcafa89099fc012e63af8f") //ENERGY SOURCE in room E45S2
        var engergySource_E45S2S = Game.getObjectById("5bbcafa89099fc012e63af8f") //ENERGY SOURCE in room E45S2
        var roomcontroller_E44S2 = Game.getObjectById("5bbcaf979099fc012e63ad56"); //room controller for E44S2

      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' engergySource_E45S2S ' + engergySource_E45S2S);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' roomcontroller_E44S2 ' + roomcontroller_E44S2);

        creep.harvest(engergySource_E45S2S);
       if (creep.carry.energy == 0)
       {
         //   var path = creep.pos.findClosestByPath(engergySource_E45S2S);
            myTestPos = new RoomPosition(27, 24, 'E45S2');
            //console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + ' path:' + path);
            //var status = creep.moveTo(engergySource_E45S2S.pos); 
            var status = creep.moveTo(myTestPos); 
            
         //   console.log("[" + fileName + "Line " + util.LineNumber() + "]  " +  creep.name + ' status: ' + status);
           
       }

       creep.harvest(engergySource_E45S2S);
       
       
       
       // myTestPos = new RoomPosition(27, 24, 'E45S2');
        if (creep.carry.energy == creep.carryCapacity)
        {
           
            var status = creep.moveTo(roomcontroller_E44S2.pos);
            
        }
          var roomcontroller = Game.getObjectById("5bbcaf979099fc012e63ad56");  //room controller fpr E44S2
          creep.upgradeController(roomcontroller);  




     //   var status = creep.moveTo(myTestPos);  
     //  var myRoomSource = Game.getObjectById("5bbcafa89099fc012e63af8f") //ENERGOYT SOURCE
 //    creep.upgradeController(myRoomSource);
    //    creep.harvest(myRoomSource);

    //     if (creep.room.name = "E45S2")
    //     {

    //         if (creep.carry.energy < creep.carryCapacity  )      
    //         {
                //   creep.harvest(myRoomSource);
    //         }          


    //     }
    //    // var myTestPos =new Object( {"x":44,"y":37,"roomName":"E44S3"});
        //myTestPos = new RoomPosition(27, 24, 'E45S2');
    //    myTestPos = new RoomPosition(28, 33, 'E44S2');

        
      // console.log("RoleTest [line " + util.LineNumber() + "] creep.moveTo(36,26): " + status);
       
      ///  console.log(JSON.stringify(myTestPos));
       //  var status = creep.moveTo(Game.flags['myFlag1'].pos);
  //    var status = creep.moveTo(myTestPos);
      
      // console.log("RoleTest [line " + util.LineNumber() + "] creep.moveTo(36,26): " + status);


  //     var myRoomSource = Game.getObjectById("5bbcafa89099fc012e63af8f")
     //  console.log('Test ' + util.LineNumber() + '] ' +  creep.name + 'myRoomSource ' + JSON.stringify(myRoomSource));
 //     var myRoomSource = Game.getObjectById("5bbcaf979099fc012e63ad56")
 //    creep.upgradeController(myRoomSource);
     //   creep.harvest(myRoomSource);
       
       // console.log("RoleTest [line " + util.LineNumber() + "] creep.moveTo(36,26): " + status);

        // let source = Game.getObjectById(creep.memory.sourceId);
        // // find container next to source
        // let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
        //     filter: s => s.structureType == STRUCTURE_CONTAINER
        // })[0];

        // // if creep is on top of the container
        // if (creep.pos.isEqualTo(container.pos)) {
        //     // harvest source
        //     creep.harvest(source);
        // }
        // // if creep is not on top of the container
        // else {
        //     // move towards it
        //     creep.moveTo(container);
        // }







    }
};