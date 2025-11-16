import React from 'react';

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button onClick={() => setOpen((v) => !v)} className="cursor-target rounded-full p-4 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:brightness-110 transition">
        {open ? '×' : 'Chat'}
      </button>
      {open && (
        <div className="mt-3 w-80 rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md text-white">
          <div className="px-4 py-2 bg-white/5 border-b border-white/10">AI Assistant (Preview)</div>
          <div className="p-4 h-64 overflow-y-auto space-y-3">
            <div className="text-sm text-white/70">Hi! I can help plan your AI marketing strategy. What are your goals?</div>
            <div className="text-right">
              <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-2 rounded-xl text-sm shadow-[0_0_20px_rgba(236,72,153,0.5)]">Boost ROAS with Meta Ads</div>
            </div>
            <div className="text-sm text-white/70">Great. Do you have existing creatives and tracking set up?</div>
          </div>
          <div className="p-3 border-t border-white/10">
            <input disabled className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-white/50" placeholder="Type here (preview only)" />
          </div>
        </div>
      )}
    </div>
  );
}
