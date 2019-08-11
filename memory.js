var util = require('Util'); 
var fileName = "memory";

module.exports = {
    // a function to run the logic for this role
    init: function (spawnObj) {
    
    
    if (spawnObj.memory.init == true)
    {
        return;
    }
    
    spawnObj.memory.init = true;

    spawnObj.memory.minHarvesters	= 3;
    spawnObj.memory.minUpgraders = 1;
    spawnObj.memory.minBuilders = 1;
    spawnObj.memory.minLorries = 0;
    spawnObj.memory.minWallRepairers = 0;
    spawnObj.memory.minRepairers = 0;
    
    
    spawnObj.memory.debug	= false;
    spawnObj.memory.debuglevel = 1;
    spawnObj.memory.E44S3 = 0;
    
    spawnObj.memory.count = 0;
    spawnObj.memory.HarverstersCount = 0;
    spawnObj.memory.upgradersCount = 0;
    spawnObj.memory.repairsCount = 0;
    spawnObj.memory.buildersCount	=	0;
    spawnObj.memory.wallRepairsCount = 0;
    spawnObj.memory.minerCount = 0;
    spawnObj.memory.lorrysCount =	0;
    spawnObj.memory.wallRepairersCount = 0;
    spawnObj.memory.minLongDistanceBuildersE44S2 = 0;
    spawnObj.memory.testCreepCount = 0;
    spawnObj.memory.minLDE43S3 = 0;
    spawnObj.memory.foo = "test";
    spawnObj.memory.creepCount = 0;
   
    spawnObj.memory.home = "";   
    spawnObj.memory.room1 = "";
    spawnObj.memory.room2 = "";
    spawnObj.memory.room3 = "";
    
 
    
        
    spawnObj.memory.minLDHroom1 = 0;
    spawnObj.memory.minLDHroom2 = 0;
    spawnObj.memory.minLDHroom3 = 0;


   
   
   
    console.log('[' + fileName + 'line:' + util.LineNumber() + '] spawnObj.memory.home  is ' + spawnObj.memory.home);
    }
}