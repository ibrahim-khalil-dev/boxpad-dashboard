export default  function ChatListSkeleton() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
        <div className="h-10 bg-gray-100 rounded-lg animate-pulse"></div>
      </div>

      {/* Chat List Items */}
      <div className="flex-1 overflow-y-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div key={i} className="p-4 border-b border-gray-100 flex gap-3">
            <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse flex-shrink-0"></div>
            <div className="flex-1 min-w-0 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-3 bg-gray-100 rounded w-full animate-pulse"></div>
              <div className="h-3 bg-gray-100 rounded w-32 animate-pulse"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-10 animate-pulse flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}