import {FC} from "react";
import {cn} from "@/lib/utils";
import {MobileSidebar} from "@/components/mobile-sidebar";

interface MobileHeaderProps {
    className?: string
}

export const MobileHeader: FC<MobileHeaderProps> = ({className}) => {
    return <nav className={cn('lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b fixed w-full z-50', className)}>
        <MobileSidebar/>
    </nav>
}