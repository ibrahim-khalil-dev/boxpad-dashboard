export function Message({ message, isOwn, senderAvatar, senderAvatarColor }) {
  return (
    <div className={`flex gap-3 ${isOwn ? 'justify-end' : 'justify-start'}`}>
      {!isOwn && senderAvatar && (
        <div className={`h-8 w-8 rounded-full ${senderAvatarColor} text-white flex items-center justify-center text-sm font-semibold flex-shrink-0`}>
          {senderAvatar}
        </div>
      )}
      <div className={`max-w-xs lg:max-w-md ${isOwn ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-2 rounded-lg ${
            isOwn
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-900'
          }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>
        <p className={`text-xs text-gray-500 mt-1 ${isOwn ? 'text-right' : 'text-left'}`}>
          {message.timestamp}
        </p>
      </div>
    </div>
  );
}