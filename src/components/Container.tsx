import { FC, ReactNode } from "react"
import cn from "./../../utils/cn"

const Container: FC<{ children: ReactNode; className: string; }> = ({ children, className }) => {
    return (
        <div className={cn("max-w-[#1441px]")}>
            {children}
        </div>
    )
}

export default Container