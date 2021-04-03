import React, { Component, useEffect, useState } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";
const CoinFlipper = () => {
    const [side, setSide] = useState("tura");
    const [flipping, setFlipping] = useState(false);
    const [count, setCounter] = useState(0);
    const [sonuclar, setSonuc] = useState([]);
    const handleClick = () => {
        // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
        setFlipping(true);
        let yuz = yaziTura();
        setCounter(count + 1);
        setSide(yuz);
        setSonuc([...sonuclar, yuz]);
        // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
        setTimeout(() => {
            setFlipping(false);
        }, 1000);
    };
    function toplamTura() {
        const arr = sonuclar.filter((sonuc) => sonuc == "tura");
        return arr.length;
    }
    function yaziTura() {
        const sayi = Math.round(Math.random() * 1);
        return sayi == 0 ? "yazi" : "tura";
    }
    return (
        <div className="CoinFlipper">
            <h1>Yazı mı Tura mı?</h1>
            <Coin side={side} flipping={flipping} />
            <button onClick={handleClick}>At!</button>
            <p>
                Toplam
                <strong> {count} </strong>
                atıştan
                <strong> {toplamTura()}</strong>ü tura
                <strong> {count - toplamTura()} </strong>
                si yazı geldi.
            </p>
        </div>
    );
};
export default CoinFlipper;
