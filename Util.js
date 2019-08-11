

var fileName = "Util        ";

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

        if ((ttl < 200) && (energyRemaining == 0)) {

            //this.debug(1, this.lineNumber(), "time to Die", creep.name);
            console.log("Time to die: " + creep.name + "(" + creep.role + ")");
            return creep.suicide();

        }
    },

    TimeToDie: function(creep, ticksRemaining, energyLevel) {
        var ttl = creep.ticksToLive;
        var energyRemaining = creep.carry.energy;

        if ((ttl < ticksRemaining) && (energyRemaining == energyLevel)) {

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
        else if (roleName == "roleTestCreep") {
            sp1.testCreepCount++;
            return sp1.testCreepCount;
        }
    },

    
    GetRoleName: function (SpawnObj, roleName) {
        
        var name = roleName +" _" + Game.time;
        return name;

        SpawnObj = Memory.spawns.Spawn1;
        console.log('[' + fileName + 'line:' + this.LineNumber() + '] SpawnObj is ' + SpawnObj.creepCount);
        console.log('[' + fileName + 'line:' + this.LineNumber() + '] SpawnObj.creepCount is ' + SpawnObj.creepCount);


        if(SpawnObj.creepCount  == null || SpawnObj.creepCount  == undefined)
        {
            console.log('[' + fileName + 'line:' + this.LineNumber() + '] SpawnObj.creepCount is ' + SpawnObj.creepCount + " reseting count to zero");
            Game.spawns.Spawn1.memory.creepCount = 0;
        }

        var postFixCount = Game.spawns.Spawn1.memory.creepCount
    
        // console.log('[' + fileName + 'line:' + this.LineNumber() + '] calling GetRoleName ');
        // console.log('[' + fileName + 'line:' + this.LineNumber() + '] postFixCount is  ' + postFixCount);
        // postFixCount++;
        // console.log('[' + fileName + 'line:' + this.LineNumber() + '] postFixCount = Game.spawns.Spawn1.memory.creepCount is  ' + Game.spawns.Spawn1.memory.creepCount);

        console.log('[' + fileName + 'line:' + this.LineNumber() + '] Game.time ' + Game.time);

        if (Game.creeps[roleName].name)
        {
           var newCreepName = roleName + "_" + SpawnObj.creepCount++;
           var whileCount = 0;
           while(Game.creeps[newCreepName]) 
           {
                whileCount++;
                var newCreepName = roleName + "_" + SpawnObj.creepCount++;
                if(whileCount++ > 36)
                {
                    console.log('[' + fileName + 'line:' + this.LineNumber() + '] Breaking out if while loop. Investigate!! ');
                    break;
                }
            }
           console.log('[' + fileName + 'line:' + this.LineNumber() + ']  New Creep name is ' + newCreepName);
           return newCreepName;
        }
        
        console.log('[' + fileName + 'line:' + this.LineNumber() + ']  New Creep name is ' + newCreepName);
        return roleName;

},

    GetRoleNameold: function (SpawnObj, roleName) {
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
                                
                namecount = sp1.wallRepairersCount;
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
            else if (roleName == "Test") {

                namecount = sp1.testCreepCount;
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
           // this.debug(1, this.LineNumber(), "creating a " + roleName + "(" + creepNewName + ")", creepNewName);
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
                newCreep = SpawnObj.createCreep(body, creepNewName, { role: roleName, home: "E44S3", target: "E44S3", working: false });
                console.log("creating a " + roleName + "(" + creepNewName + ")");
            }
            
            return newCreep;
            
        },

    pickupResources2: function(creep, scanRange, minAmount)
    {
           //TODO: scan for resources in a limited rangesuch as within 3-5 squares     
            droppedEngeryTarget = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            
            status = creep.pickup(droppedEngeryTarget);
            
            return creep.pickup(droppedEngeryTarget);
    },


    pickupResources: function(creep, range)
    {
       //TODO: scan for resources in a limited rangesuch as within 3-5 squares     
        var droppedEngeryTarget = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
        return creep.pickup(droppedEngeryTarget);
    },

    runCreeps (Creeps)
    {
        for (let name in Game.creeps) {
            // get the creep object
            var creep = Game.creeps[name];
    
    
            // if creep is harvester, call harvester script
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            // if creep is upgrader, call upgrader script
            else if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            // if creep is builder, call builder script
            else if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
            // if creep is repairer, call repairer script
            else if (creep.memory.role == 'repairer') {
                roleRepairer.run(creep);
            }
            // if creep is wallRepairer, call wallRepairer script
            else if (creep.memory.role == 'wallRepairer') {
                roleWallRepairer.run(creep);
            }
            // if creep is longDistanceHarvester, call longDistanceHarvester script
            else if (creep.memory.role == 'longDistanceHarvester') {
                roleLongDistanceHarvester.run(creep);
            }
            // if creep is claimer, call claimer script
            else if (creep.memory.role == 'claimer') {
                roleClaimer.run(creep);
            }
            // if creep is miner, call miner script
            else if (creep.memory.role == 'miner') {
                roleMiner.run(creep);
            }
            // if creep is lorry, call miner lorry
            else if (creep.memory.role == 'lorry') {
                roleLorry.run(creep);
            }
            else if (creep.memory.role == 'longDistanceBuilder') {
               // console.log("Main [line " + util.LineNumber() + "] running roleLongDistanceBuilder: " + creep.name);
                roleLongDistanceBuilder.run(creep);
            }
            else if (creep.memory.role == 'roleTestCreep') {
               // console.log("[Main line " + util.LineNumber() + "] running TestCreep: " + creep.name);
                roleTestCreep.run(creep);
             }
        }
    
    },
    
    link: function(current_link){
        if(current_link.memory.source_range == null){
            var nearest_source = current_link.pos.findClosestByRange(FIND_SOURCES);
            current_link.memory.source_range = current_link.pos.getRangeTo(nearest_source);
        }else{
            var target_link = current_link.room.find(FIND_STRUCTURES, {
                filter : (s) => s.structureType == STRUCTURE_LINK && 
                                s.memory.source_range > current_link.memory.source_range
                });
            if(target_link != null){ 
                current_link.memory.is_receiver = false;
				
				//I get the memory is undefined error on the line below
                target_link.memory.is_receiver = true;
                
				if(current_link.energy == current_link.energyCapacity && current_link.cooldown == 0){
                    current_link.transferEnergy(target_link, current_link.energyCapacity);
                }
            }
        }       
    },


    structuresInRoom: function(spawn, structureType){

        // var numberOfLongDistanceHarvestersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room1 );
        // var numberOfLongDistanceHarvestersroom1 = _.sum(Game.structures, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room1 );

       // var room = Game.spawns.Spawn1.room;
        var room = spawn.room;
        //console.log('[' + fileName + 'line:' + this.LineNumber() + ']  spawn is '  + JSON.stringify(spawn));

       // console.log('[' + fileName + 'line:' + this.LineNumber() + ']  room is '  + room.name);
        var structuresFound = room.find(FIND_STRUCTURES,{ filter: (s) => s.structureType == STRUCTURE_LINK});
       // console.log('[' + fileName + 'line:' + this.LineNumber() + ']  structuresFound is '  + structuresFound);

        var count = structuresFound.length;
        return count;

    }


    };


