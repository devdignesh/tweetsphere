import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

const CreateTweetDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 pb-4 max-w-[600px] max-h-[90vh] h-fit rounded-2xl overflow-y-auto">
        <DialogHeader className="p-4 pb-0 flex flex-row justify-between text-center items-center gap-2">
          <div className="flex flex-row text-center items-center space-x-4">
            <Cross2Icon
              className="h-5 w-5 cursor-pointer"
              onClick={() => onClose()}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTweetDialog;
