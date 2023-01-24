let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 21},
        ],
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Egor'},
            {id: 3, name: 'Artem'},
            {id: 4, name: 'Lena'}
        ],
    },

    messagesPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Bye'},
        ]
    }
}

export default state