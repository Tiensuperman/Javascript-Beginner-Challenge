function isLoggedInAndSubscribe(loggedIn, subscribed) {
  return (loggedIn === "LOGGED_IN") || (subscribed === "SUBSCRIBE") ? true : false;
}

console.log(isLoggedInAndSubscribe("LOGGED_IN", "UNSUBSCRIBE"));
