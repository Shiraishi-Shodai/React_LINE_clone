import React, { useState } from 'react'
import { db, auth } from '../firebase';
import { Timestamp } from 'firebase/firestore';
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";


function SendMessage() {

    const [message, setMessage] = useState();

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = (e) => {
        e.preventDefault(); //再ロードを阻止

        const {uid, photoURL} = auth.currentUser; //現在ログインしているユーザーidとアイコン画像

        // firebaseのデータベースにデータを保存
        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: Timestamp.now(), //時間を取得
        });
        setMessage("");
    }
  return (
    <div>
        <form onSubmit={(e) => sendMessage(e)}> {/**Enterを押したらsendMessageを実行 */}
            <div className="sendMsg">
                <Input 
                style={{
                    width: "78%",
                    fontSize: "15px",
                    fontWeight: "550",
                    marginLeft: "5px",
                    marginBottom: "-3px",
                  }}
                placeholder='メッセージを入力してください' type='text' onChange={(e) => handleMessage(e)} value={message}/>
                <SendIcon />
            </div>
        </form>
    </div>
  )
}

export default SendMessage