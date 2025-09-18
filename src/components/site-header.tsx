
"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCurrentUser, logout } from "@/lib/users";
import type { User } from "@/lib/users";
import { LogOut, Languages, Camera, User as UserIcon } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function SiteHeader() {
  const router = useRouter();
  const { t, setLanguage } = useLanguage();
  const [user, setUser] = useState<User | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    if (currentUser) {
      const storedPic = localStorage.getItem(`profile-pic-${currentUser.username}`);
      setProfilePic(storedPic);
    }
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
    window.location.reload();
  };

  const handlePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && user) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem(`profile-pic-${user.username}`, base64String);
        setProfilePic(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    if (user) {
      localStorage.removeItem(`profile-pic-${user.username}`);
      setProfilePic(null);
    }
  };
  
  const headerText = {
    profile: { en: "Profile", hi: "प्रोफ़ाइल", te: "ప్రొఫైల్" },
    logout: { en: "Logout", hi: "लॉग आउट", te: "లాగ్అవుట్" },
    language: { en: "Language", hi: "भाषा", te: "భాష" },
    uploadPhoto: { en: "Upload Photo", hi: "फ़ोटो अपलोड करें", te: "ఫోటోను అప్‌లోడ్ చేయండి" },
    removePhoto: { en: "Remove Photo", hi: "फ़ोटो हटाएं", te: "ఫోటోను తీసివేయండి" },
    studentDetails: { en: "Student Details", hi: "छात्र विवरण", te: "విద్యార్థి వివరాలు" },
    teacherDetails: { en: "Teacher Details", hi: "शिक्षक विवरण", te: "ఉపాధ్యాయ వివరాలు" },
    name: { en: "Name", hi: "नाम", te: "పేరు" },
    area: { en: "Area", hi: "क्षेत्र", te: "ప్రాంతం" },
    fatherName: { en: "Father's Name", hi: "पिता का नाम", te: "తండ్రి పేరు" },
    motherName: { en: "Mother's Name", hi: "माता का नाम", te: "తల్లి పేరు" },
    contact: { en: "Contact", hi: "संपर्क", te: "సంప్రదించండి" },
    qualification: { en: "Qualification", hi: "योग्यता", te: "అర్హత" },
    address: { en: "Address", hi: "पता", te: "చిరునామా" },
    close: { en: "Close", hi: "बंद करें", te: "మూసివేయండి" },
  }

  const isTeacher = user?.role === 'teacher';

  return (
    <>
      <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-9 w-9">
                      {profilePic && <AvatarImage src={profilePic} alt={user.username} />}
                      <AvatarFallback>
                        {user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.username}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.role}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={() => setIsProfileOpen(true)}>
                     <UserIcon className="mr-2 h-4 w-4" />
                    <span>{t('profile', headerText)}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => fileInputRef.current?.click()}>
                    <Camera className="mr-2 h-4 w-4" />
                    <span>{t('uploadPhoto', headerText)}</span>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handlePictureUpload}
                      className="hidden"
                      accept="image/png, image/jpeg"
                    />
                  </DropdownMenuItem>
                  {profilePic && (
                    <DropdownMenuItem onSelect={handleRemovePhoto}>
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>{t('removePhoto', headerText)}</span>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Languages className="mr-2 h-4 w-4" />
                      <span>{t('language', headerText)}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem onClick={() => setLanguage("en")}>
                          English
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("hi")}>
                          हिन्दी (Hindi)
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("te")}>
                          తెలుగు (Telugu)
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t('logout', headerText)}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </header>

      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isTeacher ? t('teacherDetails', headerText) : t('studentDetails', headerText)}</DialogTitle>
            <DialogDescription>
              This is your profile information.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
              <span className="text-right font-semibold">{t('name', headerText)}</span>
              <span>{user?.username || 'N/A'}</span>
            </div>
            {isTeacher ? (
                <>
                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                        <span className="text-right font-semibold">{t('qualification', headerText)}</span>
                        <span>Placeholder Qualification</span>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                        <span className="text-right font-semibold">{t('address', headerText)}</span>
                        <span>Placeholder Address</span>
                    </div>
                </>
            ) : (
                <>
                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                        <span className="text-right font-semibold">{t('area', headerText)}</span>
                        <span>Placeholder Area</span>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                        <span className="text-right font-semibold">{t('fatherName', headerText)}</span>
                        <span>Placeholder Father's Name</span>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                        <span className="text-right font-semibold">{t('motherName', headerText)}</span>
                        <span>Placeholder Mother's Name</span>
                    </div>
                </>
            )}
             <div className="grid grid-cols-[150px_1fr] items-center gap-4">
              <span className="text-right font-semibold">{t('contact', headerText)}</span>
              <span>+91 12345 67890</span>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsProfileOpen(false)}>{t('close', headerText)}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
