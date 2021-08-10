import React from 'react';

const userContext = React.createContext();
// const UserProvider = userContext.Provider;
// const UserConsumer = userContext.Consumer;

const {UserProvider, UserConsumer } = userContext;

export {UserConsumer, UserProvider};