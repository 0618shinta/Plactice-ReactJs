import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./compornents/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); //配列の分割代入
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  //カウントアップボタンをクリックすると、カウントされる
  const onClickCountUp = () => {
    setNum(num + 1); //useStateで定義する変数は直接、値を更新することができなので、setNumを使ってnumを管理する 更新されたsetNumの値がnumに代入される
  };

  //on/offボタンをクリックすると顔の表示をきりかえる
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag); //????
  };

  //関心の分離　useEffect:第２引数に変数を渡すことで、第２引数の値が変化した時のみ第１引数を実行する
  useEffect(() => {
    if (num % 3 === 0) {
      //faceShowFlagがfalseの場合だけ、setFaceShowFlagを更新
      //「｜|」は左側がfalseなら右側を返す
      faceShowFlag || setFaceShowFlag(true);
    } else {
      //faceShowFlagがtrueの場合だけ、setFaceShowFlagを更新
      //「&&」は左側がtrueなら右側を返す
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんちくす！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(°▽°)</p>}
    </>
  );
};

export default App;
