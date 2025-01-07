"use client";

import { useState } from "react";
import { Section, SectionContent } from "@/types/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface EditableSectionProps {
  section: Section;
  onUpdate: (updatedSection: Section) => void;
  onDelete: () => void;
  children: React.ReactNode;
}

export function EditableSection({
  section,
  onUpdate,
  onDelete,
  children,
}: EditableSectionProps) {
  const [editedContent, setEditedContent] = useState<SectionContent>(
    section.content
  );
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onUpdate({ ...section, content: editedContent });
    setOpen(false);
  };

  const renderEditFields = () => {
    return Object.entries(editedContent).map(([key, value]) => (
      <div key={key} className="grid grid-cols-4 items-center gap-4">
        <label htmlFor={key} className="text-right">
          {key}
        </label>
        {typeof value === "string" ? (
          value.length > 50 ? (
            <Textarea
              id={key}
              value={value}
              onChange={(e) =>
                setEditedContent({ ...editedContent, [key]: e.target.value })
              }
              className="col-span-3"
            />
          ) : (
            <Input
              id={key}
              value={value}
              onChange={(e) =>
                setEditedContent({ ...editedContent, [key]: e.target.value })
              }
              className="col-span-3"
            />
          )
        ) : null}
      </div>
    ));
  };

  return (
    <div className="relative group">
      {children}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit {section.type} Section</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">{renderEditFields()}</div>
            <Button onClick={handleSave}>Save</Button>
          </DialogContent>
        </Dialog>
        <Button
          variant="destructive"
          size="sm"
          onClick={onDelete}
          className="ml-2"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
