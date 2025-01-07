"use client";

import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Section } from "@/types/section";
import { SectionRenderer } from "./section-renderer";

interface PreviewAreaProps {
  sections: Section[];
  onUpdateSection: (updatedSection: Section) => void;
  onDeleteSection: (sectionId: string) => void;
}

export function PreviewArea({
  sections,
  onUpdateSection,
  onDeleteSection,
}: PreviewAreaProps) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <Droppable droppableId="preview">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="min-h-[300px] border-2 border-dashed border-gray-300 p-4"
            >
              {sections.map((section, index) => (
                <Draggable
                  key={section.id}
                  draggableId={section.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-4"
                    >
                      <SectionRenderer
                        section={section}
                        onUpdate={onUpdateSection}
                        onDelete={() => onDeleteSection(section.id)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </CardContent>
    </Card>
  );
}
