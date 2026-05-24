export default function DetailsPanelSkeleton() {
  return (
    <div className="w-72 bg-gray-50 border-l border-gray-200 p-4 space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
        <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Chat Data Section */}
      <div className="space-y-3">
        <div className="h-5 bg-gray-300 rounded w-24 animate-pulse"></div>
        <div className="h-10 bg-white border border-gray-200 rounded p-2">
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
      </div>

      {/* Contact Data Section */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="h-5 bg-gray-300 rounded w-28 animate-pulse"></div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="space-y-1">
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            <div className="h-4 bg-gray-100 rounded w-40 animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Labels */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="h-5 bg-gray-300 rounded w-32 animate-pulse"></div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="h-5 bg-gray-300 rounded w-16 animate-pulse"></div>
        {[1, 2].map((i) => (
          <div key={i} className="h-12 bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}