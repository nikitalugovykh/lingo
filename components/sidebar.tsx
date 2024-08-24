import {FC} from "react";
import {cn} from "@/lib/utils";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    return <aside className={cn('flex bg-blue-500 h-full lg:w-[256px] lg:fixed top-0 px-4 border-r-2 flex-col', className)}>
        sidebar
    </aside>
}