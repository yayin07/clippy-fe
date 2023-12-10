"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { Button } from "../../../../components/ui/button";
import { LockIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const VideoSlugPage = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const buttonArray = Array.from({ length: 50 }, (_, index) => index);
  return (
    <div className="flex mt-20">
      <div className="">
        {hasWindow && (
          <ReactPlayer
            height="900px"
            url="https://www.youtube.com/shorts/C3n8To36zeQ"
          />
        )}
      </div>
      <div className="p-2">
        <h2>Episodes</h2>
        <div className="flex flex-wrap gap-2">
          {buttonArray.map((index) => {
            return (
              <div key={index} className="relative">
                {index + 1 > 20 && (
                  <LockIcon className="text-red-500 absolute w-4 h-4 -right-1 -top-1" />
                )}
                <Button
                  onClick={() => {
                    if (index > 20) {
                      setOpen(true);
                    }
                  }}
                  className="bg-theme-primary w-10 h-10"
                >
                  {index + 1}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to buy this episode?
            </DialogTitle>
            <DialogDescription>
              Purchasing this episode will use coins from your internal wallet.
              Make sure you want to proceed as this action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)} type="submit">
              Buy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoSlugPage;
