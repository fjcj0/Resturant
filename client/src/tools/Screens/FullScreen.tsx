import type { ReactNode } from "react";
const FullScreenTsx = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            {children}
        </div>
    )
}
export default FullScreenTsx;