export default function Loading() {
  return (
    // 使用 flex 布局让 loading 居中，h-screen 占满全屏高度
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black">
        {/* 这是一个利用 border 实现的旋转圈圈 */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-0"></div>
        <p className="h-8 w-16 size-4 mt-2">loading...</p>
    </div>
  )
}