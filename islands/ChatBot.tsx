import { useEffect } from "preact/hooks";

export default function ChatBot(){
  useEffect(() => {
    (function(d, w, c) {
      w.SibConversationsID = '63bb2315ecd8161ee01e102e';
      w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
      };
      const s = d.createElement('script');
      s.async = true;
      s.src = 'https://conversations-widget.sendinblue.com/sib-conversations.js';
      if (d.head) d.head.appendChild(s);
    })(document, window, 'SibConversations');
  })

  return (
    <>
    <div>

    </div>
    </>
  )
}
