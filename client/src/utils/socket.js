import React from "react";

const SocketContext = React.createContext({
    socket: {},
    username: '',
    playerList: [],
    room: '',
    joinRoom: () => {},
    onMessage: () => {}
});

    // const [username, setUsername] = useState();
    // const [room, setRoom] = useState();

    // const socket = io(window.origin);

    // socket.emit('message', 'hello server')

    

    // socket.on('message', (message) => {
    //     console.log(message)
    // })

export default SocketContext;