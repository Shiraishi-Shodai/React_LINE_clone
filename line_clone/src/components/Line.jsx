import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import { auth, db } from '../firebase'
import SendMessage from './SendMessage';

function Line() {

  const [messages, setMessages] = useState([]);
  // マウント時のみ下記の操作を実行
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt") //最新のものから順に表示
    .limit(50) //最大表示数
    .onSnapshot((snapshot) => { //snapshotにデータが入っている
        setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, [])

  return (
    <div>
      {/* {console.log(messages)} */}
        <SignOut/>
        <div className="msgs">
          {messages.map(({id, text, photoURL, uid}) => (
            <div>
              <div key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
                }`}>
                <img src={photoURL} alt=''/>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <SendMessage/>
    </div>
  )
}

export default Line