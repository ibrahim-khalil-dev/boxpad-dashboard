export function ConversationItem({ conversation, isActive, onClick }) {
  const getPreviewText = (text) => {
    return text.length > 40 ? text.substring(0, 40) + '...' : text;
  };

  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-3 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors ${
        isActive ? 'bg-blue-50' : ''
      }`}
    >
      <div className="flex gap-3">
        <div
          className={`h-10 w-10 rounded-full ${conversation.participant.avatarColor} text-white flex items-center justify-center font-semibold flex-shrink-0`}
        >
          {conversation.participant.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-medium text-gray-900">{conversation.participant.name}</h3>
            <span className="text-xs text-gray-500 flex-shrink-0">{conversation.lastMessage.timestamp}</span>
          </div>
          <p className="text-sm text-gray-600 truncate">{getPreviewText(conversation.lastMessage.content)}</p>
        </div>
      </div>
    </button>
  );
}