

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

            return this.pad (frameRE.exec(stack.shift())[1],4);
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

        if ((ttl < 25) && (energyRemaining == 0)) {

            //this.debug(1, this.lineNumber(), "time to Die", creep.name);
            console.log("Time to die: " + creep.name + "(" + creep.role + ")");
            return creep.suicide();

        }
    },

    TimeToDie: function(creep, ticksRemaining, energyLevel) {
        var ttl = creep.ticksToLive;
        var energyRemaining = creep.carry.energy;

        if ((ttl < ticksRemaining) && (energyRemaining <= energyLevel)) {
            console.log("Time to die: " + creep.name + "(" + creep.role + ")");
            return creep.suicide();

        }
    },
   
    TimeToDie2: function(creep, roomName, ticksRemaining, energyLevel) {
       if (creep.room.name == roomName) {
            var ttl = creep.ticksToLive;
            var energyRemaining = creep.carry.energy;

            if ((ttl < ticksRemaining) && (energyRemaining <= energyLevel)) {
                console.log("Time to die: " + creep.name + "(" + creep.role + ")");
                return creep.suicide();
            }
        }

        return;
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
            newCreep = SpawnObj.createCreep(body, creepNewName, { role: roleName, home: SpawnObj.room.name, target: SpawnObj.room.name, working: false,gameStartTick: Game.time, respawnOffSet: body.length * CREEP_SPAWN_TIME  });
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
                newCreep = SpawnObj.createCreep(body, creepNewName, { role: roleName, home: creep.room.name, target: creep.room.name, orginalRole: roleName, working: false, gameStartTick: Game.time, respawnOffset: body.length * CREEP_SPAWN_TIME });
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
     
        if (droppedEngeryTarget != undefined) {
    //        console.log('[' + fileName + 'line:' + this.LineNumber() + '] YYYYYYYYYYYYYYY droppedEngeryTarget is ' + droppedEngeryTarget);
            var status = creep.pickup(droppedEngeryTarget);
        }

        //   //  console.log('[' + fileName + 'line:' + this.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxx droppedEngeryTarget status ' + status);
        //     if (droppedEngeryTarget !=undefined && status == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(droppedEngeryTarget);
        //     }
        
        this.pickupResourcesFromTombstone(creep,3);
        return;
    },

    pickupResourcesFromTombstone: function(creep, range)
    {
       //TODO: scan for resources in a limited rangesuch as within 3-5 squares     
        var droppedEngeryTarget = creep.pos.findInRange(FIND_TOMBSTONES,range);
        // if (droppedEngeryTarget != undefined && creep.carry < creep.carryCapacity) {
            var status = creep.withdraw(droppedEngeryTarget);
            if (status == ERR_NOT_IN_RANGE) {
                creep.moveTo(droppedEngeryTarget);
            }
       //}
        
        return creep.withdraw(droppedEngeryTarget);
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
    },

    repairRoad: function(creep){

        try {
            var structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y-1, creep.pos.x-1, creep.pos.y+1, creep.pos.x+1, true);
         //   console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structures is ' + structures);
           
            var workParts = creep.getActiveBodyparts(WORK);
            if (workParts == 0) {
                return -1;
            }

            if (structures == undefined || structures == [])
            {
                return;
            }
            for (let i = 0; i < structures.length; i++) {
                var road =  structures[i].structure

                if (road.hits < road.hitsMax) {
                    var repairStatus = creep.repair(road);
                   if (creep.room.name == "E46S1") {
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] repairStatus is ' + repairStatus +'</>');
                    // console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);
                   }                   

                    break;
                }
                 
              }
        } catch (e) {
        
            console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Trapped error is ' + e);
        }
    },

    numberWithCommas: function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, 

    pad: function (num, size) {
        var s = "000000000" + num;
        return s.substr(s.length-size);
    },

    stayInTargetRoom: function(creep)
    {
        if (creep.memory.target != creep.room.name) {
        //    return;
            console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' For some reason creep is not in target room: ' + creep.memory.target );
            
            var exit = creep.room.findExitTo(creep.memory.target);
            var status = creep.moveTo(creep.pos.findClosestByRange(exit));

            if (creep.memory.orginalRole != undefined) {
                creep.memory.role = creep.memory.orginalRole;
            }
            else{
                
                // if (creep.name.includes ("link1")) {
                //     creep.memory.role = "link1Harvester";
                // }                
                // if (creep.name.includes ("miner")) {
                //     creep.memory.role = "miner";
                // }

               // creep.memory.role = "harvester";
            }
         //   console.log('[' + fileName + 'line:' + this.LineNumber() + '] !!!!!!!!!!!!!!!!!!!!!! creep.moveTo(exit) is ' + status);
            return 0;
        }
        else{
            return -1;
        }
    }, 

    runOnlyOnce: function()
    {
        // place holder
    },

    assignTerminalIdstoRoom: function()
    {
        // for (let roomName in Game.rooms) {

        //     let room = Game.rooms[roomName];
        //     let structuresInRoom = room.find(FIND_MY_STRUCTURES, );
        //        // var LDHs = controller.room.find(FIND_MY_CREEPS, {filter: s=> s.memory.role == "longDistanceHarvester"});
        //     var terminals = room.find(FIND_MY_STRUCTURES,   {filter: s=> s.structureType == STRUCTURE_TERMINAL});
            
        //    //var numberOfHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
        //  //   var terminalCount =_.sum(structuresInRoom, (s)=> s.structureType == STRUCTURE_TOWER);
        //     var terminalCount = terminals.length; 
        //     var terminal = terminals[0];
        //     if (terminalCount == 1 ) {
        //          // console.log('[' + fileName + 'line:' + util.LineNumber() + '] structuresInRoom is ' + structuresInRoom);  
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ roomName + ', terminalCount is ' + terminalCount);
        //         // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ spawnName + ', JSON.stringify(terminal) is ' + JSON.stringify(terminals));
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ roomName + ', terminal.id is ' + terminal.id);//
        //         room.memory.terminalId = terminal.id;
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ roomName + ', terminal.id is ' + room.memory.terminalId);//

        //     }  
        // }
    },

    say: function (creep,say, ticksToLive){
        if (ticksToLive != undefined) {
           if (creep.ticksToLive < ticksToLive) {
                creep.say(say + creep.ticksToLive);
           }
            
        }
        else{

            creep.say(say);
        }

    },

    convertPartsToEnergy: function (creep)
    {
   


//      [4:06:44 AM][shard3][Util        line:0528] key is 28
 //     [4:06:44 AM][shard3][Util        line:0533] bodyPart is {"type":"move","hits":100}

        var body = creep.body;
        var energy = 0;
        for (const key in body) {
          //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] key is ' + key +'</>');
                

            if (body.hasOwnProperty(key)) {
                const bodyPart = body[key];
               // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] bodyPart is ' + JSON.stringify(bodyPart) +'</>');   
              //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] bodyPart.type is ' +JSON.stringify(bodyPart.type) +'</>');
                if (bodyPart.type == "work") {
                    energy = energy + 100;
                }
                else if (bodyPart.type == "carry" || bodyPart.type == "move") { 
                    energy = energy + 50; 
                }
                else if(bodyPart.type == "attack"){
                    energy= energy + 80; 
                }
                else if(bodyPart.type == "ranged_attack"){
                    energy = energy + 150; 
                }
                else if(bodyPart.type == "heal"){
                    energy = energy + 250; 
                }
                else if(bodyPart.type == "claim"){
                    energy  = energy+ 600; 
                }
                else if(bodyPart.type == "tough"){
                    energy = energy + 10; 
                }
                else{
                    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] bodyPart.type is ' +JSON.stringify(bodyPart.type) +'</>');                
                    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] WARNING Caculatin error in function "convertPartsToEnergy" unknow part'  + '</>');
                }


            }
        }

        return energy;
    },

    isRoom: function(creep,roomName){
        if (creep.room.name == roomName) {
            return true;
        }

        false;

    },

    getSpawn: function (room){
        var spawns = room.find(FIND_MY_STRUCTURES,{filter: {structureType: StructureSpawn}});
            var spawn = spawns[0];
            return spawn;

    },

    mySign: function(creep,roomName, signText){


        if (creep.room.name == roomName) {
            var roomController = creep.room.controller;
            if (roomController.sign == signText) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room['+ creep.room.name +'] Controller has the correct signature: ' + signText +' </>');
            }
            

           var signStatus = creep.signController(roomController,signText);
           if (signStatus == ERR_NOT_IN_RANGE) {
             creep.moveTo(roomController)
           }
           console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] signStatus is ' + signStatus +'</>');
        }

    },
    
    clearAllFlagsInRoom: function (spawn){
        var sources = spawn.room.find(FIND_SOURCES);
        var allFlags = spawn.room.find(FIND_FLAGS);

        for (const key in allFlags) {
            if (allFlags.hasOwnProperty(key)) {
                const element = allFlags[key];
                element.remove();         
            }
        }
    },

    initFirstRoomBak: function(creep){
                     
        if (creep.memory.roomInit == undefined) {


            var sources = creep.room.find(FIND_SOURCES);
            //var room_1 = Object.keys(Game.rooms)[0].name;
            //var source1 = Object.keys(sources)[0];
            //var source3 = Object.keys(sources);
            // var source2;    

            if (sources.length == 2) {
                
                var Source1 = sources[1].pos;
                creep.room.createFlag(Source1,"Source_" + creep.room.name);    
                var Source2 = sources[0].pos;
                creep.room.createFlag(Source2,"Source2_" + creep.room.name);
            }
            else
            {
                var Source1 = sources[0].pos;
                creep.room.createFlag(Source1,"Source_" + creep.room.name);   
            }
          
            creep.memory.roomInit = "completed";
        }
    },

    flagContainer: function(spawn){
        if (spawn.room.storage != undefined) {
            spawn.room.createFlag(spawn.room.storage.pos,"Container_" + spawn.room.name)
        }
    },



    initFirstRoom: function(spawn){
                 
   
        this.spawnReset(spawn);
      
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] spawn.room.name is ' + spawn.room.name +'</>');
        
        if (spawn.memory.RoomBuilder == undefined) {
            RoomBuilder = new Object();
            spawn.memory.RoomBuilder = RoomBuilder;
        }

        if (spawn.memory.initRoom == undefined) {
            initRoom = new Object();
            spawn.memory.initRoom = initRoom;
        }

        if (spawn.memory.CreepSettings == undefined) {
            CreepSettings = new Object();
            spawn.memory.CreepSettings = CreepSettings;
        }

        if (spawn.memory.EnergyManagement == undefined) {
            EnergyManagement = new Object();
            spawn.memory.EnergyManagement = EnergyManagement;
        }



        var  roomInit = spawn.memory.roomInit;
        // try {
        //     roomInit = spawn.memory.roomInit;
  
        // } catch (e) {
        //     spawn.memory.roomInit = roomInit;
        // }
        
        if (roomInit == undefined) {
            
            var sources = spawn.room.find(FIND_SOURCES);
     

            if (sources.length == 2) {
                
                var Source1 = sources[1].pos;
                spawn.room.createFlag(Source1,"Source_" + spawn.room.name);    
                var Source2 = sources[0].pos;
                spawn.room.createFlag(Source2,"Source2_" + spawn.room.name);
            }
            else
            {
                var Source1 = sources[0].pos;
                spawn.room.createFlag(Source1,"Source_" + spawn.room.name);   
            }
  
            spawn.memory.energyLevel = 300;
            spawn.memory.storageToExtEnergy = 500;
            spawn.memory.energyFlagToFlagHarvester = 200;
            spawn.memory.energyFlagToFlagHarvester2 = 200;

            spawn.memory.minflagToFlagHarvester = 0;
            spawn.memory.minflagToFlagHarvester2 = 0;
            spawn.memory.minUpgrader2xs = 0;
            spawn.memory.minStorageToExt = 0;
            spawn.memory.minHarvesters	= 3;
            spawn.memory.minUpgraders = 3;
            spawn.memory.minBuilders = 3;
            spawn.memory.minLorries = 0;
            spawn.memory.minWallRepairers = 0;
            spawn.memory.minRepairers = 0;
            spawn.memory.maxWallHits = 5000;
            spawn.memory.maxRampartsHits = 16000;
            spawn.memory.spawnRampartHits = 25000;
            spawn.memory.extensionHits = 10000;

            spawn.memory.roomInit =true;

          
          
          
          
            flagContainer(spawn);
        }
    },

    flagContainer: function(spawn){
        if (spawn.room.storage != undefined) {
            spawn.room.createFlag(spawn.room.storage.pos,"Container_" + spawn.room.name)
        }
    },

