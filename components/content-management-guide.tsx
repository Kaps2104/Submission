"use client"
import { FileCode, ImageIcon, Youtube, FileText, Info } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ContentManagementGuide() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-full">
          <Info className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Content Management Guide</h2>
      </div>

      <p className="text-gray-700 mb-6">
        This guide will help you easily update content on your Lunyati Solar website. Follow these instructions to make
        changes to images, text, and other content.
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="images">
          <AccordionTrigger className="text-lg font-medium">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-blue-600" />
              Updating Images
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-gray-700">
              <p>To update images on the website, follow these steps:</p>

              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Prepare your images:</strong> Optimize your images for web (recommended size: 1200-2000px
                  width, JPG or WebP format).
                </li>
                <li>
                  <strong>Upload to your hosting:</strong> Upload the images to your web hosting or image storage
                  service.
                </li>
                <li>
                  <strong>Update image paths:</strong> In the code, locate the image you want to replace. Look for code
                  like:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto">
                    {`src="/placeholder.svg?height=600&width=800"`}
                  </pre>
                  Replace with your image path:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto">
                    {`src="/images/your-new-image.jpg"`}
                  </pre>
                </li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                <p className="text-sm">
                  <strong>Tip:</strong> For best performance, consider using a content delivery network (CDN) for your
                  images.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="text">
          <AccordionTrigger className="text-lg font-medium">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Updating Text Content
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-gray-700">
              <p>To update text content on the website:</p>

              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Locate the text:</strong> Find the text you want to update in the appropriate file. Text
                  content is typically found in the page files under the <code>app/</code> directory.
                </li>
                <li>
                  <strong>Edit the text:</strong> Update the text between the tags or in the string values. For example:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto">
                    {`<h1 className="text-4xl font-bold">Our Products</h1>`}
                  </pre>
                  Change to:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto">
                    {`<h1 className="text-4xl font-bold">Our Premium Products</h1>`}
                  </pre>
                </li>
                <li>
                  <strong>For data arrays:</strong> Many sections use data arrays to populate content. Find the relevant
                  array and update the values:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto">
                    {`const products = [
  {
    title: "Solar Panels",
    description: "High-efficiency panels...",
    // other properties
  },
  // other products
]`}
                  </pre>
                </li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="youtube">
          <AccordionTrigger className="text-lg font-medium">
            <div className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-blue-600" />
              Adding YouTube Videos
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-gray-700">
              <p>To add or update YouTube videos:</p>

              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Get the YouTube video ID:</strong> From the YouTube URL (e.g.,{" "}
                  <code>https://www.youtube.com/watch?v=ABC123XYZ</code>), extract the ID (e.g., <code>ABC123XYZ</code>
                  ).
                </li>
                <li>
                  <strong>Update the video component:</strong> Find the video component in the relevant page and update
                  the videoId prop:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto">
                    {`<VideoPlayer videoId="ABC123XYZ" onClose={() => setVideoOpen(false)} />`}
                  </pre>
                </li>
                <li>
                  <strong>For video thumbnails:</strong> You can use the YouTube thumbnail URL format:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto">
                    {`src={\`https://img.youtube.com/vi/ABC123XYZ/maxresdefault.jpg\`}`}
                  </pre>
                </li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="projects">
          <AccordionTrigger className="text-lg font-medium">
            <div className="flex items-center gap-2">
              <FileCode className="h-5 w-5 text-blue-600" />
              Adding New Projects or Products
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-gray-700">
              <p>To add new projects or products:</p>

              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Find the data array:</strong> Locate the array that contains the projects or products data in
                  the relevant page file.
                </li>
                <li>
                  <strong>Add a new item:</strong> Copy an existing item and modify its properties:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto">
                    {`const projects = [
  // existing projects
  {
    id: "new-project",
    title: "New Solar Project",
    location: "Location, Zambia",
    startDate: "January 1, 2024",
    // other properties
  }
]`}
                  </pre>
                </li>
                <li>
                  <strong>For new sections:</strong> If you need to add entirely new sections, consider duplicating an
                  existing section and modifying its content and styling.
                </li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md">
                <p className="text-sm">
                  <strong>Note:</strong> For more complex changes, consider consulting with your developer to ensure
                  proper implementation.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

