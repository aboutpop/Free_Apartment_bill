/* ============================================================
   billing-calc.js
   ไฟล์นี้เก็บ "สูตรคำนวณบิล" ที่ใช้เหมือนกันทั้งใน calculator.html
   และ index.html

   ถ้าต่อไปจะแก้สูตรคำนวณ (เช่น เพิ่มค่าบริการอื่นๆ, เปลี่ยนวิธีคิด
   ค่าน้ำ-ค่าไฟ) ให้แก้ที่ไฟล์นี้ไฟล์เดียว ไม่ต้องไปแก้ทีละไฟล์ HTML

   ไฟล์นี้จะไปหาช่องกรอกข้อมูล (input) และตัวเลขที่แสดงผล (span)
   ที่มี id ตรงกับชื่อด้านล่างนี้ในหน้า HTML แล้วคำนวณยอดรวมให้
   - rentAmount, internetAmount, discountAmount
   - waterBefore, waterAfter, waterRate, waterUnit, waterTotal
   - elecBefore, elecAfter, elecRate, elecUnit, elecTotal
   - grandTotal

   สำคัญ: ไฟล์นี้ต้องอยู่โฟลเดอร์เดียวกับ calculator.html และ
   index.html เสมอ ไม่งั้นปุ่มคำนวณจะไม่ทำงาน
   ============================================================ */

function calculateInvoice() {
    const rent     = parseFloat(document.getElementById('rentAmount').value)     || 0;
    const internet = parseFloat(document.getElementById('internetAmount').value) || 0;
    const discount = parseFloat(document.getElementById('discountAmount').value) || 0;

    const wBefore = parseFloat(document.getElementById('waterBefore').value) || 0;
    const wAfter  = parseFloat(document.getElementById('waterAfter').value)  || 0;
    const wRate   = parseFloat(document.getElementById('waterRate').value)   || 0;
    const wUnit   = Math.max(wAfter - wBefore, 0);
    const wTotal  = wUnit * wRate;
    document.getElementById('waterUnit').innerText  = wUnit;
    document.getElementById('waterTotal').innerText = wTotal.toFixed(2);

    const eBefore = parseFloat(document.getElementById('elecBefore').value) || 0;
    const eAfter  = parseFloat(document.getElementById('elecAfter').value)  || 0;
    const eRate   = parseFloat(document.getElementById('elecRate').value)   || 0;
    const eUnit   = Math.max(eAfter - eBefore, 0);
    const eTotal  = eUnit * eRate;
    document.getElementById('elecUnit').innerText  = eUnit;
    document.getElementById('elecTotal').innerText = eTotal.toFixed(2);

    document.getElementById('grandTotal').innerText =
        (rent + wTotal + eTotal + internet - discount).toFixed(2);
}

// กันเหนียว: บางหน้าห่อสคริปต์หลักด้วย (function(){ ... })()
// ทำให้ฟังก์ชันข้างในมองไม่เห็นตัวแปร/ฟังก์ชันนอกสุด จึงประกาศไว้ที่ window ตรงๆ
// เพื่อให้ปุ่มและช่องกรอกข้อมูล (oninput="calculateInvoice()") เรียกใช้ได้แน่นอน
window.calculateInvoice = calculateInvoice;
