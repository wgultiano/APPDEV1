 // Base variables using let                                                                                                         
    let name = 'Max';                                                                                                                   
    let age = 29;                                                                                                                       
    let hasHobbies = true;                                                                                                              
                                                                                                                                        
    function summarizeUser(userName, userAge, userHasHobby) {                                                                           
      return (                                                                                                                          
        'Name is ' +                                                                                                                    
        userName +                                                                                                                      
        ', age is ' +                                                                                                                   
        userAge +                                                                                                                       
        ' and the user has hobbies: ' +                                                                                                 
        userHasHobby                                                                                                                    
      );                                                                                                                                
    }                                                                                                                                   
                                                                                                                                        
    // Initial output                                                                                                                   
    console.log('--- Initial State ---');                                                                                               
    console.log(summarizeUser(name, age, hasHobbies));                                                                                  
                                                                                                                                        
    // ==========================================                                                                                       
    // RULE 1: Re-assignment is allowed                                                                                                 
    // ==========================================                                                                                       
    console.log('\n--- Rule 1: Re-assignment ---');                                                                                     
    age = 30;                                                                                                                           
    name = 'Maximilian';                                                                                                                
    console.log(summarizeUser(name, age, hasHobbies));                                                                                  
                                                                                                                                        
    // ==========================================                                                                                       
    // RULE 2: No Re-declaration in the same scope                                                                                      
    // ==========================================                                                                                       
    console.log('\n--- Rule 2: No Re-declaration ---');                                                                                 
    // Uncommenting the next line triggers:                                                                                             
    // SyntaxError: Identifier 'name' has already been declared                                                                         
    // let name = 'Duplicate';                                                                                                          
    console.log('Re-declaring let in the same scope causes a SyntaxError.');                                                            
                                                                                                                                        
    // ==========================================                                                                                       
    // RULE 3: Block Scoping & Shadowing                                                                                                
    // ==========================================                                                                                       
    console.log('\n--- Rule 3: Block Scoping ---');                                                                                     
    if (hasHobbies) {                                                                                                                   
      let blockScopedHobby = 'Cooking';                                                                                                 
      let name = 'Shadowed Max'; // Shadowing: only exists inside this block                                                            
      console.log('Inside block: ' + name + ' likes ' + blockScopedHobby);                                                              
    }                                                                                                                                   
                                                                                                                                        
    // Outside the block, 'name' reverts to its outer scope value                                                                       
    console.log('Outside block name is still: ' + name);                                                                                
    // Accessing 'blockScopedHobby' here would throw: ReferenceError: blockScopedHobby is not defined                                   
                                                                                                                                        
    // ==========================================                                                                                       
    // RULE 4: Temporal Dead Zone (TDZ)                                                                                                 
    // ==========================================                                                                                       
    console.log('\n--- Rule 4: Temporal Dead Zone (TDZ) ---');                                                                          
    // Accessing before declaration throws:                                                                                             
    // ReferenceError: Cannot access 'greeting' before initialization                                                                   
    // console.log(greeting);                                                                                                           
    let greeting = 'Hello from let!';                                                                                                   
    console.log(greeting);  