var util = require('Util'); 
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
 
 

var fileName = 'recycle ';
 
 
module.exports = {
    run: function (creep) {
 
        
        if (creep.memory.mode == undefined) {
            creep.memory.mode = "search";
        }

        var mode = creep.memory.mode;
        var recycleTarget = creep.pos.findClosestByPath(FIND_FLAGS,{filter: s=> s.name.includes("dismantle")});
        
        if (recycleTarget == undefined) {
            recycleTarget = creep.pos.findClosestByPath(FIND_FLAGS,{filter: s=> s.name.includes("dismantle")});
            

        }

        // ********************************************************************************//;
        //          search for a "dismantle_X"
        // ********************************************************************************//;
        if (mode == "search") {
            
          console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] mode is ' + mode +'</>');
            //  search for nearest destroyFlag_X
            // when found destory and pickup energy left behind
            // var flagTarget = creep.pos.findClosestByPath(FIND_FLAGS, {
            //     // the second argument for findClosestByPath is an object which takes
            //     // a property called filter which can be a function
            //     // we use the arrow operator to define it
            //     filter: (s) => (s.name.includes ("dismantle"))
            // });

            if (recycleTarget != undefined) {
                
                
                var moveStatus = creep.travelTo(recycleTarget);
                
                if(creep.pos.isNearTo(recycleTarget))
                {
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] moveStatus is ' + moveStatus +'</>');
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.pos is ' + creep.pos +'</>');
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flagTarget.pos is ' + recycleTarget.pos +'</>');
                    creep.memory.mode = "dismantle";
                }


                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] moveStatus is ' + moveStatus +'</>');
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.pos is ' + creep.pos +'</>');
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flagTarget.pos is ' + flagTarget.pos +'</>');

                //var structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y-1, creep.pos.x-1, creep.pos.y+1, creep.pos.x+1, true);

                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flagTarget is ' + flagTarget +'</>');

                // var structures = flagTarget.room.lookAt(flagTarget); 
                // var target = structures[0];


                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structures.length is ' + structures.length +'</>');
                // for (const key in structures) {
                
                //         const element = structures[key].type;
                //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] element is ' + element +'</>');         
                // }
                
                

                // var status = creep.dismantle(target);
                
                // if (status == ERR_NOT_IN_RANGE) {
                //     creep.travelTo(flagTarget,{ visualizePathStyle: { stroke: '#ffaa00' } });
                //     util.repairRoad(creep);
                //     return;    
                // }
        
            }
    
        }
        

        if (mode == "dismantle") {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] mode is ' + mode +'</>');
            var structures = recycleTarget.room.lookAt(recycleTarget); 

                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structures.length is ' + structures.length +'</>');
                for (const key in structures) {
                
                        const element = structures[key];
                      //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] key is ' + key +'</>');
                        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] element is ' + element.type +'</>');      
                       // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] element is ' + element.structure.id +'</>');         

                }
                


        //     var target = structures[0].structure;
        //     var targetPos = target.pos;
        //    var dismantalSatus = target.destroy();
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] dismantalSatus is ' + dismantalSatus +'</>');
        //    var withdrawStatus = creep.withdraw(targetPos);
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] withdrawStatus is ' + withdrawStatus +'</>');

        //    var removeStatus = flagTarget.remove();
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] removeStatus is ' + removeStatus +'</>');

        }

 
    }
};