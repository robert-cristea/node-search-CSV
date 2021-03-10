const fs = require("fs");
var argv = require("optimist").argv;

var getLand = function(id){
    var lands = [];
    fs.readFileSync("./land_ownership.csv", "utf8")
        .split("\n")
        .slice(1) // header row
        .forEach((line) => {
            const [landId, companyId] = line.split(",");
            if (companyId == id){
                lands.push(landId);
            }
        });
    for(i=0;i<lands.length;i++){
        console.log("**"+lands[i]);
    }
}

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
                    else{
                        console.log(name);
                    }
                    getLand(id); 
                } 
        });
      }
      else{
          // console.log(id+"root");
     
          return id;
      }
    }


fs.readFileSync("./company_relations.csv", "utf8")
  .split("\n")
  .slice(1) // header row
  .forEach((line,index) => {
    const [id, name, parentId] = line.split(",");
    if(id == argv.searchCompanyId){
        recur(id,parentId);
        if(parentId != ""){
            // console.log("-"+id);
            console.log("-"+name);
            
        }
        else{
            console.log(name);
        }
        getLand(id);

        
    }
  });


  



