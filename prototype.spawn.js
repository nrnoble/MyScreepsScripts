var util = require('Util'); 
var fileName = "Upgrader    ";
var fileName = "Prototype   ";

module.exports = function () {
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreep =
        function(energy, roleName) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }


                // create creep with the created body and the given role

            var sp1 = Memory.spawns.Spawn1;
            var namecount = 0;
            var creepNewName = "";

            var newCreep = util.CreateNewScreep(this, roleName, body);

            return newCreep;


            if (roleName == "harvester")
            {

                var newCreep = util.CreateNewScreep(this, roleName, body);
 
                return newCreep;

                //return this.createCreep(body, roleName + namecount, { role: roleName, working: false });

            }
            else if (roleName == "repairer"){

                //namecount = sp1.repairsCount;
                //creepNewName = util.GetRoleName(sp1, roleName);
                //console.log("creating a " + roleName + "(" + creepNewName + ")");
                //var newCreep = this.createCreep(body, creepNewName, { role: roleName, working: false });
                //if (typeof (newCreep) == "string") {
                //    console.log("successfully created a " + roleName + "(" + creepNewName + ")");
                //}

                //if (newCreep == - 3) {
                //    sp1.repairsCount++;
                //    var newCreep = this.createCreep(body, roleName + namecount, { role: roleName, working: false });
                //}

                var newCreep = util.CreateNewScreep(this, roleName, body);

                return newCreep;

            }
            else if (roleName == "builder") {

                //namecount = sp1.buildersCount;
                //creepNewName = util.GetRoleName(sp1, roleName);
                //console.log("creating a " + roleName + "(" + creepNewName + ")");
                //var newCreep = this.createCreep(body, creepNewName, { role: roleName, working: false });
                //if (typeof (newCreep) == "string") {
                //    console.log("successfully created a " + roleName + "(" + creepNewName + ")");
                    
                //}

                //if (newCreep == - 3) {
                //    sp1.buildersCount++;
                //    var newCreep = this.createCreep(body, roleName + namecount, { role: roleName, working: false });
                //}

                var newCreep = util.CreateNewScreep(this, roleName, body);
                return newCreep;

            }

            else if (roleName == "upgrader") {

                //namecount = sp1.buildersCount;
                //creepNewName = util.GetRoleName(sp1, roleName);
                //console.log("creating a " + roleName + "(" + creepNewName + ")");
                //var newCreep = this.createCreep(body, creepNewName, { role: roleName, working: false });
                //if (typeof (newCreep) == "string") {
                //    console.log("successfully created a " + roleName + "(" + creepNewName + ")");

                //}

                //if (newCreep == - 3) {
                //    sp1.buildersCount++;
                //    var newCreep = this.createCreep(body, roleName + namecount, { role: roleName, working: false });
                //}

                var newCreep = util.CreateNewScreep(this, roleName, body);
                return newCreep;

            }

            else if (roleName == "wallRepairer") {

                //namecount = sp1.wallRepairersCount;
                //creepNewName = util.GetRoleName(sp1, roleName);
                //console.log("creating a " + roleName + "(" + creepNewName + ")");
                //var newCreep = this.createCreep(body, creepNewName, { role: roleName, working: false });
                //if (typeof (newCreep) == "string") {
                //    console.log("successfully created a " + roleName + "(" + creepNewName + ")");
                //}

                //if (newCreep == - 3) {
                //    sp1.wallRepairersCount++;
                //    var newCreep = this.createCreep(body, roleName + namecount, { role: roleName, working: false });
                //}

                var newCreep = util.CreateNewScreep(this, roleName, body);

                return newCreep;
            }

            else if (roleName == "lorry") {

                namecount = sp1.lorrysCount;
               // console.log("creating a " + roleName + "(" + roleName + namecount + ")");

                return this.createCreep(body, roleName + namecount, { role: roleName, working: false });
            }
            else if (roleName == "lorry") {

                namecount = sp1.lorrysCount;
              //  console.log("creating a " + roleName + "(" + roleName + namecount + ")");

                return this.createCreep(body, roleName + namecount, { role: roleName, working: false });
            }
            else if (roleName == "minor") {

                namecount = sp1.minorsCount;
              //  console.log("creating a " + roleName + "(" + roleName + namecount + ")");
          
                return this.createCreep(body, roleName + namecount, { role: roleName, working: false });
            }
            
            //return this.createCreep(body, undefined, { role: roleName, working: false });

            // console.log("roleName: " + roleName);
            var newCreep = util.CreateNewScreep(this, roleName,body);
            return newCreep;
        };

    // create a new function for StructureSpawn
    StructureSpawn.prototype.createLongDistanceHarvester =
        function (energy, numberOfWorkParts, home, target, sourceIndex) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            // for (let i = 0; i < numberOfWorkParts; i++) {
            //     body.push(WORK);
            // }

            // // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            // energy -= 150 * numberOfWorkParts;

            // var numberOfParts = Math.floor(energy / 100);
            // for (let i = 0; i < numberOfParts; i++) {
            //     body.push(CARRY);
            // }
            // for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            //     body.push(MOVE);
            // }


            if (energy < 350 )
            {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] unable to create a long distance harvester because energy is less than 350. Energy level is ' + energy);
            }
            energy = energy - 350;

            body.push(WORK);
            body.push(WORK);
            body.push(MOVE);
            body.push(CARRY);
            body.push(MOVE);

             var numberOfParts = Math.floor(energy / 100);
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
                body.push(MOVE);
            }


            
            //body.push(WORK);
            
            
            // body.push(CARRY);
            // body.push(CARRY);
            // body.push(CARRY);
            // body.push(CARRY);
            // body.push(CARRY);
            // body.push(CARRY);
            // body.push(MOVE);
            // body.push(MOVE);
            // body.push(MOVE);
            // body.push(MOVE);
            // body.push(MOVE);
            // body.push(MOVE);
            
            



            // create creep with the created body
            return this.createCreep(body, "LDH_" +Game.time, {
                role: 'longDistanceHarvester',
                pause: false,
                group1: 'longDistanceHarvester',
                group2: 'builder',
                group3: 'repairer',
                group4: 'updater',
                changeRole: false,
                home: home,
                target: target,
                sourceIndex: sourceIndex,
                working: false
            });
        };
    
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createClaimer =
        function (target) {
           // console.log("Creating a claimer");
            return this.createCreep([CLAIM, MOVE], undefined, { role: 'claimer', target: target });
        };


    // create a new function for StructureSpawn
    StructureSpawn.prototype.createReserver =
    function (spawn, target) {
       // console.log("Creating a Reserver");
        return this.createCreep([CLAIM,CLAIM,CLAIM, MOVE,MOVE,MOVE], "reserver_" + Game.time, { role: 'reserver', target: target, spawnId: spawn.id });
    };

    // create a new function for StructureSpawn
    StructureSpawn.prototype.createMiner =
        function (spawn, sourceId) {
          //  var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
            var energy = spawn.room.energyCapacityAvailable;
         //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + energy);
            //console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn1.room.energyCapacityAvailable is  ' + Game.spawns.Spawn1.room.energyCapacityAvailable);
            if(energy <= 300)
            {
                 return this.createCreep([WORK, WORK, MOVE], util.GetRoleName(Game.spawns.Spawn1, 'miner'),
                                    { role: 'miner', sourceId: sourceId });
            } else if(energy <= 400)
            {
                 return this.createCreep([WORK, WORK, WORK, MOVE], util.GetRoleName(Game.spawns.Spawn1, 'miner'),
                                    { role: 'miner', sourceId: sourceId });
            } else if(energy <= 500)
            {
                 return this.createCreep([WORK, WORK, WORK, WORK, MOVE], util.GetRoleName(Game.spawns.Spawn1, 'miner'),
                                    { role: 'miner', sourceId: sourceId });
            }
            else if(energy <= 600)
            {
                 return this.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE], util.GetRoleName(Game.spawns.Spawn1, 'miner'),
                                    { role: 'miner', sourceId: sourceId });
            }            else if(energy <= 700)
            {
                 return this.createCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], util.GetRoleName(Game.spawns.Spawn1, 'miner'),
                                    { role: 'miner', sourceId: sourceId });
            }
           
           
            else
            {
                return this.createCreep([WORK, WORK, WORK, WORK, WORK, WORK,MOVE], util.GetRoleName(Game.spawns.Spawn1, 'miner'),
                                    { role: 'miner', sourceId: sourceId });
            }
        };
     
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createLorry =
        function (energy) {
            // // create a body with twice as many CARRY as MOVE parts
            // var numberOfParts = Math.floor(energy / 150);
            var body = [];
            // for (let i = 0; i < numberOfParts * 2; i++) {
            //     body.push(CARRY);
            // }
            // for (let i = 0; i < numberOfParts; i++) {
            //     body.push(MOVE);
            // }


            
            body.push(CARRY);
            body.push(CARRY);
           // body.push(CARRY);
            body.push(MOVE);
            //body.push(MOVE);

            // create creep with the created body and the role 'lorry'
            return this.createCreep(body, 'lorry_' + Game.time, { role: 'lorry', working: false });
        };

    // StructureSpawn.prototype.createLongDistanceBuilderMiner =
    //     function (energy, numberOfWorkParts, home, target, sourceIndex) {
    //         // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
    //         var body = [];
    //         //for (let i = 0; i < numberOfWorkParts; i++) {
    //         //    body.push(WORK);
    //         //}

    //         //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
    //         //energy -= 150 * numberOfWorkParts;

    //         //var numberOfParts = Math.floor(energy / 100);
    //         //for (let i = 0; i < numberOfParts; i++) {
    //         //    body.push(CARRY);
    //         //}
    //         //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
    //         //    body.push(MOVE);
    //         //}

    //         body.push(WORK);  
    //         body.push(WORK);
    //        // body.push(WORK);
    //         //body.push(WORK);
    //        // body.push(WORK);
    //         body.push(CARRY);
    //         body.push(CARRY);
    //         body.push(CARRY);
    //         body.push(CARRY);
    //         body.push(CARRY);
    //         body.push(CARRY);
            
    //         body.push(MOVE);
    //         body.push(MOVE);
    //         body.push(MOVE);
    //         body.push(MOVE);
    //         body.push(MOVE);
    //         body.push(MOVE);
    //         body.push(MOVE);
            

    //         // create creep with the created body
            
    //         return this.createCreep(body, undefined, {
    //             role: 'longDistanceBuilder',
    //             home: home,
    //             target: target,
    //             sourceIndex: sourceIndex,
    //             working: false,
    //             cachedSource: null
    //         });
    //     };

    StructureSpawn.prototype.createLongDistanceBuilder =
        function (energy, numberOfWorkParts, home, target, sourceIndex) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            //for (let i = 0; i < numberOfWorkParts; i++) {
            //    body.push(WORK);
            //}

            //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            //energy -= 150 * numberOfWorkParts;

            //var numberOfParts = Math.floor(energy / 100);
            //for (let i = 0; i < numberOfParts; i++) {
            //    body.push(CARRY);
            //}
            //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            //    body.push(MOVE);
            //}

            body.push(WORK);  
            body.push(WORK);
           // body.push(WORK);
            //body.push(WORK);
           // body.push(WORK);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            

            // create creep with the created body
            
            return this.createCreep(body, undefined, {
                role: 'longDistanceBuilder',
                home: home,
                target: target,
                // home: "E45S2",
                // target: "E45S2",
                sourceIndex: sourceIndex,
                working: false,
                cachedSource: null
            });
        };


    StructureSpawn.prototype.LD_Upgrader =
        function (numberOfWorkParts, controlerID, target) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            //for (let i = 0; i < numberOfWorkParts; i++) {
            //    body.push(WORK);
            //}

            //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            //energy -= 150 * numberOfWorkParts;

            //var numberOfParts = Math.floor(energy / 100);
            //for (let i = 0; i < numberOfParts; i++) {
            //    body.push(CARRY);
            //}
            //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            //    body.push(MOVE);
            //}

            body.push(WORK);
            body.push(WORK);
           // body.push(WORK);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);

            CreateNewScreep
            // create creep with the created body
            return this.createCreep(body, undefined, {
                role: 'LD_Upgrader',
                home: 'E44S2',
                target: 'E44S2',
                creator: 'Neal R. Noble 1999',
                cachedSource: null
            });
        };        



    StructureSpawn.prototype.createTestCreep =
        function (SpawnObj, roleName) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            //for (let i = 0; i < numberOfWorkParts; i++) {
            //    body.push(WORK);
            //}

            //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            //energy -= 150 * numberOfWorkParts;

            //var numberOfParts = Math.floor(energy / 100);
            //for (let i = 0; i < numberOfParts; i++) {
            //    body.push(CARRY);
            //}
            //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            //    body.push(MOVE);
            //}

            //body.push(WORK);
           // body.push(WORK);
           // body.push(WORK);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);

            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);


            // create creep with the created body
         //   return util.CreateNewScreep(this, roleName, body, {
             
            
            return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
                role: 'roleTestCreep',
                home: 'E44S3',
                target: 'E44S2',
                creator: 'Neal R. Noble 1999',
                cachedSource: null
            });
        }; 
        
    StructureSpawn.prototype.createCustomeBuilder =
    function (SpawnObj, roleName, energySource, targetStructure) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        //for (let i = 0; i < numberOfWorkParts; i++) {
        //    body.push(WORK);
        //}

        //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        //energy -= 150 * numberOfWorkParts;

        //var numberOfParts = Math.floor(energy / 100);
        //for (let i = 0; i < numberOfParts; i++) {
        //    body.push(CARRY);
        //}
        //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //    body.push(MOVE);
        //}

        body.push(WORK);
        // body.push(WORK);
        // body.push(WORK);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);


        // create creep with the created body
        //   return util.CreateNewScreep(this, roleName, body, {
            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            home: SpawnObj.room.name,
            targetstructure: targetStructure,
            engerysource: energySource,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    };
    
    StructureSpawn.prototype.createTargetReparier =
    function (SpawnObj, roleName, energySource, targetStructure) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        //for (let i = 0; i < numberOfWorkParts; i++) {
        //    body.push(WORK);
        //}

        //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        //energy -= 150 * numberOfWorkParts;

        //var numberOfParts = Math.floor(energy / 100);
        //for (let i = 0; i < numberOfParts; i++) {
        //    body.push(CARRY);
        //}
        //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //    body.push(MOVE);
        //}

        body.push(WORK);
        // body.push(WORK);
        // body.push(WORK);
        body.push(CARRY);
        body.push(CARRY);
      //  body.push(CARRY);
      //  body.push(CARRY);
        body.push(CARRY);
        body.push(MOVE);
        body.push(MOVE);
      // body.push(MOVE);
      // body.push(MOVE);
        // body.push(MOVE);
       // body.push(MOVE);


        // create creep with the created body
        //   return util.CreateNewScreep(this, roleName, body, {
            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            home: SpawnObj.room.name,
            targetstructure: targetStructure,
            engerysource: energySource,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    };  
        
        
        


};