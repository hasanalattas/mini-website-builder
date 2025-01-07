"use client";

import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionType } from "@/types/section";

const sectionTypes: SectionType[] = [
  "header",
  "hero",
  "features",
  "testimonial",
  "cta",
  "footer",
];

export function SectionLibrary() {
  return (
    <Card className="w-full lg:w-64">
      <CardHeader>
        <CardTitle>Section Library</CardTitle>
      </CardHeader>
      <Droppable droppableId="library" isDropDisabled={true}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="p-4"
          >
            {sectionTypes.map((type, index) => (
              <Draggable key={type} draggableId={type} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-secondary text-secondary-foreground mb-2 p-2 rounded cursor-move"
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Card>
  );
}
