import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const MobileNav = () => (
  <div className="flex flex-col gap-6 p-4">
    <a className="text-lg font-medium hover:text-primary transition-colors" href="/case-studies">
      Case Studies
    </a>
    <a className="text-lg font-medium hover:text-primary transition-colors" href="/templates">
      Templates
    </a>
    <Button className="w-full" size="lg">
      Book A Call
    </Button>
  </div>
);

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <a href="/" className="text-xl font-semibold">
            Another Step
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              <a 
                href="/case-studies" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Case Studies
              </a>
              <a 
                href="/templates" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Templates
              </a>
            </div>
            <Button>Book A Call</Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b py-4">
                  <span className="text-lg font-semibold">Menu</span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <MobileNav />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;