const Skeleton = ({ width, height = '10px', rounded = false }) => (
  <div
    className={`bg-gray-200 animate-pulse ${rounded ? 'rounded-full' : 'rounded'}`}
    style={{ width, height }}
  />
)

const messages = [
  { dir: 'recv', w: '220px', h: '36px' },
  { dir: 'sent', w: '260px', h: '28px' },
  { dir: 'recv', w: '170px', h: '28px' },
  { dir: 'sent', w: '240px', h: '28px' },
  { dir: 'recv', w: '130px', h: '28px' },
  { dir: 'recv', w: '200px', h: '28px' },
  { dir: 'sent', w: '255px', h: '28px' },
  { dir: 'recv', w: '180px', h: '28px' },
]

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-200">
        <span className="text-sm font-semibold text-gray-900 flex-1">Olivia Mckinsey</span>
        <div className="w-7 h-7 flex items-center justify-center text-gray-400 rounded-md hover:bg-gray-100">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="4" cy="8" r="1.5" /><circle cx="8" cy="8" r="1.5" /><circle cx="12" cy="8" r="1.5" />
          </svg>
        </div>
        <div className="w-7 h-7 flex items-center justify-center text-gray-400 rounded-md hover:bg-gray-100">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="8" r="6" /><path d="M8 5v3l2 2" />
          </svg>
        </div>
        <div className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-lg">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="12" height="10" rx="1.5" /><path d="M2 6h12" />
          </svg>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col gap-1 ${msg.dir === 'sent' ? 'items-end' : 'items-start'}`}>
            <div
              className={`bg-gray-200 animate-pulse ${
                msg.dir === 'sent' ? 'rounded-t-xl rounded-bl-xl' : 'rounded-t-xl rounded-br-xl'
              }`}
              style={{ width: msg.w, height: msg.h }}
            />
            <div className="flex items-center gap-1">
              <Skeleton width="32px" height="8px" />
              {msg.dir === 'sent' && <Skeleton width="14px" height="8px" />}
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="border-t border-gray-200 px-4 py-3 flex flex-col gap-2.5">
        <Skeleton width="140px" height="10px" />
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div key={i} className="w-6 h-6 flex items-center justify-center">
              <Skeleton width="16px" height="16px" />
            </div>
          ))}
          <div className="ml-auto flex gap-1.5">
            {[1, 2].map((_, i) => (
              <div key={i} className="w-6 h-6 flex items-center justify-center">
                <Skeleton width="16px" height="16px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}