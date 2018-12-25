var  TokenCounter ,TokenValue  , TokenType , Key_Vlaue = 1 ;
var DataArray = [];
// for(let i =0; i<DataArray.length ; i++){
//   DataArray[i] = {key : 0,  parent : 0,  name : "valuezzzzzzzzzzzzz"};  
// }
var DataArrayCounter = 0;

let RootNode = {
  key: 1,
  name: "Program"
}
 

let CreateNode = (parent , value) => {
  Key_Vlaue++;
  DataArrayCounter++;
  DataArray[DataArrayCounter] ={key : Key_Vlaue,  parent : parent,  name : value};  
  
}
let Match = (MatchValue) => {
    TokenCounter++;
    TokenValue  = TokenValueArray[TokenCounter];
    TokenType   = TokenTypeArray[TokenCounter];
}

let Factor = (key) =>{
  let sent_key = key;
  if(TokenValue === '('){
    Match("(");
    exp(sent_key);
    Match(")");
  }else if(TokenType === 'Number'){
    CreateNode(sent_key , TokenValue);
    Match(TokenValue);
  }else if(TokenType === 'Identifier'){
    CreateNode(sent_key , TokenValue);
    Match(TokenValue);
  }
}

let Term = (key) =>{

  let Parent_Key = key;
  CreateNode(Parent_Key , "DeletedTerm");
  let current_Key = Key_Vlaue;
  Factor(current_Key);
  let isNotFirst = true;
  let Bate5a ;
  let new_key;
  let bool_Sh = false;
  if(TokenValue === '*' | TokenValue === '/'){
    while(TokenValue === '*' | TokenValue === '/'){
      if(!isNotFirst){
        bool_Sh = true;
        //CreateNode(new_key , TokenValue);
        CreateNode(Parent_Key , TokenValue);
        let akls = Key_Vlaue;
        let ArLen = DataArray.length;
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].key === new_key){
              DataArray[i].parent = akls;
            }
          }
        }
        Match(TokenValue);
        //let sent_key = Key_Vlaue;
        ArLen = DataArray.length;
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].parent === Bate5a){
              DataArray[i].parent = new_key;
            }
          }
        }
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].key === Bate5a){
                DataArray.splice(i,1);  
                ArLen = DataArray.length;
                break;      // this line is too dingrous please don't Fuck here
            }
          }
        }
        Factor(akls);
      }
      if(isNotFirst){
        isNotFirst = false;
        CreateNode(Parent_Key , TokenValue);
        new_key = Key_Vlaue;
        let ArLen = DataArray.length;
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].parent === current_Key){
              DataArray[i].parent = new_key;
            }
         }
        }
        
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].key === current_Key){
                DataArray.splice(i,1);  
                ArLen = DataArray.length;
                break;      // this line is too dingrous please don't Fuck here
                console.log("term now is deleted"); 
            }
          }
        }
        Match(TokenValue);
        CreateNode(new_key , "Deleted5raaa");
        Bate5a = Key_Vlaue;
        Factor(Bate5a);
      }
    }
  }else{
    
    let ArLen = DataArray.length;
    for(let i = 0;i<DataArray.length; i++){
      if( typeof(DataArray[i]) !== "undefined"){
        if(DataArray[i].parent === current_Key){
          DataArray[i].parent = Parent_Key;
        }
      }
    }
   for(let i = 0;i<ArLen; i++){
    if( typeof(DataArray[i]) !== "undefined"){
      if(DataArray[i].key === current_Key){
          DataArray.splice(i,1);
          ArLen = DataArray.length;
          break;                     // this line is too dingrous please don't Fuck here 
      }
    }
   }
  }
 
  if(!bool_Sh){
    let ArLen = DataArray.length;
      for(let i = 0;i< ArLen; i++){
        if( typeof(DataArray[i]) !== "undefined"){
          if(DataArray[i].parent === Bate5a){
            DataArray[i].parent = new_key;
          }
        }
      }
      ArLen = DataArray.length;
      for(let i = 0;i< ArLen; i++){
        if( typeof(DataArray[i]) !== "undefined"){
          if(DataArray[i].key === Bate5a){
              DataArray.splice(i,1); 
              ArLen = DataArray.length;
              break;                     // this line is too dingrous please don't Fuck here 
              console.log("Factor now is deleted"); 
          }
        }
      }
  }

  // let Parent_Key = key;
  // CreateNode(Parent_Key , "DeletedFactor");
  // let current_Key = Key_Vlaue;
  // Factor(current_Key);
  // let isNotFirst = true;
  // let Bate5a;
  // let new_key;
  // let bool_Sh = false;
  // if(TokenValue === '*' | TokenValue === '/'){
  //   while(TokenValue === '*' | TokenValue === '/'){
  //     if(!isNotFirst){
  //       bool_Sh = true;
  //       CreateNode(new_key , TokenValue);
  //       Match(TokenValue);
  //       let ArLen = DataArray.length;
  //       let sent_key = Key_Vlaue;
  //       for(let i = 0;i<ArLen; i++){
  //         if( typeof(DataArray[i]) !== "undefined"){
  //           if(DataArray[i].parent === Bate5a){
  //             DataArray[i].parent = sent_key;
  //           }
  //         }
  //       }
  //       for(let i = 0;i<ArLen; i++){
  //         if( typeof(DataArray[i]) !== "undefined"){
  //           if(DataArray[i].key === Bate5a){
  //               DataArray.splice(i,1);  
  //               ArLen = DataArray.length;
  //               break;      // this line is too dingrous please don't Fuck here
  //           }
  //         }
  //       }
        
  //       Factor(sent_key);
  //     }
  //     if(isNotFirst){
  //       isNotFirst = false;
  //       CreateNode(Parent_Key , TokenValue);
  //       new_key = Key_Vlaue;

  //       let ArLen = DataArray.length;
  //       for(let i = 0;i< ArLen; i++){
  //         if( typeof(DataArray[i]) !== "undefined"){
  //           if(DataArray[i].parent === current_Key){
  //             DataArray[i].parent = new_key;
  //           }
  //         }
  //       }
  //       for(let i = 0;i< ArLen; i++){
  //         if( typeof(DataArray[i]) !== "undefined"){
  //           if(DataArray[i].key === current_Key){
  //               DataArray.splice(i,1); 
  //               ArLen = DataArray.length;
  //               break;                     // this line is too dingrous please don't Fuck here 
  //               console.log("Factor now is deleted"); 
  //           }
  //         }
  //       }


  //       Match(TokenValue);
  //       CreateNode(new_key , "To Be Deleted");
  //       Bate5a = Key_Vlaue;
  //       Factor(Bate5a);
  //     }
  //   }
  // }else{
    
  //   let ArLen = DataArray.length;
  //       for(let i = 0;i< ArLen; i++){
  //         if( typeof(DataArray[i]) !== "undefined"){
  //           if(DataArray[i].parent === current_Key){
  //             DataArray[i].parent = Parent_Key;
  //           }
  //         }
  //       }
  //       ArLen = DataArray.length;
  //       for(let i = 0;i< ArLen; i++){
  //         if( typeof(DataArray[i]) !== "undefined"){
  //           if(DataArray[i].key === current_Key){
  //               DataArray.splice(i,1); 
  //               ArLen = DataArray.length;
  //               break;                     // this line is too dingrous please don't Fuck here 
  //               console.log("Factor now is deleted"); 
  //           }
  //         }
  //       }

  // }
  // if(!bool_Sh){
  //   let ArLen = DataArray.length;
  //     for(let i = 0;i< ArLen; i++){
  //       if( typeof(DataArray[i]) !== "undefined"){
  //         if(DataArray[i].parent === Bate5a){
  //           DataArray[i].parent = new_key;
  //         }
  //       }
  //     }
  //     ArLen = DataArray.length;
  //     for(let i = 0;i< ArLen; i++){
  //       if( typeof(DataArray[i]) !== "undefined"){
  //         if(DataArray[i].key === Bate5a){
  //             DataArray.splice(i,1); 
  //             ArLen = DataArray.length;
  //             break;                     // this line is too dingrous please don't Fuck here 
  //             console.log("Factor now is deleted"); 
  //         }
  //       }
  //     }
  // }
  // while(TokenValue === '*' | TokenValue === '/'){
  //   CreateNode(Parent_Key , TokenValue);
  //   Match(TokenValue);
  //   let sent_key = Key_Vlaue;
  //   Factor(sent_key);
  // }
}
let Simple_Exp =(key) =>{
  let Parent_Key = key;
  CreateNode(Parent_Key , "DeletedTerm");
  let current_Key = Key_Vlaue;
  Term(current_Key);
  let isNotFirst = true;
  let Bate5a ;
  let new_key;
  let bool_Sh = false;
  if(TokenValue === '+' | TokenValue === '-'){
    while(TokenValue === '+' | TokenValue === '-'){
      if(!isNotFirst){
        bool_Sh = true;
        //CreateNode(new_key , TokenValue);
        CreateNode(Parent_Key , TokenValue);
        let akls = Key_Vlaue;
        let ArLen = DataArray.length;
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].key === new_key){
              DataArray[i].parent = akls;
            }
          }
        }
        Match(TokenValue);
        //let sent_key = Key_Vlaue;
        ArLen = DataArray.length;
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].parent === Bate5a){
              DataArray[i].parent = new_key;
            }
          }
        }
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].key === Bate5a){
                DataArray.splice(i,1);  
                ArLen = DataArray.length;
                break;      // this line is too dingrous please don't Fuck here
            }
          }
        }
        Term(akls);
      }
      if(isNotFirst){
        isNotFirst = false;
        CreateNode(Parent_Key , TokenValue);
        new_key = Key_Vlaue;
        let ArLen = DataArray.length;
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].parent === current_Key){
              DataArray[i].parent = new_key;
            }
         }
        }
        
        for(let i = 0;i<ArLen; i++){
          if( typeof(DataArray[i]) !== "undefined"){
            if(DataArray[i].key === current_Key){
                DataArray.splice(i,1);  
                ArLen = DataArray.length;
                break;      // this line is too dingrous please don't Fuck here
                console.log("term now is deleted"); 
            }
          }
        }
        Match(TokenValue);
        CreateNode(new_key , "Deleted5raaa");
        Bate5a = Key_Vlaue;
        Term(Bate5a);
      }
    }
  }else{
    
    let ArLen = DataArray.length;
    for(let i = 0;i<DataArray.length; i++){
      if( typeof(DataArray[i]) !== "undefined"){
        if(DataArray[i].parent === current_Key){
          DataArray[i].parent = Parent_Key;
        }
      }
    }
   for(let i = 0;i<ArLen; i++){
    if( typeof(DataArray[i]) !== "undefined"){
      if(DataArray[i].key === current_Key){
          DataArray.splice(i,1);
          ArLen = DataArray.length;
          break;                     // this line is too dingrous please don't Fuck here 
      }
    }
   }
  }
 
  if(!bool_Sh){
    let ArLen = DataArray.length;
      for(let i = 0;i< ArLen; i++){
        if( typeof(DataArray[i]) !== "undefined"){
          if(DataArray[i].parent === Bate5a){
            DataArray[i].parent = new_key;
          }
        }
      }
      ArLen = DataArray.length;
      for(let i = 0;i< ArLen; i++){
        if( typeof(DataArray[i]) !== "undefined"){
          if(DataArray[i].key === Bate5a){
              DataArray.splice(i,1); 
              ArLen = DataArray.length;
              break;                     // this line is too dingrous please don't Fuck here 
              console.log("Factor now is deleted"); 
          }
        }
      }
  }
  
  
}

