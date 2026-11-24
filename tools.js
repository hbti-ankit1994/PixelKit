/* Tool registry for the home page.

   To add a tool:
   1. Create a folder  tools/<your-tool>/index.html  (self-contained page, relative links only).
   2. Add one entry below. The home page builds its card automatically.

   Fields
     id           Unique key (also picks the card illustration; unknown ids get a generic one)
     name         Card title
     tagline      One short line shown under the title
     description  One or two sentences
     path         Relative link to the tool's page
     category     "Convert" or "Create" (drives the filter chips)
     tags         Small labels on the card
     highlights   2-4 short bullet points
     accent       [from, to] gradient colours for the card art
     span         Width on the 12-column grid (default 6): 7 + 5 or 6 + 6 give a tidy bento layout
*/
window.TOOLS = [
  {
    id: "filter-studio",
    name: "Filter Studio",
    tagline: "130+ looks for your photos",
    description: "Film, vintage, cinematic, duotone, sketch, pop art and glitch filters with live previews of your own picture. Stack filters, fine-tune, compare and download.",
    path: "tools/filter-studio/index.html",
    category: "Create",
    tags: ["Photos", "Filters"],
    highlights: ["137 filters in 16 categories", "Stack up to three filters", "Before / after slider"],
    accent: ["#f97316", "#ec4899"],
    span: 7
  },
  {
    id: "meme-generator",
    name: "Meme Generator",
    tagline: "Developer humour, ready to post",
    description: "Pick from 169 original tech memes about git, coding, managers and deploys, browse 280+ templates, or caption your own pictures. Drag the text, add emoji, copy or download.",
    path: "tools/meme-generator/index.html",
    category: "Create",
    tags: ["Memes", "Fun"],
    highlights: ["169 ready-made dev memes", "280+ popular templates", "Copy straight to clipboard"],
    accent: ["#8b5cf6", "#6366f1"],
    span: 5
  },
  {
    id: "collage-maker",
    name: "Collage Maker",
    tagline: "Themed layouts, fully editable",
    description: "Start from refined templates for weddings, birthdays, travel and more. Drop in photos, add a title, then resize, split or swap cells until it feels right.",
    path: "tools/collage-maker/index.html",
    category: "Create",
    tags: ["Photos", "Layouts"],
    highlights: ["Templates for every occasion", "Drag dividers to reshape", "Frames, arches and polaroids"],
    accent: ["#14b8a6", "#3b82f6"],
    span: 5
  },
  {
    id: "image-converter",
    name: "Image Converter",
    tagline: "Any format to any format",
    description: "Convert between PNG, JPEG, WebP, AVIF, GIF, BMP, ICO and TIFF. Resize, hit a target file size, and compare the result before you download.",
    path: "tools/image-converter/index.html",
    category: "Convert",
    tags: ["Images", "Convert"],
    highlights: ["8 output formats", "Target a file size in KB", "Batch convert and zip"],
    accent: ["#3b82f6", "#6366f1"],
    span: 7
  }
];
