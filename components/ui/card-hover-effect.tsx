"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";

export const HoverEffect = ({
  items,
  className,
  layout = 'grid',
}: {
  items: {
    title: string;
    description: string;
    link: string;
    technologies?: string[];
    type: string;
    imageSrc?: string;
  }[];
  className?: string;
  layout?: 'grid' | 'list';
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        layout === 'grid'
          ? "grid grid-cols-1 md:grid-cols-2 gap-6"
          : "flex flex-col gap-6 w-full",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.imageSrc ? (
              <div className="flex flex-col md:flex-row w-full h-full">
                <div className="flex-1 flex flex-col justify-center p-6 z-10">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                      {item.type}
                    </span>
                    {item.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative flex-1 min-h-[180px] md:min-h-0 h-40 md:h-auto rounded-r-xl overflow-hidden">
                  <img src={item.imageSrc} alt={item.title} className="object-cover w-full h-full" />
                </div>
              </div>
            ) : (
              <div className="p-6">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                    {item.type}
                  </span>
                  {item.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="inline-block w-full">
                  <LinkPreview url={item.link}>
                    <div
                      className="w-full"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 hover:shadow-md transition-all duration-200"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </div>
                  </LinkPreview>
                </div>
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-0 overflow-hidden bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 group-hover:border-gray-200 dark:group-hover:border-gray-700 relative z-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      <div className="relative z-10">
        <div>{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-xl font-bold text-gray-900 dark:text-white mb-2", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-gray-600 dark:text-gray-300 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};
