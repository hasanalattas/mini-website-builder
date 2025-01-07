"use client";

import React, { useState, useCallback } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button";
import { SectionLibrary } from "./section-library";
import { PreviewArea } from "./preview-area";
import { Section, SectionType } from "@/types/section";
import { useToast } from "@/hooks/use-toast";
import { getDefaultContent, isValidSection } from "@/utils";

export function WebsiteBuilder() {
  const [sections, setSections] = useState<Section[]>([]);
  const { toast } = useToast();

  const onDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (
      source.droppableId === "library" &&
      destination.droppableId === "preview"
    ) {
      const newSection: Section = {
        id: `section-${Date.now()}`,
        type: result.draggableId as SectionType,
        content: getDefaultContent(result.draggableId as SectionType),
      };
      setSections((prevSections) => [...prevSections, newSection]);
    } else if (
      source.droppableId === "preview" &&
      destination.droppableId === "preview"
    ) {
      setSections((prevSections) => {
        const newSections = Array.from(prevSections);
        const [reorderedSection] = newSections.splice(source.index, 1);
        newSections.splice(destination.index, 0, reorderedSection);
        return newSections;
      });
    }
  }, []);

  const handleExport = useCallback(() => {
    try {
      const dataStr = JSON.stringify(sections);
      const dataUri =
        "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
      const exportFileDefaultName = "website-config.json";

      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", dataUri);
      linkElement.setAttribute("download", exportFileDefaultName);
      linkElement.click();

      toast({
        title: "Export Successful",
        description: "Your website configuration has been exported.",
      });
    } catch (error) {
      console.error("Export error:", error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting your configuration.",
        variant: "destructive",
      });
    }
  }, [sections, toast]);

  const handleImport = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result;
          if (typeof content === "string") {
            try {
              const importedSections = JSON.parse(content);
              if (
                Array.isArray(importedSections) &&
                importedSections.every(isValidSection)
              ) {
                setSections(importedSections);
                toast({
                  title: "Import Successful",
                  description: "Your website configuration has been imported.",
                });
              } else {
                throw new Error("Invalid configuration format");
              }
            } catch (error) {
              console.error("Import error:", error);
              toast({
                title: "Import Failed",
                description: "The imported file is not a valid configuration.",
                variant: "destructive",
              });
            }
          }
        };
        reader.readAsText(file);
      }
    },
    [toast]
  );

  const handleUpdateSection = useCallback((updatedSection: Section) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === updatedSection.id ? updatedSection : section
      )
    );
  }, []);

  const handleDeleteSection = useCallback((sectionId: string) => {
    setSections((prevSections) =>
      prevSections.filter((section) => section.id !== sectionId)
    );
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col lg:flex-row gap-4">
        <SectionLibrary />
        <PreviewArea
          sections={sections}
          onUpdateSection={handleUpdateSection}
          onDeleteSection={handleDeleteSection}
        />
      </div>
      <div className="mt-4 flex gap-2">
        <Button onClick={handleExport}>Export</Button>
        <Button asChild>
          <label>
            Import
            <input
              type="file"
              onChange={handleImport}
              className="hidden"
              accept=".json"
            />
          </label>
        </Button>
      </div>
    </DragDropContext>
  );
}
