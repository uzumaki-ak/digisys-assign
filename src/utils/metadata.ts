import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `digi-sys innovation assignment  website`,
    description = `this is a demo website for the digi-sys innovation assignment, showcasing AI-driven marketing automation tools and strategies.`,
    icons = "./icons/icon.png",
    noIndex = false,
    keywords = [
        "digi-sys innovation",
        "multilingual marketing",
        "AI copywriting",
        "marketing workflow",
        "performance tracking",
        "digital marketing tools"
    ],
    author = "anikesh",
    type = "website",
}: MetadataProps = {}): Metadata => {
   
    return {
      
        
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
       
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
         robots: {
    index: !noIndex, 
    follow: true,
    nocache: noIndex,
  },
    };
};