placeFlagsOnLinks: function(spawn)
{

    // find nearest link to controller within 5 spaces
    // place flag link name: ControllerLink_%RoomName%
    // find nearest link to storage within 5 spaces   
    // place flag link name: StorageLink_%RoomName%



    

},


    placeSourceContainers: function(spawn){
        if(spawn.room.controller.level >= 2 && spawn.memory.RoomBuilder.placeSourceContiners != undefined){

             var sources = spawn.room.find(FIND_SOURCES);
            // const terrain = new Room.Terrain(spawn.room.name);
            // var terrainType = undefined;
             if (sources.length == 2) {
                
                 var source1 = sources[1];
              
                 var source2 = sources[0];

           
                 //     getTerrian: {
            //     for (let y = -1; index <= 1; y++) {
            //         for (let x = -1; x <=2; x++) {
            //             if (x==0 && y == 0) {
            //                 continue;
            //             }
            //             terrainType = terrain.get(Source1.pos.x,Source1.pos.y)
            //             if (terrainType == 0 || terrainType == 2 ) {
            //               break  getTerrian;
            //             }
            //         }
            //     }
            // }
            var containerConstructionSite1 = this.getNearestConstructionSiteLocation(spawn,source1);
            var containerConstructionSite2 = this.getNearestConstructionSiteLocation(spawn,source2);
                
            var placementStatus1 = spawn.room.createConstructionSite(containerConstructionSite1, STRUCTURE_CONTAINER) ;
            if (placementStatus1 != 0) {
               // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + placementStatus1 is ' + placementStatus1 +'</>');
                var posX = containerConstructionSite1.x;
                var posY = containerConstructionSite1.y;
              //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + pos.X:' + pos.y + ', pos.Y:' +pos.y+    '</>');
            }
           
            var placementStatus2 = spawn.room.createConstructionSite(containerConstructionSite2, STRUCTURE_CONTAINER) ;
            // if (placementStatus1 != 0) {
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + placementStatus2 is ' + placementStatus2 +'</>');
            // }

            spawn.memory.RoomBuilder.placeSourceContiners = "done";
            

         //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] containerConstructionSite1 is ' + containerConstructionSite1 +'</>');
       //     console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] containerConstructionSite2 is ' + containerConstructionSite2 +'</>');

             }
             else{
              //  var source2 = sources[0];
            //    var containerConstructionSite2 = getNearestConstructionSiteLocation(spawn,source2)

               
             }
            }
          

            // find source 1
            // find the locations next to source 1 that is not terrian
            // place a contruction site

            // find source 2
            // find the locations next to source 1 that is not terrian
            // place a contruction site

        


    },
    /** @type {pos} */
    getNearestConstructionSiteLocation: function(spawn,source){
        //var sources = spawn.room.find(FIND_SOURCES);
        const terrain = new Room.Terrain(spawn.room.name);
        var terrainType = undefined;
   
            for (let y = -1; y <= 1; y++) {
                for (let x = -1; x <=2; x++) {
                    if (x==0 && y == 0) {
                        continue;
                    }
                  // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] JSON.stringify(source.pos.x) is ' + JSON.stringify(source.pos.x) +'</>');
                  var x1 = source.pos.x+x; 
                  var y1 = source.pos.y+y; 

                  terrainType = terrain.get(x1,y1);
                    
                    if (terrainType == 0 || terrainType == 2 ) {
                     //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] terrainType is ' + terrainType +'('+ x1 +','+ y1 +')</>');
                    
                     pos = new RoomPosition(x1,y1,spawn.room.name);
                        return  pos;
                    }
                }
            }
        
    },



    placeStorageConstructionSite: function(spawn){
        if (spawn.room.controller.level >= 4 && spawn.room.storage == undefined && spawn.memory.placeStorageConstructionSite == undefined) {
            
        var storageFlag = this.findStorageFlag(spawn);
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + storageFlag.name is ' + storageFlag.name + 'x='+ storageFlag.x + ' y='+ storageFlag.y +'</>');
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + storageFlag.pos is ' + storageFlag.pos +'</>');
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + storageFlag ' + JSON.stringify(storageFlag) +'</>');

    

        var placementStatus1 = spawn.room.createConstructionSite(storageFlag, STRUCTURE_STORAGE) ;
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + placementStatus1 is ' + placementStatus1 +'</>');
        spawn.memory.placeSourceContiners = "done";
    }



    },


    findStorageFlag: function(spawn){
        var allFlagsInRoom = spawn.room.find(FIND_FLAGS);


      

        for (let index = 0; index < allFlagsInRoom.length; index++) {
            const flag = allFlagsInRoom[index];
            if (flag.name == "Container_" + spawn.room.name){
                // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + xxxxxx flag.name is ' + flag.name +'</>');
            // console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + flag ' + JSON.stringify(flag) +'</>');
                
                return flag;
            
            }

    //   for (const x in allFlagsInRoom) {
          
    //           const flag = allFlagsInRoom[x];
    //        //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + yyyyy flag.name is ' + flag.name +'</>');
    //             if (flag.name = "Container_" + spawn.room.name){
    //                // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + xxxxxx flag.name is ' + flag.name +'</>');
    //             console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + flag ' + JSON.stringify(flag) +'</>');
                   
    //                return flag;
    //          }
           
      } 


        // allFlagsInRoom.forEach(flag => {
           
        //     if (flag.name = "Container_" + spawn.room.name){
        //         console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + xxxxxx flag.name is ' + flag.name +'</>');
        //         return flag;
        //     }
        // });

        return ;
    },
  

    // wipes out all of the spawns memory
    // BUG Does not seem to be working
    spawnReset: function(spawn){
      //  console.log('<font color = "red">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] spawn.memory is ' + JSON.stringify (spawn.memory) +'</>');
        var memory = spawn.memory;

//        console.log('<font color = "red">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] memory.length is ' + memory +'</>');
        
        // for (let index = 0; index < spawn.memory.length; index++) {
        //     const element = spawn.memory[index];
        //     console.log('<font color = "red">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] element is ' + element +'</>');
            
        // }

        // memory.forEach(element => {
            
        //     console.log('<font color = "red">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] element is ' + element +'</>');
        // });

    
        for (var key in spawn.memory) {
            console.log('<font color = "red">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] key is ' + key +'</>');

            if (spawn.memory.hasOwnProperty(key)) {
               console.log('<font color = "red">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] key is ' + key +'</>');
                var element = spawn.memory[key];
                console.log('<font color = "red">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] element is ' + element +'</>');
                spawn.memory[key] = 0;


               // element = undefined;
                
            }
        }
    },

    // ********************************************************************************************//;
    // place a construction site at location of a flag with the name "Tower" in the flag name
    // ********************************************************************************************//;
    placeTowerConstructionSite: function(spawn){
       
        if (spawn.memory.RoomBuilder == undefined) {
            RoomBuilder = new Object();
            spawn.memory.RoomBuilder = RoomBuilder;
        }

        if (spawn.memory.RoomBuilder.nextTowerLevel == undefined) {
            spawn.memory.RoomBuilder.nextTowerLevel = spawn.room.controller.level;
        }

        if (spawn.room.controller.level >= spawn.memory.RoomBuilder.nextTowerLevel) {
            var towerFlag = this.findFlagByName(spawn,"Tower");
            var constructionSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
            
            if (towerFlag == undefined || constructionSites.length > 0) {
            //    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] constructionSites.length is ' + constructionSites.length +'</>');
            //    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] towerFlag is ' + towerFlag +'</>');
                return;
            }
        


         // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + storageFlag.name is ' + storageFlag.name + 'x='+ storageFlag.x + ' y='+ storageFlag.y +'</>');
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + storageFlag.pos is ' + storageFlag.pos +'</>');
       //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + storageFlag ' + JSON.stringify(storageFlag) +'</>');

      

        var placementStatus1 = spawn.room.createConstructionSite(towerFlag, STRUCTURE_TOWER) ;
       // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + ']  placementStatus1 is ' + placementStatus1 +'</>');
       // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + ']  towerFlag.pos.x=' + towerFlag.pos.x + ', towerFlag.pos.y='+ towerFlag.pos.y +'(' + towerFlag.name +')</>');
        if (placementStatus1 == -14) {
            spawn.memory.RoomBuilder.nextTowerLevel = spawn.room.controller.level + 1;
        }    

        if (placementStatus1 == 0) {
            towerFlag.remove();
        }
      //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + placementStatus1 is ' + placementStatus1 +'</>');
      // spawn.memory.placeSourceContiners = "done";
    }



    },

   
    findTowerFlag: function(spawn){

        var allFlagsInRoom = spawn.room.find(FIND_FLAGS);
      

        for (let index = 0; index < allFlagsInRoom.length; index++) {
            const flag = allFlagsInRoom[index];
            if (flag.name.includes ("Tower")){
                // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + xxxxxx flag.name is ' + flag.name +'</>');
                // console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + flag ' + JSON.stringify(flag) +'</>');
                
                return flag;
            
            }

        }
        return undefined;
    },


    setupflagToFlagHarvesters: function(spawn){

        if (spawn.room.storage == undefined) {
            return;
        }

        spawn.memory.minflagToFlagHarvester = 1;
        spawn.memory.minflagToFlagHarvester2 = 1;

        if (spawn.memory.minflagToFlagHarvester == undefined) {
            spawn.memory.minflagToFlagHarvester = 1;
        }

        if (spawn.memory.minflagToFlagHarvester == undefined) {
            spawn.memory.minflagToFlagHarvester2 = 1;
        }
        spawn.memory.minflagToFlagHarvester = 1;
        spawn.memory.minflagToFlagHarvester2 = 1;
        
    },    
    
 
    placeExtensionConstructionSite: function(spawn){
       
        var constructionSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
        
        if (spawn.room.controller.level >=3) {
           
            var constructionSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
            console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] constructionSites.length is ' + constructionSites.length +'</>');
           
            var extensionFlag = this.findFlagByName(spawn,"Extension");
            console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] towerFlag is ' + extensionFlag +'</>');
            if (extensionFlag == undefined || constructionSites.length > 0) {
                return;
            }
        


      //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + storageFlag.name is ' + storageFlag.name + 'x='+ storageFlag.x + ' y='+ storageFlag.y +'</>');
       // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + storageFlag.pos is ' + storageFlag.pos +'</>');
      //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + storageFlag ' + JSON.stringify(storageFlag) +'</>');

    

        var placementStatus1 = spawn.room.createConstructionSite(extensionFlag, STRUCTURE_EXTENSION) ;
       // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + ']  placementStatus1 is ' + placementStatus1 +'</>');
        if (placementStatus1 == 0) {
            extensionFlag.remove();
        }
      //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + placementStatus1 is ' + placementStatus1 +'</>');
      // spawn.memory.placeSourceContiners = "done";
    }



    },

   
    findFlagByName: function(spawn,flagName){

        var allFlagsInRoom = spawn.room.find(FIND_FLAGS);
      

        for (let index = 0; index < allFlagsInRoom.length; index++) {
            const flag = allFlagsInRoom[index];
            if (flag.name.includes (flagName)){
                // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + xxxxxx flag.name is ' + flag.name +'</>');
                // console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + flag ' + JSON.stringify(flag) +'</>');
                
                return flag;
            
            }

        }
        return undefined;
    },

    
    findNearestLinkToController: function (creep,range) {
   
        var container;
        var roomController = creep.room.controller;
        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        links = roomController.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
    //    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (links.length > 0) {
            container = links[0];
        }
    //    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] xcontainer is ' + container +'</>');

        return container ;
    },

    findNearestLinkToStorage: function (creep, range) {
   
        var link;
        var roomStorage = creep.room.storage;
        if (roomStorage == undefined) {
            return undefined
        }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        links = roomStorage.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
       // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (links.length > 0) {
            link = links[0];
        }
       // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storagre is ' + link +'</>');

        return link ;
    }






    };


