import {FC} from "react";
import {
    Sheet, SheetContent, SheetTrigger
} from "@/components/ui/sheet";

import {Sidebar} from '@/components/sidebar'
import {Menu} from "lucide-react";

interface MobileSidebarProps {
    className?: string
}

export const MobileSidebar: FC<MobileSidebarProps> = ({className}) => {
    return <Sheet>
        <SheetTrigger>
            <Menu className={'text-white '}/>
        </SheetTrigger>
        <SheetContent className={'p-0 z-[100]'} side={'left'}>
            <Sidebar/>
        </SheetContent>
    </Sheet>
}