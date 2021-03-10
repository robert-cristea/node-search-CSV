const fs = require("fs");
var argv = require("optimist").argv;


var recur = function (id,pId){
  if(pId != ""){
      id=pId;
      fs.readFileSync("./company_relations.csv","utf8")
      .split("\n")
      .slice(1)
      .forEach((line) => {
          const [companyId,name,parentId] = line.split(",");
          
          if(companyId == id) 
          { 
            recur(companyId,parentId); 
            if(parentId != "") 
              console.log("-"+name); 
            else 
              console.log(name);
          } 
      });
    }
    else{
        return id;
    }
  }

fs.readFileSync("./land_ownership.csv", "utf8")
  .split("\n")
  .slice(1) // header row
  .forEach((line) => {
    const [landId, companyId] = line.split(",");
    if(landId == argv.searchLandId) {
        
        fs.readFileSync("./company_relations.csv", "utf8")
            .split("\n")
            .slice(1) // header row
            .forEach((line,index) => {
                const [id, name, parentId] = line.split(",");
                if(id == companyId) {
                    recur(id,parentId);
                    if(parentId != ""){
                      console.log("-"+name);
                    }
                    else{
                      console.log(name);
                    }
                }
              });

    }
});

  



