var getUser = (id, callback) => {
    console.log('getting user......')
    setTimeout(() => {
        var user = {
            id,
            name: 'ahmed'
        }
        callback(user);
        console.log('done!')
    }, 1000);
};

getUser(21, (userObj) => {
    console.log(userObj)
})