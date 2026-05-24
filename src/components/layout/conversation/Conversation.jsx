const Skeleton = ({ width, height = '10px', rounded = false }) => (
  <div
    className={`bg-gray-200 animate-pulse ${rounded ? 'rounded-full' : 'rounded'}`}
    style={{ width, height }}
  />
)

const conversations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const widths = [
  [90, 60], [100, 75], [85, 55], [95, 65],
  [80, 70], [90, 50], [100, 60], [85, 65], [95, 55], [80, 75]
]

export default function ConversationList() {
  return (
    <div className="w-64 border-r border-gray-200 flex flex-col overflow-hidden shrink-0">

      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-200">
        <span className="text-sm font-semibold text-gray-900 flex-1">Michael Johnson</span>
        <div className="w-6 h-6 flex items-center justify-center text-gray-400">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8h10M8 3l5 5-5 5" />
          </svg>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#9ca3af" strokeWidth="1.5">
          <circle cx="7" cy="7" r="5" /><path d="M11 11l3 3" />
        </svg>
        <div className="flex-1">
          <Skeleton width="100%" height="10px" />
        </div>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#9ca3af" strokeWidth="1.5">
          <path d="M2 4h12M4 8h8M6 12h4" />
        </svg>
      </div>

      {/* Sort row */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200">
        <Skeleton width="80px" height="9px" />
        <span className="text-gray-300 text-xs">▾</span>
        <div className="ml-auto">
          <Skeleton width="60px" height="9px" />
        </div>
        <span className="text-gray-300 text-xs">▾</span>
      </div>

      {/* Conversation Items */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((_, i) => (
          <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 border-b border-gray-100">
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse shrink-0" />
            <div className="flex-1 flex flex-col gap-1.5">
              <Skeleton width={`${widths[i][0]}px`} height="10px" />
              <Skeleton width={`${widths[i][1]}px`} height="9px" />
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <Skeleton width="28px" height="9px" />
              <Skeleton width="20px" height="9px" rounded />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}