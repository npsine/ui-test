# UI Component & Logic Implementation

- [UI Live Demo](https://ui-test-olive.vercel.app/)
- [Logic Implementation](https://github.com/npsine/ui-test/tree/main/src/helpers)

## UI Implementation

### Requirements
Create a responsive ui interface with:
- Loan approval display
- Amount visualization
- Service activation button
- Terms & conditions section

**Tech Constraints:**
- Pure HTML/CSS only
- Mobile-first approach
- Cross-browser compatibility

### Features
```html
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
```

```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

body {
  background: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
}

.content {
  width: 100%;
  max-width: 600px;
}

h1 {
  font-size: 18px;
}

.back, .close {
  cursor: pointer;
  font-size: 24px;
  padding: 5px 10px;
}

.img-congratulations {
  width: 60%;
  max-width: 200px;
  margin: 20px auto;
}

h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

p {
  color: #666;
  font-size: 14px;
}

.info-box {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  margin: 20px auto;
  display: flex;
  align-content: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
}

.amount {
  color: #000;
}

.note {
  font-size: 12px;
  color: #888;
  margin: 15px 0;
}

.action-button {
  display: block;
  width: 100%;
  max-width: 420px;
  background: #ff7f00;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border-radius: 40px;
  border: none;
  margin-top: 10px;
}

.action-button:hover {
  background: #e56c2c;
}
```