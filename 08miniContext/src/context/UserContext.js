import React from 'react'

const UserContext =  React.createContext()

export default UserContext;


// Explanation: In the above code we created a createContext and stored it in a variable(userContext) and exported as export default userContext


// Step 1 createContext() 
// Step 2 useContext()
// Step 3 .Provider



// Usercontext will be globle variable for all the components under it and it have access to all the states in it

/*
<UserContext>
<Login />
<Card>
  <Data />
</Card>
<UserContext/>

*/