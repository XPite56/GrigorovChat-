async function loadMessages() {
    const res = await db.listDocuments(D_ID, C_MSGS, [Query.orderAsc("$createdAt")]);
    const box = document.getElementById('messages'); 
    box.innerHTML = '';
    
    res.documents.forEach(m => {
        // Упрощаем проверку: если сообщение принадлежит нашей переписке
        const isMy = (m.sender === me.email && m.receiver === opponent.email);
        const isHis = (m.sender === opponent.email && m.receiver === me.email);
        
        if (isMy || isHis) {
            const d = document.createElement('div');
            // Если отправитель я — блок справа, иначе — слева
            d.className = `msg ${m.sender === me.email ? 'my' : ''} ${m.sender === ADMIN_EMAIL ? 'msg-dev' : ''}`;
            d.innerHTML = m.text;
            box.appendChild(d);
        }
    });
    box.scrollTop = box.scrollHeight;
}

