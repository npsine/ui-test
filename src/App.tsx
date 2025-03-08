import React from 'react';
import './App.css';
import icBack from "./ic-back.svg"
import icClose from "./ic-close.svg"
import icCongratulation from "./ic-congratulation.svg"

function App() {
    return (
        <div className="container">
            <header>
                <img src={icBack} alt="Back" className="back"/>
                <h1>สินเชื่อ เพย์ เน็กซ์ เอ็กซ์ตร้า</h1>
                <img src={icClose} alt="Close" className="close"/>
            </header>
            <div className="content">
                <img src={icCongratulation} alt="Congratulations" className="img-congratulations"/>
                <h2>ยินดีด้วย!</h2>
                <p>สินเชื่อ เพย์ เน็กซ์ เอ็กซ์ตร้า ของคุณ <br/>ได้รับการอนุมัติแล้ว</p>
                <div className="info-box">
                    <span>วงเงินสินเชื่อที่ได้รับอนุมัติ</span>
                    <span className="amount">฿ 50,000.00</span>
                </div>
                <p className="note">แจ้งบริการหักชำระสินเชื่ออัตโนมัติ<br/>
                    บริษัทจะดำเนินการหักชำระหนี้ทั้งหมดผ่านบัญชีทรูมันนี่/ช่องทางอื่นๆที่ผูกไว้กับทรูมันนี้ กรณีผิดนัดชำระสินเชื่อเท่านั้น</p>
            </div>
            <button className="action-button">เริ่มใช้งานเพย์ เน็กซ์ เอ็กซ์ตร้า</button>
        </div>
    );
}

export default App;
