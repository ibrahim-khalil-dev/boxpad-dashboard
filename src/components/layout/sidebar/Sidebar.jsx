const Skeleton = ({ width }) => (
  <div
    className="h-2.5 rounded bg-gray-200 animate-pulse"
    style={{ width }}
  />
)

export default function Sidebar() {
  return (
    <div className="w-44 border-r border-gray-200 flex flex-col gap-1 p-3 overflow-y-auto shrink-0">
      <p className="text-sm font-semibold text-gray-900 px-1 pb-1">Inbox</p>

      {/* Nav Items */}
      <div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-gray-500">
        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 animate-pulse" />
        <Skeleton width="55px" />
      </div>
      <div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-gray-500">
        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 animate-pulse" />
        <Skeleton width="30px" />
        <div className="ml-auto">
          <Skeleton width="22px" />
        </div>
      </div>
      <div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-gray-500">
        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 animate-pulse" />
        <Skeleton width="68px" />
        <div className="ml-auto">
          <Skeleton width="16px" />
        </div>
      </div>

      <div className="h-px bg-gray-200 my-1" />

      {/* Teams */}
      <div className="flex items-center gap-1 px-1 py-1 text-xs text-gray-400">
        <Skeleton width="40px" />
        <span className="text-gray-300">▾</span>
      </div>

      {[['55px', '16px'], ['90px', '20px']].map(([w1, w2], i) => (
        <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded bg-gray-100">
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
          <Skeleton width={w1} />
          <div className="ml-auto">
            <Skeleton width={w2} />
          </div>
        </div>
      ))}

      <div className="h-px bg-gray-200 my-1" />

      <Skeleton width="70px" />

      {/* Extra skeleton rows */}
      {['70px', '50px', '80px', '55px', '65px', '45px', '60px'].map((w, i) => (
        <div key={i} className="px-2 py-1.5">
          <Skeleton width={w} />
        </div>
      ))}
    </div>
  )
}