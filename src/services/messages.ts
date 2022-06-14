import { db, auth } from "../firebase";
import { collection, getDocs } from 'firebase/firestore/lite';

type MessagesService = {
    getMessages: Function
}

const messagesService: MessagesService = {
    async getMessages() {
        if(!auth?.currentUser) return
        
        const messagesColection = collection(db, 'messages')
        const messagesSnapshot = await getDocs(messagesColection)
        const messagesList = messagesSnapshot.docs.map(doc => doc.data())

        return messagesList
    }
}

export default messagesService