(function () {
    const toggle = document.getElementById('chatToggle');
    const box = document.getElementById('chatBox');
    const closeBtn = document.getElementById('chatCloseBtn');
    const msgArea = document.getElementById('chatMessages');
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');

    /* open / close */
    toggle.addEventListener('click', () => box.classList.toggle('chat-hidden'));
    closeBtn.addEventListener('click', () => box.classList.add('chat-hidden'));

    /* send */
    sendBtn.addEventListener('click', send);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

    async function send() {
        const text = input.value.trim();
        if (!text) return;

        addMsg('user', text);
        input.value = '';
        sendBtn.disabled = true;

        const dots = addTyping();

        try {
            const reply = await ask(text);
            dots.remove();
            console.log(reply)
            addMsg('bot', reply);
        } catch (err) {
            dots.remove();
            addMsg('error', '⚠ ' + (err.message || 'Something went wrong.'));
        } finally {
            sendBtn.disabled = false;
            input.focus();
        }
    }

    async function ask(question) {
        const res = await fetch('/ask_bot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "question":question
            })
        });
        console.log(res,"aaaaaaaaa");
        if (!res.ok) throw new Error('API error ' + res.status);
        const data = await res.json();

        console.log(data)
        return JSON.parse(data).answer || 'No response.';
    }

    function addMsg(type, text) {
        const el = document.createElement('div');
        el.className = 'msg ' + type;
        type==="bot"?el.append(text):el.textContent = text;
        msgArea.appendChild(el);
        msgArea.scrollTop = msgArea.scrollHeight;
        return el;
    }

    function addTyping() {
        const el = document.createElement('div');
        el.className = 'msg bot typing';
        el.innerHTML = '<span></span><span></span><span></span>';
        msgArea.appendChild(el);
        msgArea.scrollTop = msgArea.scrollHeight;
        return el;
    }
})();