export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mt-10 animate-pulse">
      <div className="mb-8 p-4 bg-amber-200 rounded-2xl space-y-4">
        <div className="h-6 w-1/3 bg-amber-300 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="h-4 w-1/2 bg-amber-300 rounded"></div>
            <div className="h-5 w-3/4 bg-amber-400 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-1/2 bg-amber-300 rounded"></div>
            <div className="h-5 w-3/4 bg-amber-400 rounded"></div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-14 bg-gray-200 rounded-lg"></div>
        ))}
        <div className="h-32 bg-gray-200 rounded-lg"></div>
        <div className="h-12 w-1/3 mx-auto bg-amber-600 rounded-lg"></div>
      </div>
    </div>
  )
}