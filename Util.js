/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Util');
 * mod.thing == 'a thing'; // true
 */

module.exports =
    {

        LineNumber: function () {
            var e = new Error();
            if (!e.stack)
                try {
                    // IE requires the Error to actually be throw or else the Error's 'stack'
                    // property is undefined.
                    throw e;
                } catch (e) {
                    if (!e.stack) {
                        return 0; // IE < 10, likely
                    }
                }
            var stack = e.stack.toString().split(/\r\n|\n/);
            // We want our caller's frame. It's index into |stack| depends on the
            // browser and browser version, so we need to search for the second frame:
            var frameRE = /:(\d+):(?:\d+)[^\d]*$/;
            do {
                var frame = stack.shift();
            } while (!frameRE.exec(frame) && stack.length);

            return frameRE.exec(stack.shift())[1];
        },

        debug: function(level, linenumber, message, somevar) {
            if (level < 10) {
                //  var linenumber = this.LineNumber();
                console.log("[line " + linenumber + "] " + message + ", " + somevar);
                return;
            }
        
    },

    SelfSecide: function(creep) {
        var ttl = creep.ticksToLive;
        var energyRemaining = creep.carry.energy;

        if ((ttl < 75) && (energyRemaining == 0)) {

            //this.debug(1, this.lineNumber(), "time to Die", creep.name);
            console.log("Time to die: " + creep.name + "(" + creep.role + ")");
            return creep.suicide();

        }
    },

    GetCreepCountObj: function (roleName) {
        var sp1 = Memory.spawns.Spawn1;
        var creepName = "";

        if (roleName == "harvester") {
            sp1.HarverstersCount++;
            return sp1.HarverstersCount;
        }

        else if (roleName == "upgrader") {
            sp1.upgradersCount++;
            return sp1.upgradersCount;
        }

        else if (roleName == "repairer") {
            sp1.repairsCount++;
            return sp1.repairsCount;
        }
        else if (roleName == "builder") {
            sp1.buildersCount++;
            return sp1.buildersCount;
          
        }

        else if (roleName == "wallRepairer") {
            sp1.wallRepairersCount++;
            return sp1.wallRepairersCount;
        }

        else if (roleName == "lorry") {
            sp1.lorrysCount++;
            return sp1.lorrysCount;
        }

        else if (roleName == "lorry") {
            sp1.lorrysCount++;
            return sp1.lorrysCount;
        }

        else if (roleName == "minor") {
            sp1.minorsCount++;
            return sp1.minorsCount;
        }
    },


    GetRoleName: function (SpawnObj, roleName) {
            var sp1 = Memory.spawns.Spawn1;
            var creepName = "";
            if (roleName == "harvester") {
                namecount = sp1.HarverstersCount;
                creepName = roleName + "_" + namecount;
                return creepName;
            }

            else if (roleName == "upgrader") {

                namecount = sp1.upgradersCount;
                creepName = roleName + "_" + namecount;
                return creepName;
            }
            else if (roleName == "repairer") {

                namecount = sp1.repairsCount;
                creepName = roleName + "_" + namecount;
                return creepName;

            }
            else if (roleName == "builder") {

                namecount = sp1.buildersCount;
                creepName = roleName + "_" + namecount;
                return creepName;

            }

            else if (roleName == "wallRepairer") {

                namecount = sp1.wallRepairsCount;
                creepName = roleName + "_" + namecount;
                return creepName;
            }

            else if (roleName == "lorry") {

                namecount = sp1.lorrysCount;
                creepName = roleName + "_" + namecount;
                return creepName;
            }
            else if (roleName == "lorry") {

                namecount = sp1.lorrysCount;
                creepName = roleName + "_" + namecount;
                return creepName;
            }
            else if (roleName == "miner") {

                namecount = sp1.minerCount;
                creepName = roleName + "_" + namecount;
                return creepName;
            }
    },

    getRndInteger: function (min, max) {
       return Math.floor(Math.random() * (max - min)) + min;
},

    CreateNewScreep: function (SpawnObj, roleName, body)
    {

           var creepNewName = this.GetRoleName(SpawnObj, roleName);
            
            var newCreep = new Object;
            this.debug(1, this.LineNumber(), "creating a " + roleName + "(" + creepNewName + ")", creepNewName);
            newCreep = SpawnObj.createCreep(body, creepNewName, { role: roleName, working: false });
            if (typeof (newCreep) == "string") {
                console.log("successfully created a " + roleName + "(" + creepNewName + ")");
            }
            if (newCreep == - 3) {
                console.log("Name use trying a new name for role: " + roleName );

                var creepCountObj = this.GetCreepCountObj(roleName);
               // creepCountObj = creepCountObj + 1;
               // console.log(creepCountObj);
               // console.log("this.GetCreepCountObj(roleName): " + this.GetCreepCountObj(roleName));
               //this.GetCreepCountObj(roleName) = this.GetCreepCountObj(roleName) + 1;
              //  creepNewName = this.GetRoleName(SpawnObj, roleName);
                newCreep = SpawnObj.createCreep(body, creepNewName, { role: roleName, working: false });
                console.log("creating a " + roleName + "(" + creepNewName + ")");
            }
            
            return newCreep;
            
        },

        CreepInfo: function (){

            for (let name in Game.creeps) {
                var creep = Game.creeps[name];
                console.log(name + " " + creep.memory.role);
            }   
        }

    };


