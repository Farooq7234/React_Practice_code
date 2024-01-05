import React from 'react'

const UserContext =  React.createContext()

export default UserContext;

// Usercontext will be globle variable for all the components under it and it have access to all the states in it

/*
<UserContext>
<Login />
<Card>
  <Data />
</Card>
<UserContext/>

*/