import { DocsSidebarNav } from '@gentleduck/docs/client'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container-wrapper">
      <div className="container py-6 md:py-8">
        <div className="grid items-start gap-6 md:grid-cols-[270px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
          <aside className="hidden md:block">
            <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-3">
              <DocsSidebarNav />
            </div>
          </aside>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
