const Skeleton = ({ width, height = '9px', rounded = false }) => (
  <div
    className={`bg-gray-200 animate-pulse ${rounded ? 'rounded-full' : 'rounded'}`}
    style={{ width, height }}
  />
)

const SectionHeader = ({ width }) => (
  <div className="flex items-center justify-between mb-1">
    <Skeleton width={width} height="9px" />
    <span className="text-gray-300 text-xs">▾</span>
  </div>
)

const AttrRow = ({ w1, w2 }) => (
  <div className="flex justify-between items-center py-1 border-b border-gray-100">
    <Skeleton width={w1} />
    <Skeleton width={w2} />
  </div>
)

export default function DetailsPanel() {
  return (
    <div className="w-60 border-l border-gray-200 flex flex-col overflow-hidden shrink-0">

      {/* Header */}
      <div className="flex items-center px-3 py-2.5 border-b border-gray-200">
        <span className="text-sm font-semibold text-gray-900 flex-1">Details</span>
        <div className="w-6 h-6 flex items-center justify-center text-gray-400">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="5" height="12" rx="1" /><rect x="9" y="2" width="5" height="12" rx="1" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-4">

        {/* Contact block */}
        <div className="flex flex-col gap-2">
          <Skeleton width="90%" height="10px" />
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse shrink-0" />
              <Skeleton width={i === 0 ? '80px' : '65px'} />
            </div>
          ))}
        </div>

        {/* Section 1 */}
        <div>
          <SectionHeader width="70px" />
          <AttrRow w1="55px" w2="80px" />
          <AttrRow w1="55px" w2="100px" />
          <AttrRow w1="55px" w2="70px" />
          <AttrRow w1="55px" w2="90px" />
          <div className="mt-1.5">
            <Skeleton width="40px" height="9px" />
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <SectionHeader width="55px" />
          <AttrRow w1="50px" w2="90px" />
          <AttrRow w1="50px" w2="75px" />
          <AttrRow w1="50px" w2="85px" />
        </div>

        {/* Tags */}
        <div>
          <SectionHeader width="40px" />
          <div className="flex items-center gap-2 flex-wrap mt-1">
            <div className="h-5 w-16 bg-gray-200 animate-pulse rounded-full" />
            <div className="h-5 w-20 bg-gray-200 animate-pulse rounded-full" />
            <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse" />
          </div>
        </div>

        {/* Notes */}
        <div>
          <SectionHeader width="38px" />
          <div className="flex flex-col gap-1.5">
            <Skeleton width="100%" />
            <Skeleton width="80%" />
            <Skeleton width="90%" />
          </div>
        </div>

        {/* Bottom section */}
        <div>
          <SectionHeader width="60px" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gray-200 animate-pulse shrink-0" />
            <div className="flex-1">
              <Skeleton width="80%" />
            </div>
            <Skeleton width="30px" />
          </div>
        </div>

      </div>
    </div>
  )
}