let exp = (key) => {
  let Parent_Key = key;
  CreateNode(Parent_Key , "DeletedSimple_Exp");
  let current_Key = Key_Vlaue;
  Simple_Exp(current_Key);
  if(TokenValue === '<' | TokenValue === '='){
    CreateNode(Parent_Key , TokenValue);
    let new_key = Key_Vlaue;
    let ArLen = DataArray.length;
    for(let i = 0; i< ArLen ; i++){
      if( typeof(DataArray[i]) !== "undefined"){
        if(DataArray[i].parent === current_Key){
          DataArray[i].parent = new_key;
       }
      }
       
    }

    for(let i = 0; i<ArLen; i++){
      if( typeof(DataArray[i]) !== "undefined"){
        if(DataArray[i].key === current_Key){
          DataArray.splice(i,1); 
          ArLen = DataArray.length; 
          break;                     // this line is too dingrous please don't Fuck here 
    
      }
    }
   }
   
    Match(TokenValue);
    
    Simple_Exp(new_key);
  }
  else{
    for(let i = 0;i<DataArray.length; i++){
      if( typeof(DataArray[i]) !== "undefined"){
        if(DataArray[i].parent === current_Key){
          DataArray[i].parent = Parent_Key;
        }
     }
    }
   for(let i = 0;i<DataArray.length; i++){
    if( typeof(DataArray[i]) !== "undefined"){
      if(DataArray[i].key === current_Key){
        DataArray.splice(i,1);  break;
      }
    }
   }
  }
} 
let write_stmt = (key) => {
    Match("write");
    let Parent_Key = key;   
    CreateNode(Parent_Key , "write");
    let sent_key = Key_Vlaue;
    exp(sent_key);
}
let read_stmt = (key) => {
    let key_sent = key;
    Match("read");
    let value = "read " + TokenValue;
    CreateNode(key_sent , value);
    Match("Identifier");
}
let assign_stmt = (key) =>{
    var Parent_Key = key;
    let Temp_var = TokenValue;
    Match("Identifier");
    let str = "assign"+"\n   "+Temp_var;
    CreateNode(Parent_Key , str);
    let Left_child_key = Key_Vlaue;
    //CreateNode(Left_child_key , Temp_var);
    Match(":=");
    exp(Left_child_key);
}
let stmt = (key) => {
    var key_sent = key;
    if(TokenValue === 'if'){
        if_stmt(key_sent);
    }else if(TokenValue === 'repeat'){
        repeat_stmt(key_sent);
    }else if(TokenValue === 'read'){
        read_stmt(key_sent);
    }else if(TokenValue === 'write'){
        write_stmt(key_sent);
    }else if(TokenType === 'Identifier'){
        assign_stmt(key_sent);
    }
}
let stmt_seq = (key) => {
    var key_sent = key;
    stmt(key_sent);
    while(TokenValue === ';'){
        Match(";");
        stmt(key_sent);
    }
}
let repeat_stmt = (key) => {
    let Parent_Key = key;
    CreateNode(Parent_Key , "repeat");
    Match("repeat");
    let key_sent = Key_Vlaue;
    stmt_seq(key_sent);
    Match("until");
    exp(key_sent);
}
let if_stmt = (key) => {
    let parent_k = key;
    CreateNode(parent_k , "if" );
    Match("if");
    let key_sent = Key_Vlaue;
    exp(key_sent);
    Match("then");
    CreateNode(key_sent , "  " );
    let nk = Key_Vlaue;
    stmt_seq(nk);
    if(TokenValue === 'end'){
        Match("end");
    }
    else if(TokenValue === 'else'){
        Match("else");
        CreateNode(key_sent , "  " );
        let nk2 = Key_Vlaue;
        stmt_seq(nk2);
        Match("end");
    }
}
let Program = () =>{
    DataArray[0] = RootNode;
    TokenCounter = 0;
    TokenValue  = TokenValueArray[TokenCounter];
    TokenType   = TokenTypeArray[TokenCounter];
    stmt_seq(1);
    let x = DataArray.length;
    for(let i=0; i<x;i++){
      if(typeof(DataArray[i]) === "undefined"){
        DataArray.splice(i,1);
        i--;
        x = DataArray.length;
      }
    }
  
}

var objArry= [
  { key: "1",              name: "Don Meow"},
  { key: "2", parent: "1", name: "Demeter"},
  { key: "3", parent: "1", name: "Copricat"},
  { key: "4", parent: "3", name: "Jellylorum"},
  { key: "5", parent: "3", name: "Alonzo"},
  { key: "6", parent: "2", name: "Munkustrap"},
  { key: "7", parent: "3", name: "Fathi"}
];


