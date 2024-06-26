import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";

const font = Poppins({
    weight: "600",
    style: "normal",
    subsets: ["latin"]
})

export const Navbar = () => {
    return (
        <div className = "fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-seconday h-16">
            <div className = "flex items-center">
                <MobileSidebar />
                <Link href = "/">
                    <h1 className = {cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-primary ",
                        font.className // Proper way of merging dynamic classname
                    )}>
                        Automorphic
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <ModeToggle />
                <UserButton />
            </div>
        </div>
    )
}

