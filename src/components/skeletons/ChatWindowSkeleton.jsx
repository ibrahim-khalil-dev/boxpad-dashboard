export default function ChatWindowSkeleton() {
  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="h-6 bg-gray-200 rounded w-40 animate-pulse"></div>
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Message 1 - Left */}
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse flex-shrink-0"></div>
          <div className="space-y-2 max-w-xs">
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            <div className="h-16 bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Message 2 - Right */}
        <div className="flex gap-2 justify-end">
          <div className="space-y-2 max-w-xs">
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse ml-auto"></div>
            <div className="h-12 bg-blue-100 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Message 3 - Left */}
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse flex-shrink-0"></div>
          <div className="space-y-2 max-w-xs">
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            <div className="h-12 bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Message 4 - Right */}
        <div className="flex gap-2 justify-end">
          <div className="space-y-2 max-w-xs">
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse ml-auto"></div>
            <div className="h-16 bg-blue-100 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        <div className="h-10 bg-gray-100 rounded-lg animate-pulse"></div>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}