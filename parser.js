
var TokenTypeArray = [];
var TokenValueArray = [];



function Parser(CodeLines){

  this.Lines = CodeLines;
  this.start;
  this.start2;
  this.end;
  this.len;
  this.withoutComment;
  this.Comments = [];
  this.itration = 0;
  this.FinalCodeArray = [];

  this.isComment = function(){

        this.itration = 0;
        while(this.start != -1){
          this.start = this.Lines.indexOf("{");
          this.end   = this.Lines.indexOf("}");
          this.len   = this.end - this.start - 1;
          this.Comments[this.itration] = this.Lines.substr(this.start+1,this.len);
          this.Lines = this.Lines.replace( "{" + this.Comments[this.itration] + "}", " ThisIsCommentPlace ");
          this.itration++;
        }
        return this.Comments;
  }

  this.SemiColunHandler = function(){
          this.start = 0;
          while(this.start != -1){
            this.start = this.Lines.indexOf(";");
            this.Lines = this.Lines.replace( ";", " ThisIsSemiColunmPlace ");
          }
          return this.Lines;
  }

this.clearString = function(){

        while(this.Lines.indexOf("\t") != -1 || this.Lines.indexOf("\n") != -1){
          this.Lines = this.Lines.replace("\t"," ");
          this.Lines = this.Lines.replace("\n"," ");
          this.Lines = this.Lines.replace("("," ( ");
          this.Lines = this.Lines.replace(")"," ) ");
          
        }

          this.FinalCodeArray = this.Lines.split(" ");
          this.start = 0;
          while(this.start != -1){
            this.start = this.FinalCodeArray.indexOf("");
            this.FinalCodeArray.splice(this.start , 1);
          }
          for(var i = 0 ; i<this.FinalCodeArray.length ; i++){
            if(this.FinalCodeArray[i] === "ThisIsSemiColunmPlace"){
                this.FinalCodeArray[i] = this.FinalCodeArray[i].replace("ThisIsSemiColunmPlace",";");
            }
          }
          return this.FinalCodeArray;
  }
}

function isReserved(str){
      var Reserved = ["if" , "then" , "else" , "end" , "repeat" , "until" , "read" , "write"];
      for(var i=0 ; i<Reserved.length;i++){
        if(str === Reserved[i]){
          return true;
        }
      }
}
function isSpecialSymoles(str){
      var SpecialSymoles = ["+","-","*","/","=","<",">","(",")",";",":="]
      for(var i=0 ; i<SpecialSymoles.length;i++){
        if(str === SpecialSymoles[i]){
          return true;
        }
      }
}

function isSemoColumn(str){
        if(str === "ThisIsSemiColunmPlace"){
            return true;
        }
}

function isIdentifier(str){
      if(typeof(str) === "string"){
            return true;
      }
}

function isCommneted(str){
  if(str === "ThisIsCommentPlace"){
      return true;
  }
}

function isNumber(str){
      var x = Number(str);
      if(isNaN(x)){
            return false;
      }else{
            return true;
      }
}



var buttom       = document.getElementById("buttom"),
    text1        = document.getElementById("text"),
    Textarea1    = document.getElementById("Textarea1"),
    submitButton = document.getElementById("submitButton"),
    Reset        = document.getElementById("Reset");
var Code = " ";

var CategorizedLine = [],
    CategorizedIti = 0;


submitButton.addEventListener('click',function(){
    Code = Textarea1.value + "\t DummyVal";

    var obj = new Parser(Code);
    var Commnents = obj.isComment();
    var ClearString = obj.clearString();
    var FinalSrting = obj.SemiColunHandler(); //This is the final string
    var CodeAsArray = obj.clearString();
    var IterationComment = 0;
    for(var i =0 ; i<CodeAsArray.length ; i++){
      CategorizedLine.push([]);
      CategorizedLine[i].push(new Array(2));
      if(isReserved(CodeAsArray[i]) ){
        CategorizedLine[i][0] = CodeAsArray[i];
        CategorizedLine[i][1] = "Reserved Words";
        //console.log(CategorizedLine[i][0] + CategorizedLine[i][1]);
      }

      else if(isSpecialSymoles(CodeAsArray[i])){
        CategorizedLine[i][0] = CodeAsArray[i];
        CategorizedLine[i][1] = "Special Symbols";
        //console.log(CategorizedLine[i][0] + CategorizedLine[i][1]);
      }
      else if(isSemoColumn(CodeAsArray[i])){
        CategorizedLine[i][0] = CodeAsArray[i];
        CategorizedLine[i][1] = "Special Symbols";
        //console.log(CategorizedLine[i][0] + CategorizedLine[i][1]);
      }
      else if(isIdentifier(CodeAsArray[i])){
        CategorizedLine[i][0] = CodeAsArray[i];
        CategorizedLine[i][1] = "Identifier";
        //console.log(CategorizedLine[i][0] + CategorizedLine[i][1]);
      }
      if(isCommneted(CodeAsArray[i])){
        CategorizedLine[i][0] = Commnents[IterationComment];
        CategorizedLine[i][1] = "Comment";
        IterationComment++;
        //console.log(CategorizedLine[i][0] + CategorizedLine[i][1]);
      }
      if(isNumber(CodeAsArray[i])){
         CategorizedLine[i][0] = CodeAsArray[i];
         CategorizedLine[i][1] = "Number";
        //console.log(CategorizedLine[i][0] + CategorizedLine[i][1]);
      }
    }
   

    for(var j = 0; j<CategorizedLine.length ; j++){
      TokenValueArray[j] = CategorizedLine[j][0];
      TokenTypeArray[j] = CategorizedLine[j][1];
    }
         
      
     for(var i = 0; i<CategorizedLine.length ; i++){
       if(CategorizedLine[i][0] != undefined && CategorizedLine[i][1] != undefined){
             var tokenvalue = document.getElementById("tokenvalue"),
        tokentype  = document.getElementById("tokentype"),
        insertVal  = document.getElementById("insertVal"),
        inserttyp  = document.getElementById("inserttyp");
          let newtokenvalue    = document.createElement("a");
              newtokenvalue.classList.add("list-group-item" , "list-group-item-action" , "Val");
          var   newtokenvaluessssss = document.createTextNode(CategorizedLine[i][0]);
               newtokenvalue.appendChild(newtokenvaluessssss);
          let newtokentype     = document.createElement("a");
              newtokentype.classList.add("list-group-item" , "list-group-item-action" , "Val");
           var   newtokentypessssss = document.createTextNode(CategorizedLine[i][1]);
              newtokentype.appendChild(newtokentypessssss);
           insertVal.appendChild(newtokenvalue);
           inserttyp.appendChild(newtokentype);
       }
    }
  
    Code = " ";
    CodeAsArray = null;

    // for(let i = 0 ;i < TokenTypeArray.length ; i++){
    //   console.log(TokenTypeArray[i] , TokenValueArray[i] );
    // }
Program();
Draw(DataArray);

})


Reset.addEventListener("click" , function(){
    Textarea1.value = " ";
    var AllElements = document.getElementsByClassName("Val");
    var tokenvalue = document.getElementById("tokenvalue"),
        tokentype  = document.getElementById("tokentype"),
        insertVal  = document.getElementById("insertVal"),
        inserttyp  = document.getElementById("inserttyp");
    while (tokenvalue.hasChildNodes()){
        insertVal.removeChild(insertVal.firstChild);
        inserttyp.removeChild(inserttyp.firstChild);
    }
})

